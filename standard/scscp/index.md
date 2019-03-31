---
layout: page
title: SCSCP (Symbolic Computation Software Composability Protocol)
---

**SCSCP** stands for the **Symbolic Computation Software Composability Protocol** 
- the remote procedure call framework by which different software components
(primarily mathematical software systems) may offer computational services to
a variety of possible clients using the [OpenMath](http://www.openmath.org/) 
encoding both for the data and protocol instructions.

SCSCP has been originally developed in the EU FP6 project 026133 
[SCIEnce - Symbolic Computation Infrastructure for Europe](http://www.symbolic-computing.org/).

The current edition of the Symbolic Computation Software Composability Protocol
is [SCSCP Version 1.3](https://github.com/OpenMath/scscp/blob/master/revisions/SCSCP_1_3.pdf).

[SCSCP Version 1.1](https://github.com/OpenMath/scscp/blob/master/revisions/SCSCP_1_1.pdf)
and [SCSCP Version 1.2](https://github.com/OpenMath/scscp/blob/master/revisions/SCSCP_1_2.pdf) are also available.

## SCSCP implementations

Currently (April 2017), support of OpenMath and SCSCP is available in the 
following computer algebra systems:

- **GAP**: via GAP packages:
  - OpenMath
    - Website: [https://gap-packages.github.io/openmath/](https://gap-packages.github.io/openmath/)
    - GitHub: [https://github.com/gap-packages/openmath](https://github.com/gap-packages/openmath)
  - SCSCP
    - Website: [https://gap-packages.github.io/scscp/](https://gap-packages.github.io/scscp/)
    - GitHub: [https://github.com/gap-packages/scscp](https://github.com/gap-packages/scscp)

- **KANT** - with [KANT 4 SCSCP Package](http://page.math.tu-berlin.de/~kant/kantscscp.html)

- **Macaulay2** - with [OpenMath](http://www.math.uiuc.edu/Macaulay2/doc/Macaulay2-1.9.2/share/doc/Macaulay2/OpenMath/html/index.html) and [SCSCP](http://www.math.uiuc.edu/Macaulay2/doc/Macaulay2-1.9.2/share/doc/Macaulay2/SCSCP/html/index.html) packages.

- **Maple** - with packages SCSCP[Client], SCSCP[Server] and MapleNET 
  (Maple SCSCP client became available in Maple 16, see [here](http://www.maplesoft.com/products/maple/new_features/connectivity.aspx))

- **Mathematica** - with [SCSCP4Mathematica](http://www.risc.jku.at/projects/science/jra/) package.

- **MuPAD** - with the MuPAD [OpenMath](http://mupad.symcomp.org/) Package

- **[TRIP](http://www.imcce.fr/trip/)**, 
  with the built-in SCSCP client and server

Remarkably, most of OpenMath and SCSCP implementations produced in the 
SCIEnce project stay mainly within the computer algebra systems rather 
than in custom-built wrappers.

To facilitate SCSCP implementations, the following API and middleware is available:

- **Python** (both versions 2 and 3): via pure pip-installable packages 
  - openmath 
    - PyPI: [https://pypi.python.org/pypi/openmath](https://pypi.python.org/pypi/openmath)
    - GitHub: [https://github.com/OpenMath/py-openmath](https://github.com/OpenMath/py-openmath)
  - scscp
    - PyPI: [https://pypi.python.org/pypi/scscp](https://pypi.python.org/pypi/scscp)
    - GitHub: [https://github.com/OpenMath/py-scscp](https://github.com/OpenMath/py-scscp)
    
- [C/C++ SCSCP library](http://www.imcce.fr/trip/scscp/)
  providing a **C/C++ API** to develop client and server SCSCP-compliant applications

- [java.symcomp.org](https://github.com/symcomp/org.symcomp.java) - **Java API** for SCSCP and OpenMath,
with a collection of middleware developed on top if it:
  - POPCORN - convertor between 
    OpenMath and Popcorn (Possibly Only Practicable Convenient OpenMath Replacement Notation)
  - [WUPSI](https://github.com/symcomp/Wupsi) - Wonderful Universal Popcorn 
    SCSCP Interface, a command line SCSCP-compliant interface
  
- [MiniSCSCP++](https://bitbucket.org/ChrisJefferson/miniscscp) - **C++ library** 
  providing a simple C++ SCSCP client

- A prototype of the SCSCP client for the **Coq** proof assistant

## Examples of SCSCP use

- [Software demonstration](http://www.symbolic-computing.org/science/index.php/CICM_2010_GAP_demo)
which involves some of the above mentioned software products, given at 
the [3rd_SCIEnce_Workshop](http://www.symbolic-computing.org/science/index.php/3rd_SCIEnce_Workshop)
in Paris during [CICM 2010](http://cicm2010.cnam.fr/) in July 2010. 

- Deliverable report [D3.3: Support for the SCSCP interface protocol in the 
distribution of all relevant components](https://github.com/OpenDreamKit/OpenDreamKit/raw/master/WP3/D3.3/report-final.pdf)
produced by the [OpenDreamKit](http://opendreamkit.org/) project in February 2017.

