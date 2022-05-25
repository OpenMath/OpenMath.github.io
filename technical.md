---
layout: page 
title: OpenMath, A Technical Overview
---

## Introduction

OpenMath is a standard for representing mathematical data in as unambiguous a way as possible. It can be used to exchange mathematical objects between software packages or via email, or as a persistent data format in a database. It is tightly focussed on representing semantic information and is not intended to be used directly for presentation, although it is often a fair starting point for generating a such; tools exist which take an OpenMath object as input and generate a presentation (e.g. LaTeX or MathML) as output. The formal definition of OpenMath is contained within [_The OpenMath Standard_](../standard/) and its accompanying documents.

The original motivation for OpenMath came from the Computer Algebra community, in particular the need to transfer data between different computer algebra systems. There were plenty of mechanisms for connecting software components, but when expressing mathematical objects, computer algebra systems will typically fall back to producing expressions (possibly prettyprinted) in their built-in command language for constructing said objects — a method that is both expensive to support externally and fragile when targeting software being actively developed.

OpenMath rather favours the **math in the middle** paradigm, where the expression of a mathematical object being communicated is founded directly on mathematical logic, even if encoded in a machine-readable way. This means OpenMath can be used to speak about mathematical objects regardless of whether these have an implementation or not, even things that are not effectively computable. As with human mathematicians, ultimately the reader bears the burden of interpreting the content, and not all readers are expected to understand all that has been written, although the writer shares a responsibility to express one's objects in an understandable way. When what is in the middle is purely mathematics, authors of software need not worry about what other programs their users might want to make a connection to, as their concern is rather that import or export of objects preserves the mathematical meaning of the data.

## The OpenMath Architecture

The primary concept in the OpenMath standard is that of an _OpenMath object_: these are used for encoding both the mathematical objects themselves and statements about mathematical objects. Philosophically the OpenMath objects constitute a formal language, essentially equivalent to the language of terms and well-formed formulae that constitutes the basis of formalised mathematical logic (although not as minimalistic as the formal languages typically used in textbooks on mathematical logic, since OpenMath aims to support all contemporary mathematics, not just some fraction needed to formalise one approach to its foundations). OpenMath objects are abstract entities, for which there exist a number of concrete encodings as strings of characters or sequences of bytes; tutorials typically use the OpenMath-XML encoding in examples, but the standard also blesses OpenMath-binary and Content MathML as concrete encodings for OpenMath objects.

A second important concept is that of a _content dictionary_ (CD): these are documents defining one or more _symbols_ for use in OpenMath objects. Symbols are used to denote pretty much any mathematical concept that one would ordinarily write a definition of: the sine function, the constant pi, the addition operation, the set of integers, the property of being continuous, the universal quantifier ∀, and so on. The definitions in a content dictionary may be anywhere from fully formal to informal handwaving; the point is mainly that the knowledgeable mathematician, after looking up a symbol in its content dictionary, should be able to tell _exactly_ what this symbol denotes (sometimes by identifying one among several different conventions that exist in the literature). Anyone may create a new content dictionary (although the set of dictionaries under the default `cdbase` is managed by the OpenMath Society). Different content dictionaries may define different symbols for the same mathematical concept; finding alignments between different symbols, and using those to translate between different dialects of "OpenMath object", are concerns at a higher level than that which is addressed by the OpenMath standard.

Given the evolutionary nature of mathematics, it is clear that the set of CDs should be forever growing and never complete. Currently there are CDs for high-school mathematics, linear algebra, polynomials and group theory to name a few, and new contributions are always welcome. There is no requirement that applications use the standard set of CDs and it is often very useful to design a "private" CD for a specific purpose.

### OpenMath Objects

An OpenMath object is either _compound_ (built up from other OpenMath objects) or _basic_ (not possible to decompose that way). Among the basic objects we find _symbols_, _variables_, and _integers_, which should be familiar from mathematical logic textbooks (although integers are often treated as informal shorthands there, since they are not necessarily fundamental). There are three additional cases of basic OpenMath object, which were perhaps motivated more by computational practicality — _floating-point numbers_ (IEEE "doubles"), (Unicode) _character strings_, and _bytearrays_ — but mathematically these are no less well-defined than integers, and they have uses beyond the obvious programming ones.

The most common case of compound object is an _application object_, which is built from a sequence of (one or) several objects, the first of which is called the _head_ of the application. Applications include both function application (head is the function, remaining objects are the arguments of the function) and relation/predicate application (head is the relation/predicate, remaining objects are the arguments). The second most common case of compound object is a _binding object_, which differs from application objects primarily in that it _binds_ one or several variables within the body of the binding; the way that quantifiers control variables is by being the heads of binding objects that bind said variables. OpenMath also has _attribution_ and _error_ as cases of compound object, but application and binding cover everything one tends to find in mathematical logic textbooks.

### Object examples in OpenMath-XML encoding

