
// form button codes

function clearcdin() {
    document.getElementById("cdin").textContent="";
    var cdoutwrapper=document.getElementById("cdoutwrapper");
    document.getElementById("errcount").textContent="";
    cdout.textContent="";
    cdoutwrapper.style.borderColor='black';
    cdoutwrapper.style.borderWidth='thin';
}

function sampleom() {
document.getElementById("cdin").textContent='\n\
<OMOBJ xmlns="http://www.openmath.org/OpenMath" verrsion="2.0" cdbase="http://www.openmath.org/cd">\n\
  <OMA>\n\
    <OMS cd="relation1" name="="/>\n\
    <OMA>\n\
      <OMA>\n\
        <OMS cd="calculus1" name="diff"/>\n\
        <OMBIND>\n\
          <OMS cd="fns1" name="lambda"/>\n\
          <OMBVAR>\n\
            <OMV name="y"/>\n\
          </OMBVAR>\n\
          <OMA style="bad">\n\
            <OMS cd="arith1" name="plus"/>\n\
            <OMA>\n\
              <OMV name="a"/>\n\
              <OMV name="y"/>\n\
            </OMA>\n\
            <OMA>\n\
              <OMV name="b"/>\n\
              <OMV name="y"/>\n\
            </OMA>\n\
          </OMA>\n\
        </OMBIND>\n\
      </OMA>\n\
      <OMV name="x"/>\n\
    </OMA>\n\
    <OMA>\n\
      <OMS cd="arith1" name="plus"/>\n\
      <OMA>\n\
        <OMA>\n\
          <OMS cd="calculus1" name="diff"/>\n\
          <OMBIND>\n\
            <OMS cd="fns1" name="lambda"/>\n\
            <OMBVAR>\n\
              <OMV name="y"/>\n\
            </OMBVAR>\n\
            <OMA>\n\
              <OMV name="a"/>\n\
              <OMV name="y"/>\n\
            </OMA>\n\
          </OMBIND>\n\
        </OMA>\n\
        <OMV name="x"/>\n\
      </OMA>\n\
      <OMA>\n\
        <OMA>\n\
          <OMS cd="calculus1" name="diff"/>\n\
          <OMBIND>\n\
            <OMS cd="fns1" name="lambda"/>\n\
            <OMBVAR>\n\
              <OMV name="y"/>\n\
            </OMBVAR>\n\
            <OMA>\n\
              <OMV name="b"/>\n\
              <OMV name="y"/>\n\
            </OMA>\n\
          </OMBIND>\n\
        </OMA>\n\
        <OMV name="x"/>\n\
      </OMA>\n\
    </OMA>\n\
\n\
 <OMATTR>    \n\
  <OMATP>\n\
    <OMS cd="ecc" name="type" /> \n\
    <OMS cd="ecc" name="real" />\n\
    <OMS cd="sts" name="type" /> \n\
    <OMS cd="sts" name="integer" />\n\
  </OMATP> \n\
  <OMV name="x" />\n\
 </OMATTR>\n\
\n\
  <OMATTR>    \n\
  <OMATP>\n\
   <OMS cd="arith1" name="plus" />\n\
   <OMFOREIGN><w xmlns=""/><x xmlns=""><y/><z/></x></OMFOREIGN>\n\
  </OMATP> \n\
  <OMV name="x" />\n\
 </OMATTR>\n\
\n\
 <OMATTR>    \n\
  <OMATP>\n\
   <OMS cd="arith1" name="plus" />\n\
   <OMFOREIGN><w/><x><y/><z/></x></OMFOREIGN>\n\
  </OMATP> \n\
  <OMV name="x" />\n\
 </OMATTR>\n\
\n\
 <OMBIND>\n\
  <OMS name="forall" cd="quant1"/>\n\
  <OMBVAR>\n\
   <OMATTR>\n\
    <OMATP>\n\
     <OMS name="plus" cd="arith1"/>\n\
     <OMS name="plus" cd="arith1"/>\n\
    </OMATP>\n\
    <OMV name="x"/>\n\
   </OMATTR>\n\
  </OMBVAR>\n\
  <OMV name="x"/>\n\
 </OMBIND>\n\
 \n\
 <OMATTR>\n\
  <OMATP>\n\
   <OMS name="plus" cd="arith1"/>\n\
   <OMS name="plus" cd="arith1"/>\n\
  </OMATP>\n\
  <OMI>1</OMI>\n\
 </OMATTR>\n\
 \n\
 <OMBIND>\n\
  <OMS name="forall" cd="quant1"/>\n\
  <OMBVAR>\n\
   <OMATTR>\n\
    <OMATP>\n\
     <OMS name="plus" cd="arith1"/>\n\
     <OMS name="plus" cd="arith1"/>\n\
    </OMATP>\n\
    <OMI>1</OMI>\n\
   </OMATTR>\n\
  </OMBVAR>\n\
  <OMV name="x"/>\n\
 </OMBIND>\n\
\n\
 <OMI>77</OMI>\n\
\n\
 <OMI>77.9</OMI>\n\
 \n\
 <OMF dec="1.0"/>\n\
 <OMF dec="1e2"/>\n\
 <OMF dec="1E2"/>\n\
 <OMF dec="1e-2"/>\n\
 <OMF dec="-1e-2"/>\n\
 <OMF dec="1e 2"/>\n\
  </OMA>\n\
</OMOBJ>\n\
';
}

