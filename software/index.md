---
layout: page
title: OpenMath Software And Tools
---

A document giving guidelines for OpenMath tool developers is
available [from the OpenMath thematic network.](../projects/thematic/tools-3.pdf).

If you have developed any OpenMath software that should be listed here, please send the link and a short description to [om@openmath.org](../lists/).

## OpenMath Validation
[An XSLT stylesheet for validating OpenMath Fragments contained within XML documents](validate.html)

## OpenMath Phrasebooks

* A phrasebook for [AXIOM 2.3](http://www.nag.co.uk) was shipped with the system.
* A phrasebook for GAP 4 is available from the [GAP 4 website](http://www-history.mcs.st-and.ac.uk/~gap/).
* A phrasebook for Mathematica has been developed by [INRIA](mailto:stephane.dalmas@sophia.inria.fr).

* Various phrasebooks for GAP, Magma and Mathematica are available from [RIACA](http://www.riaca.win.tue.nl/products/).

##OpenMath Demos and Applications

* [Activemath](http://www.activemath.org) A learning environment for mathematics.
* [Algebra Interactive](http://www.win.tue.nl/~ida) An interactive algebra course.
* FOC, a set of certified computer algebra libraries, supports OpenMath.
* [An OpenMath Shell](http://www.riaca.win.tue.nl/products/) for sending OpenMath to a computational engine. 
* [A computation service using GAP](http://www.riaca.win.tue.nl/products/)
* [A computation service using Mathematica](http://www.riaca.win.tue.nl/products/)
* [LaTeX to OpenMath translator demo ](http://www.maths.tcd.ie/~richardt/openmath) 
* [OpenMath to LaTeX translator demo ](http://www.maths.tcd.ie/~dwmalone/om2la.html) 
* [QMath](http://www.matracas.org/qmath/), a tool to produce OpenMath and OMDoc with a text-based input syntax 

## OpenMath Stylesheets

    <!-- BROKEN on 2010-10-19
*  Stylesheet for <link
uri="http://www.orcca.on.ca/~clare/om_cmml/src/omtocmml.xsl">OpenMath to
Content MathML</link> Conversion.</li>
-->

<!-- BROKEN on 2010-10-19
*  Stylesheet for <link
uri="http://www.orcca.on.ca/~clare/om_cmml/src/cmmltoom.xsl">
Content MathML to OpenMath</link> Conversion.</li>
-->

<!-- BROKEN on 2010-10-19
*  [XSLT stylesheet](http://www.cs.nmsu.edu/~bpalmer/cmml2om/)
for converting Content MathML to OpenMath.  
-->

* The current build system of the OpenMath Website is [described in a how-to](http://www.openmath.org/infrastructure/website-build.html).
  It processes normal pages with [om-page.xsl](http://svn.openmath.org/www/stylesheets/html/om-page.xsl)
  and CD pages with [cd.xsl](http://svn.openmath.org/www/cdfiles2/xsl/cd.xsl)
  which uses [om2pmml.xsl](http://svn.openmath.org/www/cdfiles2/xsl/om2pmml.xsl) 
  for OpenMath to presentation MathML, [om2popcorn.xsl](http://svn.openmath.org/www/cdfiles2/xsl/om2popcorn.xsl) to PopCorn,
  and [om2cmml.xsl](http://svn.openmath.org/www/cdfiles2/xsl/om2cmml.xsl) to Content-MathML.
* David Carlisle has been the main author of these stylesheets and has taken this further
 in his [html5mathml project](https://code.google.com/p/html5mathml/) 
 with news and documentation in [blog](http://dpcarlisle.blogspot.de/).


*  <link uri="http://www.mathweb.org/omdoc/xsl.html">The OMDoc collection of XSLT stylesheets</link> for converting between OpenMath and OMDoc, OMDoc and MathML
  etc.

*  [DSSSL stylesheet for MathML](mml-files/index.html) Render MathML to TeX or RTF (For
   Microsoft Word)  

## OpenMath Development Tools

    <!-- BROKEN on 2010-10-19
* <link uri="http://www.riaca.win.tue.nl/products/openmath/lib/">The RIACA
OpenMath library</link>, a Java library for creating and using OpenMath
objects.
-->
* [INRIA C Library](OMCv1.4a.tgz), an API for reading, writing and creating OpenMath objects. 
* [INRIA C++ Library](OMCPPv1.0a.tgz), an API for reading, writing and creating OpenMath
  objects (requires <link uri="OMCv1.4a.tgz">INRIA C Library</link>). 
* [INRIA Java Library](OMJv1.4.tgz), an API for reading, writing and creating OpenMath objects.
*  An <link uri="http://www.cs.bath.ac.uk/~wn/AldorXML/index.html">OpenMath Library and XML parser</link> in the
  [Aldor](http://www.aldor.org) language are available from the University of Bath (formerly from Victoria University of Wellington).

## OpenMath Editors


* [CDEditor](http://www.unirioja.es/cu/joheras/openmath-editor.html), an OpenMath Content Dictionary editor. Available for [Linux](https://esus.unirioja.es/psycotrip/archivos_documentos/linux-dist.rar) and [Windows](https://esus.unirioja.es/psycotrip/archivos_documentos/windows-dist.rar)
<!-- Wiki no longer works, don't have resources to maintain this obsolete software.  –Christoph Lange, 2013-02-21 -->
<!--
* [SWiM](http://kwarc.info/projects/swim/), a Semantic Wiki for Mathematics, supports editing OpenMath CDs.  Available for self-installation, but also running at [wiki.openmath.org](http://wiki.openmath.org)
-->
* [Sentido](http://www.matracas.org/sentido/) is a visual and linear formula editor for OpenMath objects.  It is not currently available for standalone download, but integrated into the SWiM wiki (see above).
* <link uri="http://www.riaca.win.tue.nl/download/om/cd/editor/">RIACA CD Editor</link>.
* <link uri="http://www.activemath.org/projects/Jome/">The JOME OpenMath Editor</link> for creating and manipulating OpenMath objects.
  The source code is available from [sourceforge](http://sourceforge.net/projects/jome/).
* STARS/MathWriter: A Java component which takes a simple linear input and generates
  OpenMath or MathML.  For details contact [Stilo Technology](mailto:sb@stilo.com).

## Tools For Connecting Mathematical Software Systems

* [IAMC](http://icm.mcs.kent.edu/research/iamc.html) is a  framework for providing Internet Accessible Mathematical Computation which
  supports OpenMath as a data exchange format
* [JavaMath](http://javamath.sourceforge.net/) is a free API for 
  linking computational engines (in particular Maple and GAP) into Java programs using OpenMath as the data format
* [Krextor](http://kwarc.info/projects/krextor/) translates OpenMath CDs to RDF for use by Semantic Web applications and services
* [MathWeb](http://www.mathweb.org/) is a system for connecting mathematical software
  systems which speak OMDoc via a common software bus.

* [OpenXM](http://www.math.sci.kobe-u.ac.jp/OpenXM/) is an infrastructure for mathematical communication which will support OpenMath.