In the OpenMath-XML encoding, every OpenMath object (and subobject of an OpenMath object) is encoded as an XML element. Compound objects have one or several child elements as their content, whereas basic objects are leaves in the object tree. The tags of the OpenMath object elements all begin with <tt>OM</tt>, followed by a one- (or several) letter abbreviation of the type of object: `OMS` is for symbol objects, `OMV` is for variable objects, `OMI` is for integer objects, `OMF` is for floating-point objects, `OMSTR` is for string objects, and `OMB` is for bytearray objects. For the compound objects we similarly have `OMA` for application objects, `OMBIND` for binding objects, `OMATTR` for attribution objects, and `OME` for error objects.

A symbol is characterised by three things: its _name_, the name of its _content dictionary_, and its _cdbase_; in the OpenMath-XML encoding these are encoded as the three attributes `name`, `cd`, and `cdbase` of an `OMS` element (although `cdbase` is rarely specified explicitly, since most symbols defined to date are in the default cdbase). The sine function is for example named `sin` in the `transc1` (transcendental functions 1) content dictionary, so the XML element encoding that OpenMath symbol object is
```XML
  <OMS cd="transc1" name="sin"/>
```
(Strictly speaking, the OpenMath-XML encoding defines a _document type_ for "OpenMath object", so it describes a class of XML documents where the contents are one OpenMath object. For the above symbol object to become a valid OpenMath-XML document, it must be given a slight wrapper, like so:
```XML
<OMOBJ xmlns="http://www.openmath.org/OpenMath">
  <OMS cd="transc1" name="sin"/>
</OMOBJ>
```
See [_Introduction to XML_](../xml-for-om/) for more explanation of XML. For now we'll mostly ignore that wrapper since it only occurs at the outermost level.)

A variable is fully characterised by its name alone, which similarly is specified using the `name` attribute, but of an `OMV` element. The formula sin(_x_) is thus encoded as
```XML
  <OMA>
    <OMS cd="transc1" name="sin"/>
    <OMV name="x"/>
  </OMA>
```
Names are like identifiers in computer languages; technically OpenMath uses the same rules for these as XML (even in the non-XML encodings), so we're a bit more generous than traditional programming languages: hyphen (<tt>-</tt>) and period (<tt>.</tt>) are allowed in names (as long as they're not the first character), and many thousands of non-ASCII characters (for example from the Greek alphabet) are allowed as well.

The formula cos(π)=–1 can be encoded as
```XML
  <OMA><OMS cd="relation1" name="eq"/>
    <OMA>
      <OMS cd="transc1" name="cos"/>
      <OMS cd="nums1" name="pi"/>
    </OMA>
    <OMI> -1 </OMI>
  </OMA>
```
Here we see that `OMI` elements, unlike `OMS` and `OMV` (but like `OMSTR` and `OMB`) elements, carry their "value" in the element contents (material between start-tag and end-tag) rather than in attributes of the element. Apart from these basic element contents, _there is no character data in OpenMath documents_ — whitespace before and after the element encoding an OpenMath object is irrelevant and can be ignored. Thus there is no difference between putting an opening `<OMA>` on the same line as the `<OMS>` which serves as its head, or putting them on separate lines, but some authors stylistically prefer doing it one way and others prefer doing it the other way. Nor does the indentation have any significance, but a consistent indentation scheme tends to make the code easier to read.

What about bindings? The formula ∀<i>x</i>: sin<sup>2</sup>(_x_)+cos<sup>2</sup>(_x_)=1 becomes
```XML
  <OMBIND>
    <OMS cd="quant1" name="forall"/>
    <OMBVAR> <OMV name="x"/> </OMBVAR>
    <OMA> <OMS cd="relation1" name="eq"/>
      <OMA> <OMS cd="arith1" name="plus"/>
        <OMA> <OMS cd="arith1" name="power"/>
          <OMA> <OMS cd="transc1" name="sin"/> <OMV name="x"/> </OMA>
          <OMI>2</OMI>
        </OMA>
        <OMA> <OMS cd="arith1" name="power"/>
          <OMA> <OMS cd="transc1" name="cos"/> <OMV name="x"/> </OMA>
          <OMI>2</OMI>
        </OMA>
      </OMA>
      <OMI>1</OMI>
    </OMA>
  </OMBIND>
```
The `OMBVAR` element here does not correspond to an OpenMath (sub)object; it is rather a syntax-required wrapper around the sequence of variables being bound in this binding, because there may be more than one. 