function samplecdg() {
document.getElementById("cdin").textContent='\n\
<CDGroup  xmlns="http://www.openmath.org/OpenMathCDG">\n\
<CDGroupName>mathml-x</CDGroupName>\n\
<CDGroupVersion> 2.1 </CDGroupVersion>\n\
<CDGroupRevision> b </CDGroupRevision>\n\
<CDGroupURL>http://www.openmath.org/cdfiles/cdgroups/mathml.ocd</CDGroupURL>\n\
<CDGroupDescription> MathML compatibility CD Group </CDGroupDescription>\n\
<CDComment>This is an abbreviated  MathML CD group.</CDComment>\n\
<CDComment>Algebra</CDComment>\n\
<CDGroupMember>\n\
<CDName>alg1</CDName>\n\
<CDURL>www.openmath.org/cd/alg1.ocd</CDURL></CDGroupMember>\n\
<CDComment>Arithmetic</CDComment>\n\
<CDGroupMember>\n\
<CDName>arith1</CDName>\n\
<CDURL>http://www.openmath.org/cd/arith1.ocd</CDURL></CDGroupMember>\n\
<CDComment>Constructor for Floating Point Numbers</CDComment>\n\
<CDGroupMember x="y">\n\
<CDName>bigfloat1</CDName>\n\
<CDURL>http://www.openmath.org/cd/bigfloat1.ocd</CDURL></CDGroupMember>\n\
<Example>example here</Example>\n\
<CDComment>Calculus</CDComment>\n\
<CDGroupMember>\n\
<CDName a="b">calculus1</CDName>\n\
<CDURL>http://www.openmath.org/cd/calculus1.ocd</CDURL></CDGroupMember>\n\
<CDComment>Linear Algebra - vector &amp; matrix constructors, those symbols which are dependant of orientation, and in MathML</CDComment>\n\
<CDGroupMember>\n\
<CDName>linalg2</CDName>\n\
<CDURL>http://www.openmath.org/cd/linalg2.ocd</CDURL></CDGroupMember>\n\
<CDComment>Limits of <i>unary</i> functions</CDComment>\n\
<CDGroupMember>\n\
<CDName>limit1</CDName>\n\
<CDURL>http://www.openmath.org/cd/limit1.ocd</CDURL></CDGroupMember>\n\
<CDComment>List constructors</CDComment>\n\
<CDGroupMember>\n\
<CDName>mathmltypes</CDName>\n\
<CDURL>http://www.openmath.org/cd/mathmltypes.ocd</CDURL>\n\
</CDGroupMember>\n\
<CDComment>Minima and maxima</CDComment>\n\
<CDGroupMember>\n\
<CDName>minmax1</CDName>\n\
<CDURL>http://www.openmath.org/cd/minmax1.ocd</CDURL></CDGroupMember>\n\
<CDComment>Minima and maxima</CDComment>\n\
<CDGroupMember>\n\
<CDName>minmax1</CDName>\n\
<CDURL>http://www.openmath.org/cd/minmax1.ocd</CDURL></CDGroupMember>\n\
<CDComment>Multset-theoretic operators and constructors</CDComment>\n\
<CDGroupMember>\n\
<CDName>multiset1</CDName>\n\
<CDURL>http://www.openmath.org/cd/multiset1.ocd</CDURL></CDGroupMember>\n\
<CDComment>Symbols for creating numbers, including some defined constants\n\
(which can be seen as nullary constructors)</CDComment>\n\
<CDGroupMember>\n\
<CDName>nums1</CDName>\n\
<CDURL>http://www.openmath.org/cd/nums1.ocd</CDURL></CDGroupMember>\n\
<CDComment>Symbols for creating piecewise definitions</CDComment>\n\
<CDGroupMember>\n\
<CDName>piece1</CDName>\n\
<CDURL>http://www.openmath.org/cd/piece1.ocd</CDURL></CDGroupMember>\n\
<CDComment>The basic quantifiers forall and exists.</CDComment>\n\
<CDGroupMember>\n\
<CDName>quant1</CDName>\n\
<CDURL>http://www.openmath.org/cd/quant1.ocd</CDURL></CDGroupMember>\n\
<CDComment>Common arithmetic relations</CDComment>\n\
<CDGroupMember>\n\
<CDName>relation1</CDName>\n\
<CDURL>http://www.openmath.org/cd/relation1.ocd</CDURL></CDGroupMember>\n\
<CDComment>Number sets</CDComment>\n\
<CDGroupMember>\n\
<CDName>setname1</CDName>\n\
<CDURL>http://www.openmath.org/cd/setname1.ocd</CDURL></CDGroupMember>\n\
</CDGroup>\n\
';
}

