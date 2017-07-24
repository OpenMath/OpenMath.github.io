---
layout: page
title: OpenMath Content Dictionaries by name
---
<table xmlns:cdg="http://www.openmath.org/OpenMathCDG"
       xmlns:cd="http://www.openmath.org/OpenMathCD"
       xmlns:x="http://xml.apache.org/xalan"
       xmlns:exslt="http://exslt.org/common">
   <tr>
      <th>Symbol</th>
      <th>CD</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>	Semigroup </td>
      <td>
         <a href="../cd/experimental/semigroup.xhtml">semigroup</a>
      </td>
      <td>The contructor for the type of semigroups as a Setoid with a binary operation.</td>
   </tr>
   <tr>
      <td>	Setoid </td>
      <td>
         <a href="../cd/experimental/setoid.xhtml">setoid</a>
      </td>
      <td>The contructor for the type of set with an equivalence relation on it.</td>
   </tr>
   <tr>
      <td>	associative </td>
      <td>
         <a href="../cd/experimental/semigroup.xhtml">semigroup</a>
      </td>
      <td>The type of associative binary operation.</td>
   </tr>
   <tr>
      <td>	make_Semigroup </td>
      <td>
         <a href="../cd/experimental/semigroup.xhtml">semigroup</a>
      </td>
      <td>The contructor for the tuples consisting of a setoid, and an associative binary operation.</td>
   </tr>
   <tr>
      <td>	make_Setoid </td>
      <td>
         <a href="../cd/experimental/setoid.xhtml">setoid</a>
      </td>
      <td>The contructor for the tuples consisting of a set, an equivalence relation on the set, and a proof that the relation is actually an equivalence relation.</td>
   </tr>
   <tr>
      <td> A </td>
      <td>
         <a href="../cd/experimental/setname2.xhtml"> setname2 </a>
      </td>
      <td>This symbol represents the set of algebraic numbers.</td>
   </tr>
   <tr>
      <td> Avogadros_constant </td>
      <td>
         <a href="../cd/experimental/physical_consts1.xhtml"> physical_consts1 </a>
      </td>
      <td>This symbol represents the number of atoms in 12 grammes of pure carbon(12). It is approximately 6.0221367*10^(23) +/- 3.6*10^(17).</td>
   </tr>
   <tr>
      <td> Bell </td>
      <td>
         <a href="../cd/experimental/combinat1.xhtml"> combinat1 </a>
      </td>
      <td>The Bell numbers: Bell(n) is the total number of possible partitions of a set of n elements.</td>
   </tr>
   <tr>
      <td> Boltzmann_constant </td>
      <td>
         <a href="../cd/experimental/physical_consts1.xhtml"> physical_consts1 </a>
      </td>
      <td>A constant which describes the relationship between temperature and kinetic energy for molecules in an ideal gas. It is approximately 1.380658*10^(-23) +/- 1.2*10^(-28) Joules per Kelvin.</td>
   </tr>
   <tr>
      <td> Boolean </td>
      <td>
         <a href="../cd/experimental/setname2.xhtml"> setname2 </a>
      </td>
      <td>This symbol represents the set of Booleans. That is the truth values, true and false.</td>
   </tr>
   <tr>
      <td> C </td>
      <td>
         <a href="../cd/Official/setname1.xhtml"> setname1 </a>
      </td>
      <td>This symbol represents the set of complex numbers.</td>
   </tr>
   <tr>
      <td> CD </td>
      <td>
         <a href="../cd/experimental/meta.xhtml"> meta </a>
      </td>
      <td>The top level element for the Content Dictionary. It just acts as a container for the elements described below.</td>
   </tr>
   <tr>
      <td> CDBase </td>
      <td>
         <a href="../cd/experimental/meta.xhtml"> meta </a>
      </td>
      <td>An optional element. If it is used it contains a string representing the URI to be used as the base for generated canonical URI references for symbols in the CD.</td>
   </tr>
   <tr>
      <td> CDComment </td>
      <td>
         <a href="../cd/experimental/metagrp.xhtml"> metagrp </a>
      </td>
      <td>This symbol is used to represent the element of a CDGroup which explains some aspect of the corresponding content dictionary. It should have one string argument which makes that explanation.</td>
   </tr>
   <tr>
      <td> CDComment </td>
      <td>
         <a href="../cd/experimental/meta.xhtml"> meta </a>
      </td>
      <td>This symbol is used to represent the element of a content dictionary which explains some aspect of that content dictionary. It should have one string argument which makes that explanation.</td>
   </tr>
   <tr>
      <td> CDDate </td>
      <td>
         <a href="../cd/experimental/meta.xhtml"> meta </a>
      </td>
      <td>An element which contains a date as a string in the ISO-8601 YYYY-MM-DD format. This gives the date at which the Content Dictionary was last edited.</td>
   </tr>
   <tr>
      <td> CDDefinition </td>
      <td>
         <a href="../cd/experimental/meta.xhtml"> meta </a>
      </td>
      <td>This symbol is used to represent the element which contains the definition of each symbol in a content dictionary. That is: it must contain a 'Name' element and a 'Description' element, and it may contain an arbitrary number of 'Example', 'FMP' or 'CMP' elements.</td>
   </tr>
   <tr>
      <td> CDGroup </td>
      <td>
         <a href="../cd/experimental/metagrp.xhtml"> metagrp </a>
      </td>
      <td>This symbol represents the outermost element of a CDGroup. It has an arbitrary number of arguments which may be elements of type corresponding to the other symbols defined in this file.</td>
   </tr>
   <tr>
      <td> CDGroupDescription </td>
      <td>
         <a href="../cd/experimental/metagrp.xhtml"> metagrp </a>
      </td>
      <td>This symbol represents the element of a CDGroup which describes the CDGroupDescription element. It has one string argument, this should be the contents of the CDGroupDescription element intended to describe the mathematical area of the CDGroup.</td>
   </tr>
   <tr>
      <td> CDGroupMember </td>
      <td>
         <a href="../cd/experimental/metagrp.xhtml"> metagrp </a>
      </td>
      <td>This symbol represents the element of a CDGroup which describes each CDGroupMember element. It has one string argument, this should be the contents of the intended CDGroupMember element of the CDGroup. This should be used to identify each member of the CDGroup.</td>
   </tr>
   <tr>
      <td> CDGroupName </td>
      <td>
         <a href="../cd/experimental/metagrp.xhtml"> metagrp </a>
      </td>
      <td>This symbol represents the element of a CDGroup which describes the name of that CDGroup, it has one argument that should be a string corresponding to the name. The syntactical requirements are given in the OpenMath standard.</td>
   </tr>
   <tr>
      <td> CDGroupURL </td>
      <td>
         <a href="../cd/experimental/metagrp.xhtml"> metagrp </a>
      </td>
      <td>This symbol represents the element of a CDGroup which describes the CDGroupURL element. It has one string argument which should describe the URL for that CDGroup, not necessarily for the member Content Dictionaries, The syntactical requirements are given in the OpenMath standard.</td>
   </tr>
   <tr>
      <td> CDGroupVersion </td>
      <td>
         <a href="../cd/experimental/metagrp.xhtml"> metagrp </a>
      </td>
      <td/>
   </tr>
   <tr>
      <td> CDName </td>
      <td>
         <a href="../cd/experimental/metagrp.xhtml"> metagrp </a>
      </td>
      <td>This symbol represents the element of a CDGroup which describes each CDName element. It has one string argument, this should be the string corresponding to the name of a content dictionary which is in this CDGroup.</td>
   </tr>
   <tr>
      <td> CDName </td>
      <td>
         <a href="../cd/experimental/meta.xhtml"> meta </a>
      </td>
      <td>An element which contains the string corresponding to the name of the CD. The string must match the syntax for CD names given in the OpenMath Standard. Here and elsewhere white space occurring at the beginning or end of the string will be ignored.</td>
   </tr>
   <tr>
      <td> CDReviewDate </td>
      <td>
         <a href="../cd/experimental/meta.xhtml"> meta </a>
      </td>
      <td>An element which contains a date as a string in the ISO-8601 YYYY-MM-DD format. This gives the date at which the Content Dictionary is next scheduled for review. It should be expected to be stable until at least this date.</td>
   </tr>
   <tr>
      <td> CDRevision </td>
      <td>
         <a href="../cd/experimental/meta.xhtml"> meta </a>
      </td>
      <td>An element which contains a revision number (or minor version number) This should be a non-negative integer starting from zero for each new version. Additional examples would be typical changes to a CD requiring a new revision number.</td>
   </tr>
   <tr>
      <td> CDSComment </td>
      <td>
         <a href="../cd/experimental/metasig.xhtml"> metasig </a>
      </td>
      <td>This symbol is used to represent the element of a signature file which explains some aspect of that signature file. It should have one string argument which makes that explanation.</td>
   </tr>
   <tr>
      <td> CDSReviewDate </td>
      <td>
         <a href="../cd/experimental/metasig.xhtml"> metasig </a>
      </td>
      <td>This symbol is used to represent the element of a signature file which specifies the earliest possible revision date of the signature file. It should have one string argument which specifies that date. The date should be in the format YYYY-MM-DD, e.g. 2000-02-29.</td>
   </tr>
   <tr>
      <td> CDSStatus </td>
      <td>
         <a href="../cd/experimental/metasig.xhtml"> metasig </a>
      </td>
      <td>This symbol is used to represent the element of a signature file which specifies the status of that signature file. It should have one string argument, which should be one of 'official' (approved by the OpenMath Society according to the procedure outlined in the OpenMath standard), 'experimental' (currently being tested), 'private' (used by a private group of OpenMath users) or 'obsolete' (an obsolete signature file, kept only for archival purposes).</td>
   </tr>
   <tr>
      <td> CDSignatures </td>
      <td>
         <a href="../cd/experimental/metasig.xhtml"> metasig </a>
      </td>
      <td>This symbol is used to represent the outermost element of the Signature File which is characterized by two required attributes that identify the type system and the Content Dictionary whose signatures are defined. The value of the XML attribute 'type' is the name of the Content Dictionary or of the CDGroup that represents the type system. The value of the XML attribute 'cd' is the name of the Content Dictionary whose symbols are assigned signatures in this Signature File. It has an arbitrary number of arguments which may be elements of type corresponding to the other symbols defined in this file.</td>
   </tr>
   <tr>
      <td> CDStatus </td>
      <td>
         <a href="../cd/experimental/meta.xhtml"> meta </a>
      </td>
      <td>An element giving information on the status of the CD. The content of the element must be one of the following strings. official (approved by the OpenMath Society), experimental (currently being tested), private (used by a private group of OpenMath users), or obsolete (an obsolete CD kept only for archival purposes).</td>
   </tr>
   <tr>
      <td> CDURL </td>
      <td>
         <a href="../cd/experimental/metagrp.xhtml"> metagrp </a>
      </td>
      <td>This symbol represents the element of a CDGroup which describes each CDURL element. It has one string argument, this should be the string corresponding to the contents of the CDURL element for each Content Dictionary in the CDGroup. The element is optional, in case it is missing, the location of the CDGroup identified by the element CDGroupURL is assumed.</td>
   </tr>
   <tr>
      <td> CDURL </td>
      <td>
         <a href="../cd/experimental/meta.xhtml"> meta </a>
      </td>
      <td>An optional element. If it is used it contains a string representing the URL where the canonical reference copy of this CD is stored.</td>
   </tr>
   <tr>
      <td> CDUses </td>
      <td>
         <a href="../cd/experimental/meta.xhtml"> meta </a>
      </td>
      <td>An element which contains zero or more CDNames which correspond to the CDs that this CD depends on, i.e. uses in examples and FMPs. If the CD is dependent on any other CDs they may be present here.</td>
   </tr>
   <tr>
      <td> CDVersion</td>
      <td>
         <a href="../cd/experimental/metagrp.xhtml"> metagrp </a>
      </td>
      <td>This symbol represents the element of a CDGroup which describes each CDVersion element. It has one integral argument, this should specify which version of the content dictionary is to be taken as member of the CDGroup. The element is optional. In case it is missing, the last version is the one included in the CDGroup.</td>
   </tr>
   <tr>
      <td> CDVersion </td>
      <td>
         <a href="../cd/experimental/meta.xhtml"> meta </a>
      </td>
      <td>An element which contains a version number for the CD. This should be a non negative integer. Any change to the CD that affects existing OpenMath applications that support this CD should result in an increase in the version number.</td>
   </tr>
   <tr>
      <td> CMP </td>
      <td>
         <a href="../cd/experimental/meta.xhtml"> meta </a>
      </td>
      <td>An optional element (which may be repeated many times) which contains a string corresponding to a property of the symbol being defined.</td>
   </tr>
   <tr>
      <td> Coulomb </td>
      <td>
         <a href="../cd/experimental/units_metric1.xhtml"> units_metric1 </a>
      </td>
      <td>This symbol represents the measure of one Coulomb. This is the standard SI measure for charge.</td>
   </tr>
   <tr>
      <td> DMP </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>The constructor of DMPs. The first argument is the polynomial ring containing the polynomial and the second is a "SDMP". Should be of the form DMP(PolyRingD(...), SDMP(...))</td>
   </tr>
   <tr>
      <td> DMPL </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>The constructor for lists of multivariate polynomial members of the same polynomial ring. The first argument is a polynomial ring and the rest are "SDMP"s. DMPL can be attributed with the "ordering" symbol to indicate a particular ordering for monomials of all its polynomials. Should be of the form DMPL(PolyRingD(...), SDMP(...)+)</td>
   </tr>
   <tr>
      <td> Description </td>
      <td>
         <a href="../cd/experimental/meta.xhtml"> meta </a>
      </td>
      <td>An element which contains a string corresponding to the description of either the CD or the symbol (depending on which is the enclosing element).</td>
   </tr>
   <tr>
      <td> Example </td>
      <td>
         <a href="../cd/experimental/meta.xhtml"> meta </a>
      </td>
      <td>An element which contains an arbitrary number of children, each of which is either a string or an OpenMath Object. These children give examples in natural language, or in OpenMath, of the enclosing symbol definition.</td>
   </tr>
   <tr>
      <td> FMP </td>
      <td>
         <a href="../cd/experimental/meta.xhtml"> meta </a>
      </td>
      <td>An optional element which contains an OpenMath Object. This corresponds to a property of the symbol being defined.</td>
   </tr>
   <tr>
      <td> Faradays_constant </td>
      <td>
         <a href="../cd/experimental/physical_consts1.xhtml"> physical_consts1 </a>
      </td>
      <td>This symbol represents the electric charge carried by one mole of electrons. It is approximately 96485.309 +/- 0.029 Coulombs per mole.</td>
   </tr>
   <tr>
      <td> Fibonacci </td>
      <td>
         <a href="../cd/experimental/combinat1.xhtml"> combinat1 </a>
      </td>
      <td>The Fibonacci numbers, defined by the linear recurrence: Fibonacci(0) = 0, Fibonacci(1) = 1, and Fibonacci(n + 1) = Fibonacci(n) + Fibonacci(n - 1). Note that some authors define Fibonacci(0) = 1.</td>
   </tr>
   <tr>
      <td> GFp </td>
      <td>
         <a href="../cd/experimental/setname2.xhtml"> setname2 </a>
      </td>
      <td>This symbol represents the finite field of integers modulo p, where p is a prime.</td>
   </tr>
   <tr>
      <td> GFpn </td>
      <td>
         <a href="../cd/experimental/setname2.xhtml"> setname2 </a>
      </td>
      <td>This symbol represents the finite field with p^n elements, where p is a prime.</td>
   </tr>
   <tr>
      <td> H </td>
      <td>
         <a href="../cd/experimental/setname2.xhtml"> setname2 </a>
      </td>
      <td>This symbol represents the set of quaternions.</td>
   </tr>
   <tr>
      <td> Hermitian </td>
      <td>
         <a href="../cd/experimental/linalg5.xhtml"> linalg5 </a>
      </td>
      <td>This symbol represents a Hermitian matrix, it takes one argument. The argument should be a vector of vectors of values which determine the upper triangle of the matrix. The lower triangle of the matrix is specified by the following relation: M^* = transpose(M), were M^* denotes the matrix consisting of all the complex conjugates of M.</td>
   </tr>
   <tr>
      <td> IndType </td>
      <td>
         <a href="../cd/experimental/icc.xhtml"> icc </a>
      </td>
      <td>Constructor for Inductive Types. Takes arguments the constructor functions for the inhabitants of the type and their signatures.</td>
   </tr>
   <tr>
      <td> Joule </td>
      <td>
         <a href="../cd/experimental/units_metric1.xhtml"> units_metric1 </a>
      </td>
      <td>This symbol represents the measure of one Joule. This is the standard SI measure for energy.</td>
   </tr>
   <tr>
      <td> LaTeX_encoding </td>
      <td>
         <a href="../cd/Official/altenc.xhtml"> altenc </a>
      </td>
      <td>A symbol which heads a piece of LaTeX encoding in an attribution.</td>
   </tr>
   <tr>
      <td> Lambda </td>
      <td>
         <a href="../cd/experimental/lc.xhtml"> lc </a>
      </td>
      <td>The abstraction constructor. It is followed by a list of variables and an OpenMath object.</td>
   </tr>
   <tr>
      <td> Laplacian </td>
      <td>
         <a href="../cd/Official/veccalc1.xhtml"> veccalc1 </a>
      </td>
      <td>This symbol is used to represent the laplacian function. It takes one argument which should be a vector of scalar valued functions, intended to represent a vector valued function and returns a vector of functions. It should satisfy the defining relation: laplacian(F) = \partial^2(F)/\partial(x_1)^2 + ... + \partial^2(F)/\partial(x_n)^2</td>
   </tr>
   <tr>
      <td> Loschmidt_constant </td>
      <td>
         <a href="../cd/experimental/physical_consts1.xhtml"> physical_consts1 </a>
      </td>
      <td>This symbol represents the number of particles per unit volume of an ideal gas at standard temperature and pressure. It is approximately 2.686763 * 10^(25) +/- 2.3 * 10^(20) per metre cubed.</td>
   </tr>
   <tr>
      <td> MathML_encoding </td>
      <td>
         <a href="../cd/Official/altenc.xhtml"> altenc </a>
      </td>
      <td>A symbol which heads a piece of MathML encoding in an attribution. The MathML encoding is an XML encoding, and the details may be found at: http://www.w3.org/Math/Overview.html</td>
   </tr>
   <tr>
      <td> N </td>
      <td>
         <a href="../cd/Official/setname1.xhtml"> setname1 </a>
      </td>
      <td>This symbol represents the set of natural numbers (including zero).</td>
   </tr>
   <tr>
      <td> NaN </td>
      <td>
         <a href="../cd/Official/nums1.xhtml"> nums1 </a>
      </td>
      <td>A symbol to convey the notion of not-a-number. The result of an ill-posed floating computation. See IEEE standard for floating point representations.</td>
   </tr>
   <tr>
      <td> Name </td>
      <td>
         <a href="../cd/experimental/meta.xhtml"> meta </a>
      </td>
      <td>An element containing the string corresponding to the name of the symbol being defined. This must match the syntax for symbol names given in the OpenMath Standard. Here and elsewhere white space occurring at the begining or end of the string will be ignored.</td>
   </tr>
   <tr>
      <td> Newton </td>
      <td>
         <a href="../cd/experimental/units_metric1.xhtml"> units_metric1 </a>
      </td>
      <td>This symbol represents the measure of one Newton. This is the standard SI measure for force.</td>
   </tr>
   <tr>
      <td> Newton_per_sqr_metre </td>
      <td>
         <a href="../cd/experimental/units_metric1.xhtml"> units_metric1 </a>
      </td>
      <td>This symbol represents the measure of one Newton per square metre. This is another (deprecated in OpenMath) name for the standard SI measure for pressure, the Pascal.</td>
   </tr>
   <tr>
      <td> P </td>
      <td>
         <a href="../cd/Official/setname1.xhtml"> setname1 </a>
      </td>
      <td>This symbol represents the set of positive prime numbers.</td>
   </tr>
   <tr>
      <td> Pair </td>
      <td>
         <a href="../cd/experimental/ecc.xhtml"> ecc </a>
      </td>
      <td>The pairing constructor. It takes two OpenMath objects as first element and second element of the pair, and a third optional OpenMath object that represents the type of the pair.</td>
   </tr>
   <tr>
      <td> Pair </td>
      <td>
         <a href="../cd/experimental/sigma.xhtml"> sigma </a>
      </td>
      <td>The pairing constructor. It takes two OpenMath objects as first element and second element of the pair, and a third optional OpenMath object that represents the type of this pair.</td>
   </tr>
   <tr>
      <td> PairProj1 </td>
      <td>
         <a href="../cd/experimental/ecc.xhtml"> ecc </a>
      </td>
      <td>The first projection function that extracts the first component of a Pair. It satisfies the sigma-reduction rule.</td>
   </tr>
   <tr>
      <td> PairProj1 </td>
      <td>
         <a href="../cd/experimental/sigma.xhtml"> sigma </a>
      </td>
      <td>The first projection function. It satisfies sigma-reduction.</td>
   </tr>
   <tr>
      <td> PairProj2 </td>
      <td>
         <a href="../cd/experimental/ecc.xhtml"> ecc </a>
      </td>
      <td>The second projection function that extracts the second component of a Pair. It satisfies sigma-reduction rule.</td>
   </tr>
   <tr>
      <td> PairProj2 </td>
      <td>
         <a href="../cd/experimental/sigma.xhtml"> sigma </a>
      </td>
      <td>The second projection function. It satisfies sigma-reduction.</td>
   </tr>
   <tr>
      <td> Pascal </td>
      <td>
         <a href="../cd/experimental/units_metric1.xhtml"> units_metric1 </a>
      </td>
      <td>This symbol represents the measure of one Newton per square metre. This is the standard SI measure for pressure.</td>
   </tr>
   <tr>
      <td> PiType </td>
      <td>
         <a href="../cd/experimental/lc.xhtml"> lc </a>
      </td>
      <td>The type constructor of dependant function space. It binds the (type-attributed) variables in the body, that is an OpenMath object.</td>
   </tr>
   <tr>
      <td> Planck_constant </td>
      <td>
         <a href="../cd/experimental/physical_consts1.xhtml"> physical_consts1 </a>
      </td>
      <td>This symbol represents the fundamental constant equal to the ratio of the energy of a quantum of energy to its frequency. It is approximately equal to 6.6260755*10^(-34) +/- 4.0*10^(-40) Joule seconds.</td>
   </tr>
   <tr>
      <td> Prop </td>
      <td>
         <a href="../cd/experimental/typesorts.xhtml"> typesorts </a>
      </td>
      <td>The type of propositions</td>
   </tr>
   <tr>
      <td> Q </td>
      <td>
         <a href="../cd/Official/setname1.xhtml"> setname1 </a>
      </td>
      <td>This symbol represents the set of rational numbers.</td>
   </tr>
   <tr>
      <td> QuotientField </td>
      <td>
         <a href="../cd/experimental/setname2.xhtml"> setname2 </a>
      </td>
      <td>This symbol represents the quotient field of any integral domain.</td>
   </tr>
   <tr>
      <td> R </td>
      <td>
         <a href="../cd/Official/setname1.xhtml"> setname1 </a>
      </td>
      <td>This symbol represents the set of real numbers.</td>
   </tr>
   <tr>
      <td> Role </td>
      <td>
         <a href="../cd/experimental/meta.xhtml"> meta </a>
      </td>
      <td>An element containing the string corresponding to the role of the symbol being defined.</td>
   </tr>
   <tr>
      <td> SDMP </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>The constructor for multivariate polynomials without any indication of variables or domain for the coefficients. Its arguments are just "term"s. No terms should differ only by the coefficient (i.e it is not permitted to have both "2*x*y" and "x*y" as terms in a SDMP). SDMP can be attributed with the "ordering" symbol to indicate a particular ordering of its terms. This attribute shall not be set if the SDMP is part of DMPL that has this attribute set. If the SDMP is ordered, explicitly or implicitly via an outer ordering, the terms must be in decreasing order with respect to this order. The zero polynomial is represented by an SDMP with no terms.</td>
   </tr>
   <tr>
      <td> SigmaType </td>
      <td>
         <a href="../cd/experimental/ecc.xhtml"> ecc </a>
      </td>
      <td>The binder symbol used to construct the type of Cartesian products. The (either plain or attributed) variables might occur in the body \OM\ object.</td>
   </tr>
   <tr>
      <td> SigmaType </td>
      <td>
         <a href="../cd/experimental/sigma.xhtml"> sigma </a>
      </td>
      <td>The type constructor of cartesian products. It takes a list of type-attributed variables and an OpenMath object.</td>
   </tr>
   <tr>
      <td> Signature </td>
      <td>
         <a href="../cd/experimental/metasig.xhtml"> metasig </a>
      </td>
      <td>This symbol is used to represent the element of a signature file which specifies the signature of a symbol. It should take two string children, the first should be the symbol who's signature is being specified, the second should be an 'OMOBJ' element which specifies the signature. Additionally the second argument should specify an object which must represent a valid type in the type system identified by the XML attribute 'type' corresponding to the element which corresponds to the symbol 'CDSignatures' enclosing this symbol.</td>
   </tr>
   <tr>
      <td> Stirling1 </td>
      <td>
         <a href="../cd/experimental/combinat1.xhtml"> combinat1 </a>
      </td>
      <td>The Stirling numbers of the first kind. (-1)^(n-m)*Stirling1(n,m) is the number of permutations of n symbols which have exactly m cycles. Note that there are a few slightly different definitions of these numbers.</td>
   </tr>
   <tr>
      <td> Stirling2 </td>
      <td>
         <a href="../cd/experimental/combinat1.xhtml"> combinat1 </a>
      </td>
      <td>The Stirling numbers of the second kind. Stirling2(n, m) is the number of partitions of a set with n elements into m non empty subsets. Note that there are a few slightly different definitions of these numbers.</td>
   </tr>
   <tr>
      <td> Tuple </td>
      <td>
         <a href="../cd/experimental/ecc.xhtml"> ecc </a>
      </td>
      <td>The n-ary tupling constructor when n&gt;2. The arguments are the element of the tuple. Tuple objects can also be constructed by successive nesting of Pair.</td>
   </tr>
   <tr>
      <td> Type </td>
      <td>
         <a href="../cd/experimental/typesorts.xhtml"> typesorts </a>
      </td>
      <td>The cumulative type of the type of sets in a hierarchy of types.</td>
   </tr>
   <tr>
      <td> Type0 </td>
      <td>
         <a href="../cd/experimental/typesorts.xhtml"> typesorts </a>
      </td>
      <td>The type of sets in a hierarchy of types.</td>
   </tr>
   <tr>
      <td> Watt </td>
      <td>
         <a href="../cd/experimental/units_metric1.xhtml"> units_metric1 </a>
      </td>
      <td>This symbol represents the measure of one Watt. This is the standard SI measure for power.</td>
   </tr>
   <tr>
      <td> Z </td>
      <td>
         <a href="../cd/Official/setname1.xhtml"> setname1 </a>
      </td>
      <td>This symbol represents the set of integers, positive, negative and zero.</td>
   </tr>
   <tr>
      <td> Zm </td>
      <td>
         <a href="../cd/experimental/setname2.xhtml"> setname2 </a>
      </td>
      <td>This symbol represents the set of integers modulo m, where m is not necessarily a prime. It takes one argument, the integer m.</td>
   </tr>
   <tr>
      <td> above </td>
      <td>
         <a href="../cd/Official/limit1.xhtml"> limit1 </a>
      </td>
      <td>This symbol is used within a limit construct to show the limit is being approached from above. It takes no arguments.</td>
   </tr>
   <tr>
      <td> abs </td>
      <td>
         <a href="../cd/Official/arith1.xhtml"> arith1 </a>
      </td>
      <td>A unary operator which represents the absolute value of its argument. The argument should be numerically valued. In the complex case this is often referred to as the modulus.</td>
   </tr>
   <tr>
      <td> absolute_zero </td>
      <td>
         <a href="../cd/experimental/physical_consts1.xhtml"> physical_consts1 </a>
      </td>
      <td>This symbol represents the absolute zero of temperature, synonymous with the object of that temperature having zero latent heat.</td>
   </tr>
   <tr>
      <td> acceleration </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the acceleration physical dimension. It is the second derivative of distance with respect to time.</td>
   </tr>
   <tr>
      <td> acre </td>
      <td>
         <a href="../cd/experimental/units_imperial1.xhtml"> units_imperial1 </a>
      </td>
      <td>This symbol represents the measure of one acre. This is a standard imperial measure for area.</td>
   </tr>
   <tr>
      <td> acre_us_survey </td>
      <td>
         <a href="../cd/experimental/units_us1.xhtml"> units_us1 </a>
      </td>
      <td>This symbol represents the measure of one U.S. Survey acre.</td>
   </tr>
   <tr>
      <td> algorithm </td>
      <td>
         <a href="../cd/experimental/moreerrors.xhtml"> moreerrors </a>
      </td>
      <td>This symbol represents the error which is returned when an application raises an error due to algorithmic restrictions of the implementations. This includes operations not implemented or partially implemented, divisions by zero and other domain errors. It will have at least one argument, which is a string describing the problem. It may have a second argument which is relevant to the error.</td>
   </tr>
   <tr>
      <td> amp </td>
      <td>
         <a href="../cd/experimental/units_metric1.xhtml"> units_metric1 </a>
      </td>
      <td>This symbol represents the measure of one amp. This is the standard SI measure for current.</td>
   </tr>
   <tr>
      <td> and </td>
      <td>
         <a href="../cd/Official/logic1.xhtml"> logic1 </a>
      </td>
      <td>This symbol represents the logical and function which is an n-ary function taking boolean arguments and returning a boolean value. It is true if all arguments are true or false otherwise.</td>
   </tr>
   <tr>
      <td> anonymous </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>Indicates a variable that we do not want to name</td>
   </tr>
   <tr>
      <td> anti-Hermitian </td>
      <td>
         <a href="../cd/experimental/linalg5.xhtml"> linalg5 </a>
      </td>
      <td>This symbol represents an anti-Hermitian matrix, it takes one argument. The argument should be a vector of vectors of values which determine the upper triangle of the matrix. The lower triangle of the matrix is specified by the following relation: - M^* = transpose(M), were M^* denotes the matrix consisting of all the complex conjugates of M. This rules implies that the main diagonal is zero, therefore the argument should not include it.</td>
   </tr>
   <tr>
      <td> antisymmetric </td>
      <td>
         <a href="../cd/experimental/relation0.xhtml">       relation0    </a>
      </td>
      <td>Proposition; the type of antisymmetric binary relations.</td>
   </tr>
   <tr>
      <td> append </td>
      <td>
         <a href="../cd/experimental/list2.xhtml"> list2 </a>
      </td>
      <td>The operation of joining one list to another</td>
   </tr>
   <tr>
      <td> apply_to_list </td>
      <td>
         <a href="../cd/experimental/fns2.xhtml"> fns2 </a>
      </td>
      <td>This symbol is used to denote the repeated application of an n-ary function on the elements of a given list. For example when used with plus or times this can represent sums and products. The symbol takes two arguments; the first of which is the n-ary function, the second a list.</td>
   </tr>
   <tr>
      <td> approx </td>
      <td>
         <a href="../cd/experimental/relation2.xhtml"> relation2 </a>
      </td>
      <td>This symbol is used to denote the approximate equality of its two arguments.</td>
   </tr>
   <tr>
      <td> approx </td>
      <td>
         <a href="../cd/Official/relation1.xhtml"> relation1 </a>
      </td>
      <td>This symbol is used to denote the approximate equality of its two arguments.</td>
   </tr>
   <tr>
      <td> arccos </td>
      <td>
         <a href="../cd/experimental/transc3.xhtml"> transc3 </a>
      </td>
      <td>This symbol represents the arccos function. This is the multivalued inverse of the cos function.</td>
   </tr>
   <tr>
      <td> arccos </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the arccos function. This is the inverse of the cos function as described in Abramowitz and Stegun, section 4.4. It takes one argument.</td>
   </tr>
   <tr>
      <td> arccosh </td>
      <td>
         <a href="../cd/experimental/transc3.xhtml"> transc3 </a>
      </td>
      <td>This symbol represents the Arccosh function as described in Abramowitz and Stegun, section 4.6.</td>
   </tr>
   <tr>
      <td> arccosh </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the arccosh function as described in Abramowitz and Stegun, section 4.6.</td>
   </tr>
   <tr>
      <td> arccot </td>
      <td>
         <a href="../cd/experimental/transc3.xhtml"> transc3 </a>
      </td>
      <td>This symbol represents the multi-valued arccot function as the inverse of cot</td>
   </tr>
   <tr>
      <td> arccot </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the arccot function as described in Abramowitz and Stegun, section 4.4.</td>
   </tr>
   <tr>
      <td> arccoth </td>
      <td>
         <a href="../cd/experimental/transc3.xhtml"> transc3 </a>
      </td>
      <td>This symbol represents the Arccoth function as described in Abramowitz and Stegun, section 4.6.</td>
   </tr>
   <tr>
      <td> arccoth </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the arccoth function as described in Abramowitz and Stegun, section 4.6.</td>
   </tr>
   <tr>
      <td> arccsc </td>
      <td>
         <a href="../cd/experimental/transc3.xhtml"> transc3 </a>
      </td>
      <td>This symbol represents the multivalued arccsc function as the inverse of csc.</td>
   </tr>
   <tr>
      <td> arccsc </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the arccsc function as described in Abramowitz and Stegun, section 4.4.</td>
   </tr>
   <tr>
      <td> arccsch </td>
      <td>
         <a href="../cd/experimental/transc3.xhtml"> transc3 </a>
      </td>
      <td>This symbol represents the Arccsch function as described in Abramowitz and Stegun, section 4.6.</td>
   </tr>
   <tr>
      <td> arccsch </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the arccsch function as described in Abramowitz and Stegun, section 4.6.</td>
   </tr>
   <tr>
      <td> arcsec </td>
      <td>
         <a href="../cd/experimental/transc3.xhtml"> transc3 </a>
      </td>
      <td>This symbol represents the multivalued arcsec function as the inverse of sec.</td>
   </tr>
   <tr>
      <td> arcsec </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the arcsec function as described in Abramowitz and Stegun, section 4.4.</td>
   </tr>
   <tr>
      <td> arcsech </td>
      <td>
         <a href="../cd/experimental/transc3.xhtml"> transc3 </a>
      </td>
      <td>This symbol represents the Arcsech function as described in Abramowitz and Stegun, section 4.6.</td>
   </tr>
   <tr>
      <td> arcsech </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the arcsech function as described in Abramowitz and Stegun, section 4.6.</td>
   </tr>
   <tr>
      <td> arcsin </td>
      <td>
         <a href="../cd/experimental/transc3.xhtml"> transc3 </a>
      </td>
      <td>This symbol represents the arcsin function. This is the multi-valued inverse of the sin function as described in Abramowitz and Stegun, section 4.4. It takes one argument.</td>
   </tr>
   <tr>
      <td> arcsin </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the arcsin function. This is the inverse of the sin function as described in Abramowitz and Stegun, section 4.4. It takes one argument.</td>
   </tr>
   <tr>
      <td> arcsinh </td>
      <td>
         <a href="../cd/experimental/transc3.xhtml"> transc3 </a>
      </td>
      <td>This symbol represents the Arcsinh function as described in Abramowitz and Stegun, section 4.6.</td>
   </tr>
   <tr>
      <td> arcsinh </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the arcsinh function as described in Abramowitz and Stegun, section 4.6.</td>
   </tr>
   <tr>
      <td> arctan </td>
      <td>
         <a href="../cd/experimental/transc2.xhtml"> transc2 </a>
      </td>
      <td>This symbol represents the two-argument arctan function as in Fortran's ATAN2. arctan(x,y) is a value of arctan(y/x). For real x,y arctan(x,y) is positive when y is positive, negative when y is negative. If y is zero, the result is 0 if x is positive, and $\pi$ if x is negative. If x is zero, the result has absolute value $\pi/2$.</td>
   </tr>
   <tr>
      <td> arctan </td>
      <td>
         <a href="../cd/experimental/transc3.xhtml"> transc3 </a>
      </td>
      <td>This symbol represents the arctan function. This is the multi-valued inverse of the tan function.</td>
   </tr>
   <tr>
      <td> arctan </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the arctan function. This is the inverse of the tan function as described in Abramowitz and Stegun, section 4.4. It takes one argument.</td>
   </tr>
   <tr>
      <td> arctanh </td>
      <td>
         <a href="../cd/experimental/transc3.xhtml"> transc3 </a>
      </td>
      <td>This symbol represents the Arctanh function as described in Abramowitz and Stegun, section 4.6.</td>
   </tr>
   <tr>
      <td> arctanh </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the arctanh function as described in Abramowitz and Stegun, section 4.6.</td>
   </tr>
   <tr>
      <td> area </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the area physical dimension.</td>
   </tr>
   <tr>
      <td> argument </td>
      <td>
         <a href="../cd/Official/complex1.xhtml"> complex1 </a>
      </td>
      <td>This symbol represents the unary function which returns the argument of a complex number, viz. the angle which a straight line drawn from the number to zero makes with the Real line (measured anti-clockwise). The argument to the symbol is the complex number whos argument is being taken.</td>
   </tr>
   <tr>
      <td> asynchronousError </td>
      <td>
         <a href="../cd/experimental/moreerrors.xhtml"> moreerrors </a>
      </td>
      <td>This symbol represents the error which is returned when an application encounters some asynchronous error, for example if a limit in memory has been reached, or an error has occurred in some system call (I/O error, disk full, machine down). It should have one argument, which is a string describing the problem.</td>
   </tr>
   <tr>
      <td> atto </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $10^-18$</td>
   </tr>
   <tr>
      <td> banded </td>
      <td>
         <a href="../cd/experimental/linalg5.xhtml"> linalg5 </a>
      </td>
      <td>This symbol represents a (p,q) banded matrix, it takes one argument. A (p,q) banded matrix should always be square. The lower non-zero subdiagonal is the first element of the argument, whilst the highest non-zero super-diagonal is given by the last element of the argument. The argument determines the band of possibly non-zero entries which are positioned around the diagonal. It should be a vector of vectors, we note that they will not all be the same length, however the length of the vectors determine p and q. The longest element specifies the diagonal of the matrix and hence the size of the matrix. Every element not in the band is zero.</td>
   </tr>
   <tr>
      <td> bar </td>
      <td>
         <a href="../cd/experimental/units_imperial1.xhtml"> units_imperial1 </a>
      </td>
      <td>This symbol represents the measure of one bar. This is the standard imperial measure for pressure.</td>
   </tr>
   <tr>
      <td> based_integer </td>
      <td>
         <a href="../cd/Official/nums1.xhtml"> nums1 </a>
      </td>
      <td>This symbol represents the constructor function for integers, specifying the base. It takes two arguments, the first is a positive integer to denote the base to which the number is represented, the second argument is a string which contains an optional sign and the digits of the integer, using 0-9a-z (as a consequence of this no radix greater than 35 is supported). Base 16 and base 10 are already covered in the encodings of integers.</td>
   </tr>
   <tr>
      <td> below </td>
      <td>
         <a href="../cd/Official/limit1.xhtml"> limit1 </a>
      </td>
      <td>This symbol is used within a limit construct to show the limit is being approached from below. It takes no arguments.</td>
   </tr>
   <tr>
      <td> bigfloat </td>
      <td>
         <a href="../cd/Official/bigfloat1.xhtml"> bigfloat1 </a>
      </td>
      <td>The bigfloat constructor takes three arguments, a mantissa, a base and the exponent.</td>
   </tr>
   <tr>
      <td> bigfloatprec </td>
      <td>
         <a href="../cd/Official/bigfloat1.xhtml"> bigfloat1 </a>
      </td>
      <td>The bigfloat "with precision specified in (another) radix" constructor. Takes 3 arguments, the first argument is a floating point number constructed with the bigfloat constructor, the second is the new radix, whilst the third specifies how many digits are significant.</td>
   </tr>
   <tr>
      <td> binomial </td>
      <td>
         <a href="../cd/experimental/combinat1.xhtml"> combinat1 </a>
      </td>
      <td>The binomial coefficients. binomial(n, m) is the number of ways of choosing m objects from a collection of n distinct objects without regard to the order.</td>
   </tr>
   <tr>
      <td> both_sides </td>
      <td>
         <a href="../cd/Official/limit1.xhtml"> limit1 </a>
      </td>
      <td>This symbol is used within a limit construct to show the limit is being approached from both sides. It takes no arguments.</td>
   </tr>
   <tr>
      <td> bytearray </td>
      <td>
         <a href="../cd/experimental/omtypes.xhtml"> omtypes </a>
      </td>
      <td>The type of byte arrays</td>
   </tr>
   <tr>
      <td> calendar_month </td>
      <td>
         <a href="../cd/experimental/units_time1.xhtml"> units_time1 </a>
      </td>
      <td>This symbol represents the measure of one month of (calendar) time.</td>
   </tr>
   <tr>
      <td> calendar_year </td>
      <td>
         <a href="../cd/experimental/units_time1.xhtml"> units_time1 </a>
      </td>
      <td>This symbol represents the measure of one year of (calendar) time.</td>
   </tr>
   <tr>
      <td> cartesian_product </td>
      <td>
         <a href="../cd/Official/multiset1.xhtml"> multiset1 </a>
      </td>
      <td>This symbol represents an n-ary construction function for constructing the Cartesian product of multisets. It takes n multiset arguments in order to construct their Cartesian product.</td>
   </tr>
   <tr>
      <td> cartesian_product </td>
      <td>
         <a href="../cd/Official/set1.xhtml"> set1 </a>
      </td>
      <td>This symbol represents an n-ary construction function for constructing the Cartesian product of sets. It takes n set arguments in order to construct their Cartesian product.</td>
   </tr>
   <tr>
      <td> ceiling </td>
      <td>
         <a href="../cd/Official/rounding1.xhtml"> rounding1 </a>
      </td>
      <td>The round up (to +infinity) operation.</td>
   </tr>
   <tr>
      <td> centi </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $0.01$</td>
   </tr>
   <tr>
      <td> character_table</td>
      <td>
         <a href="../cd/experimental/gp1.xhtml"> gp1 </a>
      </td>
      <td>This is the constructor for a character table. Usage: CharacterTable(centralizer_primes, centralizer_indices, classnames, power_map, irreducibles_matrix) If G has n conjugacy classes then: * centralizer_primes is of the form [p1, .., pk] i &lt; j implies that pi &lt; pj and the pi are precisely the primes which divide the order of some centralizer of a conjugacy class * centralizer_indices is of the form [[i11, ...,i1k] ... [in1,...ink]] so the centralizer of class 1 has order p1^i11 ... pk^i1k etc * classnames is a list of n strings which name the conjugacy classes in line with the convention used in the Atlas of Finite Groups * power_map is of the form [list1, ..., listk] where listi[j] is the name of the class where elements of class j go when raised to the power pi. * irreducibles_matrix: rows correspond to irreducible characters, columns are conjugacy classes. Entries are the value of an element of the column's conjugacy class under the character of the row.</td>
   </tr>
   <tr>
      <td> character_table_of_group </td>
      <td>
         <a href="../cd/experimental/gp1.xhtml"> gp1 </a>
      </td>
      <td>Refers to the character table of its argument which must be a group.</td>
   </tr>
   <tr>
      <td> characteristic_eqn </td>
      <td>
         <a href="../cd/experimental/linalg4.xhtml"> linalg4 </a>
      </td>
      <td>This symbol represents the polynomial which appears in the left hand side of the characteristic equation of a matrix. It takes one argument which should be the matrix. A definition of the characteristic equation is given in Elementary Linear Algebra, Stanley I. Grossman in Definition 2 of chapter 6, page 535.</td>
   </tr>
   <tr>
      <td> charge </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the charge physical dimension.</td>
   </tr>
   <tr>
      <td> coefficient </td>
      <td>
         <a href="../cd/experimental/poly.xhtml"> poly </a>
      </td>
      <td>The coefficient with respect to a list of variables (the second argument) raised to a list of powers (the third argument). Zero if no such term is present. Not all variables need be specified.</td>
   </tr>
   <tr>
      <td> coefficient_ring </td>
      <td>
         <a href="../cd/experimental/poly.xhtml"> poly </a>
      </td>
      <td>The coefficient ring.</td>
   </tr>
   <tr>
      <td> columncount </td>
      <td>
         <a href="../cd/experimental/linalg4.xhtml"> linalg4 </a>
      </td>
      <td>This symbol represents the function which takes one matrix argument and returns the number of columns in that matrix.</td>
   </tr>
   <tr>
      <td> completely_reduced </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>This attribute, attached to a groebnered object, says 'true' if the base is fully reduced, i.e. no monomial is divisible by the leading monomial of any other polynomial.</td>
   </tr>
   <tr>
      <td> complex_cartesian </td>
      <td>
         <a href="../cd/Official/complex1.xhtml"> complex1 </a>
      </td>
      <td>This symbol represents a constructor function for complex numbers specified as the Cartesian coordinates of the relevant point on the complex plane. It takes two arguments, the first is a number x to denote the real part and the second a number y to denote the imaginary part of the complex number x + i y. (Where i is the square root of -1.)</td>
   </tr>
   <tr>
      <td> complex_cartesian_type </td>
      <td>
         <a href="../cd/Official/mathmltypes.xhtml"> mathmltypes </a>
      </td>
      <td>A symbol to be used as the argument of the type symbol to convey the type of a complex number specified in terms of its real and imaginary parts.</td>
   </tr>
   <tr>
      <td> complex_polar </td>
      <td>
         <a href="../cd/Official/complex1.xhtml"> complex1 </a>
      </td>
      <td>This symbol represents a constructor function for complex numbers specified as the polar coordinates of the relevant point on the complex plane. It takes two arguments, the first is a nonnegative number r to denote the magnitude and the second a number theta (given in radians) to denote the argument of the complex number r e^(i theta). (i and e are defined as in this CD).</td>
   </tr>
   <tr>
      <td> complex_polar_type </td>
      <td>
         <a href="../cd/Official/mathmltypes.xhtml"> mathmltypes </a>
      </td>
      <td>A symbol to be used as the argument of the type symbol to convey the type of a complex number specified in terms of its modulus and argument.</td>
   </tr>
   <tr>
      <td> concentration </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the concentration physical dimension, it is the amount of a substance in a volume.</td>
   </tr>
   <tr>
      <td> conjugacy_class </td>
      <td>
         <a href="../cd/experimental/gp1.xhtml"> gp1 </a>
      </td>
      <td>The binary function whose value is the set of elements which are conjugate to the second argument in the first.</td>
   </tr>
   <tr>
      <td> conjugate </td>
      <td>
         <a href="../cd/Official/complex1.xhtml"> complex1 </a>
      </td>
      <td>A unary operator representing the complex conjugate of its argument.</td>
   </tr>
   <tr>
      <td> cons </td>
      <td>
         <a href="../cd/experimental/list2.xhtml"> list2 </a>
      </td>
      <td>This symbol represents the cons list function. It takes 2 arguments: the second must be a list, where the elements have the same type as the type of the first. The function denotes a new list which has the first argument as its first element followed by the elements of the second argument.</td>
   </tr>
   <tr>
      <td> const_node </td>
      <td>
         <a href="../cd/experimental/polyslp.xhtml"> polyslp </a>
      </td>
      <td>This constructor takes one argument, which is a value from the coefficient ring. It is intended to represent a constant node.</td>
   </tr>
   <tr>
      <td> constant </td>
      <td>
         <a href="../cd/experimental/linalg5.xhtml"> linalg5 </a>
      </td>
      <td>This symbol represents a matrix which has all entries of the same value. It takes two arguments, the first is the size of the matrix, the second is the constant which determines every element.</td>
   </tr>
   <tr>
      <td> constant_type </td>
      <td>
         <a href="../cd/Official/mathmltypes.xhtml"> mathmltypes </a>
      </td>
      <td>A symbol to be used as the argument of the type symbol to convey a type for the common constants, pi ~= 3.1415, e ~= 2.718, i = square root of -1, gamma ~= .5772, NaN, infinity (all in the nums cd), true and false (in the logic cd). Also for MathML variables declared to have type constant, as in &lt;ci type="constant"&gt;x&lt;/ci&gt;.</td>
   </tr>
   <tr>
      <td> convert </td>
      <td>
         <a href="../cd/experimental/poly.xhtml"> poly </a>
      </td>
      <td>Conversion between polynomial rings. The first argument is a polynomial and the second is a polynomial ring. This represents the conversion of the given polynomial as an element of the given ring. A program that can compute the conversion is required to return a polynomial in the given ring.</td>
   </tr>
   <tr>
      <td> cos </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the cos function as described in Abramowitz and Stegun, section 4.3. It takes one argument.</td>
   </tr>
   <tr>
      <td> cosh </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the cosh function as described in Abramowitz and Stegun, section 4.5. It takes one argument.</td>
   </tr>
   <tr>
      <td> cot </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the cot function as described in Abramowitz and Stegun, section 4.3. It takes one argument.</td>
   </tr>
   <tr>
      <td> coth </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the coth function as described in Abramowitz and Stegun, section 4.5. It takes one argument.</td>
   </tr>
   <tr>
      <td> csc </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the csc function as described in Abramowitz and Stegun, section 4.3. It takes one argument.</td>
   </tr>
   <tr>
      <td> csch </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the csch function as described in Abramowitz and Stegun, section 4.5. It takes one argument.</td>
   </tr>
   <tr>
      <td> curl </td>
      <td>
         <a href="../cd/Official/veccalc1.xhtml"> veccalc1 </a>
      </td>
      <td>This symbol is used to represent the curl function. It takes one argument which should be a vector of scalar valued functions, intended to represent a vector valued function and returns a vector of functions. It should satisfy the defining relation: curl(F) = i X \partial(F)/\partial(x) + j X \partial(F)/\partial(y) + j X \partial(F)/\partial(Z) where i,j,k are the unit vectors corresponding to the x,y,z axes respectively and the multiplication X is cross multiplication.</td>
   </tr>
   <tr>
      <td> current </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the current physical dimension.</td>
   </tr>
   <tr>
      <td> day </td>
      <td>
         <a href="../cd/experimental/units_time1.xhtml"> units_time1 </a>
      </td>
      <td>This symbol represents the measure of one day of time. The definitions below ignore the possibilities of "leap seconds".</td>
   </tr>
   <tr>
      <td> deci </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $0.1$</td>
   </tr>
   <tr>
      <td> declare_group </td>
      <td>
         <a href="../cd/experimental/gp1.xhtml"> gp1 </a>
      </td>
      <td>This symbol is a constructor for groups. It takes four arguments in the following order; a set to specify the elements in the group, a binary operation to specify the group operation, a unary operation to specify inverses of group elements and an element to specify the identity. Both the binary and unary operations should act on elements of the set and return an element of the set.</td>
   </tr>
   <tr>
      <td> defint </td>
      <td>
         <a href="../cd/Official/calculus1.xhtml"> calculus1 </a>
      </td>
      <td>This symbol is used to represent definite integration of unary functions. It takes two arguments; the first being the range (e.g. a set) of integration, and the second the function.</td>
   </tr>
   <tr>
      <td> degree </td>
      <td>
         <a href="../cd/experimental/poly.xhtml"> poly </a>
      </td>
      <td>The total degree of its argument. The value returned is a non-negative integer. We note that the degree of 0 is undefined. Note that this operation takes no account of any weights that have been defined: see weighted_degree in polyd.</td>
   </tr>
   <tr>
      <td> degree_Celsius </td>
      <td>
         <a href="../cd/experimental/units_metric1.xhtml"> units_metric1 </a>
      </td>
      <td>This symbol represents the measure of one degree Celsius. This is a standard metric measure for temperature.</td>
   </tr>
   <tr>
      <td> degree_Fahrenheit </td>
      <td>
         <a href="../cd/experimental/units_imperial1.xhtml"> units_imperial1 </a>
      </td>
      <td>This symbol represents the measure of one degree Fahrenheit. This is the standard imperial measure for temperature.</td>
   </tr>
   <tr>
      <td> degree_Kelvin </td>
      <td>
         <a href="../cd/experimental/units_metric1.xhtml"> units_metric1 </a>
      </td>
      <td>This symbol represents the measure of one degree Kelvin. This is a standard SI measure for temperature relative to absolute zero.</td>
   </tr>
   <tr>
      <td> degree_wrt </td>
      <td>
         <a href="../cd/experimental/poly.xhtml"> poly </a>
      </td>
      <td>The degree with respect to a variable (the second argument). We note that the degree of 0 is undefined.</td>
   </tr>
   <tr>
      <td> deka </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $10$</td>
   </tr>
   <tr>
      <td> density </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the density physical dimension, it is the mass per unit volume.</td>
   </tr>
   <tr>
      <td> depth </td>
      <td>
         <a href="../cd/experimental/polyslp.xhtml"> polyslp </a>
      </td>
      <td>A unary function taking an slp as argument and returning the greatest depth of any leaf node, that is the length of the longest contiguous path to any leaf node.</td>
   </tr>
   <tr>
      <td> derived_subgroup </td>
      <td>
         <a href="../cd/experimental/gp1.xhtml"> gp1 </a>
      </td>
      <td>The unary function whose value is the subgroup of argument generated by all products of the form xyx^-1y^-1.</td>
   </tr>
   <tr>
      <td> determinant </td>
      <td>
         <a href="../cd/Official/linalg1.xhtml"> linalg1 </a>
      </td>
      <td>This symbol denotes the unary function which returns the determinant of its argument, the argument should be a square matrix.</td>
   </tr>
   <tr>
      <td> diagonal_matrix </td>
      <td>
         <a href="../cd/experimental/linalg5.xhtml"> linalg5 </a>
      </td>
      <td>This symbol denotes an n_ary function which is used to construct an (nxn) diagonal matrix, that is a matrix where every non-diagonal element is zero, the diagonal elements are equal to the n arguments.</td>
   </tr>
   <tr>
      <td> diff </td>
      <td>
         <a href="../cd/Official/calculus1.xhtml"> calculus1 </a>
      </td>
      <td>This symbol is used to express ordinary differentiation of a unary function. The single argument is the unary function.</td>
   </tr>
   <tr>
      <td> discriminant </td>
      <td>
         <a href="../cd/experimental/poly.xhtml"> poly </a>
      </td>
      <td>Function taking two arguments, it represents the discriminant of a polynomial, which is the first argument, with respect to the given variable which is the second argument.</td>
   </tr>
   <tr>
      <td> displacement </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the spatial difference between two points. The direction of the displacement is taken into account as well as the distance between the points.</td>
   </tr>
   <tr>
      <td> divergence </td>
      <td>
         <a href="../cd/Official/veccalc1.xhtml"> veccalc1 </a>
      </td>
      <td>This symbol is used to represent the divergence function. It takes one argument which should be a vector of scalar valued functions, intended to represent a vector valued function and returns a scalar value. It should satisfy the defining relation: divergence(F) = \partial(F_(x_1))/\partial(x_1) + ... + \partial(F_(x_n))/\partial(x_n)</td>
   </tr>
   <tr>
      <td> divide </td>
      <td>
         <a href="../cd/experimental/opnode.xhtml"> opnode </a>
      </td>
      <td>A constant value, constructs the divide for division nodes.</td>
   </tr>
   <tr>
      <td> divide </td>
      <td>
         <a href="../cd/Official/arith1.xhtml"> arith1 </a>
      </td>
      <td>This symbol represents a (binary) division function denoting the first argument right-divided by the second, i.e. divide(a,b)=a*inverse(b). It is the inverse of the multiplication function defined by the symbol times in this CD.</td>
   </tr>
   <tr>
      <td> domain </td>
      <td>
         <a href="../cd/Official/fns1.xhtml"> fns1 </a>
      </td>
      <td>This symbol denotes the domain of a given function, which is the set of values it is defined over.</td>
   </tr>
   <tr>
      <td> domainofapplication </td>
      <td>
         <a href="../cd/Official/fns1.xhtml"> fns1 </a>
      </td>
      <td>The domainofapplication element denotes the domain over which a given function is being applied. It is intended in MathML to be a more general alternative to specification of this domain using such quantifier elements as bvar, lowlimit or condition.</td>
   </tr>
   <tr>
      <td> e </td>
      <td>
         <a href="../cd/Official/nums1.xhtml"> nums1 </a>
      </td>
      <td>This symbol represents the base of the natural logarithm, approximately 2.718. See Abramowitz and Stegun, Handbook of Mathematical Functions, section 4.1.</td>
   </tr>
   <tr>
      <td> eigenvalue </td>
      <td>
         <a href="../cd/experimental/linalg4.xhtml"> linalg4 </a>
      </td>
      <td>This symbol represents the eigenvalue of a matrix. It takes two arguments the first should be the matrix, the second should be an index to specify the eigenvalue. The ordering imposed on the eigenvalues is first on the modulus of the value, and second on the argument of the value. A definition of eigenvalue is given in Elementary Linear Algebra, Stanley I. Grossman in Definition 1 of chapter 6, page 533.</td>
   </tr>
   <tr>
      <td> eigenvector </td>
      <td>
         <a href="../cd/experimental/linalg4.xhtml"> linalg4 </a>
      </td>
      <td>This symbol represents the eigenvector of a matrix. It takes two arguments the first should be the matrix, the second should be an index to specify which eigenvalue this eigenvector should be paired with. The ordering is as given in the eigenvalue symbol. A definition of eigenvector is given in Elementary Linear Algebra, Stanley I. Grossman in Definition 1 of chapter 6, page 533.</td>
   </tr>
   <tr>
      <td> element_set </td>
      <td>
         <a href="../cd/experimental/gp1.xhtml"> gp1 </a>
      </td>
      <td>The unary function which returns the set of elements of a group.</td>
   </tr>
   <tr>
      <td> elimination </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>This is an ordering, which is partially in terms of one ordering, and partially in terms of another. First argument is a number of variables. Second is ordering to apply on the first so many variables. Third is an ordering on the rest, to be used to break ties.</td>
   </tr>
   <tr>
      <td> encodingError </td>
      <td>
         <a href="../cd/experimental/moreerrors.xhtml"> moreerrors </a>
      </td>
      <td>This symbol represents the error which is returned when an application detects a lexical or syntactic error. It should have one argument which is a string, which should explain the error that occurred.</td>
   </tr>
   <tr>
      <td> energy </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the energy physical dimension.</td>
   </tr>
   <tr>
      <td> eq </td>
      <td>
         <a href="../cd/Official/relation1.xhtml"> relation1 </a>
      </td>
      <td>This symbol represents the binary equality function.</td>
   </tr>
   <tr>
      <td> equivalence </td>
      <td>
         <a href="../cd/experimental/relation0.xhtml">       relation0    </a>
      </td>
      <td>Proposition; the type of equivalence relations, namely relations that are reflexive, symmetric and transitive.</td>
   </tr>
   <tr>
      <td> equivalent </td>
      <td>
         <a href="../cd/Official/logic1.xhtml"> logic1 </a>
      </td>
      <td>This symbol is used to show that two boolean expressions are logically equivalent, that is have the same boolean value for any inputs.</td>
   </tr>
   <tr>
      <td> evaluate </td>
      <td>
         <a href="../cd/experimental/poly.xhtml"> poly </a>
      </td>
      <td>Evaluation of a polynomial at a value or vector of values.</td>
   </tr>
   <tr>
      <td> exa </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $10^18$</td>
   </tr>
   <tr>
      <td> exists </td>
      <td>
         <a href="../cd/Official/quant1.xhtml"> quant1 </a>
      </td>
      <td>This symbol represents the existential ("there exists") quantifier which takes two arguments. It must be placed within an OMBIND element. The first argument is the bound variables (placed within an OMBVAR element), and the second is an expression.</td>
   </tr>
   <tr>
      <td> exp </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the exponentiation function as described in Abramowitz and Stegun, section 4.2. It takes one argument.</td>
   </tr>
   <tr>
      <td> expand </td>
      <td>
         <a href="../cd/experimental/poly.xhtml"> poly </a>
      </td>
      <td>Converts a factored or squarefreed form into the expanded polynomial over the same ring, so that factored(recursive) -&gt; recursive, etc.</td>
   </tr>
   <tr>
      <td> factor </td>
      <td>
         <a href="../cd/experimental/poly.xhtml"> poly </a>
      </td>
      <td>The decomposition of its argument into irreducible factors. A program that can compute the factorization is required to return a "factored" object - see above. It is currently an open question whether powers of 1 can be omitted.</td>
   </tr>
   <tr>
      <td> factored </td>
      <td>
         <a href="../cd/experimental/poly.xhtml"> poly </a>
      </td>
      <td>The constructor for a factorization. Its arguments are formal powers (see previous operator), where the polynomials are supposed to be irreducible (except possibly for a content from the ground ring). Note that "factored" is not a call to factorise something, rather a statement that we know a factorisation.</td>
   </tr>
   <tr>
      <td> factorial </td>
      <td>
         <a href="../cd/Official/integer1.xhtml"> integer1 </a>
      </td>
      <td>The symbol to represent a unary factorial function on non-negative integers.</td>
   </tr>
   <tr>
      <td> false </td>
      <td>
         <a href="../cd/Official/logic1.xhtml"> logic1 </a>
      </td>
      <td>This symbol represents the boolean value false.</td>
   </tr>
   <tr>
      <td> femto </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $10^-15$</td>
   </tr>
   <tr>
      <td> first </td>
      <td>
         <a href="../cd/experimental/list2.xhtml"> list2 </a>
      </td>
      <td>This symbol represents a function which returns the first elements of its argument, which should be a list.</td>
   </tr>
   <tr>
      <td> float </td>
      <td>
         <a href="../cd/experimental/omtypes.xhtml"> omtypes </a>
      </td>
      <td>The type of floating point numbers</td>
   </tr>
   <tr>
      <td> floor </td>
      <td>
         <a href="../cd/Official/rounding1.xhtml"> rounding1 </a>
      </td>
      <td>The round down (to -infinity) operation.</td>
   </tr>
   <tr>
      <td> fn_type </td>
      <td>
         <a href="../cd/Official/mathmltypes.xhtml"> mathmltypes </a>
      </td>
      <td>A symbol to be used as the argument of the type symbol to convey the type for a function name.</td>
   </tr>
   <tr>
      <td> foot </td>
      <td>
         <a href="../cd/experimental/units_imperial1.xhtml"> units_imperial1 </a>
      </td>
      <td>This symbol represents the measure of one foot. This is the standard imperial measure for distance.</td>
   </tr>
   <tr>
      <td> foot_us_survey </td>
      <td>
         <a href="../cd/experimental/units_us1.xhtml"> units_us1 </a>
      </td>
      <td>This symbol represents the measure of one U.S. Survey foot.</td>
   </tr>
   <tr>
      <td> forall </td>
      <td>
         <a href="../cd/Official/quant1.xhtml"> quant1 </a>
      </td>
      <td>This symbol represents the universal ("for all") quantifier which takes two arguments. It must be placed within an OMBIND element. The first argument is the bound variables (placed within an OMBVAR element), and the second is an expression.</td>
   </tr>
   <tr>
      <td> force </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the force physical dimension.</td>
   </tr>
   <tr>
      <td> gamma </td>
      <td>
         <a href="../cd/Official/nums1.xhtml"> nums1 </a>
      </td>
      <td>A symbol to convey the notion of the gamma constant as defined in Abramowitz and Stegun, Handbook of Mathematical Functions, section 6.1.3. It is the limit of 1 + 1/2 + 1/3 + ... + 1/m - ln m as m tends to infinity, this is approximately 0.5772 15664.</td>
   </tr>
   <tr>
      <td> gas_constant </td>
      <td>
         <a href="../cd/experimental/physical_consts1.xhtml"> physical_consts1 </a>
      </td>
      <td>This symbol represents the constant which is equal to the ratio of the pressure times the volume and the temperature of an ideal gas. It is approximately 8.31451 +/- 7.0*10^(-05) Joules per mole per Kelvin.</td>
   </tr>
   <tr>
      <td> gcd </td>
      <td>
         <a href="../cd/experimental/poly.xhtml"> poly </a>
      </td>
      <td>The n-ary greatest common divisor of its polynomial arguments. This is unique up to units.</td>
   </tr>
   <tr>
      <td> gcd </td>
      <td>
         <a href="../cd/Official/arith1.xhtml"> arith1 </a>
      </td>
      <td>The symbol to represent the n-ary function to return the gcd (greatest common divisor) of its arguments.</td>
   </tr>
   <tr>
      <td> geq </td>
      <td>
         <a href="../cd/Official/relation1.xhtml"> relation1 </a>
      </td>
      <td>This symbol represents the binary greater than or equal to function which returns true if the first argument is greater than or equal to the second, it returns false otherwise.</td>
   </tr>
   <tr>
      <td> giga </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $10^9$</td>
   </tr>
   <tr>
      <td> grad </td>
      <td>
         <a href="../cd/Official/veccalc1.xhtml"> veccalc1 </a>
      </td>
      <td>This symbol is used to represent the grad function. It takes one argument which should be a scalar valued function and returns a vector of functions. It should satisfy the defining relation: grad(F) = (\partial(F)/\partial(x_1), ... ,\partial(F)/partial(x_n))</td>
   </tr>
   <tr>
      <td> graded_lexicographic </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>Total degree order, graded with the lexicographic ordering. Note that, if a poly_ring_d_named is used, lexigographic refers to the order of the variables in the poly_ring_d_named, not to their order as strings.</td>
   </tr>
   <tr>
      <td> graded_reverse_lexicographic </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>Total degree order, graded with the reverse lexicographic ordering. Note that, if a poly_ring_d_named is used, lexigographic refers to the order of the variables in the poly_ring_d_named, not to their order as strings.</td>
   </tr>
   <tr>
      <td> gramme </td>
      <td>
         <a href="../cd/experimental/units_metric1.xhtml"> units_metric1 </a>
      </td>
      <td>This symbol represents the measure of one gramme. This is not quite the standard SI measure for mass, which is the kilogramme, but OpenMath chooses to regard the gramme as standard, otherwise one would have to call it the milli-kilogramme.</td>
   </tr>
   <tr>
      <td> gravitational_constant </td>
      <td>
         <a href="../cd/experimental/physical_consts1.xhtml"> physical_consts1 </a>
      </td>
      <td>This symbol represents the constant of proportionality in Newtons law of universal gravitation which states; Two bodies attract each other with equal and opposite forces; the magnitude of this force is proportional to the product of the two masses and is also proportional to the inverse square of the distance between the centers of mass of the two bodies. It is approximately equal to: 6.672*10^(-11) Newton square metres per kilogramme squared.</td>
   </tr>
   <tr>
      <td> groebner </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>The groebner basis (lt-reduced, minimal) of a set of polynomials, with respect to a given ordering. First argument is an ordering, the second is a list of polynomials. A program that can compute the basis is required to return a "groebnered" object.</td>
   </tr>
   <tr>
      <td> groebnered </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>The constructor for a Groebner basis (reduced, minimal). The first argument is an ordering, the second is the Groebner Basis itself (with respect to the ordering) that should be represented as a DMPL.</td>
   </tr>
   <tr>
      <td> group </td>
      <td>
         <a href="../cd/experimental/gp1.xhtml"> gp1 </a>
      </td>
      <td>The n-ary function Group. The group generated by its arguments. The arguments must have a natural group operation associated with them.</td>
   </tr>
   <tr>
      <td> gt </td>
      <td>
         <a href="../cd/Official/relation1.xhtml"> relation1 </a>
      </td>
      <td>This symbol represents the binary greater than function which returns true if the first argument is greater than the second, it returns false otherwise.</td>
   </tr>
   <tr>
      <td> hecto </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $100$</td>
   </tr>
   <tr>
      <td> hour </td>
      <td>
         <a href="../cd/experimental/units_time1.xhtml"> units_time1 </a>
      </td>
      <td>This symbol represents the measure of one hour of time.</td>
   </tr>
   <tr>
      <td> i </td>
      <td>
         <a href="../cd/Official/nums1.xhtml"> nums1 </a>
      </td>
      <td>This symbol represents the square root of -1.</td>
   </tr>
   <tr>
      <td> identity </td>
      <td>
         <a href="../cd/experimental/linalg5.xhtml"> linalg5 </a>
      </td>
      <td>This symbol denotes a unary function which is used to construct an (nxn) identity matrix where n is the single positive integral argument.</td>
   </tr>
   <tr>
      <td> identity </td>
      <td>
         <a href="../cd/Official/fns1.xhtml"> fns1 </a>
      </td>
      <td>The identity function, it takes one argument and returns the same value.</td>
   </tr>
   <tr>
      <td> image </td>
      <td>
         <a href="../cd/Official/fns1.xhtml"> fns1 </a>
      </td>
      <td>This symbol denotes the image of a given function, which is the set of values the domain of the given function maps to.</td>
   </tr>
   <tr>
      <td> imaginary </td>
      <td>
         <a href="../cd/Official/complex1.xhtml"> complex1 </a>
      </td>
      <td>This represents the imaginary part of a complex number</td>
   </tr>
   <tr>
      <td> implies </td>
      <td>
         <a href="../cd/Official/logic1.xhtml"> logic1 </a>
      </td>
      <td>This symbol represents the logical implies function which takes two boolean expressions as arguments. It evaluates to false if the first argument is true and the second argument is false, otherwise it evaluates to true.</td>
   </tr>
   <tr>
      <td> in </td>
      <td>
         <a href="../cd/experimental/list2.xhtml"> list2 </a>
      </td>
      <td>This symbol has two arguments, an element and a list. It is used to denote that the element is in the given list.</td>
   </tr>
   <tr>
      <td> in </td>
      <td>
         <a href="../cd/Official/multiset1.xhtml"> multiset1 </a>
      </td>
      <td>This symbol has two arguments, an element and a multiset. It is used to denote that the element is in the given multiset.</td>
   </tr>
   <tr>
      <td> in </td>
      <td>
         <a href="../cd/Official/set1.xhtml"> set1 </a>
      </td>
      <td>This symbol has two arguments, an element and a set. It is used to denote that the element is in the given set.</td>
   </tr>
   <tr>
      <td> indNat </td>
      <td>
         <a href="../cd/experimental/indnat.xhtml"> indnat </a>
      </td>
      <td>Attribution tag to denote the type of inductively defined natural numbers. It is also denoted as setname1:N.</td>
   </tr>
   <tr>
      <td> infinity </td>
      <td>
         <a href="../cd/Official/nums1.xhtml"> nums1 </a>
      </td>
      <td>A symbol to represent the notion of infinity.</td>
   </tr>
   <tr>
      <td> inp_node </td>
      <td>
         <a href="../cd/experimental/polyslp.xhtml"> polyslp </a>
      </td>
      <td>This constructor takes one argument, which is a variable. The return value is intended to represent an input node.</td>
   </tr>
   <tr>
      <td> int </td>
      <td>
         <a href="../cd/Official/calculus1.xhtml"> calculus1 </a>
      </td>
      <td>This symbol is used to represent indefinite integration of unary functions. The argument is the unary function.</td>
   </tr>
   <tr>
      <td> int2flt </td>
      <td>
         <a href="../cd/experimental/coercions.xhtml"> coercions </a>
      </td>
      <td>The function that converts an integer to a float.</td>
   </tr>
   <tr>
      <td> integer </td>
      <td>
         <a href="../cd/experimental/omtypes.xhtml"> omtypes </a>
      </td>
      <td>The type of integers</td>
   </tr>
   <tr>
      <td> integer_interval </td>
      <td>
         <a href="../cd/Official/interval1.xhtml"> interval1 </a>
      </td>
      <td>A symbol to denote a discrete 1 dimensional interval from the first argument to the second (inclusive), where the discretisation occurs at unit intervals. The arguments are the start and the end points of the interval in that order.</td>
   </tr>
   <tr>
      <td> integer_type </td>
      <td>
         <a href="../cd/Official/mathmltypes.xhtml"> mathmltypes </a>
      </td>
      <td>A symbol to be used as the argument of the type symbol to convey the type of an integer.</td>
   </tr>
   <tr>
      <td> intersect </td>
      <td>
         <a href="../cd/Official/multiset1.xhtml"> multiset1 </a>
      </td>
      <td>This symbol is used to denote the n-ary intersection of multisets. It takes multisets as arguments, and denotes the multiset that contains all the elements that occur in all of them, with multiplicity the minimum of their multiplicities in all multisets.</td>
   </tr>
   <tr>
      <td> intersect </td>
      <td>
         <a href="../cd/Official/set1.xhtml"> set1 </a>
      </td>
      <td>This symbol is used to denote the n-ary intersection of sets. It takes sets as arguments, and denotes the set that contains all the elements that occur in all of them.</td>
   </tr>
   <tr>
      <td> interval </td>
      <td>
         <a href="../cd/Official/interval1.xhtml"> interval1 </a>
      </td>
      <td>A symbol to denote a continuous 1-dimensional interval without any information about the character of the end points (used in definite integration). The arguments are the start and the end points of the interval in that order.</td>
   </tr>
   <tr>
      <td> interval_cc </td>
      <td>
         <a href="../cd/Official/interval1.xhtml"> interval1 </a>
      </td>
      <td>A symbol to denote a continuous 1-dimensional interval with both end points included in the interval. The arguments are the start and the end points of the interval in that order.</td>
   </tr>
   <tr>
      <td> interval_co </td>
      <td>
         <a href="../cd/Official/interval1.xhtml"> interval1 </a>
      </td>
      <td>A symbol to denote a continuous 1-dimensional interval with the first point included in the interval, but the last excluded. The arguments are the start and the end points of the interval in that order.</td>
   </tr>
   <tr>
      <td> interval_oc </td>
      <td>
         <a href="../cd/Official/interval1.xhtml"> interval1 </a>
      </td>
      <td>A symbol to denote a continuous 1-dimensional interval with the first point excluded from the interval, but the last included. The arguments are the start and the end points of the interval in that order.</td>
   </tr>
   <tr>
      <td> interval_oo </td>
      <td>
         <a href="../cd/Official/interval1.xhtml"> interval1 </a>
      </td>
      <td>A symbol to denote a continuous 1-dimensional interval with both end points excluded from the interval. The arguments are the start and the end points of the interval in that order.</td>
   </tr>
   <tr>
      <td> inverse </td>
      <td>
         <a href="../cd/experimental/arith2.xhtml"> arith2 </a>
      </td>
      <td>A unary operator which represents the inverse of an element of a set. This symbol could be used to represent additive or multiplicative inverses.</td>
   </tr>
   <tr>
      <td> inverse </td>
      <td>
         <a href="../cd/Official/fns1.xhtml"> fns1 </a>
      </td>
      <td>This symbol is used to describe the inverse of its argument (a function). This inverse may only be partially defined because the function may not have been surjective. If the function is not surjective the inverse function is ill-defined without further stipulations. No assumptions are made on the semantics of this inverse.</td>
   </tr>
   <tr>
      <td> irreflexive </td>
      <td>
         <a href="../cd/experimental/relation0.xhtml">       relation0    </a>
      </td>
      <td>Proposition; the type of irreflexive binary relations.</td>
   </tr>
   <tr>
      <td> is_abelian </td>
      <td>
         <a href="../cd/experimental/gp1.xhtml"> gp1 </a>
      </td>
      <td>The unary boolean function whose value is true iff the argument is an abelian group</td>
   </tr>
   <tr>
      <td> is_normal </td>
      <td>
         <a href="../cd/experimental/gp1.xhtml"> gp1 </a>
      </td>
      <td>If G, H are the group arguments, then IsNormal(G,H) returns true precisely when G is normal in H. That is, g^-1*h*g is defined and contained in H for all h in H and g in G.</td>
   </tr>
   <tr>
      <td> is_primitive </td>
      <td>
         <a href="../cd/experimental/permgrp.xhtml"> permgrp </a>
      </td>
      <td>The unary function whose value is true iff its permutation group argument acts primitively.</td>
   </tr>
   <tr>
      <td> is_subgroup </td>
      <td>
         <a href="../cd/experimental/gp1.xhtml"> gp1 </a>
      </td>
      <td>The binary function whose value is true if the second argument is a subgroup of the first.</td>
   </tr>
   <tr>
      <td> is_transitive </td>
      <td>
         <a href="../cd/experimental/permgrp.xhtml"> permgrp </a>
      </td>
      <td>The unary function whose value is true iff the permutation group argument acts transitively.</td>
   </tr>
   <tr>
      <td> kernel </td>
      <td>
         <a href="../cd/experimental/fns2.xhtml"> fns2 </a>
      </td>
      <td>This symbol denotes the kernel of a given function. This may be defined as the subset of the range of the given function which maps to the identity element of the image of the given function, however no semantics are assumed. The kernel of a function is also known as the null space of the function.</td>
   </tr>
   <tr>
      <td> kilo </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $1000$</td>
   </tr>
   <tr>
      <td> lambda </td>
      <td>
         <a href="../cd/Official/fns1.xhtml"> fns1 </a>
      </td>
      <td>This symbol is used to represent anonymous functions as lambda expansions. It is used in a binder that takes two further arguments, the first of which is a list of variables, and the second of which is an expression, and it forms the function which is the lambda extraction of the expression</td>
   </tr>
   <tr>
      <td> lcm </td>
      <td>
         <a href="../cd/experimental/poly.xhtml"> poly </a>
      </td>
      <td>The least common multiple of its polynomial arguments. This is unique up to units, but the choice must be compatible with that made for gcd: see the CMP/FMP.</td>
   </tr>
   <tr>
      <td> lcm </td>
      <td>
         <a href="../cd/Official/arith1.xhtml"> arith1 </a>
      </td>
      <td>The symbol to represent the n-ary function to return the least common multiple of its arguments.</td>
   </tr>
   <tr>
      <td> leading_coefficient </td>
      <td>
         <a href="../cd/experimental/poly.xhtml"> poly </a>
      </td>
      <td>The leading coefficient with respect to a variable (the second argument). We note that the leading coefficient of 0 is undefined.</td>
   </tr>
   <tr>
      <td> left_compose </td>
      <td>
         <a href="../cd/Official/fns1.xhtml"> fns1 </a>
      </td>
      <td>This symbol represents the function which forms the left-composition of its two (function) arguments.</td>
   </tr>
   <tr>
      <td> left_inverse </td>
      <td>
         <a href="../cd/Official/fns1.xhtml"> fns1 </a>
      </td>
      <td>This symbol is used to describe the left inverse of its argument (a function). This inverse may only be partially defined because the function may not have been surjective. If the function is not surjective the left inverse function is ill-defined without further stipulations. No other assumptions are made on the semantics of this left inverse.</td>
   </tr>
   <tr>
      <td> left_ref </td>
      <td>
         <a href="../cd/experimental/polyslp.xhtml"> polyslp </a>
      </td>
      <td>Takes as argument a node of an slp. Returns the value of the left hand pointer of the node.</td>
   </tr>
   <tr>
      <td> length </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the length physical dimension.</td>
   </tr>
   <tr>
      <td> length </td>
      <td>
         <a href="../cd/experimental/polyslp.xhtml"> polyslp </a>
      </td>
      <td>A unary function taking an slp as argument and returning the length of this slp.</td>
   </tr>
   <tr>
      <td> leq </td>
      <td>
         <a href="../cd/Official/relation1.xhtml"> relation1 </a>
      </td>
      <td>This symbol represents the binary less than or equal to function which returns true if the first argument is less than or equal to the second, it returns false otherwise.</td>
   </tr>
   <tr>
      <td> lexicographic </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>The lexicographic ordering of terms. Note that, if a poly_ring_d_named is used, lexigographic refers to the order of the variables in the poly_ring_d_named, not to their order as strings.</td>
   </tr>
   <tr>
      <td> lift_binary </td>
      <td>
         <a href="../cd/experimental/set2.xhtml"> set2 </a>
      </td>
      <td>This symbol denotes the lift of a binary operator on elements of X to a component-wise operators on subsets of X.</td>
   </tr>
   <tr>
      <td> light_year </td>
      <td>
         <a href="../cd/experimental/physical_consts1.xhtml"> physical_consts1 </a>
      </td>
      <td>This symbol represents the distant for which a beam of light would take a year to traverse, in a vacuum.</td>
   </tr>
   <tr>
      <td> limit </td>
      <td>
         <a href="../cd/Official/limit1.xhtml"> limit1 </a>
      </td>
      <td>This symbol is used to denote the limit of a unary function. It takes 3 arguments: the limiting value of the argument, the method of approach (either null, above, below or both_sides) and the function.</td>
   </tr>
   <tr>
      <td> limitation </td>
      <td>
         <a href="../cd/experimental/moreerrors.xhtml"> moreerrors </a>
      </td>
      <td>This symbol represents the error which is returned when an application reads an error caused by the limitations of an implementation when dealing with OpenMath objects such as limits on the size of objects or on the kind of objects manipulated. This can include limits on the size of a bytearray or integer, a limit on the number of arguments of an application or the inability to deal with Unicode characters outside ISO latin 1. It will have at least one argument, which is a string describing the problem. It may have a second argument which is relevant to the error.</td>
   </tr>
   <tr>
      <td> list </td>
      <td>
         <a href="../cd/Official/list1.xhtml"> list1 </a>
      </td>
      <td>This symbol denotes the list construct which is an n-ary function. The list entries must be given explicitly.</td>
   </tr>
   <tr>
      <td> list_selector </td>
      <td>
         <a href="../cd/experimental/list2.xhtml"> list2 </a>
      </td>
      <td>This symbol takes a positive integer n and a list, and represents the n-th element of that list.</td>
   </tr>
   <tr>
      <td> list_type </td>
      <td>
         <a href="../cd/Official/mathmltypes.xhtml"> mathmltypes </a>
      </td>
      <td>A symbol to be used as the argument of the type symbol to convey the type for a list.</td>
   </tr>
   <tr>
      <td> litre </td>
      <td>
         <a href="../cd/experimental/units_metric1.xhtml"> units_metric1 </a>
      </td>
      <td>This symbol represents the measure of one litre. This is a standard metric measure for physical volume.</td>
   </tr>
   <tr>
      <td> litre_pre1964 </td>
      <td>
         <a href="../cd/experimental/units_metric1.xhtml"> units_metric1 </a>
      </td>
      <td>This symbol represents the previous (1901-1964) measure of one litre. This used to be a standard metric measure for physical volume.</td>
   </tr>
   <tr>
      <td> ln </td>
      <td>
         <a href="../cd/experimental/transc3.xhtml"> transc3 </a>
      </td>
      <td>This symbol represents the ln function (natural logarithm) as a multivalued function.</td>
   </tr>
   <tr>
      <td> ln </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the ln function (natural logarithm) as described in Abramowitz and Stegun, section 4.1. It takes one argument. Note the description in the CMP/FMP of the branch cut. If signed zeros are in use, the inequality needs to be non-strict.</td>
   </tr>
   <tr>
      <td> log </td>
      <td>
         <a href="../cd/experimental/transc3.xhtml"> transc3 </a>
      </td>
      <td>This symbol represents a binary log function; the first argument is the base, to which the second argument is log'ed. It is defined in Abramowitz and Stegun, Handbook of Mathematical Functions, section 4.1</td>
   </tr>
   <tr>
      <td> log </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents a binary log function; the first argument is the base, to which the second argument is log'ed. It is defined in Abramowitz and Stegun, Handbook of Mathematical Functions, section 4.1</td>
   </tr>
   <tr>
      <td> lower-Hessenberg </td>
      <td>
         <a href="../cd/experimental/linalg5.xhtml"> linalg5 </a>
      </td>
      <td>This symbol represents a lower-Hessenberg matrix, it takes one argument, the argument is a vector of vectors representing the non-zero elements. The first element of the argument specifies the value of the first super-diagonal, the subsequent elements specify the value of the diagonal and subsequent subdiagonals, all other elements are zero.</td>
   </tr>
   <tr>
      <td> lower-triangular </td>
      <td>
         <a href="../cd/experimental/linalg5.xhtml"> linalg5 </a>
      </td>
      <td>This symbol represents a lower-triangular matrix, it takes one argument. The argument should be a vector of vectors of elements of the matrix.</td>
   </tr>
   <tr>
      <td> lt </td>
      <td>
         <a href="../cd/Official/relation1.xhtml"> relation1 </a>
      </td>
      <td>This symbol represents the binary less than function which returns true if the first argument is less than the second, it returns false otherwise.</td>
   </tr>
   <tr>
      <td> magnetic_constant </td>
      <td>
         <a href="../cd/experimental/physical_consts1.xhtml"> physical_consts1 </a>
      </td>
      <td>This symbol represents the ratio of the magnetic flux density in a substance to the external field strength for vacuum. It is equal to 4 pi x 10^(-7) H/m.</td>
   </tr>
   <tr>
      <td> map </td>
      <td>
         <a href="../cd/Official/list1.xhtml"> list1 </a>
      </td>
      <td>This symbol represents a mapping function which may be used to construct lists, it takes as arguments a function from X to Y and a list over X in that order. The value that is returned is a list of values in Y. The argument list may be a set or an integer_interval.</td>
   </tr>
   <tr>
      <td> mapsto </td>
      <td>
         <a href="../cd/experimental/lc.xhtml"> lc </a>
      </td>
      <td>The type constructor of non-dependant function space. The first n-1 children denote the types of the arguments, the last denotes the return type. Contrary to sts:mapsto, arguments cannot be variables but have to be OpenMath objects that map to ground OpenMath terms (they contain no variables).</td>
   </tr>
   <tr>
      <td> mass </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the mass physical dimension.</td>
   </tr>
   <tr>
      <td> matrix </td>
      <td>
         <a href="../cd/experimental/linalg3.xhtml"> linalg3 </a>
      </td>
      <td>This symbol is an n-ary matrix constructor which requires matrixcolumn's as arguments. It is used to represent matrices.</td>
   </tr>
   <tr>
      <td> matrix </td>
      <td>
         <a href="../cd/Official/linalg2.xhtml"> linalg2 </a>
      </td>
      <td>This symbol is an n-ary matrix constructor which requires matrixrow's as arguments. It is used to represent matrices.</td>
   </tr>
   <tr>
      <td> matrix_ordering </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>The argument is a matrix with as many columns as indeterminates (= rank). Each row in turm is multiplied by the column vector of exponents to produce a weighting for comparison purposes.</td>
   </tr>
   <tr>
      <td> matrix_selector </td>
      <td>
         <a href="../cd/Official/linalg1.xhtml"> linalg1 </a>
      </td>
      <td>This symbol represents the function which allows individual entries to be selected from a matrix. It takes three arguments, the first is the index of the row and the second is the index of the column of the required element, the third argument is the matrix in question. The indexing is one based, i.e. the element in the top left hand corner is indexed by (1,1).</td>
   </tr>
   <tr>
      <td> matrix_type </td>
      <td>
         <a href="../cd/Official/mathmltypes.xhtml"> mathmltypes </a>
      </td>
      <td>A symbol to be used as the argument of the type symbol to convey the type for a matrix (n tuple of rows, where each row is an m tuple for some m, it should be noted that each row must be the same length).</td>
   </tr>
   <tr>
      <td> matrixcolumn </td>
      <td>
         <a href="../cd/experimental/linalg3.xhtml"> linalg3 </a>
      </td>
      <td>This symbol is an n-ary constructor used to represent columns of matrices. Its arguments should be members of a ring.</td>
   </tr>
   <tr>
      <td> matrixrow </td>
      <td>
         <a href="../cd/Official/linalg2.xhtml"> linalg2 </a>
      </td>
      <td>This symbol is an n-ary constructor used to represent rows of matrices. Its arguments should be members of a ring.</td>
   </tr>
   <tr>
      <td> max </td>
      <td>
         <a href="../cd/Official/minmax1.xhtml"> minmax1 </a>
      </td>
      <td>This symbol denotes the unary maximum function which takes a set as its argument and returns the maximum element in that set.</td>
   </tr>
   <tr>
      <td> mean </td>
      <td>
         <a href="../cd/Official/s_data1.xhtml"> s_data1 </a>
      </td>
      <td>This symbol represents an n-ary function denoting the mean of its arguments. That is, their sum divided by their number.</td>
   </tr>
   <tr>
      <td> mean </td>
      <td>
         <a href="../cd/Official/s_dist1.xhtml"> s_dist1 </a>
      </td>
      <td>This symbol represents a unary function denoting the mean of a distribution. The argument is a univariate function to describe the distribution. That is, if f is the function describing the distribution. The mean is the expression integrate(x*f(x)) w.r.t. x over the range (-infinity,infinity).</td>
   </tr>
   <tr>
      <td> median </td>
      <td>
         <a href="../cd/Official/s_data1.xhtml"> s_data1 </a>
      </td>
      <td>This symbol represents an n-ary function denoting the median of its arguments. That is, if the data were placed in ascending order then it denotes the middle one (in the case of an odd amount of data) or the average of the middle two (in the case of an even amount of data).</td>
   </tr>
   <tr>
      <td> mega </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $10^6$</td>
   </tr>
   <tr>
      <td> metre </td>
      <td>
         <a href="../cd/experimental/units_metric1.xhtml"> units_metric1 </a>
      </td>
      <td>This symbol represents the measure of one metre. This is the standard SI unit measure for physical distance.</td>
   </tr>
   <tr>
      <td> metre_sqrd </td>
      <td>
         <a href="../cd/experimental/units_metric1.xhtml"> units_metric1 </a>
      </td>
      <td>This symbol represents the measure of one metre squared. This is the standard SI measure for physical area.</td>
   </tr>
   <tr>
      <td> metres_per_second </td>
      <td>
         <a href="../cd/experimental/units_metric1.xhtml"> units_metric1 </a>
      </td>
      <td>This symbol represents the measure of one metre per second. This is the standard SI measure for speed.</td>
   </tr>
   <tr>
      <td> metres_per_second_sqrd </td>
      <td>
         <a href="../cd/experimental/units_metric1.xhtml"> units_metric1 </a>
      </td>
      <td>This symbol represents the measure of one metre per second squared. This is the standard SI measure for acceleration.</td>
   </tr>
   <tr>
      <td> micro </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $10^-6$</td>
   </tr>
   <tr>
      <td> mile </td>
      <td>
         <a href="../cd/experimental/units_imperial1.xhtml"> units_imperial1 </a>
      </td>
      <td>This symbol represents the measure of one (land, or statute) mile. This is a standard imperial measure for distance, defined in terms of the foot.</td>
   </tr>
   <tr>
      <td> mile_us_survey </td>
      <td>
         <a href="../cd/experimental/units_us1.xhtml"> units_us1 </a>
      </td>
      <td>This symbol represents the measure of one U.S. Survey mile.</td>
   </tr>
   <tr>
      <td> miles_per_hr </td>
      <td>
         <a href="../cd/experimental/units_imperial1.xhtml"> units_imperial1 </a>
      </td>
      <td>This symbol represents the measure of one mile per hour. This is a standard imperial measure for speed.</td>
   </tr>
   <tr>
      <td> miles_per_hr_sqrd </td>
      <td>
         <a href="../cd/experimental/units_imperial1.xhtml"> units_imperial1 </a>
      </td>
      <td>This symbol represents the measure of one mile per hour squared. This is a standard imperial measure for acceleration.</td>
   </tr>
   <tr>
      <td> milli </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $0.001$</td>
   </tr>
   <tr>
      <td> min </td>
      <td>
         <a href="../cd/Official/minmax1.xhtml"> minmax1 </a>
      </td>
      <td>This symbol denotes the unary minimum function which takes a set as its argument and returns the minimum element in that set.</td>
   </tr>
   <tr>
      <td> minus </td>
      <td>
         <a href="../cd/experimental/opnode.xhtml"> opnode </a>
      </td>
      <td>A constant value, constructs the minus for subtraction nodes.</td>
   </tr>
   <tr>
      <td> minus </td>
      <td>
         <a href="../cd/Official/arith1.xhtml"> arith1 </a>
      </td>
      <td>The symbol representing a binary minus function. This is equivalent to adding the additive inverse.</td>
   </tr>
   <tr>
      <td> minute </td>
      <td>
         <a href="../cd/experimental/units_time1.xhtml"> units_time1 </a>
      </td>
      <td>This symbol represents the measure of one minute of time.</td>
   </tr>
   <tr>
      <td> mode </td>
      <td>
         <a href="../cd/Official/s_data1.xhtml"> s_data1 </a>
      </td>
      <td>This symbol represents an n-ary function denoting the mode of its arguments. That is the value which occurs with the greatest frequency.</td>
   </tr>
   <tr>
      <td> mole </td>
      <td>
         <a href="../cd/experimental/physical_consts1.xhtml"> physical_consts1 </a>
      </td>
      <td>This symbol represents the number of atoms in one gramme of carbon(12).</td>
   </tr>
   <tr>
      <td> moment </td>
      <td>
         <a href="../cd/Official/s_data1.xhtml"> s_data1 </a>
      </td>
      <td>This symbol is used to denote the i'th moment of a set of data. The first argument should be the degree of the moment (that is, for the i'th moment the first argument should be i), the second argument should be the point about which the moment is being taken and the rest of the arguments are treated as the data. For n data values x_1, x_2, ..., x_n the i'th moment about c is (1/n) ((x_1-c)^i + (x_2-c)^i + ... + (x_n-c)^i). See CRC Standard Mathematical Tables and Formulae, editor: Dan Zwillinger, CRC Press Inc., 1996, section 7.7.1.</td>
   </tr>
   <tr>
      <td> moment </td>
      <td>
         <a href="../cd/Official/s_dist1.xhtml"> s_dist1 </a>
      </td>
      <td>This symbol represents a ternary function to denote the i'th moment of a distribution. The first argument should be the degree of the moment (that is, for the i'th moment the first argument should be i), the second argument is the value about which the moment is to be taken and the third argument is a univariate function to describe the distribution. That is, if f is the function which describe the distribution. The i'th moment of f about a is the integral of (x-a)^i*f(x) with respect to x, over the interval (-infinity,infinity).</td>
   </tr>
   <tr>
      <td> momentum </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the momentum physical dimension, it is mass times velocity.</td>
   </tr>
   <tr>
      <td> monte_carlo_eq </td>
      <td>
         <a href="../cd/experimental/polyslp.xhtml"> polyslp </a>
      </td>
      <td>This is a Monte-Carlo equality test, it takes three arguments, the first two are slps representing polynomials, the third argument is the maximum probability of incorrectness that is required of the equality test. (Monte-Carlo equality tests are very important for slps as they offer the only tractable method of solving the equality problem in many cases)</td>
   </tr>
   <tr>
      <td> multinomial </td>
      <td>
         <a href="../cd/experimental/combinat1.xhtml"> combinat1 </a>
      </td>
      <td>The multinomial coefficient, multinomial(n, n1, ... nk) is the number of ways of choosing ni objects of type i (i from 1 to k) without regard to order, in such a way that the total number of objects chosen is n. multinomial(n, n1, ... nk) is equal to n!/(n1!*n2! ...*nk!).</td>
   </tr>
   <tr>
      <td> multiset </td>
      <td>
         <a href="../cd/Official/multiset1.xhtml"> multiset1 </a>
      </td>
      <td>This symbol represents the multiset construct. It is either an n-ary function, in which case the multiset entries are given explicitly, or it works on an elements construct. There is no implied ordering to the elements of a multiset.</td>
   </tr>
   <tr>
      <td> nano </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $10^-9$</td>
   </tr>
   <tr>
      <td> neq </td>
      <td>
         <a href="../cd/Official/relation1.xhtml"> relation1 </a>
      </td>
      <td>This symbol represents the binary inequality function.</td>
   </tr>
   <tr>
      <td> nil </td>
      <td>
         <a href="../cd/experimental/list2.xhtml"> list2 </a>
      </td>
      <td>The empty list</td>
   </tr>
   <tr>
      <td> node_selector </td>
      <td>
         <a href="../cd/experimental/polyslp.xhtml"> polyslp </a>
      </td>
      <td>Takes an slp as the first argument, the second argument is the position of the required node. Returns the node of the slp at this position.</td>
   </tr>
   <tr>
      <td> normal_closure </td>
      <td>
         <a href="../cd/experimental/gp1.xhtml"> gp1 </a>
      </td>
      <td>The binary function whose value is the set of conjugates of the elements of the second group by elements of the first, where multiplication between them is defined.</td>
   </tr>
   <tr>
      <td> not </td>
      <td>
         <a href="../cd/Official/logic1.xhtml"> logic1 </a>
      </td>
      <td>This symbol represents the logical not function which takes one boolean argument, and returns the opposite boolean value.</td>
   </tr>
   <tr>
      <td> notin </td>
      <td>
         <a href="../cd/Official/multiset1.xhtml"> multiset1 </a>
      </td>
      <td>This symbol has two arguments, an element and a multiset. It is used to denote that the element is not in the given multiset.</td>
   </tr>
   <tr>
      <td> notin </td>
      <td>
         <a href="../cd/Official/set1.xhtml"> set1 </a>
      </td>
      <td>This symbol has two arguments, an element and a set. It is used to denote that the element is not in the given set.</td>
   </tr>
   <tr>
      <td> notprsubset </td>
      <td>
         <a href="../cd/Official/multiset1.xhtml"> multiset1 </a>
      </td>
      <td>This symbol has two (multiset) arguments. It is used to denote that the first multiset is not a proper subset of the second. A proper subset of a multiset is a subset of the multiset but not actually equal to it.</td>
   </tr>
   <tr>
      <td> notprsubset </td>
      <td>
         <a href="../cd/Official/set1.xhtml"> set1 </a>
      </td>
      <td>This symbol has two (set) arguments. It is used to denote that the first set is not a proper subset of the second. A proper subset of a set is a subset of the set but not actually equal to it.</td>
   </tr>
   <tr>
      <td> notsubset </td>
      <td>
         <a href="../cd/Official/multiset1.xhtml"> multiset1 </a>
      </td>
      <td>This symbol has two (multiset) arguments. It is used to denote that the first multiset is not a subset of the second.</td>
   </tr>
   <tr>
      <td> notsubset </td>
      <td>
         <a href="../cd/Official/set1.xhtml"> set1 </a>
      </td>
      <td>This symbol has two (set) arguments. It is used to denote that the first set is not a subset of the second.</td>
   </tr>
   <tr>
      <td> nthdiff </td>
      <td>
         <a href="../cd/Official/calculus1.xhtml"> calculus1 </a>
      </td>
      <td>This symbol is used to express the nth-iterated ordinary differentiation of a unary function. The first argument is n, and the second the unary function.</td>
   </tr>
   <tr>
      <td> null </td>
      <td>
         <a href="../cd/Official/limit1.xhtml"> limit1 </a>
      </td>
      <td>This symbol is used within a limit construct to avoid specifying the method of approach to the limit. It takes no arguments.</td>
   </tr>
   <tr>
      <td> omtype </td>
      <td>
         <a href="../cd/experimental/omtypes.xhtml"> omtypes </a>
      </td>
      <td>The type of symbolic type symtype</td>
   </tr>
   <tr>
      <td> one </td>
      <td>
         <a href="../cd/Official/alg1.xhtml"> alg1 </a>
      </td>
      <td>This symbol represents the multiplicative identity element.</td>
   </tr>
   <tr>
      <td> op_node </td>
      <td>
         <a href="../cd/experimental/polyslp.xhtml"> polyslp </a>
      </td>
      <td>This constructor takes three arguments. The first argument is a symbol from opnode, meant to specify whether the node is a plus, minus times or divide node, the second and third arguments are integers, which are the numbers of the lines which are the arguments of the operation</td>
   </tr>
   <tr>
      <td> or </td>
      <td>
         <a href="../cd/Official/logic1.xhtml"> logic1 </a>
      </td>
      <td>This symbol represents the logical or function which is an n-ary function taking boolean arguments and returning a boolean value. It is true if any of the arguments are true or false otherwise.</td>
   </tr>
   <tr>
      <td> orbit </td>
      <td>
         <a href="../cd/experimental/permgrp.xhtml"> permgrp </a>
      </td>
      <td>The binary function whose value is the set of integers which are in the orbit of the second argument under the action of the first argument which is a permutation group.</td>
   </tr>
   <tr>
      <td> order </td>
      <td>
         <a href="../cd/experimental/relation0.xhtml">       relation0    </a>
      </td>
      <td>Proposition; the type of order relations, namely relations that are reflexive, antisymmetric and transitive.</td>
   </tr>
   <tr>
      <td> ordering </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>Used as an attribute to indicate an ordering of the terms in a polynomial or list of polynomials. The value of this attribute should be one of the constructors specifying ordering.</td>
   </tr>
   <tr>
      <td> otherwise </td>
      <td>
         <a href="../cd/Official/piece1.xhtml"> piece1 </a>
      </td>
      <td>This symbol introduces the 'default' value of a piecewise construct. If none of the previous piece constructs can provide the value, this will. It has a single child, the value.</td>
   </tr>
   <tr>
      <td> outerproduct </td>
      <td>
         <a href="../cd/Official/linalg1.xhtml"> linalg1 </a>
      </td>
      <td>This symbol represents the outer product function. It takes two vector arguments and returns a matrix. It is defined as follows: if we write the {i,j}'th element of the matrix to be returned as m_{i,j}, then: m_{i,j}=a_i * b_j where a_i,b_j are the i'th and j'th elements of a, b respectively.</td>
   </tr>
   <tr>
      <td> partial_equivalence </td>
      <td>
         <a href="../cd/experimental/relation0.xhtml">       relation0    </a>
      </td>
      <td>Proposition; the type of partial_equivalence relations, namely relations that are symmetric, and transitive.</td>
   </tr>
   <tr>
      <td> partialdiff </td>
      <td>
         <a href="../cd/Official/calculus1.xhtml"> calculus1 </a>
      </td>
      <td>This symbol is used to express partial differentiation of a function of more than one variable. It has two arguments, the first is a list of integers which index the variables of the function, the second is the function.</td>
   </tr>
   <tr>
      <td> partially_factored </td>
      <td>
         <a href="../cd/experimental/poly.xhtml"> poly </a>
      </td>
      <td>The constructor for a factorization. Its arguments are formal powers (see operator above), where nothing in particular is assumed about the polynomials (they may or may not be irreducible, or relatively prime).</td>
   </tr>
   <tr>
      <td> permutation </td>
      <td>
         <a href="../cd/experimental/permut1.xhtml"> permut1 </a>
      </td>
      <td>The n-ary constructor permutation. The arguments are the integers 1 .. n in some order. permutation(p1, ..., pn) is the function which takes 1 to p1, 2 to p2 and so on.</td>
   </tr>
   <tr>
      <td> peta </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $10^15$</td>
   </tr>
   <tr>
      <td> pi </td>
      <td>
         <a href="../cd/Official/nums1.xhtml"> nums1 </a>
      </td>
      <td>A symbol to convey the notion of pi, approximately 3.142. The ratio of the circumference of a circle to its diameter.</td>
   </tr>
   <tr>
      <td> pico </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $10^-12$</td>
   </tr>
   <tr>
      <td> piece </td>
      <td>
         <a href="../cd/Official/piece1.xhtml"> piece1 </a>
      </td>
      <td>This introduces an individual component of a piecewise definition. It has precisely two arguments: the first is the value, and the second is a Boolean (meant to be a predicate) which is true if and only if this piece is to provide the value of the piecewise construct.</td>
   </tr>
   <tr>
      <td> piecewise </td>
      <td>
         <a href="../cd/Official/piece1.xhtml"> piece1 </a>
      </td>
      <td>This operator heads an expression that is being defined piecewise. Its arguments are n objects built with the piece constructor, optionally followed by one built with otherwise constructor.</td>
   </tr>
   <tr>
      <td> pint </td>
      <td>
         <a href="../cd/experimental/units_imperial1.xhtml"> units_imperial1 </a>
      </td>
      <td>This symbol represents the measure of one (imperial) pint. This is the standard imperial measure for volume. See units_us1 for the U.S. pint.</td>
   </tr>
   <tr>
      <td> pint_us_dry </td>
      <td>
         <a href="../cd/experimental/units_us1.xhtml"> units_us1 </a>
      </td>
      <td>This symbol represents the measure of one U.S. dry pint.</td>
   </tr>
   <tr>
      <td> pint_us_liquid </td>
      <td>
         <a href="../cd/experimental/units_us1.xhtml"> units_us1 </a>
      </td>
      <td>This symbol represents the measure of one U.S. liquid pint.</td>
   </tr>
   <tr>
      <td> plus </td>
      <td>
         <a href="../cd/experimental/indnat.xhtml"> indnat </a>
      </td>
      <td>Addition of natural numbers defined recursively by using the successor.</td>
   </tr>
   <tr>
      <td> plus </td>
      <td>
         <a href="../cd/experimental/opnode.xhtml"> opnode </a>
      </td>
      <td>A constant value, constructs the plus for addition nodes.</td>
   </tr>
   <tr>
      <td> plus </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>The sum. The argument is a DMPL. The sum lies within the same "PolyRingD" i.e. a program implementing this operation should return a DMP with the same "poly_ring_d" (or "poly_ring_d_named").</td>
   </tr>
   <tr>
      <td> plus </td>
      <td>
         <a href="../cd/Official/arith1.xhtml"> arith1 </a>
      </td>
      <td>The symbol representing an n-ary commutative function plus.</td>
   </tr>
   <tr>
      <td> poly_r_rep </td>
      <td>
         <a href="../cd/experimental/polyr.xhtml"> polyr </a>
      </td>
      <td>A constructor for the representation of polynomials. The first argument is the polynomial variable, the rest are monomials (in decreasing order of exponent).</td>
   </tr>
   <tr>
      <td> poly_ring_SLP </td>
      <td>
         <a href="../cd/experimental/polyslp.xhtml"> polyslp </a>
      </td>
      <td>The constructor of the polynomial ring. The first argument is a ring, (the ring of the coefficients), the rest are the variables, in any order.</td>
   </tr>
   <tr>
      <td> poly_ring_d </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>The constructor of polynomial ring. The first argument is a ring (the ring of the coefficients), the second is the number of variables as an integer.</td>
   </tr>
   <tr>
      <td> poly_ring_d_named </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>The constructor of polynomial ring. The first argument is a ring (the ring of the coefficients), the remaining arguments are the names of the variables. The first variable given is the most important from the point of view of lexicographic ordering, then the second, and so on.</td>
   </tr>
   <tr>
      <td> poly_u_rep </td>
      <td>
         <a href="../cd/experimental/polyu.xhtml"> polyu </a>
      </td>
      <td>A constructor for the representation of polynomials. The first argument is the polynomial variable, the rest are monomials (in decreasing order of exponent).</td>
   </tr>
   <tr>
      <td> polynomial_SLP </td>
      <td>
         <a href="../cd/experimental/polyslp.xhtml"> polyslp </a>
      </td>
      <td>The constructor of Polynomials built with Straight Line Program representation. The first argument is the polynomial ring containing the polynomial built with poly_ring_SLP, The second argument is the program body built with prog_body.</td>
   </tr>
   <tr>
      <td> polynomial_r </td>
      <td>
         <a href="../cd/experimental/polyr.xhtml"> polyr </a>
      </td>
      <td>The constructor of Recursive Polynomials. The first argument is the polynomial ring containing the polynomial and the second is a "poly_r_rep".</td>
   </tr>
   <tr>
      <td> polynomial_ring </td>
      <td>
         <a href="../cd/experimental/polysts.xhtml">polysts</a>
      </td>
      <td>The type of all polynomial rings, e.g. from polyr or polyd OCDs</td>
   </tr>
   <tr>
      <td> polynomial_ring_r </td>
      <td>
         <a href="../cd/experimental/polyr.xhtml"> polyr </a>
      </td>
      <td>The constructor of a recursive polynomial ring. The first argument is a ring (the ring of the coefficients), the rest are the variables (in order).</td>
   </tr>
   <tr>
      <td> polynomial_ring_u </td>
      <td>
         <a href="../cd/experimental/polyu.xhtml"> polyu </a>
      </td>
      <td>The constructor of a univariate polynomial ring. The first argument is a ring (the ring of the coefficients), the second is the variable.</td>
   </tr>
   <tr>
      <td> polynomial_u </td>
      <td>
         <a href="../cd/experimental/polyu.xhtml"> polyu </a>
      </td>
      <td>The constructor of Recursive Polynomials. The first argument is the polynomial ring containing the polynomial and the second is a "poly_u_rep".</td>
   </tr>
   <tr>
      <td> pound_force </td>
      <td>
         <a href="../cd/experimental/units_imperial1.xhtml"> units_imperial1 </a>
      </td>
      <td>This symbol represents the measure of force of one pound.</td>
   </tr>
   <tr>
      <td> pound_mass </td>
      <td>
         <a href="../cd/experimental/units_imperial1.xhtml"> units_imperial1 </a>
      </td>
      <td>This symbol represents the measure of the mass which weighs one pound under the influence of standard gravity.</td>
   </tr>
   <tr>
      <td> power </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>The power. First argument is a DMP, second argument is the integer power. The power lies within the same "PolyRingD" i.e. a program implementing this operation should return a DMP with the same "poly_ring_d" (or "poly_ring_d_named").</td>
   </tr>
   <tr>
      <td> power </td>
      <td>
         <a href="../cd/experimental/poly.xhtml"> poly </a>
      </td>
      <td>Takes a polynomial and a (non-negative) integer and produces a formal power. Although OpenMath does not specify operational semantics, the idea here is that these powers are not evaluated. We note that the power from arith1 would suggest the expanded form.</td>
   </tr>
   <tr>
      <td> power </td>
      <td>
         <a href="../cd/Official/arith1.xhtml"> arith1 </a>
      </td>
      <td>This symbol represents a power function. The first argument is raised to the power of the second argument. When the second argument is not an integer, powering is defined in terms of exponentials and logarithms for the complex and real numbers. This operator can represent general powering.</td>
   </tr>
   <tr>
      <td> pre_order </td>
      <td>
         <a href="../cd/experimental/relation0.xhtml">       relation0    </a>
      </td>
      <td>Proposition; the type of preorder relations, namely relations that are reflexive and transitive.</td>
   </tr>
   <tr>
      <td> prefix </td>
      <td>
         <a href="../cd/experimental/units_ops1.xhtml"> units_ops1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by 1,000 ($10^{3}$)</td>
   </tr>
   <tr>
      <td> pressure </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the pressure physical dimension.</td>
   </tr>
   <tr>
      <td> product </td>
      <td>
         <a href="../cd/Official/arith1.xhtml"> arith1 </a>
      </td>
      <td>An operator taking two arguments, the first being the range of multiplication e.g. an integral interval, the second being the function to be multiplied. Note that the product may be over an infinite interval.</td>
   </tr>
   <tr>
      <td> prog_body </td>
      <td>
         <a href="../cd/experimental/polyslp.xhtml"> polyslp </a>
      </td>
      <td>The constructor of the body of the straight line program the arguments represent straight line instructions, as constructed by the following three constructors, op_node, inp_node and const_node, possibly wrapped in the return symbol (from the opnode CD). The order is taken to be the order in which they appear.</td>
   </tr>
   <tr>
      <td> prsubset </td>
      <td>
         <a href="../cd/Official/multiset1.xhtml"> multiset1 </a>
      </td>
      <td>This symbol has two (multiset) arguments. It is used to denote that the first multiset is a proper subset of the second, that is a subset of the second multiset but not actually equal to it.</td>
   </tr>
   <tr>
      <td> prsubset </td>
      <td>
         <a href="../cd/Official/set1.xhtml"> set1 </a>
      </td>
      <td>This symbol has two (set) arguments. It is used to denote that the first set is a proper subset of the second, that is a subset of the second set but not actually equal to it.</td>
   </tr>
   <tr>
      <td> quotient </td>
      <td>
         <a href="../cd/experimental/polyslp.xhtml"> polyslp </a>
      </td>
      <td>A quotient function for polynomials represented by slps. It is a requirement that this is an exact division.</td>
   </tr>
   <tr>
      <td> quotient </td>
      <td>
         <a href="../cd/Official/integer1.xhtml"> integer1 </a>
      </td>
      <td>The symbol to represent the integer (binary) division operator. That is, for integers a and b, quotient(a,b) denotes q such that a=b*q+r, with |r| less than |b| and a*r positive.</td>
   </tr>
   <tr>
      <td> quotient_group </td>
      <td>
         <a href="../cd/experimental/gp1.xhtml"> gp1 </a>
      </td>
      <td>The binary function whose value is the factor group of the first argument by the second, assuming the second is normal in the first.</td>
   </tr>
   <tr>
      <td> range </td>
      <td>
         <a href="../cd/Official/fns1.xhtml"> fns1 </a>
      </td>
      <td>This symbol denotes the range of a function, that is a set that the function will map to. The single argument should be the function whos range is being queried. It should be noted that this is not necessarily equal to the image, it is merely required to contain the image.</td>
   </tr>
   <tr>
      <td> rank </td>
      <td>
         <a href="../cd/experimental/linalg4.xhtml"> linalg4 </a>
      </td>
      <td>This symbol represents the function which takes one matrix argument and returns the number of linearly independent rows (or columns) of that matrix.</td>
   </tr>
   <tr>
      <td> rational </td>
      <td>
         <a href="../cd/Official/nums1.xhtml"> nums1 </a>
      </td>
      <td>This symbol represents the constructor function for rational numbers. It takes two arguments, the first is an integer p to denote the numerator and the second a nonzero integer q to denote the denominator of the rational p/q.</td>
   </tr>
   <tr>
      <td> rational_type </td>
      <td>
         <a href="../cd/Official/mathmltypes.xhtml"> mathmltypes </a>
      </td>
      <td>A symbol to be used as the argument of the type symbol to convey the type of a rational number.</td>
   </tr>
   <tr>
      <td> real </td>
      <td>
         <a href="../cd/Official/complex1.xhtml"> complex1 </a>
      </td>
      <td>This represents the real part of a complex number</td>
   </tr>
   <tr>
      <td> real_type </td>
      <td>
         <a href="../cd/Official/mathmltypes.xhtml"> mathmltypes </a>
      </td>
      <td>A symbol to be used as the argument of the type symbol to convey the type of a real number.</td>
   </tr>
   <tr>
      <td> reduce </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>The reduction of a polynomial with respect to a Groebner basis. First argument is a DMP, the second argument is a "groebnered" object. i.e. a program implementing this operation should return a DMP which represents the polynomial reduced with respect to the Groebner basis.</td>
   </tr>
   <tr>
      <td> reflexive </td>
      <td>
         <a href="../cd/experimental/relation0.xhtml">       relation0    </a>
      </td>
      <td>Proposition; the type of reflexive binary relations.</td>
   </tr>
   <tr>
      <td> relation </td>
      <td>
         <a href="../cd/experimental/relation0.xhtml">       relation0    </a>
      </td>
      <td>Type constructor; returns the type of binary relations on a set.</td>
   </tr>
   <tr>
      <td> remainder </td>
      <td>
         <a href="../cd/Official/integer1.xhtml"> integer1 </a>
      </td>
      <td>The symbol to represent the integer remainder after (binary) division. For integers a and b, remainder(a,b) denotes r such that a=b*q+r, with |r| less than |b| and a*r positive.</td>
   </tr>
   <tr>
      <td> resistance </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the resistance physical dimension, it is the resistance that an electrical circuit has to flow of charge.</td>
   </tr>
   <tr>
      <td> rest </td>
      <td>
         <a href="../cd/experimental/list2.xhtml"> list2 </a>
      </td>
      <td>This symbol represents a function which returns a list made up of all the elements except the first of its argument, which should be a list.</td>
   </tr>
   <tr>
      <td> resultant </td>
      <td>
         <a href="../cd/experimental/poly.xhtml"> poly </a>
      </td>
      <td>Function taking three arguments, it represents the resultant of two polynomials, which are the first two arguments, with respect to the given variable which is the third argument.</td>
   </tr>
   <tr>
      <td> return </td>
      <td>
         <a href="../cd/experimental/opnode.xhtml"> opnode </a>
      </td>
      <td>A unary function, takes a node of an slp, returns the value of the polynomial which corresponds to this node of the slp.</td>
   </tr>
   <tr>
      <td> return_node </td>
      <td>
         <a href="../cd/experimental/polyslp.xhtml"> polyslp </a>
      </td>
      <td>Takes an slp as the argument, and returns the return node of the slp.</td>
   </tr>
   <tr>
      <td> reverse </td>
      <td>
         <a href="../cd/experimental/list2.xhtml"> list2 </a>
      </td>
      <td>The reverse of a list</td>
   </tr>
   <tr>
      <td> reverse_lexicographic </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>The reverse lexicographic ordering of terms. Note that, if a poly_ring_d_named is used, lexigographic refers to the order of the variables in the poly_ring_d_named, not to their order as strings.</td>
   </tr>
   <tr>
      <td> right_compose </td>
      <td>
         <a href="../cd/experimental/fns2.xhtml"> fns2 </a>
      </td>
      <td>This symbol represents a function forming the right-composition of its two functional arguments.</td>
   </tr>
   <tr>
      <td> right_inverse </td>
      <td>
         <a href="../cd/Official/fns1.xhtml"> fns1 </a>
      </td>
      <td>This symbol is used to describe the right inverse of its argument (a function). This inverse may only be partially defined because the function may not have been surjective. If the function is not surjective the right inverse function is ill-defined without further stipulations. No other assumptions are made on the semantics of this right inverse.</td>
   </tr>
   <tr>
      <td> right_ref </td>
      <td>
         <a href="../cd/experimental/polyslp.xhtml"> polyslp </a>
      </td>
      <td>Takes as argument a node of an slp. Returns the value of the right hand pointer of the node.</td>
   </tr>
   <tr>
      <td> right_transversal </td>
      <td>
         <a href="../cd/experimental/gp1.xhtml"> gp1 </a>
      </td>
      <td>The binary function whose value is a set of representatives for the right cosets of the second argument as a subgroup of the first.</td>
   </tr>
   <tr>
      <td> root </td>
      <td>
         <a href="../cd/Official/arith1.xhtml"> arith1 </a>
      </td>
      <td>A binary operator which represents its first argument "lowered" to its n'th root where n is the second argument. This is the inverse of the operation represented by the power symbol defined in this CD. Care should be taken as to the precise meaning of this operator, in particular which root is represented, however it is here to represent the general notion of taking n'th roots. As inferred by the signature relevant to this symbol, the function represented by this symbol is the single valued function, the specific root returned is the one indicated by the first CMP. Note also that the converse of the second CMP is not valid in general.</td>
   </tr>
   <tr>
      <td> round </td>
      <td>
         <a href="../cd/Official/rounding1.xhtml"> rounding1 </a>
      </td>
      <td>The round to nearest operation.</td>
   </tr>
   <tr>
      <td> rowcount </td>
      <td>
         <a href="../cd/experimental/linalg4.xhtml"> linalg4 </a>
      </td>
      <td>This symbol represents the function which takes one matrix argument and returns the number of rows in that matrix.</td>
   </tr>
   <tr>
      <td> scalar </td>
      <td>
         <a href="../cd/experimental/linalg5.xhtml"> linalg5 </a>
      </td>
      <td>This symbol represents a matrix which is a scalar constant times the identity matrix. It should take two arguments, the first specifes the number of rows and columns in the matrix respectively and the third specifies the scalar multiplier.</td>
   </tr>
   <tr>
      <td> scalarproduct </td>
      <td>
         <a href="../cd/Official/linalg1.xhtml"> linalg1 </a>
      </td>
      <td>This symbol represents the scalar product function. It takes two vector arguments and returns a scalar value. The scalar product of two vectors a, b is defined as |a| * |b| * cos(\theta), where \theta is the angle between the two vectors and |.| is a euclidean size function. Note that the scalar product is often referred to as the dot product.</td>
   </tr>
   <tr>
      <td> sdev </td>
      <td>
         <a href="../cd/Official/s_data1.xhtml"> s_data1 </a>
      </td>
      <td>This symbol represents a function requiring two or more arguments, denoting the sample standard deviation of its arguments. That is, the square root of (the sum of the squares of the deviations from the mean of the arguments, divided by the number of arguments). See CRC Standard Mathematical Tables and Formulae, editor: Dan Zwillinger, CRC Press Inc., 1996, (7.7.11) section 7.7.1.</td>
   </tr>
   <tr>
      <td> sdev </td>
      <td>
         <a href="../cd/Official/s_dist1.xhtml"> s_dist1 </a>
      </td>
      <td>This symbol represents a unary function denoting the standard deviation of a distribution. The argument is a univariate function to describe the distribution. The standard deviation of a distribution is the arithmetical mean of the squares of the deviation of the distribution from the mean.</td>
   </tr>
   <tr>
      <td> sec </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the sec function as described in Abramowitz and Stegun, section 4.3. It takes one argument.</td>
   </tr>
   <tr>
      <td> sech </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the sech function as described in Abramowitz and Stegun, section 4.5. It takes one argument.</td>
   </tr>
   <tr>
      <td> second </td>
      <td>
         <a href="../cd/experimental/units_metric1.xhtml"> units_metric1 </a>
      </td>
      <td>This symbol represents the measure of one second. This is the standard SI measure for time.</td>
   </tr>
   <tr>
      <td> second </td>
      <td>
         <a href="../cd/experimental/units_time1.xhtml"> units_time1 </a>
      </td>
      <td>This symbol represents the measure of one second of time. This is the standard SI unit measure for time.</td>
   </tr>
   <tr>
      <td> set </td>
      <td>
         <a href="../cd/Official/set1.xhtml"> set1 </a>
      </td>
      <td>This symbol represents the set construct. It is an n-ary function. The set entries are given explicitly. There is no implied ordering to the elements of a set.</td>
   </tr>
   <tr>
      <td> set_type </td>
      <td>
         <a href="../cd/Official/mathmltypes.xhtml"> mathmltypes </a>
      </td>
      <td>A symbol to be used as the argument of the type symbol to convey the type for a set.</td>
   </tr>
   <tr>
      <td> setdiff </td>
      <td>
         <a href="../cd/Official/multiset1.xhtml"> multiset1 </a>
      </td>
      <td>This symbol is used to denote the multiset difference of two multisets. It takes two multisets as arguments, and denotes the multiset that contains all the elements that occur in the first multiset with strictly greater multiplicity than in the second. The multiplicity in the result is the difference of the two.</td>
   </tr>
   <tr>
      <td> setdiff </td>
      <td>
         <a href="../cd/Official/set1.xhtml"> set1 </a>
      </td>
      <td>This symbol is used to denote the set difference of two sets. It takes two sets as arguments, and denotes the set that contains all the elements that occur in the first set, but not in the second.</td>
   </tr>
   <tr>
      <td> sin </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the sin function as described in Abramowitz and Stegun, section 4.3. It takes one argument.</td>
   </tr>
   <tr>
      <td> sinh </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the sinh function as described in Abramowitz and Stegun, section 4.5. It takes one argument.</td>
   </tr>
   <tr>
      <td> size </td>
      <td>
         <a href="../cd/experimental/linalg4.xhtml"> linalg4 </a>
      </td>
      <td>This symbol represents the function which takes one vector argument and returns the length of that vector.</td>
   </tr>
   <tr>
      <td> size </td>
      <td>
         <a href="../cd/experimental/list2.xhtml"> list2 </a>
      </td>
      <td>This symbol is used to denote the number of elements in a list. It is either a non-negative integer.</td>
   </tr>
   <tr>
      <td> size </td>
      <td>
         <a href="../cd/Official/multiset1.xhtml"> multiset1 </a>
      </td>
      <td>This symbol is used to denote the number of elements in a multiset. It is either a non-negative integer, or an infinite cardinal number. The symbol infinity may be used for an unspecified infinite cardinal.</td>
   </tr>
   <tr>
      <td> size </td>
      <td>
         <a href="../cd/Official/set1.xhtml"> set1 </a>
      </td>
      <td>This symbol is used to denote the number of elements in a set. It is either a non-negative integer, or an infinite cardinal number. The symbol infinity may be used for an unspecified infinite cardinal.</td>
   </tr>
   <tr>
      <td> skew-symmetric </td>
      <td>
         <a href="../cd/experimental/linalg5.xhtml"> linalg5 </a>
      </td>
      <td>This symbol represents a skew-symmetric matrix, it takes one argument. The argument should be a vector of vectors of elements of the matrix. For j&gt;i the ij'th element of the matrix is the (j-i+1)'th element of the i'th element of the argument. This determines the elements above the diagonal of the matrix, the elements below the diagonal of the matrix must conform to the rule M = - transpose M. This rule implies that the elements on the diagonal must be equal to 0, therefore we do not include these in the argument.</td>
   </tr>
   <tr>
      <td> slp_degree </td>
      <td>
         <a href="../cd/experimental/polyslp.xhtml"> polyslp </a>
      </td>
      <td>A unary function taking an slp as argument and returning the apparent multiplicative degree of the slp, without performing any cancellation.</td>
   </tr>
   <tr>
      <td> speed </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the speed physical dimension. It is the size of the derivative of distance with respect to time.</td>
   </tr>
   <tr>
      <td> speed_of_light </td>
      <td>
         <a href="../cd/experimental/physical_consts1.xhtml"> physical_consts1 </a>
      </td>
      <td>This symbol represents the speed of light in a vacuum. It is approximately 299792458 metres per second.</td>
   </tr>
   <tr>
      <td> squarefree </td>
      <td>
         <a href="../cd/experimental/poly.xhtml"> poly </a>
      </td>
      <td>The square-free decomposition of its argument. A program that can compute the factorization is required to return a "squarefreed" object.</td>
   </tr>
   <tr>
      <td> squarefreed </td>
      <td>
         <a href="../cd/experimental/poly.xhtml"> poly </a>
      </td>
      <td>The constructor for a square-free factorization. Its arguments should have the structure of the above "factored", where the polynomials should be square-free. Note that this is not necessarily a minimal square-free decomposition: some exponents can occur more than once. Again, this is a statement that we have a square-free factorisation, rather than a request to compute one.</td>
   </tr>
   <tr>
      <td> stabilizer </td>
      <td>
         <a href="../cd/experimental/permgrp.xhtml"> permgrp </a>
      </td>
      <td>The first argument is a permutation group, the second is some object (point or set) upon which the first argument acts. The value is the subgroup of the first argument which stabilize the second argument.</td>
   </tr>
   <tr>
      <td> strict_order </td>
      <td>
         <a href="../cd/experimental/relation0.xhtml">       relation0    </a>
      </td>
      <td>Proposition; the type of strict order relations, namely relations that are irreflexive, antisymmetric and transitive.</td>
   </tr>
   <tr>
      <td> string </td>
      <td>
         <a href="../cd/experimental/omtypes.xhtml"> omtypes </a>
      </td>
      <td>The type of character strings</td>
   </tr>
   <tr>
      <td> subset </td>
      <td>
         <a href="../cd/Official/multiset1.xhtml"> multiset1 </a>
      </td>
      <td>This symbol has two (multiset) arguments. It is used to denote that the first set is a subset of the second, i.e. every element of the first occurs with multiplicity at least as much in the second.</td>
   </tr>
   <tr>
      <td> subset </td>
      <td>
         <a href="../cd/Official/set1.xhtml"> set1 </a>
      </td>
      <td>This symbol has two (set) arguments. It is used to denote that the first set is a subset of the second.</td>
   </tr>
   <tr>
      <td> succ </td>
      <td>
         <a href="../cd/experimental/indnat.xhtml"> indnat </a>
      </td>
      <td>Successor function on the natural number. Constructor for the inductively defined natural numbers. Takes argument a a natural number and returns a natural number.</td>
   </tr>
   <tr>
      <td> sum </td>
      <td>
         <a href="../cd/Official/arith1.xhtml"> arith1 </a>
      </td>
      <td>An operator taking two arguments, the first being the range of summation, e.g. an integral interval, the second being the function to be summed. Note that the sum may be over an infinite interval.</td>
   </tr>
   <tr>
      <td> sylow_subgroup </td>
      <td>
         <a href="../cd/experimental/gp1.xhtml"> gp1 </a>
      </td>
      <td>The largest p-subgroup of the argument (up to conjugacy).</td>
   </tr>
   <tr>
      <td> symmetric </td>
      <td>
         <a href="../cd/experimental/linalg5.xhtml"> linalg5 </a>
      </td>
      <td>This symbol represents a symmetric matrix, it takes one argument. The argument should be a vector of vectors of elements of the matrix. For j&gt;=i the ij'th element of the matrix is the (j-i+1)'th element of the i'th element of the argument. This determines the upper triangle of the matrix, the lower triangle is specified by the rule M = transpose M.</td>
   </tr>
   <tr>
      <td> symmetric </td>
      <td>
         <a href="../cd/experimental/relation0.xhtml">       relation0    </a>
      </td>
      <td>Proposition; the type of symmetric binary relations.</td>
   </tr>
   <tr>
      <td> symtype </td>
      <td>
         <a href="../cd/experimental/omtypes.xhtml"> omtypes </a>
      </td>
      <td>The type of symbolic types introduced in other CDs</td>
   </tr>
   <tr>
      <td> tan </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the tan function as described in Abramowitz and Stegun, section 4.3. It takes one argument.</td>
   </tr>
   <tr>
      <td> tanh </td>
      <td>
         <a href="../cd/Official/transc1.xhtml"> transc1 </a>
      </td>
      <td>This symbol represents the tanh function as described in Abramowitz and Stegun, section 4.5. It takes one argument.</td>
   </tr>
   <tr>
      <td> temperature </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the temperature physical dimension.</td>
   </tr>
   <tr>
      <td> tera </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $10^12$</td>
   </tr>
   <tr>
      <td> term </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>The constructor of terms. Valid applications are of the form Term(coeff, exp1, exp2, ... expn) which represents the term coeff * var1^exp1*...varn^expn where n is the number of variables, expi are non-negative integers. coeff should be non-zero.</td>
   </tr>
   <tr>
      <td> term </td>
      <td>
         <a href="../cd/experimental/polyr.xhtml"> polyr </a>
      </td>
      <td>A constructor for monomials, that is products of powers and elements of the base ring. First argument is from N (the exponent of the variable implied by an outer poly_r_rep) second argument is a coefficient (from the ground field, or a polynomial in lesser variables).</td>
   </tr>
   <tr>
      <td> term </td>
      <td>
         <a href="../cd/experimental/polyu.xhtml"> polyu </a>
      </td>
      <td>A constructor for monomials, that is products of powers and elements of the base ring. First argument is from N (the exponent of the variable implied by an outer poly_u_rep) second argument is a coefficient (from the ground field)</td>
   </tr>
   <tr>
      <td> time </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the time physical dimension.</td>
   </tr>
   <tr>
      <td> times </td>
      <td>
         <a href="../cd/experimental/arith2.xhtml"> arith2 </a>
      </td>
      <td>The symbol representing an n-ary multiplication function inheriting from the times in arith1, but with the extra property that here it must be commutative.</td>
   </tr>
   <tr>
      <td> times </td>
      <td>
         <a href="../cd/experimental/indnat.xhtml"> indnat </a>
      </td>
      <td>Multiplication of natural numbers defined recursively by using the successor and plus.</td>
   </tr>
   <tr>
      <td> times </td>
      <td>
         <a href="../cd/experimental/opnode.xhtml"> opnode </a>
      </td>
      <td>A constant value, constructs the times for multiplication nodes.</td>
   </tr>
   <tr>
      <td> times </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>The product. The argument is a DMPL. The product lies within the same "PolyRingD" i.e. a program implementing this operation should return a DMP with the same "poly_ring_d" (or "poly_ring_d_named").</td>
   </tr>
   <tr>
      <td> times </td>
      <td>
         <a href="../cd/Official/arith1.xhtml"> arith1 </a>
      </td>
      <td>The symbol representing an n-ary multiplication function.</td>
   </tr>
   <tr>
      <td> transitive </td>
      <td>
         <a href="../cd/experimental/relation0.xhtml">       relation0    </a>
      </td>
      <td>Proposition; the type of transitive binary relations.</td>
   </tr>
   <tr>
      <td> transpose </td>
      <td>
         <a href="../cd/Official/linalg1.xhtml"> linalg1 </a>
      </td>
      <td>This symbol represents a unary function that denotes the transpose of the given matrix or vector</td>
   </tr>
   <tr>
      <td> tridiagonal </td>
      <td>
         <a href="../cd/experimental/linalg5.xhtml"> linalg5 </a>
      </td>
      <td>This symbol represents a tridiagonal matrix, it takes one argument which should be a vector of vectors which should have three elements. These should be vectors representing the sub-diagonal, the diagonal and the super-diagonal in that order.</td>
   </tr>
   <tr>
      <td> true </td>
      <td>
         <a href="../cd/Official/logic1.xhtml"> logic1 </a>
      </td>
      <td>This symbol represents the boolean value true.</td>
   </tr>
   <tr>
      <td> trunc </td>
      <td>
         <a href="../cd/Official/rounding1.xhtml"> rounding1 </a>
      </td>
      <td>The round to zero operation.</td>
   </tr>
   <tr>
      <td> type </td>
      <td>
         <a href="../cd/experimental/cc.xhtml"> cc </a>
      </td>
      <td>Attribution tag to denote type-judgement</td>
   </tr>
   <tr>
      <td> type </td>
      <td>
         <a href="../cd/experimental/ecc.xhtml"> ecc </a>
      </td>
      <td>Attribution tag to denote type-judgement</td>
   </tr>
   <tr>
      <td> type </td>
      <td>
         <a href="../cd/experimental/icc.xhtml"> icc </a>
      </td>
      <td>Attribution tag to denote type-judgement</td>
   </tr>
   <tr>
      <td> type </td>
      <td>
         <a href="../cd/experimental/lc.xhtml"> lc </a>
      </td>
      <td>Attribution tag to denote type-judgement</td>
   </tr>
   <tr>
      <td> type </td>
      <td>
         <a href="../cd/experimental/sts.xhtml">sts</a>
      </td>
      <td>A symbol to be used within an OpenMath attribute to specify the type of the object.</td>
   </tr>
   <tr>
      <td> type </td>
      <td>
         <a href="../cd/Official/mathmltypes.xhtml"> mathmltypes </a>
      </td>
      <td>A symbol to be used within an OpenMath attribute to specify the type of the object.</td>
   </tr>
   <tr>
      <td> typecoerce </td>
      <td>
         <a href="../cd/experimental/cc.xhtml"> cc </a>
      </td>
      <td>Attribution tag to denote type-judgement with coercion</td>
   </tr>
   <tr>
      <td> typecoerce </td>
      <td>
         <a href="../cd/experimental/ecc.xhtml"> ecc </a>
      </td>
      <td>Attribution tag to denote type-judgement with coercion</td>
   </tr>
   <tr>
      <td> typecoerce </td>
      <td>
         <a href="../cd/experimental/icc.xhtml"> icc </a>
      </td>
      <td>Attribution tag to denote type-judgement with coercion</td>
   </tr>
   <tr>
      <td> typecoerce </td>
      <td>
         <a href="../cd/experimental/lc.xhtml"> lc </a>
      </td>
      <td>Attribution tag to denote type-judgement with coercion</td>
   </tr>
   <tr>
      <td> unary_minus </td>
      <td>
         <a href="../cd/Official/arith1.xhtml"> arith1 </a>
      </td>
      <td>This symbol denotes unary minus, i.e. the additive inverse.</td>
   </tr>
   <tr>
      <td> unexpected </td>
      <td>
         <a href="../cd/experimental/moreerrors.xhtml"> moreerrors </a>
      </td>
      <td>This symbol represents the error which is returned when an application reads an error caused by an unexpected problem. It will have at least one argument, which is a string describing the problem. It may have a second argument which is relevant to the error.</td>
   </tr>
   <tr>
      <td> unexpected_symbol </td>
      <td>
         <a href="../cd/experimental/error.xhtml"> error </a>
      </td>
      <td>This symbol represents the error which is raised when an application reads a symbol which is not present in the mentioned content dictionary. When receiving such a symbol, the application should act as if it had received the OpenMath error object constructed from unexpected_symbol and the unexpected symbol as in the example below.</td>
   </tr>
   <tr>
      <td> unhandled_symbol </td>
      <td>
         <a href="../cd/experimental/error.xhtml"> error </a>
      </td>
      <td>This symbol represents the error which is raised when an application reads a symbol which is present in the mentioned content dictionary, but which it has not implemented. When receiving such a symbol, the application should act as if it had received the OpenMath error object constructed from unhandled_symbol and the unhandled symbol as in the example below.</td>
   </tr>
   <tr>
      <td> union </td>
      <td>
         <a href="../cd/Official/multiset1.xhtml"> multiset1 </a>
      </td>
      <td>This symbol is used to denote the n-ary union of multisets. It takes multisets as arguments, and denotes the multiset that contains all the elements that occur in any of them, with multiplicity the sum of all the multiplicities in the multiset arguments.</td>
   </tr>
   <tr>
      <td> union </td>
      <td>
         <a href="../cd/Official/set1.xhtml"> set1 </a>
      </td>
      <td>This symbol is used to denote the n-ary union of sets. It takes sets as arguments, and denotes the set that contains all the elements that occur in any of them.</td>
   </tr>
   <tr>
      <td> unit_prefix </td>
      <td>
         <a href="../cd/experimental/units_sts.xhtml">units_sts</a>
      </td>
      <td>The type of all unit prefixes, such as "kilo".</td>
   </tr>
   <tr>
      <td> unsupported_CD </td>
      <td>
         <a href="../cd/experimental/error.xhtml"> error </a>
      </td>
      <td>This symbol represents the error which is raised when an application reads a symbol where the mentioned content dictionary is not present. When receiving such a symbol, the application should act as if it had received the OpenMath error object constructed from unsupported_CD and the symbol from the unsupported Content Dictionary as in the example below.</td>
   </tr>
   <tr>
      <td> unwind </td>
      <td>
         <a href="../cd/experimental/transc2.xhtml"> transc2 </a>
      </td>
      <td>The unwinding number denotes the extent to which $z=\ln\exp z$ is not true. It was orignally defined in Corless,R.M. &amp; Jeffrey,D.J., The Unwinding Number. SIGSAM Bulletin 30(1996) 2, pp. 28-35. However, we take the definition (which has a change of sign) from Corless,R.M., Davenport,J.H., Jeffrey,D.J. &amp; Watt,S.M., According to Abramowitz and Stegun. SIGSAM Bulletin 34(2000) 2, pp. 58--65. Note that the symbol is normally denoted by ${\cal K}$.</td>
   </tr>
   <tr>
      <td> upper-Hessenberg </td>
      <td>
         <a href="../cd/experimental/linalg5.xhtml"> linalg5 </a>
      </td>
      <td>This symbol represents an upper-Hessenberg matrix, it takes one argument, the argument is a vector of vectors representing the non-zero elements. The first element of the argument specifies the value of the first subdiagonal, the subsequent elements specify the value of the diagonal and subsequent super-diagonals, all other elements are zero.</td>
   </tr>
   <tr>
      <td> upper-triangular </td>
      <td>
         <a href="../cd/experimental/linalg5.xhtml"> linalg5 </a>
      </td>
      <td>This symbol represents an upper-triangular matrix, it takes one argument. The argument should be a vector of vectors of elements of the matrix.</td>
   </tr>
   <tr>
      <td> variance </td>
      <td>
         <a href="../cd/Official/s_data1.xhtml"> s_data1 </a>
      </td>
      <td>This symbol represents a function requiring two or more arguments, denoting the variance of its arguments. That is, the square of the standard deviation.</td>
   </tr>
   <tr>
      <td> variance </td>
      <td>
         <a href="../cd/Official/s_dist1.xhtml"> s_dist1 </a>
      </td>
      <td>This symbol represents a unary function denoting the variance of a distribution. The argument is a function to describe the distribution. That is if f is the function which describes the distribution. The variance of a distribution is the square of the standard deviation of the distribution.</td>
   </tr>
   <tr>
      <td> vector </td>
      <td>
         <a href="../cd/experimental/linalg3.xhtml"> linalg3 </a>
      </td>
      <td>This symbol represents an n-ary function used to construct (or describe) vectors. Vectors in this CD are considered to be column vectors, and must therefore be transposed to be considered as row vectors.</td>
   </tr>
   <tr>
      <td> vector </td>
      <td>
         <a href="../cd/Official/linalg2.xhtml"> linalg2 </a>
      </td>
      <td>This symbol represents an n-ary function used to construct (or describe) vectors. Vectors in this CD are considered to be row vectors and must therefore be transposed to be considered as column vectors.</td>
   </tr>
   <tr>
      <td> vector_selector </td>
      <td>
         <a href="../cd/Official/linalg1.xhtml"> linalg1 </a>
      </td>
      <td>This symbol represents the function which allows individual entries to be selected from a vector, or a matrixrow. It takes two arguments. The first argument is the position in the vector (or matrixrow) of the required entry, the second argument is the vector (or matrixrow) in question. The indexing is one based, i.e. the first element is indexed by one.</td>
   </tr>
   <tr>
      <td> vector_type </td>
      <td>
         <a href="../cd/Official/mathmltypes.xhtml"> mathmltypes </a>
      </td>
      <td>A symbol to be used as the argument of the type symbol to convey the type of a (column) vector, an n-tuple of entries.</td>
   </tr>
   <tr>
      <td> vectorproduct </td>
      <td>
         <a href="../cd/Official/linalg1.xhtml"> linalg1 </a>
      </td>
      <td>This symbol represents the vector product function. It takes two three dimensional vector arguments and returns a three dimensional vector. It is defined as follows: if we write a as [a_1,a_2,a_3] and b as [b_1,b_2,b_3] then the vector product denoted a x b = [a_2b_3 - a_3b_2 , a_3b_1 - a_1b_3 , a_1b_2 - a_2b_1]. Note that the vector product is often referred to as the cross product.</td>
   </tr>
   <tr>
      <td> velocity </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the velocity physical dimension. It is the derivative of distance with respect to time.</td>
   </tr>
   <tr>
      <td> volt </td>
      <td>
         <a href="../cd/experimental/units_metric1.xhtml"> units_metric1 </a>
      </td>
      <td>This symbol represents the measure of one volt. This is the standard SI measure for voltage.</td>
   </tr>
   <tr>
      <td> voltage </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the voltage physical dimension.</td>
   </tr>
   <tr>
      <td> volume </td>
      <td>
         <a href="../cd/experimental/dimensions1.xhtml"> dimensions1 </a>
      </td>
      <td>This symbol represents the volume physical dimension.</td>
   </tr>
   <tr>
      <td> week </td>
      <td>
         <a href="../cd/experimental/units_time1.xhtml"> units_time1 </a>
      </td>
      <td>This symbol represents the measure of one week of time.</td>
   </tr>
   <tr>
      <td> weighted </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>The first argument is a list of integers to act as variable weights, and the second is an ordering. The result is an ordering.</td>
   </tr>
   <tr>
      <td> weighted_degree </td>
      <td>
         <a href="../cd/experimental/polyd.xhtml"> polyd </a>
      </td>
      <td>The total degree of its argument, taking into account any weights declared. The value returned is an integer: non-negative if the weights are. We note that the degree of 0 is undefined.</td>
   </tr>
   <tr>
      <td> xor </td>
      <td>
         <a href="../cd/Official/logic1.xhtml"> logic1 </a>
      </td>
      <td>This symbol represents the logical xor function which is an n-ary function taking boolean arguments and returning a boolean value. It is true if there are an odd number of true arguments or false otherwise.</td>
   </tr>
   <tr>
      <td> yard </td>
      <td>
         <a href="../cd/experimental/units_imperial1.xhtml"> units_imperial1 </a>
      </td>
      <td>This symbol represents the measure of one yard. This is a standard imperial measure for distance, defined in terms of the foot.</td>
   </tr>
   <tr>
      <td> yard_us_survey </td>
      <td>
         <a href="../cd/experimental/units_us1.xhtml"> units_us1 </a>
      </td>
      <td>This symbol represents the measure of one U.S. Survey yard.</td>
   </tr>
   <tr>
      <td> yocto </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $10^-24$</td>
   </tr>
   <tr>
      <td> yotta </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $10^24$</td>
   </tr>
   <tr>
      <td> zepto </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $10^-21$</td>
   </tr>
   <tr>
      <td> zero </td>
      <td>
         <a href="../cd/experimental/indnat.xhtml"> indnat </a>
      </td>
      <td>The natural number 0, also constant base function for the inductive definition of the type of natural numbers</td>
   </tr>
   <tr>
      <td> zero </td>
      <td>
         <a href="../cd/experimental/linalg5.xhtml"> linalg5 </a>
      </td>
      <td>This symbol denotes a function with two integral arguments m,n which is used to construct an (mxn) zero matrix.</td>
   </tr>
   <tr>
      <td> zero </td>
      <td>
         <a href="../cd/Official/alg1.xhtml"> alg1 </a>
      </td>
      <td>This symbol represents the additive identity element.</td>
   </tr>
   <tr>
      <td> zero_Celsius </td>
      <td>
         <a href="../cd/experimental/physical_consts1.xhtml"> physical_consts1 </a>
      </td>
      <td>This symbol represents the zero of the Celsius temperature scale.</td>
   </tr>
   <tr>
      <td> zero_Fahrenheit </td>
      <td>
         <a href="../cd/experimental/physical_consts1.xhtml"> physical_consts1 </a>
      </td>
      <td>This symbol represents the zero of the Fahrenheit temperature scale.</td>
   </tr>
   <tr>
      <td> zetta </td>
      <td>
         <a href="../cd/experimental/units_siprefix1.xhtml"> units_siprefix1 </a>
      </td>
      <td>This symbol represents the fact that the subsequent unit has been effectively multiplied by $10^21$</td>
   </tr>
   <tr>
      <td>NumericalValue</td>
      <td>
         <a href="../cd/experimental/sts.xhtml">sts</a>
      </td>
      <td>Denotes an OpenMath object that is to be thought of as something that represents a numerical value, or a numerical value.</td>
   </tr>
   <tr>
      <td>Object</td>
      <td>
         <a href="../cd/experimental/sts.xhtml">sts</a>
      </td>
      <td>Denotes any OpenMath object.</td>
   </tr>
   <tr>
      <td>SetNumericalValue</td>
      <td>
         <a href="../cd/experimental/sts.xhtml">sts</a>
      </td>
      <td>Denotes an OpenMath object that is to be thought of as something that represents a set of numerical values, or a set of numerical values.</td>
   </tr>
   <tr>
      <td>attribution</td>
      <td>
         <a href="../cd/experimental/sts.xhtml">sts</a>
      </td>
      <td>An `attribution' object consists of pairs of keys and values. The use of the symbol `attribution' in a signature indicates that the symbol is to be used as a key.</td>
   </tr>
   <tr>
      <td>binder</td>
      <td>
         <a href="../cd/experimental/sts.xhtml">sts</a>
      </td>
      <td>An `OMBIND' object has three parts: a "binder" such as "lambda" or "for all", a (list of) bound variables, and an expression. The use of `binder' in a signature indicates that we are describing something which can only be used as the first child of an OMBIND construct.</td>
   </tr>
   <tr>
      <td>emptyset</td>
      <td>
         <a href="../cd/Official/multiset1.xhtml"> multiset1 </a>
      </td>
      <td>This symbol is used to represent the empty multiset, that is the multiset which contains no members. It takes no parameters.</td>
   </tr>
   <tr>
      <td>emptyset</td>
      <td>
         <a href="../cd/Official/set1.xhtml"> set1 </a>
      </td>
      <td>This symbol is used to represent the empty set, that is the set which contains no members. It takes no parameters.</td>
   </tr>
   <tr>
      <td>error</td>
      <td>
         <a href="../cd/experimental/sts.xhtml">sts</a>
      </td>
      <td>The error symbol is the 'return type' of error symbols in the error signature file.</td>
   </tr>
   <tr>
      <td>factorof</td>
      <td>
         <a href="../cd/Official/integer1.xhtml"> integer1 </a>
      </td>
      <td>This is the binary OpenMath operator that is used to indicate the mathematical relationship a "is a factor of" b, where a is the first argument and b is the second. This relationship is true if and only if b mod a = 0.</td>
   </tr>
   <tr>
      <td>map</td>
      <td>
         <a href="../cd/Official/set1.xhtml"> set1 </a>
      </td>
      <td>This symbol represents a mapping function which may be used to construct sets, it takes as arguments a function from X to Y and a set over X in that order. The value that is returned is a set of values in Y. The argument list may be a set or an integer_interval.</td>
   </tr>
   <tr>
      <td>mapsto</td>
      <td>
         <a href="../cd/experimental/sts.xhtml">sts</a>
      </td>
      <td>This symbol represents the construction of a function type. The first n-1 children denote the types of the arguments, the last denotes the return type.</td>
   </tr>
   <tr>
      <td>nary</td>
      <td>
         <a href="../cd/experimental/sts.xhtml">sts</a>
      </td>
      <td>Constructs a child of mapsto which denotes an arbitrary number of copies of the argument of nary.</td>
   </tr>
   <tr>
      <td>nassoc</td>
      <td>
         <a href="../cd/experimental/sts.xhtml">sts</a>
      </td>
      <td>Constructs a child of mapsto which denotes an arbitrary number of copies of the argument of nassoc. The operator is associative on these arguments which means that repeated uses may be flattened/unflattened.</td>
   </tr>
   <tr>
      <td>structure</td>
      <td>
         <a href="../cd/experimental/sts.xhtml">sts</a>
      </td>
      <td>The structure element is used to represent a structure of a particular (algebraic) type.</td>
   </tr>
   <tr>
      <td>suchthat</td>
      <td>
         <a href="../cd/Official/list1.xhtml"> list1 </a>
      </td>
      <td>This symbol represents the suchthat function which may be used to construct lists, it takes two arguments. The first argument should be the set which contains the elements of the list, the second argument should be a predicate, that is a function from the set to the booleans which describes if an element is to be in the list returned.</td>
   </tr>
   <tr>
      <td>suchthat</td>
      <td>
         <a href="../cd/Official/set1.xhtml"> set1 </a>
      </td>
      <td>This symbol represents the suchthat function which may be used to construct sets, it takes two arguments. The first argument should be the set which contains the elements of the set we wish to represent, the second argument should be a predicate, that is a function from the set to the booleans which describes if an element is to be in the set returned.</td>
   </tr>
</table>