A more practical example of something one might want to transport from one Computer Algebra System to another is perhaps a polynomial. How would one then encode _x_<sup>5</sup> – 3<i>x</i><sup>4</sup> + (3/14)_x_<sup>2</sup> – 7? A literal translation would be
```XML
  <OMA> <OMS cd="arith1" name="plus"/>
    <OMA> <OMS cd="arith1" name="power"/> <OMV name="x"/> <OMI>5</OMI> </OMA>
    <OMA> <OMS cd="arith1" name="times"/>
      <OMI>-3</OMI>
      <OMA> <OMS cd="arith1" name="power"/> <OMV name="x"/> <OMI>4</OMI> </OMA>
    </OMA>
    <OMA> <OMS cd="arith1" name="times"/>
      <OMA> <OMS cd="nums1" name="rational"/>
        <OMI>3</OMI> <OMI>14</OMI>
      </OMA>
      <OMA> <OMS cd="arith1" name="power"/> <OMV name="x"/> <OMI>2</OMI> </OMA>
    </OMA>
    <OMI>-7</OMI>
  </OMA>
```
although it could be argued that this is not the polynomial as such, but rather the corresponding polynomial expression in _x_. To encode "the function mapping _x_ to _x_<sup>5</sup> – 3<i>x</i><sup>4</sup> + (3/14)_x_<sup>2</sup> – 7", one can use the `lambda` binder as follows:
```XML
  <OMBIND>
    <OMS cd="fns1" name="lambda"/>
    <OMBVAR> <OMV name="x"/> </OMBVAR>
    <OMA> <OMS cd="arith1" name="plus"/>
      <OMA> <OMS cd="arith1" name="power"/> <OMV name="x"/> <OMI>5</OMI> </OMA>
      <OMA> <OMS cd="arith1" name="times"/>
        <OMI>-3</OMI>
        <OMA> <OMS cd="arith1" name="power"/> <OMV name="x"/> <OMI>4</OMI> </OMA>
      </OMA>
      <OMA> <OMS cd="arith1" name="times"/>
        <OMA> <OMS cd="nums1" name="rational"/>
          <OMI>3</OMI> <OMI>14</OMI>
        </OMA>
        <OMA> <OMS cd="arith1" name="power"/> <OMV name="x"/> <OMI>2</OMI> </OMA>
      </OMA>
      <OMI>-7</OMI>
    </OMA>
  </OMBIND>
```
A practical advantage of using the latter is that the variable is now contained within the object, whereas with the former its interpretation might well depend on the context (a computer algebra system where _x_ has been assigned a numerical value would probably evaluate the former expression for that value of _x_ rather than keep it as a polynomial, which is not necessarily what one wants). It is fairly common to see idioms involving lambda for encoding things like "integral of expression" or "limit of expression", and presentation-generating tools usually need to recognise a number of these.

### Other encodings

One criticism that can be raised is that the above looks like an awful lot of text to write for such a small polynomial — a computer algebra system might let you get away with just `x->x^5-3*x^4+3/14*x^2-7` for the same thing! A factor causing this difference is that OpenMath isn't playing favourites; certainly ordinary addition, multiplication, and exponentiation of numbers are common operations in elementary mathematics, but there is plenty of mathematics which is about very different things and using very different operations, so why should arithmetic get a lot of special shorthands? (Introducing alternative meanings of + etc. in special contexts works fine in print, but not so well for machine-readable content.) Another factor is however that XML was designed to be unambigous and robust rather than compact – even an extra factor 10 in encoding size is usually not that big a deal if both reader and writer are computers, as long as the structural complexity is not increased – so even though it is probably well suited for some purposes (such as archiving your results), it need not be optimal for all. That is one reason we have alternative encodings.

The binary encoding mostly replaces the spacious tags of XML with single bytes, and packs identifiers and numerical data tight. A line by line conversion of the above to binary, writing bytes either in hexadecimal or as `"string"` (meaning the UTF-8 encoding of the quoted characters), is with spaces inserted for clarity just
```
  1a
    080406 "fns1" "lambda"
    1c 0501 "x" 1d
    10 080604 "arith1" "plus"
      10 080605 "arith1" "power" 0501 "x" 0105 11
      10 080605 "arith1" "times" 
        01fd
        10 080605 "arith1" "power" 0501 "x" 0104 11
      11
      10 080605 "arith1" "times" 
        10 080508 "nums1" "rational"
          0103 010e
        11
        10 080605 "arith1" "power" 0501 "x" 0102 11
      11
      01f8
    11
  1b
```
Now the most spacious parts are the symbol names, due to not playing favourites. Even these may be further abbreviated by using _references_ to repeated subobjects:
```
  1a
    080406 "fns1" "lambda"
    1c 8501 "x" 1d
    10 080604 "arith1" "plus"
      10 880605 "arith1" "power" 1e00 0105 11
      10 880605 "arith1" "times" 
        01fd
        10 1e01 1e00 0104 11
      11
      10 1e02 
        10 080508 "nums1" "rational"
          0103 010e
        11
        10 1e01 1e00 0102 11
      11
      01f8
    11
  1b
```
Here we are down to 61 bytes for the structure and another 56 bytes for names (from 506 significant characters in the XML encoding) — certainly still longer than `x->x^5-3*x^4+3/14*x^2-7`, although a fairer comparison would be with the fully parenthesised `x->((x^5)+((-3)*(x^4))+((3/14)*(x^2))+(-7))` since OpenMath makes no presumptions about operation priorities.