function samplests() {
document.getElementById("cdin").textContent='\n\
<CDSignatures xmlns="http://www.openmath.org/OpenMathCDS" type="sts" cd="set1">\n\
<CDSStatus> fake </CDSStatus>\n\
\n\
<CDSComment>\n\
Based on Set1 STS file\n\
</CDSComment>\n\
\n\
<Signature name="cartesian_product">\n\
<OMOBJ xmlns="http://www.openmath.org/OpenMath"> \n\
  <OMA>\n\
    <OMS cd="sts" name="mapsto"/>\n\
    <OMA>\n\
      <OMS name="nary"/>\n\
      <OMA>\n\
        <OMS cd="sts" name="structure"/>\n\
	<OMV name="Set"/>\n\
      </OMA>\n\
    </OMA>\n\
    <OMA>\n\
      <OMS cd="sts" name="structure"/>\n\
      <OMV name="Set1"/>\n\
    </OMA>\n\
  </OMA>\n\
</OMOBJ>\n\
</Signature>\n\
\n\
<Signature name="map">\n\
<OMOBJ xmlns="http://www.openmath.org/OpenMath"> \n\
 <OMA>\n\
  <OMS cd="sts" name="mapsto"/>\n\
    <OMA>\n\
      <OMS cd="sts" name="mapsto"/>\n\
      <OMS cd="sts" name="Object"/>\n\
      <OMS cd="sts" name="Object"/>\n\
    </OMA>\n\
    <OMV name="Set"/>\n\
    <OMV name="Set"/>\n\
 </OMA>\n\
</OMOBJ>\n\
<CDComment>???</CDComment>\n\
</Signature>\n\
\n\
<Signature name="such that">\n\
<OMOBJ xmlns="http://www.openmath.org/OpenMath"> \n\
 <OMA>\n\
  <OMS cd="sts" name="mapsto"/>\n\
    <OMA>\n\
      <OMS name="structure" cd="sts"/>\n\
      <OMV name="Set"/>\n\
    </OMA>\n\
    <OMA>\n\
      <OMS name="mapsto" cd="sts"/>\n\
      <OMV name="Set"/>\n\
      <OMS name="Boolean" cd="setname2"/>\n\
    </OMA>\n\
    <OMA>\n\
      <OMS name="structure" cd="sts"/>\n\
      <OMV name="Set"/>\n\
    </OMA>\n\
 </OMA>\n\
</OMOBJ>\n\
</Signature>\n\
\n\
<Signature name="emptyset" >\n\
 <OMOBJ xmlns="http://www.openmath.org/OpenMath"> \n\
   <OMV name="Set"/>\n\
 </OMOBJ>\n\
</Signature>\n\
\n\
<Signature name="size" >\n\
<OMOBJ xmlns="http://www.openmath.org/OpenMath"> \n\
 <OMA>\n\
   <OMS name="mapsto" cd="sts" />\n\
    <OMV name="Set" />\n\
    <OMV name="CardinalNumber" />\n\
 </OMA>\n\
</OMOBJ>\n\
</Signature>\n\
\n\
<Signature name="set" >\n\
<OMOBJ xmlns="http://www.openmath.org/OpenMath"> \n\
 <OMA>\n\
  <OMS name="mapsto" cd="sts" />\n\
   <OMA>\n\
    <OMS name="nary" cd="sts" />\n\
     <OMS name="Object" cd="sts" />\n\
   </OMA>\n\
  <OMV name="Set" />\n\
 </OMA>\n\
</OMOBJ>\n\
</Signature>\n\
\n\
<Signature name="intersect" >\n\
<OMOBJ xmlns="http://www.openmath.org/OpenMath"> \n\
 <OMA>\n\
   <OMS name="mapsto" cd="sts" />\n\
    <OMA>\n\
     <OMS name="nassoc" cd="sts" />\n\
     <OMV name="Set" />\n\
    </OMA>\n\
    <OMV name="Set" />\n\
 </OMA>\n\
</OMOBJ>\n\
</Signature>\n\
\n\
<Signature name="union" >\n\
<OMOBJ xmlns="http://www.openmath.org/OpenMath"> \n\
 <OMA>\n\
   <OMS name="mapsto" cd="sts" />\n\
    <OMA>\n\
     <OMS name="nassoc" cd="sts" />\n\
     <OMV name="Set" />\n\
    </OMA>\n\
    <OMV name="Set" />\n\
 </OMA>\n\
</OMOBJ>\n\
</Signature>\n\
\n\
<Signature name="setdiff" >\n\
<OMOBJ xmlns="http://www.openmath.org/OpenMath"> \n\
 <OMA>\n\
   <OMS name="mapsto" cd="sts" />\n\
    <OMV name="Set" />\n\
    <OMV name="Set" />\n\
    <OMV name="Set" />\n\
 </OMA>\n\
</OMOBJ>\n\
</Signature>\n\
\n\
\n\
<Signature name="subset" >\n\
<OMOBJ xmlns="http://www.openmath.org/OpenMath"> \n\
 <OMA>\n\
   <OMS name="mapsto" cd="sts" />\n\
    <OMV name="Set" />\n\
    <OMV name="Set" />\n\
    <OMS cd="setname2" name="Boolean" />\n\
 </OMA>\n\
</OMOBJ>\n\
</Signature>\n\
\n\
\n\
<Signature name="in" >\n\
<OMOBJ xmlns="http://www.openmath.org/OpenMath"> \n\
 <OMA>\n\
   <OMS name="mapsto" cd="sts" />\n\
    <OMS name="Object" cd="sts" />\n\
    <OMV name="Set" />\n\
    <OMS cd="setname2" name="Boolean" />\n\
 </OMA>\n\
</OMOBJ>\n\
</Signature>\n\
\n\
<Signature name="union" >\n\
<OMOBJ xmlns="http://www.openmath.org/OpenMath"> \n\
 <OMA>\n\
   <OMS name="mapsto" cd="sts" />\n\
    <OMS name="Object" cd="sts" />\n\
    <OMV name="Set" />\n\
    <OMS cd="setname2" name="Boolean" />\n\
 </OMA>\n\
</OMOBJ>\n\
</Signature>\n\
\n\
\n\
<Signature name="prsubset" >\n\
<OMOBJ xmlns="http://www.openmath.org/OpenMath"> \n\
 <OMA>\n\
   <OMS name="mapsto" cd="sts" />\n\
    <OMV name="Set" />\n\
    <OMV name="Set" />\n\
    <OMS cd="setname2" name="Boolean" />\n\
 </OMA>\n\
</OMOBJ>\n\
</Signature>\n\
\n\
<Signature name="notsubset" >\n\
<OMOBJ xmlns="http://www.openmath.org/OpenMath"> \n\
 <OMA>\n\
   <OMS name="mapsto" cd="sts" />\n\
    <OMV name="Set" />\n\
    <OMV name="Set" />\n\
    <OMS cd="setname2" name="Boolean" />\n\
 </OMA>\n\
 <OMA>\n\
   <OMS name="mapsto" cd="sts" />\n\
    <OMV name="Set" />\n\
    <OMV name="Set" />\n\
    <OMS cd="setname2" name="Boolean" />\n\
 </OMA>\n\
</OMOBJ>\n\
</Signature>\n\
\n\
</CDSignatures>\n\
';
}


