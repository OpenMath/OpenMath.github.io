---
layout: page
title: 13th OpenMath Meeting, 10th August 2000
---

## Notes by <a href="https://people.bath.ac.uk/masjhd/">James Davenport</a>

### 1. Introduction

AMC opened the meeting. He reminded the meeting that, for the last
three years there had been a funded ESPRIT project on OpenMath.
This had led to the development of many individual tools, which
were on the verge of "breaking out" and being useful to many. He
apologised for any short-comings on the part of the organisers
(himself and OC) and thanked MK for his help.

The core of OpenMath is the standard and its CDs. He felt that
the standard was largely stable and should be formally accepted by
the OpenMath Society meeting. The 'core' CDs were being reviewed by
Stan Devitt and AS. They had been delayed due to the
perpetually-imminent arrival of MathML2. SMW would speak to this
later. there were also various other CDs awaiting the acceptance of
the 'core' CDs.

Phrasebooks were the tools and concrete implementations of CDs.
MR would speak to these later. It was important that these exist,
to make the task of software developers easier. There are three
supporting families of libraries, by MR in Java, by Stephen Braham
(which had fallen somewhat behind the standard), also in Java, and
from Nice (C and Java).

### 2. CDs

JHD spoke to the issue of Content Dictionaries. There were several
points raised for discussion. JHD in particular asked about
multiple signatures (see the STS paper). This caused a lively
debate with no immediate resolution.

It was queried whether there should be the `times` from `arith2`
(the commutative one) as well as the one from `arith1`. AS pointed
out that there were almost no instances in the core of uses of the
`arith2` times. JHD countered that it was impossible to state, say,
the Binomial Theorem without the use of this times. It was agreed
to leave things as they were.

AMC closed this session with an appeal for all participants who had
not registered to do so, and for those who were eligible to join
the OpenMath Society and wished to do so to indicate this to him.

### 3. OpenMath Society Meeting

*Present*: Bernardin (LB), Caprotti (OC), Chicha (YC), Cohen (AMC),
Dalmas (SD), Davenport (JHD), Dewar (MCD), Dirat (LD), Dupée (BJD),
Gaëtano (MG), Hur (NH), Jebelean (TJ), Kohlhase (MK), Linton (SAL),
Miller (BM), Mossakowski (TM), Naylor (WAN), Riem (MR),
Strotmann (AS), Timoney (RMT), Traverso (CT), Watt (SMW).

1. AMC opened the meeting. He reminded the meeting that there had
been, as required by the Statutes<a id="tex2html1" name="tex2html1"
href="#foot12"><sup>1</sup></a>, an Annual Meeting in Tallahassee,
attended by MS and AS. That meeting had adjourned all its
substantive business to this meeting. The auditors had reported to
that meeting, and the officers were continued until this meeting,
save that AS was now an Auditor, and TH a Deputy Auditor.

1. The meeting elected JHD as its Secretary. CT and BM were
elected to check the minutes. AMC was elected as president of the
Meeting.

1. The Meeting confirmed that it was a duly constituted meeting,
authorised to conduct the remaining business of the AGM.

1. The substantive agenda was approved.

1. MS had pointed out by e-mail that the statutory number of
Members-at-Large of the Executive Committee was one more than had
been previously thought. MCD nominated, and SMW seconded, AMC for
President. This was approved unanimously, as was the re-election of
all existing Committee members (nominated by RMT and seconded by
JHD). SMW said that, in view of the work done at INRIA, he
nominated MG for the vacancy. This was approved unanimously.

1. OpenMath standard. This had been approved previously, subject
to a question (BM) about the containers for floating-point numbers.
This had now been resolved by the `bigfloat1` CD.

1. CD acceptance. MCD explained the procedure, and said that the
Committee had nominated AS and Stan Devitt to review the first
batch. These people would also, drawing on their experience,
suggest improvements to the process. AMC asked how long this review
process would take. AS said that there were some fundamental
questions:

- what level of generality was aimed for;
- what level of compatibility with MathML was being aimed for;
- the `meta` group needs reworking to match the changes to the standard.

JHD felt that, if these issues could be resolved at this meeting,
it was a matter of weeks. AS felt that this was achievable.

It was pointed out that there was no procedure for CD amendment.
MCD thought that minor changes (as defined in the standard, and
involving a change of minor version number) were the purview of the
Executive, and major ones (adding symbols) should go through the
review process. SMW pointed out that the URL did not identify the
CD uniquely. He volunteered to draft the necessary amendment to the
standard.