The third standardised OpenMath encoding is (strict) Content MathML (cMML). This is a sibling of the more well-known _Presentation_ MathML (pMML) that is sometimes used for math formulae in web settings, but as the name says encoding _content_ (semantics) rather than _presentation_ (looks). Being another XML encoding, it is in most ways similar to OpenMath-XML, but the tag names are different, and cMML prefers to put names in element contents rather than attributes, so our initial `<OMS cd="transc1" name="sin"/>` example becomes
```XML
  <csymbol cd="transc1">sin</csymbol>
```
in cMML.

### Future encodings

A candidate for becoming the fourth standard-codified OpenMath encoding is called [PopCorn](https://web.archive.org/web/20150822191347if_/http://java.symcomp.org:80/FormalPopcorn.html); its niche is being a format that humans actually might stand to write. In PopCorn, "ordinary programming identifiers" are interpreted as symbol objects, whereas identifiers prefixed by a `$` are interpreted as variable objects, and "ordinary programming literals" are interpreted as the corresponding kind of basic OpenMath object (possibly a quoted symbol). Application objects are written like function application, with the head followed by a parenthesis containing the arguments, separated by commas.

Unlike the currently standard-codified encodings PopCorn _does_ play favourites, by defining punctuation shorthands for a small set of symbols, with associated priority rules. In PopCorn, the above polynomial _can_ be written
```
  fns1.lambda[$x->$x^5-3*$x^4+3//14*$x^2-7]
```
(although `fns1.lambda[$x->$x^5+-3*$x^4+3//14*$x^2+-7]` is technically more faithful to the object as originally encoded).

There are also some schemes around that use LaTeX to encode OpenMath objects. Here there is often a dual goal of both encoding mathematical semantics (content) and typesetting a mathematical formula for print (presentation), with different schemes putting different weight on these goals. One point of including semantic information in documents aimed at print can be to improve searchability; knowing that `\Phi(x)` denotes the same thing as `\frac{1}{\sqrt{2\pi}} \int_{-\infty}^x \exp(-u^2/2) du` typically makes a huge difference for whether formulae involving that `\Phi` constitute matches for a specific search. The to date most impressive (though not necessarily the most formalised) use of such semantic LaTeX macros is the [Digital Library of Mathematical Functions (DLMF)](http://dlmf.nist.gov).



## More on Content Dictionaries

Every symbol has a corresponding Universal Resource Identifier (URI), formed from the _cdbase_, content dictionary name _cd_, and symbol name _name_ as: <i>cdbase</i><tt>/</tt><i>cd</i><tt>#</tt><i>name</i>. Hence the symbol `<OMS cd="nums1" name="rational"/>` above, under the default cdbase `http://www.openmath.org/cd`, has the URI [http://www.openmath.org/cd/nums1#rational](http://www.openmath.org/cd/nums1#rational). Though not a formal requirement, it is a good idea to arrange things so that fetching the URI of a symbol will get you the content dictionary document defining that symbol; if nothing else, this helps deciding who would win if two different content dictionary documents claim the same cdbase and content dictionary name.

In practice, what one typically gets if entering a symbol URI into a web browser is not the formal document that constitutes the content dictionary, but an HTML rendering of it, scrolled to the symbol of interest. Formal content dictionary documents are rather designed to be machine-readable (for example so that they could be used to generate on-line help in an integrated development environment); the concept is abstract, but the standard only codifies an XML encoding for content dictionaries. To retrieve that for a content dictionary stored on the OpenMath website, append the file extension `.ocd` to the _cd_ part of the URI.


### Symbol definitions

Most of the material in a CD consists of _symbol definitions_. A symbol definition in an OpenMath CD consists of the following pieces of information:

*   the symbol name;
*   a description in plain text;
*   optionally, a _role_ (constant, application, binder, attribution, semantic-attribution, or error) of the symbol.
*   optionally, a set of this symbol's properties in plain text (_Commented Mathematical Properties_, or _CMPs_);
*   optionally, a set of this symbol's properties encoded in OpenMath (_Formal Mathematical Properties_, or _FMPs_);
*   optionally, one or more examples of its use (encoded in OpenMath and/or plain text).

In practice the CMPs and FMPs can come as pairs, and often serve in the place of examples.

A very simple instance of a CD definition is:

```XML
<CDDefinition>
<Name> log </Name>

<Description> 
This symbol represents a binary log function; the first argument is
the base, to which the second argument is log'ed.
It is defined in Abramowitz and Stegun, Handbook of Mathematical
Functions, section 4.1
</Description>
<CMP>
  a^b = c implies log_a c = b
</CMP>
<FMP>
  <OMOBJ>
    <OMA>
      <OMS cd="logic1" name="implies"/>
      <OMA>
        <OMS cd="relation1" name="eq"/>

        <OMA>
          <OMS cd="arith1" name="power"/>
          <OMV name="a"/>
          <OMV name="b"/>
        </OMA>
        <OMV name="c"/>
      </OMA>
      <OMA>
        <OMS cd="relation1" name="eq"/>

        <OMA>
          <OMS cd="transc1" name="log"/>
          <OMV name="a"/>
          <OMV name="c"/>
        </OMA>
        <OMV name="b"/>
      </OMA>
    </OMA>
  </OMOBJ>
</FMP>

<Example>
log 100 to base 10 (which is 2).
<OMOBJ>
  <OMA>
    <OMS cd="transc1" name="log"/>
    <OMF dec="10"/>
    <OMF dec="100"/>
  </OMA>
</OMOBJ>
</Example>

</CDDefinition>
```

This provides a symbol to represent the `log` function by giving a pointer to a standard reference book. It provides the property that:

<center>a<sup>b</sup>=c  →  log<sub>a</sub>(c)=b</center>

both as plain text and as OpenMath, and also gives an example of how the symbol is used.

A role provides a coarse kind of type declaration for a symbol — a symbol that is the head of an application object should be an application, a symbol that is the head of a binding object should be a binder, etc. — although this is advisory rather than normative. More detailed type information would be provided in a separate document parallel to the content dictionary. Simple signatures can be encoded using the [Simple Type System](../standard/sts.pdf), while more type-theoretically formal definitions are possible using the [Extended Calculus of Constructors](../standard/ecc.pdf); the OpenMath community does not mandate any single system. (Paraphrasing Shakespeare, we've found that there are more things in mathematics, than are dreamt of in the philosophy of any one type theorist.)

The same approach of having documents parallel to the content dictionary that provide additional information about the symbols it defines can be used for many other purposes. There can be files providing notations for symbols, as one would need if generating presentations (e.g. MathML or LaTeX) for an OpenMath object. There can be files providing definitions to be used by formal logic systems (Agda, Coq, Isabelle/HOL, Mizar, Theorema, etc.). There are in most cases not even a common wrapper format that these systems could agree upon, so it is necessary to have separate files for each.

As a rule of thumb, OpenMath symbols should not be regarded as verbs, since they are used to construct objects rather than to send commands. (A reader may _choose_ to interpret them as commands, but that is then a choice made by that particular party.) The presence of both nouns and verbs in a CD (e.g. "integral" and "integrate") is strongly discouraged.


### Global information in content dictionaries

In addition to the symbol definitions, content dictionaries contain the following global pieces of information:

* A _name_, that becomes the _cd_ attribute of the symbols. The standard recommends that the name in addition to conforming to the XML rules for a name also is safe to use as a filename, in a way that boils down to: don't use non-ASCII characters in CD names.
* Optionally a _cdbase_ URI for the content dictionary. If no cdbase is specified, the content dictionary has the default cdbase.
* Optionally (but highly recommended) a _description_ of the content dictionary, used to present the content dictionary in lists and tables.
* A _status_, that is one of `official` (attaining this requires a formal decision by the OpenMath Society), `experimental`, `private`, and `obsolete`. The most common status is **experimental**; in practice it covers everything from "something I just cobbled together" to "candidate to become official".
* _Revision metadata_, consisting of: _date_, _version_, _revision_ (minor version), and (optionally) a _review date_.

Along with these, the "header" part of a content dictionary document typically also contains a license statement, wrapped up in a `CDComment` element. These statements are non-functional (in the sense that the computer doesn't care) and not mandatory, but they may make a difference for whether the content dictionary can be distributed with other pieces of software.

Other uses for `CDComment` elements include providing a bibliography in the content dictionary document, and inserting section headings, if there are meaningful sections of symbols in the document. (Alternatively, a common style is to organise a content dictionary as a flat list of symbols in alphabetical order.)


### CD groups

CDs usually consist of related symbols. Collections of related CDs can be grouped together, for convenience, as _CD Groups_. One very important CD Group is that corresponding to the [content part of MathML](https://www.w3.org/TR/MathML3/chapter4.html#contm.opel).


## OpenMath in Action

A list of applications of OpenMath can be found in the [software & tools](../software/) section of this website. There is no definitive way in which OpenMath should be used, as the standard has been designed to be as flexible as possible. Nevertheless many OpenMath applications share common characteristics which we shall discuss here.

The simplest use of OpenMath would be for recording the results of some (presumably nontrivial) calculation you've done; grant agencies and journals are increasingly demanding that research data are deposited in open databases. The simplest way to produce such a record is to have your program output the results encoded in OpenMath, since that allows you to mathematically state what your result is. If for example you calculated the chromatic polynomials of all graphs on 10 vertices (hardly a remarkable feat today, but it serves as an example), then you can make a self-contained record of these results by encoding in OpenMath a statement of the form

> The chromatic polynomial of the graph … is …, and the chromatic polynomial of the graph … is …, and the chromatic polynomial of the graph … is …, …

and so on, until you've listed all graphs (up to isomorphism; there are several millions of them). A custom file format could no doubt be more compact, or allow for fast look-up, but then it would also need to be documented (which could be a minor math paper of its own) and reading it would require specialised tools (which need developing, debugging, and maintenance). Better then to keep it straightforward.

Slightly more complicated is to use OpenMath as import and export format for an application. It is unlikely that the internal data structures used by the application will be OpenMath (but neither do traditional computer algebra systems exclusively use their command languages as internal data structures), and so translation between the internal representations and (some encoding of) OpenMath will have to take place. The piece of software which does this is usually referred to as a _phrase-book_. The export part of a phrase-book can often be a straightforward recursion over the layers of the internal data structures being exported, whereas the import part may be trickier, depending on how flexible the application should be regarding how the data to import is structured.

The next step up from import and export is to use OpenMath for interactive communication between two applications, e.g. a client program and a computational server, or a generalist computer algebra system and a domain-specific system; the two applications may communicate by sending OpenMath objects to each other, thereby removing the need for one system to be dependent upon the details of the data structures employed by the other system. A notable mechanism here is [SCSCP](../standard/index.html#symbolic-computation-software-composability-protocol-scscp), which is a remote procedure call protocol that uses OpenMath objects as messages. Remote procedure calls in general merely means that one application can tell another to do something, but the level of integration can be low, especially if the data involved is nontrivial (often one party is required to express data in the native language of the other party). With SCSCP, published functions in the remote application really become available as if they were a locally defined function speaking OpenMath.

### Writing phrase-books

It is possible to write a generic phrase-book which can handle any piece of OpenMath, but applications where this makes sense are few and far between, because few _applications_ can do something sensible with arbitrary mathematical formulae. If restricting attention to cases where the application can deal with the mathematics being handed to it, a phrase-book still faces challenges both in the area of vocabulary and in the area of grammar.

In OpenMath, the vocabulary of a phrase-book is simply the set of symbols that it understands. Encountering an unknown symbol may raise an error, or it may trigger some default behaviour (e.g. treating the symbol as an identifier that has not been assigned any value). OpenMath carefully avoids defining one behaviour as "right" in every given circumstance, and leaves it up to the phrase-book writer to decide what to do. Systems with a built-in command language typically allow extending the phrase-book vocabulary with new symbol definitions, whereas simpler systems tend to be more limited.

The challenges in the area of grammar are not with the OpenMath encodings, even though these technically are defined by way of a formal language grammar, but in the higher level issue of how the abstract OpenMath objects are structured. One way of saying that _S_ is the squaring function would be ∀<i>x</i>: _S_(_x_) = _x_<sup>2</sup>, i.e.,
```XML
  <OMBIND> <OMS cd="quant1" name="forall"/>
    <OMBVAR> <OMV name="x"/> </OMBVAR>
    <OMA> <OMS cd="relation" name="eq"/>
      <OMA> <OMV name="S"/> <OMV name="x"/> </OMA>
      <OMA> <OMS cd="arith1" name="power"/>
        <OMV name="x"/> <OMI> 2 </OMI>
      </OMA>
    </OMA>
  </OMBIND>
```
but another would be
```XML
  <OMA> <OMS cd="relation" name="eq"/>
    <OMV name="S"/>
    <OMBIND> <OMS cd="fns1" name="lambda"/>
      <OMBVAR> <OMV name="x"/> </OMBVAR>
      <OMA> <OMS cd="arith1" name="power"/>
        <OMV name="x"/> <OMI> 2 </OMI>
      </OMA>
    </OMBIND>
  </OMA>
```
In this case, it is entirely reasonable for a phrase-book to understand one but not the other (although it is also perfectly possible to make a phrase-book which understands both). Being able to understand _x_<sup>2</sup>–_x_–2 but not (_x_+1)(_x_–2), or more formally
```XML
  <OMA> <OMS cd="arith1" name="times"/>
    <OMA> <OMS cd="arith1" name="plus"/>
      <OMV name="x"/> <OMI>1</OMI>
    </OMA>
    <OMA> <OMS cd="arith1" name="minus"/>
      <OMV name="x"/> <OMI>2</OMI>
    </OMA>
  </OMA>
```
(on account of the operations in the latter not being nested in the expected order plus–times–power) may on the other hand seem unreasonable, however a simplistic phrase-book design could well end up exhibiting precisely this behaviour. A trick that is useful for avoiding many trivial limitations in the grammar supported by a phrase-book is to implement parsing as evaluation (for appropriate interpretations of application and binder heads); this would mean the internal representation of a mathematical object is constructed step by step from simpler objects using mathematical operations, rather than allocated at the start and then filled in with data as they are encountered. Remember, though, that OpenMath symbols should primarily not be regarded as verbs, since they are used to construct objects rather than to send commands. 

This kind of limitations in application phrase-books could be a reason for having used the `nums1#rational` symbol rather than `arith1#divide` to encode the coefficient 3/14 in the polynomial _x_<sup>5</sup> – 3 _x_<sup>4</sup> + 3/14 _x_<sup>2</sup> – 7 used as example above: an application for (say) associative algebra need not be comfortable with the concept of division, since that in its area of expertise is undefined more often than not, but it will probably have to deal with rational numbers since there isn't any smaller field of characteristic zero. A strict reflection of that in the phrase-book would be to support `nums1#rational` (which can only be used to build rational numbers) but not `arith1#divide` (since it typically doesn't know how to do that), however a perfectly feasible pragmatic alternative for that associative algebra application would be to treat `arith1#divide` as a synonym of `nums1#rational`, throwing an error whenever either operand isn't an integer. Either way, it may well be most natural for the phrase-book to use `nums1#rational` when exporting data, since the internal representation of a rational number is likely something more specialised than "quotient of two expressions".

Writing a phrase-book may be non-trivial, and requires an understanding of the semantics of the underlying software. An OpenMath object need not map directly into a private object and vice-versa, for example in some systems a rational number might have to be represented by a float, or a sparse matrix by a dense one. Indeed it is quite possible that a piece of software could have multiple phrase-books associated with it for different purposes. 


## Additional OpenMath object details

### Basic objects

The XML encoding of `OMI`s and `OMF`s can be in hexadecimal as well as decimal, if one wishes to avoid a radix conversion. The binary encoding is base-2 (well, perhaps rather base-256) only. In the case of integers, hexadecimal is signalled with an `x` before the first digit (but after the minus sign, if there is one). White space is ignored, so digits may be grouped. In the case of floating-point numbers, the value is given as an attribute `dec` or `hex` of the `OMF` tag, and the name of the attribute determines which format is used. A `hex` value consists of the 16 hexdigits needed to encode the 8 bytes of a 64-bit IEEE floating-point number (colloquially known as a "double"), whereas a `dec` value is an ordinary decimal fraction with optional exponent part, e.g. `-3.743e4`.

Strings are encoded as explicit characters in the XML encoding (the `<` and `&` characters need to be expressed using character entities, since they have special roles in XML syntax), whereas in the binary encoding they are encoded using UTF-8. Bytearrays are raw bytes in the binary encoding, whereas in the XML encoding they are encoded using base64 (so 3 bytes of data are encoded into 4 ASCII characters).

### Attribution objects

An _attribution object_ is a kind of compound object that takes a core object (which may be compound or basic) and decorates it with additional information, in the form of one or several _attribution pairs_. Each attribution pair consists of one symbol that serves as key specifying the meaning of this attribution, and one value which can be an arbitrary OpenMath object (or derived object, see below). Attributions are either _semantic_ (attached using a symbol with role `semantic-attribution`) or _adornment_ (preferred symbol role is `attribution`); adornment attributions can be removed without changing the meaning of an object.

One common use of adornment attributions is to include hints about what might be a suitable presentation form of an OpenMath object; the [altenc](http://www.openmath.org/cd/altenc) content dictionary has symbols `MathML_encoding` and `LaTeX_encoding` using which one may attach (suggestions) for presentation forms of an object.
```XML
  <OMATTR>
    <OMATP>
      <OMS cd="altenc" name="LaTeX_encoding"/>
      <OMSTR>J_0</OMSTR>
    </OMATP>
    <OMBIND> <OMS cd="fns1" name="lambda"/>
      <OMBVAR> <OMV name="z"/> </OMBVAR>
      <OMA> <OMS cd="hypergeo2" name="besselJ"/> 
        <OMI>0</OMI> <OMV name="z"/>
      </OMA>
    </OMBIND>
  </OMATTR>
```
suggests that `J_0` is a good LaTeX formula for the reduction of the two-variable [`hypergeo2#besselJ`](http://www.openmath.org/cd/hypergeo2#besselJ) function to a one-variable function by fixing the first (parameter) argument to 0.

Adornment attributions do however not need to be non-mathematical. Another use can be to provide additional information that was computed during a calculation, but technically not asked for by the user. For example, if one asks a computer algebra system whether one polynomial is in the ideal generated by four others, then the answer is either [yes](http://www.openmath.org/cd/logic1#true) or [no](http://www.openmath.org/cd/logic1#false), which is just one bit of information. The standard algorithm for computing that answer would however be to first compute a Gröbner basis for the ideal, a step that (on average) is both computationally expensive and likely to be useful for future calculations involving that ideal. Hence it would make sense to attach an attribution stating "By the way, a Gröbner basis of that ideal is …" to that boolean result.

Other uses for adornment annotations can be to attach information about the origin of an object (for example "the AXIOM/Maple/Mathematica/Maxima/Sage command which generated me was …") or how expensive it was to compute ("the calculation of this [took 5031s](http://openmath.github.io/cd/scscp1#info_runtime) and [used 382MiB of RAM](http://openmath.github.io/cd/scscp1#info_memory)"). Yet another can be to record intermediate results of a computation by structural recursion, e.g. "this evaluates to 5.138" or "this subexpression is positive, and continuous as a function of _x_." Adornment annotations are allowed to carry information that influences the course of a computation; it is only the _meaning_ of an object that they cannot change.

Semantic annotations do change the meaning of an object, although in most cases merely by providing "contextual" information to clarify some detail. This is not a mechanism usually found in textbooks on mathematical logic (since a richer language means more cases in every proof by structural induction, which is awkward) and it would be possible to do mathematics without it, but practical mathematics tends to have quite a lot of this. One example can be parameters of certain functions or relations (for which the alternative formalisation would be to make them explicit arguments), especially if the parameters typically can be ignored or left with default values, and only in a minority of cases need adjustment.

One notable use of semantic annotations is type annotations on variables being quantified, as annotations can appear in the `OMBVAR` element. Printed mathematics often handle that kind of thing via conventions (e.g. boldface variables are vectors, the letters _i_ through _n_ denote integers), but when formalising it is better to make such assumptions explicit.

### Derived objects and error objects

The value of an annotation can be an OpenMath object of arbitrary complexity, but it can also be an OpenMath _derived object_, containing foreign data; in the OpenMath-XML encoding, derived objects appear as `OMFOREIGN` elements. The most common use for derived objects is to adorn OpenMath objects with Presentation MathML renderings of these as formulae, but the data is by no means restricted to just that format. Indeed, the `encoding` attribute of an `OMFOREIGN` element permits using any XML namespace or MIME type to identify the format of the data.

From a purely logical perspective, arbitrary data may equally well (in particular, without undue overhead) be embedded into an OpenMath document as a bytearray or string object, but then one would have to rely on the mathematical context around that basic object for providing the meaning of it — a JPEG image embedded as a bytearray would probably have to be placed as an argument of some "decode JPEG data" function symbol for the interpretation to be clear — and whereas this can certainly be comprehended it does require any reader to have a fair understanding of the mathematical structure of the OpenMath object into which the data is embedded. Foreign objects that specify their own format allow tools with a more shallow understanding of the mathematics to access the embedded data; in the case of the XML encodings, this is further facilitated by having just one tree of XML elements which contains both OpenMath and non-OpenMath portions. Conversely there is also the matter that data encoded as an OpenMath object convey an expectation of having a mathematical interpretation, in a way that foreign objects do not; a JPEG image can reasonably be mathematised as a height by width by number of channels array of numbers, but a paragraph of HTML is much further from having a mathematical interpretation, so it makes correspondingly less sense to encode it as an OpenMath object proper.

The final kind of OpenMath object is an _error_ which is built up from a symbol describing the error and a sequence of OpenMath objects. For example:
```XML
  <OME>
    <OMS name="unexpected_symbol" cd="error1">
    <OMS name="sine" cd="transc1">
  </OME>
```
represents the error which might be generated when an application sees a symbol it doesn't recognise from a CD it thought it knew about. Error OpenMath objects are similar to application objects, having a head object followed by zero or more operands, but there are some differences. First, it represents an error, so a phrasebook encountering it may (but is not by the standard _required_ to) respond by raising an error/exception; further levels of compound object built around an error subobject may end up being ignored. Second, the head of an error object must be a symbol object (preferably with a role of error); if you need a parametrised family of errors, then use one or several operands for that.
```XML
  <OME>
    <OMS cd="error2" name="oserror"/> <!-- Not an existing CD. -->
    <OMI> -1728 </OMI> <!-- Presumably an OS-specific error code,
       which the program didn't know what it meant and is just passing
       on to the user. -->
  </OME>
```
Third, the operands need not all be OpenMath objects; an operand of an error may alternatively be a derived object. This is practical, since pieces of data describing an error need not be mathematical in nature.

### References

Though not corresponding to another kind of OpenMath object, there is one more element type that can be used where an OpenMath object is expected, namely that of `OMR` references. The mechanism is that any OpenMath-XML element encoding an OpenMath object may carry an `id` attribute that associates an identifier with that element, and when the `href` attribute of an `OMR` element references this identifier it means "the same object as that one". References may be forward as well as backward, and even external (to OpenMath objects in other documents, not necessarily employing the same encoding of OpenMath), but they must not be cyclic, not even indirectly. (Someone who wishes to describe a periodic stream or some other kind of infinite data structure in OpenMath should employ explicitly stream-constructing operations or the like to do so; this is anyway more flexible than abusing references would be.) An OpenMath-XML document with an `OMR` element is always equivalent to the same document with the `OMR` replaced by a copy of the element it references (although some adjusting of the attributes is needed: the copy must have the `id` attribute removed, and may need to have a `cdbase` attribute inserted), and therefore a document with references is always equivalent to some document without references.

The way it looks is that
```XML
  <OMA> <OMS cd="arith1" name="times"/>
    <OMI id="three"> 3 </OMI>
    <OMR href="#three"/>
  </OMA>
```
encodes the formula 3*3, using a reference to the first 3 (carrying an identifier of `three`) to express the second. Note that there is a `#` in the `href` value but not in the `id` value; this is because the identifier becomes a "fragment identifier" in the URI, and thus is placed after a `#`.


## Links to more information

* [The OpenMath standard](../standard/)
* The set of CDs produced by _or contributed to_ the OpenMath Society can be browsed [here](../cd/).

### Various related standards and specifications

* [MathML](https://www.w3.org/TR/MathML3/Overview.html)
* [PopCorn](https://web.archive.org/web/20150822191347if_/http://java.symcomp.org:80/FormalPopcorn.html)
* [SCSCP](../standard/index.html#symbolic-computation-software-composability-protocol-scscp)

### Tutorials and introductions

* [An OpenMath-oriented introduction to XML](../xml-for-om/)


