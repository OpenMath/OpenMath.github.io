---
layout: page
title:  FAQ -  Frequently Asked Questions about OpenMath CDs
---
Sometimes when you write an `OMOBJ` element, you come across something that you don't know how to express, even if you know the mathematics involved. One reason can of course be that we don't have symbols for that yet, but another reason can be that they're named something other than what you're looking for. This FAQ page is for bridging such gaps.

Is your question not found or answered below, but you managed to figure it out anyway? Consider contributing the answer by editing this page (there's a link in the sidebar). If you still don't know, but think it would count as a Frequently Asked Question, then [submit your question as an issue](https://github.com/openmath/CDs/issues) and markt it with the "FAQ?" label.

### How do I write the imaginary unit?

There is a symbol `i` (described as "square root of -1" but not mentioning "imaginary") in the `nums1` content dictionary for this, so
```XML
<OMS cd="nums1" name="i"/>
```
will do the trick. Alternatively, you can use the `complex_cartesian` symbol in the `complex1` content dictionary:
```XML
<OMA>
  <OMS cd="complex1" name="complex_cartesian"/>
  <OMI>0</OMI>
  <OMI>1</OMI>
</OMA>
```

### Is there an if-then-else symbol, like C's ternary ?: operator?

Not exactly, but you can use the symbols in the `piece1` dictionary to make a piecewise function, i.e., one that is put together from several expressions, each with its own guard condition. Consider

```XML
<OMA><OMS cd="piece1" name="piecewise"/>
  <OMA><OMS cd="piece1" name="piece"/>
    <!-- then-expression goes here -->
    <!-- if-condition goes here -->
  </OMA>
  <OMA><OMS cd="piece1" name="otherwise"/>
    <!-- else-expression goes here -->
  </OMA>
</OMA>
```

The `if` symbol in the `prog1` dictionary is something different; it is rather about constructing an **if** _statement_, in a context where program fragments are objects that can be operated upon.