AMC pointed out the necessity to publish CDs, and that we had
been waiting for months for MathML version 2. RMT asked how often
"bugs" were found in CDs. MCD said that AS's fresh pair of eyes
had pointed out several incompatibilities, not least with the
CD-writing document by JHD.

RMT pointed out that this document should say how difficult it
is to write a CD. AS agreed and said that "Abramowitz and Stegun"
paper showed how difficult it was. AMC urged that there should be a
special functions CD, since there was work going on in several
places. JHD said that he had spoken to both Nice and UWO on this,
but it was waiting for the core CDs. SMW suggested that Patrick Ion
(Mathematical Reviews) would, at least, make an excellent reviewer,
for technical as well as political reasons.

MK asked about the procedure for externally-written CDs. He said
that there were potentially thousands of theorem-proving and logic
CDs. JHD noted that there were several CD groups he had waiting in
the wings, e.g. polynomial CDs. SMW asked that contact should also
be made with Cathode -- AMC volunteered to do this. AMC asked for
volunteers to review the polynomial CDs: it was suggested that
these be found in the Macaulay and Singular groups. It was agreed
that the Executive Committee should nominate a "CD Editor".

AS reported that MS had been to an ACM-meeting on "Mathematics
on the Web". He therefore suggested a CD for "Mathematical
Classifications".


1. AMC raised the question of the Web Site. The substantive site
is currently maintained at NAG, though <http://openmath.org/> is
actually in Florida. There had been problems with the mirroring,
but a work-around had been found. There is a "What's new" page,
which can be registered with a Netminder.

MK said that people contributing a CD would probably want write
access to it. He favoured a CVS server for OpenMath, which was the
tool in use by, for example, Mozilla. SAL added that GAP used CVS
universally. MCD noted that CVS could only be used for development
-- official CDs should be archived outside CVS.

There was a problem with consistency between the NAG site and
the Tallahassee site, in particular URL's were not consistent. The
NAG site should only use relative path names. MCD and BM would
investigate.

1. The meeting elected Michael Kohlhase as a new member. AMC
reported that the society now had a bank account in London
(Ontario). Gonnet was willing to contribute to the finances. AMC
reported that the Executive felt that CD production was the
priority, and that they wished to reward the production of good CDs
via a small prize. The Executive would be drafting rules.

1. Date of Next Meeting. This would be on the Saturday before
ISSAC 2001, in July in London Ontario.

1. MK asked about formal standardisation. MCD reported that W3C
would be the obvious route, but MathML was essentially occupying
this territory. The Esprit project had investigated STEPS, but this
seemed quite heavy. He asked for suggestions, especially from BM.

### 4. OpenMath and MathML

SMW spoke to this issue. While we had been discussing content
earlier, this was in fact a small part of MathML. In particular he
spoke about the distinction between 'content' and 'presentation'
in MathML. He worried that the MathML "out there" would only be
presentation unless content was made easier.

He recapitulated the early history of OpenMath, starting with
experience of interfacing Maple and other software and 1992.
In 1994, Dave Raggert proposed the `<math>` tag for HTML 3.0,
but this was not accepted. The *HTML Math* group was formed
by W3C in 1995, and received a proposal from Wolfram Research,
for a language that looked similar to Mathematica.
This did not look like HTML. INRIA/IBM/Maple/Stilo proposed an
"HTML-native" mathematics, which became MathML. The distinction,
in terms of semantic extensibility, between MathML and OpenMath,
became clear. It should be noticed that presentation allowed
extensibility. XML was approved on February 10, 1998, and MathML
on April 7, 1998. As of MathML 1.0, OpenMath used MathML for
rendering, and OpenMath was *one of* the ways<a id="tex2html2"
name="tex2html2" href="#foot68"><sup>2</sup></a> of extending
MathML's semantics. MathML 2 is held up, partially because of
the question of handling flowing equations from right to left
in "arabic" mode, and similar non-mathematical issues. Several
browsers, natively or via applets and plugins, support at least
presentation MathML. MathML 2 has some internal changes, but also
changes to support XML changes, XSL etc.

There are two mechanisms in MathML 2 to extend MathML by
external references:

<dl>
<dt>`csymbol`</dt>

<dd>This contains rendering information (in MathML presentation)
and a URL for semantics, as well as an attribute saying what the
semantics are encoded in. He emphasised that `csymbol` was a
content tag.</dd>

<dt>`semantics`</dt>