function samplecd() {
document.getElementById("cdin").textContent='\n\
<CD xmlns="http://www.openmath.org/OpenMathCD">\n\
<CDName> arith1 </CDName>\n\
<CDName> arith11 </CDName>\n\
<CDName> 7 + arith </CDName>\n\
<CDDate> Jan 1, 2000 </CDDate>\n\
<CDReviewDate> 2017-12-25</CDReviewDate>\n\
<CDStatus a="b"> experimental</CDStatus>\n\
<CDComment> Some <b>bold text</b></CDComment>\n\
<CDBase>http://www.openmath.org/cd</CDBase>\n\
<CDURL> htt p://www.openmath.org/cd/arith1.ocd </CDURL>\n\
<CDVersion>99</CDVersion>\n\
<CDRevision> 2b </CDRevision>\n\
<wibble>hmm</wibble>\n\
<CDUses>\n\
  <CDName>set1</CDName>\n\
  <CDName>sat1</CDName>\n\
  <DCName>set2</DCName>\n\
</CDUses>\n\
<CDDefinition>\n\
<Name> lcm </Name>\n\
<Role>application</Role>\n\
<Example>text <OMOBJ> <OMV name="a"/></OMOBJ> more text</Example>\n\
<Example>text <OMOBJ xmlns="http://www.openmath.org/OpenMath"> <OMV name="a"/></OMOBJ> more text</Example>\n\
<Description> \n\
The symbol to represent the n-ary function to return the least common\n\
multiple of its arguments.\n\
</Description>\n\
\n\
<CMP> lcm(a,b) = a*b/gcd(a,b) </CMP>\n\
\n\
<FMP>\n\
<OMOBJ xmlns="http://www.openmath.org/OpenMath" version="2.0" cdbase="http://www.openmath.org/cd">\n\
  <OMA>\n\
    <OMS cd="relation1" name="eq"/>\n\
    <OMA>\n\
      <OMS cd="arith1" name="lcm"/>\n\
      <OMV name="a"/>\n\
      <OMV name="b"/>\n\
    </OMA>\n\
    <OMA>\n\
      <OMS cd="arith1" name="divide"/>\n\
      <OMA>\n\
        <OMS cd="arith1" name="times"/>\n\
	<OMV name="a"/>\n\
	<OMV name="b"/>\n\
      </OMA>\n\
      <OMA>\n\
        <OMS cd="arith1" name="gcd"/>\n\
        <OMV name="a"/>\n\
        <OMV name="b"/>\n\
      </OMA>\n\
    </OMA>\n\
  </OMA>\n\
</OMOBJ>\n\
</FMP>\n\
</CDDefinition>\n\
<CDDefinition>\n\
 <Name> lcm </Name>\n\
 <Role>application</Role>\n\
 <Description> The symbol to represent the n-ary function to return the least common multiple of its arguments. </Description>\n\
</CDDefinition>\n\
</CD>\n\
';
}

