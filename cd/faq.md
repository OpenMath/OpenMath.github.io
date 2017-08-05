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
where the head of the outer appliction is itself an application, rather than a symbol or variable. This curried encoding has several advantages over the minimalistic approach:
* A function-with-parameters-assigned _H_(_a_,_b_) is often a meaningful mathematical object in its own right, since this is what one would expect to apply e.g. a differential operator to; recall that many special functions are defined as solutions to various ordinary differential equations, where one differentiates with respect to the "ordinary" argument but not with respect to the parameters. The flat _H_(_a_,_b_,_x_) style of function symbol can still be used in such contexts, but that often requires an intermediate lambda construction to recover the needed kind of function.
* If the number of parameters is not fixed, but rather variable (as with the generalized hypergeometric functions), then the separation on two levels can make it clearer where the list of parameters ends.

A third possibility is to use [semantic attributions](https://openmath.github.io/standard/om20-2017-07-22/omstd20.html#sec_roles) for attaching parameter values to the base function. In this approach, the OpenMath-XML encoding of our running example rather looks like
```XML
<OMA>
  <OMATTR>
    <OMATP>
      <OMS cd="mystuff" name="param_a"/> <OMV name="a"/>
      <OMS cd="mystuff" name="param_b"/> <OMV name="b"/>
    </OMATP>
    <OMV name="H"/>
  </OMATTR>
  <OMV name="x"/>
</OMA>
```
It is again the case that the parameter values _a_ and _b_ are attached to the base function _H_ at an inner level of syntax, producing an intermediate mathematical object _H_<sub>param_a=_a_,param_b=_b_</sub> that serves as the head of the application to the ordinary argument _x_, so much of what is true for the curried approach also holds here. A difference is that attributions require dedicated symbols (the `param_a` and `param_b`) for labelling the parameters, and that makes this a heavier approach, although perhaps not as much heavier as this short example might suggest. In practical situations, the function _H_ is typically not a variable as shown above, but a symbol defined in some content dictionary, so adding two more symbol definitions to that is a comparatively small extra effort. Moreover, having to define named symbols for the parameters encourages documenting them properly, whereas it is easier to forget to do so with unnamed parameters; the meaning might be clear to you now, but it can be much less so 10 years from now, when someone else needs to revisit your results.

Abstractly, the difference between curried arguments and semantic attributions is that between _positional_ and _named_ arguments: in the curried _H_(_a_,_b_) there is no way to specify _b_ without first specifying _a_, whereas with attributions these are syntactically unrelated, so that you may specify either one, both, or neither. Depending on the function, one might want one or the other relationship; some functions have a natural order in which to specify parameters, whereas others have them as completely indepentent options for which there are established defaults. This observation can suggest using one approach, or the other.

Computationally, it could also make a difference how the phrasebooks involved prefer to process OpenMath objects. Tools that view objects as tree-structured data (e.g. XSLT processors) are probably equally comfortable with either, but tools (such as Computer Algebra Systems) that view objects primarily as expressions to evaluate might not, as attributions have no canonical interpretation in the functional programming model. One possible run-time implementation can be that attributions of a function are made available as a context to the subroutine implementing that function, in which case it would be the responsibility of that subroutine to inspect said context and make appropriate use of any parameter values found there.