<dd>This is a fancier version of the above. The first child
contains the object being described. Subsequent children can be
`annotation` or `annotation-XML`. The latter can be used for
MathML-content or OpenMath, whereas the former is text (PCDATA)
which could be in computer algebra languages, or rendering
information such as TeX. Again, this is a content object.</dd>
</dl>

There are rules for mixed markup, e.g. mostly content with some
presentation (see `csymbol`), and for parallel markup, which can
be either at the top-level or fine-grained. To allow fine-grained
parallel markup without having O(n<sup>2</sup>) blow-up, MathML 2
allows the `id` and `xref` attributes. Using `xlink:id` and
`xlink:href` allows us to link into Openmath content rather than
MathML content.

XSLT provides a rewriting system for XML expressions. This
allows one to:

- define notation for new areas;
- localise notation, for journals or for national differences;
- insert OpenMath semantic information for new domains.

He explained his style-sheet for differentiating all the formulae
in a Web page (as taught at UWO). So XSLT could expand
`<mx:rank>` to

<pre>
&lt;semantics&gt;
  &lt;ci&gt;rank&lt;/ci&gt;
  &lt;annotation-xml encoding="OpenMath"&gt;
    &lt;OMS name="rank" cd="linalg1"/&gt;
  &lt;/annotation-xml&gt;
&lt;/semantics&gt;
</pre>

[JHD asked why this was a `<ci>`? The answer was that all content
has a default rendering, which in this case would be `<mi>rank</mi>`.]
He claimed that this way we could "hide" OpenMath semantics in MathML
documents via macro packages, probably domain-specific.

In questions, MK asked whether SMW proposed that OpenMath should
include `xlink`. SMW thought that it would be a good idea.
SAL asked whether the links could be from content to presentation,
rather than the other way round. SMW said that it was possible,
but not as robust. He also explained that the rules for
"what was clickable" were vague and non-normative. He was asked
about SVG. It would be nice to be able to place mathematics in SVG
geometric diagrams. BM asked "what worked now"? SMW pointed to
WebEQ as an applet and Techexplorer as a plug-in. There are still
issues about real-estate control and base-line control in browsers.
It was important that the OpenMath community used MathML with
OpenMath content, since no-one else would. AS asked about the use
of non-arabic digits. It would be possible to use `<semantics>`
for this. OC said that Mozilla rendered theorems etc. in special
ways -- how does this relate to MathML? SMW said that this was
an issue for stylesheets.

As a general remark, he commented that, whereas S-expressions
had failed to catch on, XML, a tree-structured data format,
seemed to be "popular".

### 5. Work at Tallahassee

AS spoke about the work at Florida State University using OpenMath
to build a problem-solving environment in climatology. One problem
is the heterogeneity of the target machines: workstations for
debugging and teraflop machines for production. This environment
would have to include NAG routines<a id="tex2html3"
name="tex2html3" href="#foot45"><sup>3</sup></a>, computer algebra,
PDE solvers and statistical packages.

The Ctadel system is written in Prolog, which has a C SGML/XML library.
AS has written OpenMath reading and writing routines on top of this
library, to produce Prolog terms like `OMA(arguments)`. Prolog does not
understand binding, but Ctadel does (though the only binder is `lambda`,
so OpenMath's `exists` becomes `SOME(lambda ...`, which MK commented
was a standard trick known as "higher-order syntax"), which adds a
complication. CDgroups and CDs are read dynamically, and also augment
the Ctadel help system. He emphasised that this was an important use of
CDs, and stressed the need for them to be comprehensive. One difficulty
was the difference between `times` in `arith1` and `arith2`.
He had to write several DTD grammars: CDs and OMOBJs.

He needs OpenMath to/from MathML stylesheets<a id="tex2html4"
name="tex2html4" href="#foot46"><sup>4</sup></a> urgently, so that
the academics can publish their mathematical models in active
documents. He needs tools to convert binary ↔ XML converters
to be OpenMath-compliant. In the area of physics, he needs:

- units;
- orders of magnitude (to decide which terms to ignore);
- the names of physical laws (since the laws themselves depend on
  the frame of reference);
- some means of handling commands (already mentioned by MK last year);
- terms from many areas of physics.

OC suggested that AS should look at existing work, e.g. DTDs for
chemistry, rather than try to make OpenMath encompass everything.
He will need to interface with Geographical Information Systems,
which probably means "Dublin Core" metadata.

### 6. OpenMath Java phrasebooks

