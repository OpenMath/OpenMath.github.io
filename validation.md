---
layout: page
title:  Validating OpenMath XML
---


OpenMath defines several XML formats, in particular the formats for for OpenMath Objects,
Content Dictionaries, Content Dictionary Groups, and Signature files.
OpenMath may also be encoded using Content MathML syntax.

## XML Grammar Definitions

The [OpenMath Standard page](/standard/om20-editors-draft/#schema) links to specifications for each of these formats 
in the main XML grammar languages, DTD, Relax NG and XSD Schema. 

The RelaxNG version is normative, and most expressive of these schemas. 

Tools to use the RelaxNG schema include

  * xmllint --relaxng (C)
  * rnv (C)
  * jing (java)
  * nxml mode (emacs)

## Web Based Checking Tool.
In addition to the grammar validators, this site offers an experimental alternative:

[OpenMath XML Syntax checking page](omvalidate.html).

This implements a validator written in JavaScript and running directly in your browser.
The XML to be checked may be edited in the page, or a file may be checked by dragging it 
from your system file manager on to the input box.

The JavaScript checks are loosely based on the constraints as specified in the RelaxNG Schema but
interleaved with an HTML presentation of the file, similar to that used for Content Dictionaries
on this site. As such it is similar to the
[XSLT based validator for OpenMath](https://github.com/OpenMath/CDs/blob/master/lib/xsl/omvalidate.xsl)
which was originally used as part of an online validation tool for the original OpenMath project site.

Using the Web interface allows more specific error reporting than possible with a generic validator
and can, in principle, check details not specified in grammars such as checking the existence of CD, or checking that symbol 
names are not duplicated in CD files.


## Notes on the Web based validator
### Accessibility
All error messages are shown in red, inlined into an HTML presentation of the supplied XML file.
The colouring is always specified via the CSS class `err` so other presentations may be used.
Also the error message is never marked just by colour, the error message text is always added in parenthesis after the 
invalid expression such as `(Unexpected attribute ...)`

### Browser compatibility
Most reasonably current browsers should support the validation tool, it has been tested in Firefox,
Chrome, Internet Explorer and Edge. Note that the XML is not uploaded to the sever, all the validation is implemented 
within the browser, so some details are browswer-specific, notably the error messages for files that are not well formed
depend on the XML parser being used by the browser.


### Namespace support
The validator should support files using prefixed or unprefixed namespaces, so 

`<OMOBJ xmlns="http://www.openmath.org/OpenMath">...` 

and 

`<om:OMOBJ xmlns:om="http://www.openmath.org/OpenMath">...`

should both be accepted.

### Non-Grammar errors and warnings
The current implementation is very close to the RelaxNG grammar,
however some non-grammatical constraint checks have been added, such as checking uniqueness of defined names.
Other checks may be added in future, such as
checking the existence of CD files referenced by symbols, etc. Also other more stylistic warnings could be added,
such as checking that a CD has a comment specifying a licence.

### Reporting issues with the checking tool.
Issues may be reported using the [github issue tracker](https://github.com/OpenMath/OpenMath.github.io/issues)
or by email to the OpenMath mail list.

 