function samplemml() {
document.getElementById("cdin").textContent='\n\
<math xmlns="http://www.w3.org/1998/Math/MathML">\n\
 <apply>\n\
  <csymbol cd="list1">list</csymbol>\n\
\n\
\n\
  <apply>\n\
   <csymbol cd="relation1">eq</csymbol>\n\
   <apply>\n\
    <csymbol cd="integer1">factorial</csymbol>\n\
   <ci x="y">n</ci></apply>\n\
   <apply>\n\
    <csymbol cd="arith1">product</csymbol>\n\
    <apply>\n\
     <csymbol cd="interval1">integer_interval</csymbol>\n\
     <cn type="integer">1</cn>\n\
     <ci>n</ci>\n\
    </apply>\n\
    <bind>\n\
     <csymbol cd="fns1">lambda</csymbol>\n\
     <bvar><ci>i</ci></bvar>\n\
     <ci>i</ci>\n\
    </bind>\n\
   </apply>\n\
  </apply>\n\
  \n\
  <cerror><csymbol cd="z">zzz</csymbol><apply><ci>a</ci><ci>b</ci></apply></cerror>\n\
\n\
  <mfrac><mi>a</mi><mn>2</mn></mfrac>\n\
  \n\
  <semantics>\n\
  <ci>x</ci>\n\
  <annotation cd="mathmlattr"\n\
     name="class" encoding="text/plain">foo</annotation>\n\
  <annotation-xml cd="mathmlattr" name="foreign" encoding="MathML-Content">\n\
    <apply><csymbol cd="mathmlattr">foreign_attribute</csymbol>\n\
      <cs>http://example.com</cs>\n\
      <cs>other</cs>\n\
      <cs>att</cs>\n\
      <cs>bla</cs>\n\
    </apply>\n\
  </annotation-xml>\n\
  </semantics>\n\
\n\
\n\
  <cbytes>AB123</cbytes>\n\
\n\
  <apply>\n\
   <csymbol cd="relation1">eq</csymbol>\n\
   <apply>\n\
    <apply>\n\
     <csymbol cd="calculus1">partialdiff</csymbol>\n\
     <apply><csymbol cd="list1">list</csymbol>\n\
     <cn type="integer">1</cn> <cn type="integer">3</cn>\n\
     </apply>\n\
     <bind>\n\
      <csymbol cd="fns1">lambda</csymbol>\n\
      <bvar><ci>x</ci></bvar>\n\
      <bvar><ci>y</ci></bvar>\n\
      <bvar><ci>z</ci></bvar>\n\
      <apply><csymbol cd="arith1">times</csymbol><ci>x</ci><ci>y</ci><ci>z</ci></apply>\n\
     </bind>\n\
    </apply>\n\
    <ci>y</ci>\n\
   </apply>\n\
   <ci>y</ci>\n\
  </apply>\n\
  \n\
 </apply>\n\
</math>\n\
';
}


