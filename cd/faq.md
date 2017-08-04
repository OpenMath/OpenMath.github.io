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


### How do I encode function parameters?

(By function parameters are meant things like _a_ and _b_ in _H_(_a_,_b_;_x_) or _H_<sub>_a_,_b_</sub>(_x_) , whereas _x_ is an "ordinary" argument.)

There is a traditional mathematical logic view that "parameters" are just function arguments that for some reason are given a different presentation, which would imply that an encoding of the mathematical _content_ such as OpenMath should not treat them differently from ordinary arguments; according to this view _H_(_a_,_b_;_x_) is just the function _H_ being applied to the three arguments _a_, _b_, and _x_, which would be encoded as
```XML
<OMA>
  <OMV name="H"/>
  <OMV name="a"/> <OMV name="b"/> <OMV name="x"/> 
</OMA>
```
The mere fact that you're asking this question could however be a sign that your mathematical intuition suggests otherwise: you feel like there _is_ a substatial difference between parameter and argument, even though that difference may be subtle. You are not alone in this. (Textbooks on mathematical logic often favour a minimalistic language for encoding mathematics, because that leads to fewer cases in proofs about that language, whereas OpenMath rather seeks to support the full language of contemporary mathematics.)

An alternative approach to encoding parameters is to use **curried** functions (i.e., functions that have functions as values). In this approach, _H_ would primarily be a function that takes the _parameters_ as arguments, and returns another function which only take the ordinary arguments as arguments. Formula-wise, this means interpreting _H_(_a_,_b_;_x_) as a shorthand for _H_(_a_,_b_)(_x_), or as OpenMath-XML
```XML
<OMA>
  <OMA>
     <OMV name="H"/> <OMV name="a"/> <OMV name="b"/>
  </OMA>
  <OMV name="x"/> 
</OMA>
```
where the head of the outer appliction is itself an application, rather than a symbol or variable. This has several advantages over the minimalistic approach:
* A function-with-parameters-assigned _H_(_a_,_b_) is often a meaningful mathematical object in its own right, since this is what one would expect to apply e.g. a differential operator to; recall that many special functions are defined as solutions to various ordinary differential equations, where one differentiates with respect to the "ordinary" argument but not with respect to the parameters. The flat _H_(_a_,_b_,_x_) style of function symbol can still be used in such contexts, but that often requires an intermediate lambda construction to recover the needed kind of function.
* If the number of parameters is not fixed, but rather variable (as with the generalized hypergeometric functions), then the separation on two levels can make it clearer where the list of parameters ends.

A third possibility is to use [semantic attributions](https://openmath.github.io/standard/om20-2017-07-22/omstd20.html#sec_roles) for attaching parameter values to the base function.
