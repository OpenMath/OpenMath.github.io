---
layout: page
title: OpenMath and MathML
---

It might appear strange that two different encodings of Mathematics for the web are emerging. However OpenMath and MathML are not in competition. Indeed, here is a large overlap between the people responsible for the two standards.

OpenMath is aimed at encoding the semantics of mathematics and, via its extensible Content Dictionary mechanism, may be applied to arbitrary areas of mathematics without the need for any central agreement to change the language. MathML on the other hand has no mechanism for describing the semantics of mathematical objects, although it can attach a pointer to a symbol indicating where its semantics are defined, for example in an OpenMath Content Dictionary. It also includes a small, fixed set of symbols whose semantics are defined informally in the MathML Recommendation. The rationale for inclusion in this set was that the symbol represented a concept taught to US high-school students.

OpenMath on its own has no notion of a presentation form for the objects which it represents. In order to render OpenMath objects using a natural notation, one needs to convert OpenMath to some other form using, for example, an XML transformation language like XSL. Mechanisms are available which convert OpenMath to both content and presentation MathML, as well as to TeX.

If a user is satisfied with US school-level mathematics then they can use either Content MathML or an OpenMath representation. In this case Content MathML is slightly less verbose than OpenMath which might be an advantage when writing simple examples by hand. For more complicated applications however one needs to define the semantics of the symbols used whether one is using OpenMath or MathML. The OpenMath [MathML CD Group](../cdgroups/mathml.html) provides exact OpenMath equivalents for every symbol available in Content MathML, so it is very easy to "upgrade" from MathML to pure OpenMath. Alternatively a user can use pure Content MathML with the semantics of non-MathML symbols supplied by OpenMath. Whichever syntax is used, the objects can be rendered using Presentation MathML via the application of stylesheets or any other suitable mechanism.

For example, the simple object _sin(x)_ is represented in in OpenMath as:

```XML
<OMOBJ>
  <OMA>
    <OMS name="sin" cd="transc1"/>
    <OMV name="x"/>
  </OMA>
</OMOBJ>
```

and in Content MathML as:

```XML
<math>
  <apply>
    <sin/>
    <ci>x</ci>
  </apply>
</math>
```

or equivalently, using the OpenMath semantics, as:

```XML
<math>
  <apply>
    <csymbol definitionURL="http://www.openmath.org/cd/transc1.ocd" encoding="OpenMath">
      sin
    </csymbol>
    <ci>x</ci>
  </apply>
</math>
```

In practice of course this form is most useful for symbols which _do not_ have an existing equivalent in Content MathML.

So to summarise, the important distinction between OpenMath and MathML is that:

*   OpenMath provides a mechanism for describing the semantics of mathematical symbols, while MathML does not.
*   MathML provides a presentation format for mathematical objects, while OpenMath does not.

An individual may choose to use whichever _syntax_ they prefer for objects whose semantics are described by OpenMath. Mapping from Content MathML to OpenMath and back can for the most part be done automatically provided that where the MathML uses <tt>csymbol</tt> the definition is provided in OpenMath. The fixed content elements (such as <tt><sin/></tt> above) can be mapped to symbols in the OpenMath [MathML CD Group](../cdgroups/mathml.html).
