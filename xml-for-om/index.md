---
layout: page 
title: A Tutorial on XML for OpenMath
---

OpenMath as such does not require using XML — there is the binary encoding, if one prefers that — but there is quite a lot of XML in the OpenMath software ecosystem, so a user of OpenMath will probably be better off knowing XML than not. However, since XML is typically not a topic that features much in mathematics curricula, it is also something that mathematicians rarely find themselves already familiar with. Hence this OpenMath-oriented tutorial on XML.

## The basics

XML, like HTML, belongs to the [SGML](https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language) family of computer languages, so a lot of the basics will probably look familiar if you've ever edited HTML code. There are some differences, which we'll summarise below, but familiarity with HTML is not a prerequisite to learning XML.

Fundamentally, XML files consist of text interspersed with tags. A _tag_ begins with `<` and ends with `>`; this is similar to how LaTeX uses the `\` character to mark the beginning of a control sequence. The `<` and `>` are meant to be thought of as left and right angle brackets, but technically they are the ASCII less-than and greater-than characters. A third character with a special role in XML syntax is `&`, which heads an "entity"; these are mainly used to express characters that have special meaning in XML syntax without invoking those meanings: the entity for `<` is `&lt;`, that for `>` is `&gt;`, and that for `&` itself is `&amp;`.

Tags are used to encode _elements_, which may be nested. The range of an XML file that encodes a specific element begins with a start-tag, e.g. `<OMA>`, ends with the matching end-tag, i.e. `</OMA>`, and everything between these two constitutes the _contents_ of the element. When the contents are empty, there is also a shorter empty-element form of the tag that has the `/` just before the closing `>`; thus `<OMA/>` would be equivalent to `<OMA></OMA>`, although neither of these two occur in practice since the contents of an OpenMath `OMA` are the elements encoding its subobjects, of which there must be at least one: the head. The contents of the `OMS`, `OMV`, and `OMF` elements are on the other hand always empty, so their tags are typically seen in empty-element form (although a start-tag end-tag combination is technically a possible alternative).

Elements have a _type_, which is the name that follows the opening `<` of a start-tag or empty-tag, and which is repeated after the `</` of an end-tag. Elements may also carry zero or more _attributes_, in the form of equations <i>name</i><tt>="</tt><i>value</i><tt>"</tt> that come after the type in the start-tag or empty-tag. The element type controls which attributes are allowed, and whether they are required or optional. The order of the attributes is not significant. In an `OMS` element the `cd` and `name` attributes are required, whereas the `cdbase` and `id` attributes are optional. Putting these things together, we see that in
```XML
  <OMA>
    <OMS cd="arith1" name="power"/>
    <OMS cd="nums1" name="e"/>
    <OMA>
      <OMS cd="arith1" name="times"/>
      <OMS cd="nums1" name="i"/>
      <OMS cd="nums1" name="pi"/>
    </OMA>
  </OMA>
```
there are 7 elements, 5 of which have type OMS and 2 of which have type OMA. Each of the OMA elements have 3 _child_ elements in their contents, and the outer OMA element has 3 "grandchildren", namely the 3 children of the inner OMA element that is the last child of the outer OMA element. (Oh, and in OpenMath that XML snippet encodes the Euler e<sup>iπ</sup> formula, but you probably guessed that one.)

So far the tags, but what of the text between them? This is a point where different _applications_ of XML (roughly: specific file formats based on XML) can go in different directions. One extreme is the _markup-operiented_, where the text is viewed as the primary contents of a document, whereas the tags merely serve to structure and enrichen the text; XML is an abbreviation of eXtensible Markup Language, so this is from where it is coming. The other extreme is the _data-oriented_, where the information is all in the element structure, and the only characters outside the tags are ignored whitespace (for newlines and indentation). OpenMath-XML is highly data-oriented — the only significant data outside tags are the character data in the contents of `OMI`, `OMSTR`, and `OMB` elements — whereas the Content Dictionary XML format (.ocd files) is fairly markup-oriented. The Content MathML encoding is more markup-oriented than the OpenMath-XML encoding, but still predominantly on the data side of the scale.

### XML vs. HTML

Though belonging to the same language family, there are some points on which the basic syntaxes of XML and HTML differ:
* XML distinguishes upper and lower case, whereas HTML does not. `<OMA>`, `<OMa>` and `<oma>` are thus different tags in XML, but the same tag in HTML.
* Some attribute values in HTML may appear bare (without quotes), but in XML all attribute values must be quoted. The quotes can be double (`"`, as in the examples above) or single (`'`), but they may not be omitted.
* HTML uses the start form of tags (no slash) even for empty tags, which in principle can lead to ambiguities, but in XML every start-tag must have a matching end-tag.

None of these is a major concern programming-wise, but some authors may need to adjust their typing habits for writing XML rather than HTML.

### XML namespaces

The part of basic XML that is the least intuitive is the namespace handling, mostly due to that it was added as an afterthought. The problem that namespaces solve is that different communities are likely to want to use the same tag name to mean different things, for example MathML's `<ci>` (i = identifier = variable) and `<cn>` (n = number) element types are so short that one must expect many other applications of XML to have used the same names to denote something completely different. A _namespace_ mechanism solves this by having every element type (and likewise element attribute) be a pair of namespace and name, so that only the `ci` in the MathML namespace denotes a Content MathML identifier — a similarly named element type in another namespace will be completely unrelated, so there is no risk of confusion even if one were to use both in the same document.