MR spoke to this issue, based on work going on at Eindhoven. He
noted that the standard specifies that the phrasebook has to
translate to/from back-engine syntax, but does not say that it has
to be at the back-engine. In his opinion, the phrasebook also had
to establish the communication with the back-engine. he asked how
CDs should be incorporated in phrasebooks, and how new CDs were to
be instantiated. Java provides load-on-demand, so it would be
possible for the phrasebook to load new modules for new CDs.

Decoding is more difficult, since in most (excluding Axiom!)
systems the result is an untyped string. It is therefore necessary
to write a general parser which depends on various "natural"
assumptions. Unknown objects are translated into symbols in a
system-specific CD.

He outlined various advantages of making the phrasebook be part
of the client. They have phrasebooks and servers for GAP, Coq,
Mathematica, CoCoA and R. The code is available at
[http://crystal.win.tue.nl/public](http://web.archive.org/web/20010429173238/http://crystal.win.tue.nl/public/).

SD commented that, in the case of Mathematica, it would make more sense
to use Mathlink rather than the Mathematica user language. WAN asked
whether the error CD had been implemented. It had not yet been done,
but needed to be.

### 7. OMDoc: An Infrastructure for OpenMath Content Dictionary Information

MK spoke to this topic. Last year, he had made proposals to enhance
OpenMath so that Content Dictionaries would be more useful in
theorem proving. The MathWeb project had identified the following
problems.

<dl>
<dt>Syntax</dt>

<dd>the problem addressed by OpenMath's XML encoding.</dd>

<dt>Protocol/Control</dt>

<dd>OpenMath does not make any contribution here. He now believes
that KQML is the answer here.</dd>

<dt>Semantics</dt>

<dd>The dictionaries are machine-readable, but not really
machine-understandable, since most descriptions are informal.
Semantics were important, e.g. is <!-- MATH: $0\in{<B>N</B>}$ -->
0∈<b>N</b></dd>

<dt>Context</dt>

<dd>The OpenMath community has discussed "dynamic CDs", but no
real resolution has been achieved.</dd>
</dl>

He therefore wanted to make CDs into "first-class objects".
In particular we need an infrastructure for maintaining and
manipulating CDs. He claimed that we should be looking at
mathematical texts -- OMDoc, rather than just individual
formulae -- OMOBJ. OMDoc consists of the following elements:

- meta data, in Dublin Core representation;
- text elements -- `omtext` etc.;
- definitions, which include CMPs and FMPs;
- proofs -- this could include `premise`s, as well as `method`s.

Theory management is important -- an OMDoc theory is equivalent to an
OpenMath CD. This should be parameterised, as in lists. He commended
the work of the algebraic specification community to OpenMath. OMDoc
achieves this via `theory` and `import` (*with renaming*).

OMDoc can be used for the following:

- a communication standard between mechanised reasoning systems;
- an input and documentation preparation language for MBase;
- a tool supporting the controlled refinement from informal presentation
  to formal specification of mathematical objects and theories;
- a basis for individualised interactive books.

OMDoc is spoken by Ωmega, λClam, InKa, Tramp, MBase, can be converted
to LaTeX, HTML and MathML, and converted from CASL and various others.
As an example, he presented an abstract data type for the natural
numbers. This was converted into a CD via an XSL program.

They are working on IDA, which is 12Mb of HTML. They can deliver it
in various formats, depending on the declared knowledge level of the
reader. The status of OMDoc can be seen at <http://www.mathweb.org/>.
The project definitely needs authoring tools.

### 8. CASL for OpenMath users

Till Mossakowski (TM)<a id="tex2html5" name="tex2html5"
href="#foot69"><sup>5</sup></a> spoke to the Common Algebraic
Specification Language. CASL comes out of the CoFI (Common
Framework Initiative) collaboration, whose aims are:

- to provide a common framework for algebraic specification;
- it should be attractive to researchers and, ultimately, to industry;
- to supersede previous efforts via better tool support;
- to be free.

A draft design had been tentatively approved by IFIP WG 1.3 in May
1997, and the design was finalised in October 1998. It is hoped
that it will get full IFIP endorsement this autumn. It is based on
first-order predicate logic, with sort generation constraints,
partial functions and subsorts.

Sub-languages include FOL, while there are extensions such as
HOCASL. There seems to be a close correspondence in the small
between the elements of CDs and CASL specifications. OpenMath seems
to have semantics with respect to text-books, whereas CASL has a
self-contained<a id="tex2html6" name="tex2html6"
href="#foot62"><sup>6</sup></a> formal semantics. CASL libraries
(similar to OpenMath CDgroups) have URLs. There is inheritance
*with renaming*.

TM showed some CASL examples, such as Monoids and Natural Numbers.
In CASL, one has to distinguish between the `*` of Monoid
and the `*` of CommutativeMonoid. Axioms can be labelled.
The `view` command allows one to view the
natural numbers as a commutative monoid (in two different ways),
which induces a reduction from the class of models of the natural
numbers to the class of models of CommutativeMonoids, and a double
lifting from the theorems of CommutativeMonoids to those of natural
numbers. He showed an algebra structure diagram (remarkably similar
to the cover of the Axiom book). Fields are defined as commutative
rings with Group lifted to the non-zero elements. The specification
of vector spaces is parameterised by a Field. It is possible to
have hidden sorts. There is a `free` construct, e.g. for building
free vector spaces. The real numbers can only be specified in HOCASL,
because of the completeness axiom.

The CASL toolset has a syntax tree, currently in `Aterm`s but
probably to be replaced by XML, with a parser and a static checker,
which resolves overloading (with the coherence rule for subsorts).
This tree can be encoded in FOL/HOL and therefore passed to Isabelle
or HOL. `Aterm` can be formatted in LaTeX (the tool also generates
the algebra structure diagrams). The web site is at
<http://www.bricks.dk/Projects/CoFI> [Edit (2021):
now at <http://www.informatik.uni-bremen.de/cofi/>].
There is a rationale in Proc. TAPSOFT '97, LNCS 1214.

AMC wondered about the interfacing with computer algebra, given
the whole theory of algebra. TM thought that it was too premature.
He quoted Harrison's work on real analysis. He also quoted the use
of theorem-proving after the "pentium bug". There isn't a separate
database, but the CASL libraries can be seen as a database.
AS reminded the meeting that, on the advice of the Axiom group,
OpenMath was not trying to replicate the Axiom type system.
TM commented that CoFI was worried about the size of its theories.
There was a boot-strapping problem, since one wants integers in
groups (for exponentiation), but one wants to view the integers as
a group.

### 9. Conclusion

AMC commented that there were problems with the SFU library,
since none of the official versions of it were compatible with the
standard. Therefore the INRIA libraries should be regarded as the
official ones. The OpenMath web page should contain a clear view of
the officially-supported tools, libraries as well as editors. AS
asked about the distribution of the tools produced in the project,
in view of the Esprit contract. AMC pointed out that the main
concern of the reviewers was that OpenMath should be used. MK said
that, from the outside, there seemed to be no tools available, and
there had been no progress since Eindhoven last year. MK had some
tools he could make available.

OC asked all speakers to provide her with electronic copies of
their talks. She also asked people to contribute any tools they
had, via a form available from the workshop page.

AMC announced the Esprit project's open workshop in Heidelberg
on 6 October 2000.

-----

#### Footnotes

<dl>
<dt><a id="foot12" name="foot12">... Statutes</a><a id="foot12"
name="foot12" href="standrews2000.html#tex2html1"><sup>1</sup></a></dt>

<dd>BM asked whether this could be changed, but some members
recalled that this was a requirement of Finnish law.</dd>

<dt><a id="foot68" name="foot68">... ways</a><a id="foot68"
name="foot68" href="standrews2000.html#tex2html2"><sup>2</sup></a></dt>

<dd>The lack of CDs was one reason why it was not possible to make
OpenMath *the* extension mechanism.</dd>

<dt><a id="foot45" name="foot45">... routines</a><a id="foot45"
name="foot45" href="standrews2000.html#tex2html3"><sup>3</sup></a></dt>

<dd>The loop unrolling for vector processing also needs to know how
'expensive' these are, which is not currently possible in OpenMath.</dd>

<dt><a id="foot46" name="foot46">... stylesheets</a><a id="foot46"
name="foot46" href="standrews2000.html#tex2html4"><sup>4</sup></a></dt>

<dd>WAN pointed out that DC had these.</dd>

<dt><a id="foot69" name="foot69">... (TM)</a><a id="foot69"
name="foot69" href="standrews2000.html#tex2html5"><sup>5</sup></a></dt>

<dd>[http://www.tzi.de/~till/](http://web.archive.org/web/20010516041351/http://www.tzi.de/~till/)</dd>

<dt><a id="foot62" name="foot62">... self-contained</a><a
id="foot62" name="foot62"
href="standrews2000.html#tex2html6"><sup>6</sup></a></dt>

<dd>Modulo predicate logic and Zermelo-Frankel.</dd>
</dl>