The unintuitive part is the way that namespaces are specified syntactically. XML namespaces are URIs, so they tend to look like web addresses — the namespace for MathML is for example `http://www.w3.org/1998/Math/MathML`, the namespace for OpenMath-XML is `http://www.openmath.org/OpenMath`, and the namespace for OpenMath CDs is `http://www.openmath.org/OpenMathCD` — which are a bit too long to repeat in every tag. Instead one defines a _prefix_ as denoting the namespace, and uses that prefix in the actual tag types; the prefix and name proper are separated by a colon. To define a prefix, one sets (in any element) an attribute which has prefix `xmlns` and the prefix as name, to the wanted namespace URI; then that prefix denotes that namespace throughout that element (its descendants included, unless one of them redefines the prefix). Thus in defining `bar` as being a prefix for the OpenMath-XML namespace, one might write
```XML
  <bar:OMA xmlns:bar="http://www.openmath.org/OpenMath">
    <bar:OMS bar:cd="arith1" bar:name="plus"/>
    <bar:OMI> 2 </bar:OMI>
    <bar:OMI> 2 </bar:OMI>
  </bar:OMA>
```
for the formula 2+2. The reason we usually don't see any such prefix in examples of OpenMath-XML is that the prefix may also be _empty_, in which case even the colon is omitted, so to a proper XML parser the above is completely equivalent to
```XML
  <OMA xmlns="http://www.openmath.org/OpenMath">
    <OMS cd="arith1" name="plus"/>
    <OMI> 2 </OMI>
    <OMI> 2 </OMI>
  </OMA>
```
Since all element types involved in an OpenMath object live in the same namespace, one normally has an `xmlns="http://www.openmath.org/OpenMath"` on the root element of an OpenMath-XML document and ignore namespaces thereafter (possibly resetting it in the contents of an `OMFOREIGN`), whereas in an XHTML+MathML document the namespaces are more mixed and therefore a prefix makes more sense. XSLT (a technology which we will get to later) has heavy mixing of namespaces, and therefore employing one or several prefixes is pretty much unavoidable there.

The downside of namespaces is that they make it harder for humans to read XML code – two fragments of XML can look the same, but mean different things, or look different, but actually parse as the same thing, due to differences in namespace prefix definitions — so copying a block of code from some other document _can_ be trickier than one thinks. Another known pitfall is that the namespace URIs are long and look very structured, but will in practice often rather be random jumbles of information; the only reliable way to get one right is to look up what it should be and copy the full string of the namespace (in particular, trying to produce the right string by modifying the name of a related namespace surprisingly often fails).

### The full story, and what parts to skip

For those who like to go to the source, there is the [Extensible Markup Language (XML)](https://www.w3.org/TR/xml/) specification. There are however a number of features in that specification which in practice turn out to be of little or no relevance, at least within the OpenMath technological ecosystem.

XML files can start with an _XML declaration_, which looks like
```XML
<?xml version="1.0"?>
```
(i.e., like a tag with extra `?` at the start and end), but they don't have to have a declaration. The main extra functionality of providing one is that you can specify the character encoding used for the document, which is useful if there are explicit non-ASCII characters there, but less of an issue now than in years past.

In the prologue of an XML file, there can also be a _document type declaration_ (DTD), which can look like
```XML
<!DOCTYPE foo [
   <!ELEMENT foo (foo | bar)+ >
   <!ELEMENT bar #PCDATA >
   <!ATTLIST foo  baz #CDATA #IMPLIED >
] >
```
The point of these is to give a grammar for the application of XML that the present document exercises, in particular which elements may be children of which elements, whether there are restrictions on their order, and which attributes elements may have. Most of the DTD can be placed in a separate file (and reused by many documents), so the grammar does not itself have to be included in every document, _but it can be_.

Document type declarations were practical necessities in SGML, because that has such a flexible syntax that documents often cannot be parsed without reference to the DTD for resolving ambiguities, but XML is more rigid and therefore eminently parsable without this kind of grammatical assistance. (It is still possible to use DTDs to obfuscate XML, but this is seldom practical or useful.) DTDs can also be used to _validate_ XML documents — which basically means checking that they are structured in the way that they themselves claim they are structured — but for that there are also various other techologies available. The OpenMath standard uses [RelaxNG](https://en.wikipedia.org/wiki/RELAX_NG) schemata for defining what it means to be valid OpenMath-XML and content dictionary documents.

DTDs may also define various kinds of _entities_ (parsed entities, unparsed entities, parameter entities, and maybe others), which is a kind of macro mechanism, but that mostly seems to be used for creating more complex DTDs (which OpenMath doesn't really use anyway). The only entities commonly seen in practice are the five predefined character entities (`&lt;`, `&gt;`, `&amp;`, `&quot;`, and `&apos;`) and the numeric character references (<tt>&#</tt>_decnum_<tt>;</tt> and <tt>&#x</tt>_hexnum_<tt>;</tt>).

Throughout an XML file, there may be _processing instructions_, which look like
```XML
<?target pseudoattribute="value"?>
```
These may in principle be used to pass instructions to the processor reading an XML document, but there are no notable examples of this in the context of OpenMath.



## Doing stuff

(This section is under construction.)

