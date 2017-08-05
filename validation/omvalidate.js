// file drop

function dodrop(event) {
    var dt = event.dataTransfer;
    var files = dt.files;
    if(files.length == 1) {
	var fr = new FileReader();
	fr.onload = function(e) {
	    document.getElementById("cdin").textContent=e.target.result;
	};
	fr.readAsText(files[0]);
    } else {
	//        cdout.innerHTML =
	cdouttext =
	"only drop one file at a time";
    }      
}


// end of file drop code

// style for prefix math display
var ommathindent=false;


function omindent (c) {
    u='<br>';
    for(var p=c;p.nodeType==1;p=p.parentNode){
	u+='\u00a0';
    }
    return u;
}


// namespaces
var cdns="http://www.openmath.org/OpenMathCD";
var cdsns="http://www.openmath.org/OpenMathCDS";
var cdgns="http://www.openmath.org/OpenMathCDG";
var omns="http://www.openmath.org/OpenMath";
var mmlns="http://www.w3.org/1998/Math/MathML";

// regular expressions
   
// ascii version for now
var omNameRE= new RegExp(/^\s*[^0-9\.!@#:;<>()+=,%\$"'?/\\|{}\[\] \t\n\r][^\.!@#:;<>()+=,%\$"'?/\\|{}\[\] \t\n\r]*\s*$/);
var omURLRE= new RegExp(/^\s*[^ ]*\s*$/);
var omDateRE= new RegExp(/^\s*[0-9]{4}-(0[1-9]|1[12])-(0[1-9]|[12][0-9]|3[01])\s*$/);

// output text built as a string
var cdouttext="";

// code for the check button
function checkcd () {
    var cdout=document.getElementById("cdout");
    var CDDefs;
    var sMyString = document.getElementById("cdin").textContent;

    var oParser = new DOMParser();

    var oDOM = oParser.parseFromString(sMyString, "text/xml");
    if (oDOM.getElementsByTagName("parsererror").length>0) {
	var x= oDOM.getElementsByTagName("parsererror")[0].textContent;
	cdouttext =
//	cdout.innerHTML =
	    "<h3>XML Parse Error</h3><pre class='err'>\n" +
	    oDOM.getElementsByTagName("parsererror")[0].textContent.replace(/&/g,'&amp;').replace(/</g,'&lt;') +"</pre>";
    } else {
	cdouttext =
	    //	cdout.innerHTML =
	    "";
	vroot(oDOM);
    }
    cdout.innerHTML=cdouttext;
    cdouttext="";
	if (document.getElementsByClassName!=undefined) {
            var errs=document.getElementsByClassName('err').length
	    var cdoutwrapper=document.getElementById("cdoutwrapper");
	    var errcount=document.getElementById("errcount");
	    if(errs==0) {
		cdoutwrapper.style.borderColor='green';
		cdoutwrapper.style.borderWidth='.2em';
		errcount.textContent='';
	    } else {
		cdoutwrapper.style.borderColor='red';
		cdoutwrapper.style.borderWidth='.2em';
		errcount.textContent=' (' +errs +' error' + (errs==1? '':'s') +' found)';
	    }
	}
    
}


// functions v* validate their input and place results in the output div
// functions vs* same but return a string
// some of the duplication here will be removed later, gradually moving to vs versions

function vroot (o) {
    var els=vChildren(o)
    if (els.length==1) {
	if (els[0].namespaceURI==cdns) {
	    if (els[0].localName=="CD") {
		vCD(els[0]);
	    } else {
	cdouttext = cdouttext
		//		cdout.innerHTML = cdout.innerHTML
		    + "<p class='err'>Bad root element: should be CD</p>";
	    }
	} else if (els[0].namespaceURI == cdsns) {
	    if (els[0].localName=="CDSignatures") {
		vCDSignatures(els[0]);
	    } else {
		cdouttext = cdouttext
		// cdout.innerHTML = cdout.innerHTML
		    + "<p class='err'>Bad root element: should be CDSignatures</p>";
	    }
	} else if (els[0].namespaceURI==cdgns) {
	    if (els[0].localName=="CDGroup") {
		vCDGroup(els[0]);
	    } else {
		cdouttext = cdouttext
		// cdout.innerHTML = cdout.innerHTML
		    + "<p class='err'>Bad root element: should be CDGroup</p>";
	    }
	} else if (els[0].namespaceURI == omns) {
	    if (els[0].localName=="OMOBJ") {
		vOMOBJ(els[0]);
	    } else {
		cdouttext = cdouttext
		// cdout.innerHTML = cdout.innerHTML
		    + "<p class='err'>Bad root element: should be OMOBJ</p>";
	    }
	} else if (els[0].namespaceURI == mmlns) {
	    if (els[0].localName=="math") {
		vMMLmath(els[0]);
	    } else {
		cdouttext = cdouttext
		// cdout.innerHTML = cdout.innerHTML
		    + "<p class='err'>Bad root element: should be math</p>";
	    }
	} else {
	    cdouttext = cdouttext
	    // cdout.innerHTML = cdout.innerHTML
		+ "<p class='err'>Bad root namespace:<br>" +
		els[0].namespaceURI + "<br><br>This tool can only validate XML using the following namespaces:<br>  " +
		cdns + "<br>  " +
		cdgns + "<br>  " +
		cdsns + "<br>  " +
		omns + "<br>  " +
		mmlns + 
		"</p>";
	}
    } else {
	cdouttext = cdouttext
	// cdout.innerHTML = cdout.innerHTML
	    + "<p class='err'`c>multiple root elements</p>";
    }
}




function vCDGroup(e) {
    err="";
    u="";
    err += vNoAttributes(e);
    err+=vsNoText(e);
    vOut(err,"<b>OpenMath Content Dictionary Group File</b>");
    cdouttext = cdouttext
    //    cdout.innerHTML = cdout.innerHTML
	+ u;
    var els=vChildren(e);
    CDDefs = [];
    var CDGNamec=0;
    var CDGURLc=0;
    var CDGVersionc=0;
    var CDGRevisionc=0;
    for(var j=0;j<els.length;j++){
	var c=els[j];
	switch(c.localName) {
	case "CDGroupName":
	    vTextOne(c,++CDGNamec,omNameRE);
	    break;
	case "CDGroupDescription":
	    vDescription(c);
	    break;
	case "CDGroupVersion":
	    vTextOne(c,++CDGVersionc,/^\s*[0-9]+\s*$/);
	    break;
	case "CDGroupRevision":
	    vTextOne(c,++CDGRevisionc,/^\s*[0-9]+\s*$/);
	    break;
	case "CDGroupURL":
	    vTextOne(c,++CDGURLc,omURLRE);
	    break;
	case "CDComment":
	    vCDComment(c);
	    break;
	case "CDSStatus":
	    vTextOne(c,++CDSStatusc,/^\s*(official|experimental|private|obsolete)\s*$/);
	    break;
	case "CDGroupMember":
	    vCDGroupMember(c);
	    break;
	default:
	    vErr(c);
	}
    }
}


function vCDGroupMember (e) {
    var err="";
    err += vNoAttributes(e);
    vOut(err,"<b>CDGroupMember:</b>");
    var u= "<div class='indent'>";
    var els=vChildren(e);
    var j=0;
    if (els.length>j && els[j].localName=='CDComment') {
	u+=vsCDComment(els[j]);
	j++;
    }
    if (els.length>j && els[j].localName=='CDName') {
	u+=vsCDGMCDName(els[j]);
	j++;
    } else {
	vsErr(els[j]);
    }
    if (els.length>j && els[j].localName=='CDVersion') {
	u+=vsTextOne(els[j],1,/^\s*[0-9]+\s*$/);
	j++;
    }
    if (els.length>j && els[j].localName=='CDURL') {
	u+=vsTextOne(els[j],1,omURLRE);
	j++;
    }
    if (els.length>j) {
	u+=vsErr(els[j]);
    }
    u+="</div>";
    cdouttext = cdouttext
    //    cdout.innerHTML = cdout.innerHTML
	+ u;
}

function vCDSignatures(e) {
    err="";
    u="";
    var ty="";
    var cd="";
    var tyc=0;
    var cdc=0;
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "xmlns":
	    break;
	case "type":
	    tyc++;
	    ty=atts[j].value;
	    u+=vsOut(ty.match(omNameRE)?"":" (Invalid type)","<b>Type:</b> " + atts[j].value); 
	    break;
	case "cd":
	    cdc++;
	    cd=atts[j].value;
	    u+=vsOut(cd.match(omNameRE)?"":" (Invalid CD name)","<b>CD:</b> " + atts[j].value); 
	    break;
	default:
	    if(! atts[j].name.startsWith("xmlns:")) {
		err+=" (Unexpected attribute: " + atts[j].localName +")";
	    }
	}
    }
    if (tyc==0) err += " (Missing attribute: type)";
    if (cdc==0) err += " (Missing attribute: cd)";
    err+=vsNoText(e);
    vOut(err,"<b>OpenMath Content Dictionary Signature File</b>");
    cdouttext = cdouttext
    //    cdout.innerHTML = cdout.innerHTML
	+ u;
    var els=vChildren(e);
    CDDefs = [];
    var CDSStatusc=0;
    var CDSRDatec=0;
    var CDSRevisionc=0;
    for(var j=0;j<els.length;j++){
	var c=els[j];
	switch(c.localName) {
	case "CDSComment":
	    vCDSComment(c);
	    break;
	case "CDSStatus":
	    vTextOne(c,++CDSStatusc,/^\s*(official|experimental|private|obsolete)\s*$/);
	    break;
	case "CDSReviewDate":
	    vTextOne(c,++CDSRDatec,omDateRE);
	    break;
	case "Signature":
	    vSignature(c);
	    break;
	default:
	    vErr(c);
	}
    }
}

function vCD(e) {
    var err="";
    err += vNoAttributes(e);
    err+=vsNoText(e);
    vOut(err,"<b>OpenMath Content Dictionary</b>");
    var els=vChildren(e);
    CDDefs = [];
    var CDNamec=0;
    var CDURLc=0;
    var CDBasec=0;
    var CDRDatec=0;
    var CDDatec=0;
    var CDStatusc=0;
    var CDVersionc=0;
    var CDRevisionc=0;
    for(var j=0;j<els.length;j++){
	var c=els[j];
	switch(c.localName) {
	case "CDComment":
	    vCDComment(c);
	    break;
	case "Description":
	    vDescription(c);
	    break;
	case "CDName":
	    vTextOne(c,++CDNamec,omNameRE);
	    break;
	case "CDURL":
	    vTextOne(c,++CDURLc,omURLRE);
	    break;
	case "CDBase":
	    vTextOne(c,++CDBasec,omURLRE);
	    break;
	case "CDReviewDate":
	    vTextOne(c,++CDRDatec,omDateRE);
	    break;
	case "CDDate":
	    vTextOne(c,++CDDatec,omDateRE);
	    break;
	case "CDStatus":
	    vTextOne(c,++CDStatusc,/^\s*(official|experimental|private|obsolete)\s*$/);
	    break;
	case "CDUses":
	    vCDuses(c);
	    break;
	case "CDVersion":
	    vTextOne(c,++CDVersionc,/^\s*[0-9]+\s*$/);
	    break;
	case "CDRevision":
	    vTextOne(c,++CDRevisionc,/^\s*[0-9]+\s*$/);
	    break;
	case "CDDefinition":
	    vCDDefinition(c);
	    break;
	default:
	    vErr(c);
	}
    }
}



function vChildren(n) {
    var c=[];
    for(var j=0;j<n.childNodes.length; j++ ) {
	if(n.childNodes[j].nodeType==1) {
	    c[c.length]=n.childNodes[j];
	}
    }
    return c;
}

function vErr(c) {
    vOut("(Unexpected element: " +c.localName + ")","");
}

function vsErr(c) {
    return vsOut("(Unexpected element: " +c.localName + ")","");
}
function vsSpanErr(c) {
    return vsSpanOut("(Unexpected element: " +c.localName + ")","");
}

function vTextOnly(e) {
    var c=vChildren(e);
    return (c.length==0 ? "" : " (Unexpected element: " + c[0].localName + ")");
}

function vNoAttributes(e) {
    var atts = e.attributes;
    var err="";
    for (var j=0;j<atts.length;j++){
	if(atts[j].localName!='xmlns' && (!atts[j].name.startsWith("xmlns:")))
	   err += " (Unexpected attribute: " + atts[j].localName + ")";
    }
    return err;
}


function vsNoText(n) {
    var els=n.childNodes;
    var err="";
    for(var j=0;j<els.length; j++ ) {
	if(els[j].nodeType==3 && (! els[j].nodeValue.match(/^\s*$/))) err+=" (Unexpected text: " + els[j].nodeValue +")";
    }
    return err;
}
    

function vOut(err,t){
    cdouttext = cdouttext
    //    cdout.innerHTML = cdout.innerHTML
	+ "<p" + (err=="" ? "": " class='err'") +">" + t + err + "</p>";
}

function vsOut(err,t){
    return ("<p" + (err=="" ? "": " class='err'") +">" + t + err + "</p>");
}

function vsSpanOut(err,t){
    return ("<span" + (err=="" ? "": " class='err'") +">" + t + err + "</span>");
}

function vTestRE(e,r) {
    return (e.textContent.match(r) ? "" : " (Invalid text)");
}

function vCDComment (e) {
    var err="";
    err += vNoAttributes(e);
    err += vTextOnly(e);
    vOut(err,"<b>CDComment:</b>");
    if(err=="") {
	cdouttext = cdouttext
	//	cdout.innerHTML = cdout.innerHTML
	    +"<pre>" +e.innerHTML +"</pre>";
    }
}

function vsCDComment (e) {
    var err="";
    err += vNoAttributes(e);
    err += vTextOnly(e);
    var u = vsOut(err,"<b>CDComment:</b>");
    if(err=="") u+= "<pre>" +e.innerHTML +"</pre>";
    return u;
}

function vCDSComment (e) {
    var err="";
    err += vNoAttributes(e);
    err += vTextOnly(e);
    vOut(err,"<b>CDSComment:</b>");
    if(err==""){
	cdouttext = cdouttext
	//	cdout.innerHTML = cdout.innerHTML
	    +"<pre>" +e.innerHTML +"</pre>";
    }
}

function vDescription (e) {
    var err="";
    err += vNoAttributes(e);
    vOut(err,"<b>Description:</b>");
    cdouttext = cdouttext
    //    cdout.innerHTML = cdout.innerHTML
	+"<div> " +e.innerHTML + "</div>";
}

function vTextOne(e,ct,re) {
    var err="";
    err += vNoAttributes(e);
    err += vTextOnly(e);
    if (ct != 1) err += " (Multiple " + e.localName +")";
    err += vTestRE(e,re);
    vOut(err,"<b>" + e.localName + ":</b> " +e.innerHTML);
}

function vsTextOne(e,ct,re) {
    var err="";
    err += vNoAttributes(e);
    err += vTextOnly(e);
    if (ct != 1) err += " (Multiple " + e.localName +")";
    err += vTestRE(e,re);
    return vsOut(err,"<b>" + e.localName + ":</b> " +e.innerHTML);
}


function vsCDGMCDName(e) {
    var err="";
    err += vNoAttributes(e);
    err += vTextOnly(e);
    err += vTestRE(e,omNameRE);
    var thisn=e.textContent.trim();
    if(CDDefs[thisn]==1){
	err+=" (Duplicate CD group member)";
    } else {
	CDDefs[thisn]=1;
    }
    return vsOut(err,"<b>" + e.localName + ":</b> " +e.innerHTML);
}

function vName(e,ct) {
    var err="";
    err += vNoAttributes(e);
    err += vTextOnly(e);
    if (ct != 1) err += " (Multiple " + e.localName +")";
    var thisn=e.textContent.trim();
    if(CDDefs[thisn]==1){
	err+=" (Duplicate definition)";
    } else {
	CDDefs[thisn]=1;
    }
    err += vTestRE(e,omNameRE);
    vOut(err,"<b>" + e.localName + ":</b> " +e.innerHTML);
}

function vCDuses (e) {
    var err="";
    err += vNoAttributes(e);
    err+=vsNoText(e);
    vOut(err,"<b>CDUses:</b>");
    var u= "<div class='indent'>";
    var els=vChildren(e);
    for(var j=0;j<els.length;j++){
	var c=els[j];
	if (c.localName=='CDName') {
	    u+=vsTextOne(c,1,omNameRE);
	} else {
	    u+=vsErr(c);
	}
    }
    u+="</div>";
    cdouttext = cdouttext
    //    cdout.innerHTML = cdout.innerHTML
	+ u;
}





function vExample (e) {
    var u="";
    var err="";
    err += vNoAttributes(e);
    u+=vsOut(err,"<b>Example:</b>");
    if(err==""){
	var els=e.childNodes;
	for(var j=0;j<els.length;j++){
	    var c=els[j];
	    if(c.nodeType==3) {
		u+=c.nodeValue;
	    } else if (c.nodeType==1) {
		u+=vsOMOBJ(c);
	    }
	}
    }
    cdouttext = cdouttext
    //    cdout.innerHTML = cdout.innerHTML
	+ u;
}


function vFMP (e) {
    var err="";
    var k="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++){
	if(atts[j].localName="kind"){
	    k= " (" + atts[j].value +")";
	} else {
	    err += " (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    err+=vsNoText(e);
    vOut(err, "<b>FMP" + k +":</b>");
    if(err=="") {
	var u= "<div class='indent'>";
	var els=vChildren(e);
	if(els.length==0) {
	    u+="<p class='err'>Missing element: OMOBJ</p>";
	} else if (els.length==1) {
	    u+=vsOMOBJ(els[0]);
	} else {
	    u+=vsErr(els[1]);
	}
	u+="</div>";
	cdouttext = cdouttext
	//	cdout.innerHTML = cdout.innerHTML
	    + u;
    }
}

function vSignature (e) {
    var err="";
    var k="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++){
	if(atts[j].localName="name"){
	    k= " (" + atts[j].value +")";
	    err+=atts[j].value.match(omNameRE)?"":" (Invalid name)";
	    var thisn=atts[j].value.trim();
	    if(CDDefs[thisn]==1){
		err+=" (Duplicate signature)";
	    } else {
		CDDefs[thisn]=1;
	    }
	} else {
	    err += " (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    err+=vsNoText(e);
    vOut(err, "<b>Signature" + k +":</b>");
    if(err=="") {
	var u= "<div class='indent'>";
	var els=vChildren(e);
	if(els.length==0) {
	    u+="<p class='err'>Missing element: OMOBJ</p>";
	} else if (els.length==1) {
	    u+=vsOMOBJ(els[0]);
	} else {
	    u+=vsErr(els[1]);
	}
	u+="</div>";
	cdouttext = cdouttext
	//	cdout.innerHTML = cdout.innerHTML
	    + u;
    }
}


function vCDDefinition (e) {
    var err="";
    err += vNoAttributes(e);
    err+=vsNoText(e);
    vOut(err,"<b>CDDefinition</b>");
    if(err==""){
	cdouttext+="<div class='indent'>";
	var Namec=0;
	var Rolec=0;
	var Descriptionc=0;
	var els=vChildren(e);
	for(var j=0;j<els.length;j++){
	    var c=els[j];
	    switch(c.localName) {
	    case "Name":
		vName(c,++Namec);
		break;
	    case "Role":
		vTextOne(c,++Rolec,/^\s*(binder|attribution|semantic-attribution|error|application|constant)\s*$/);
		break;
	    case "CDComment":
		vCDComment(c);
		break;
	    case "Description":
		vTextOne(c,++Descriptionc,/./);
		break;
	    case "Example":
		vExample(c);
		break;
	    case "FMP":
		vFMP(c);
		break;
	    case "CMP":
		vTextOne(c,1,/./);
		break;
	    default:
		vErr(c);
	    }
	}
	cdouttext+="</div>";
    }
}

function vOMOBJ(e) {
    var err="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	case "version":
	case "cdbase":
	case "xmlns":
	    break;
	default:
	    if(! atts[j].name.startsWith("xmlns:")) {
		err+=" (Unexpected attribute: " + atts[j].localName +")";
	    }
	}
    }
    vOut(err,"<b>OpenMath Object</b>");
    var els=vChildren(e);
    if (els.length = 1) {
	cdouttext = cdouttext
	//	cdout.innerHTML = cdout.innerHTML
	    + "<div>"+ vsOMel(els[0])+ "</div>";
    } else if (els.length=0) {
	vOut("(Empty OMOBJ)","");
    } else {
	vOut(" (Unexpected element)", els[1].localName);
    }
}

function vsOMel (c) {
    var u="";
    switch(c.localName) {
    case "OMS":
	u=vsOMS(c);
	break;
    case "OMV":
	u=vsOMV(c);
	break;
    case "OMI":
	u=vsOMI(c);
	break;
    case "OMB":
	u=vsOMB(c);
	break;
    case "OMSTR":
	u=vsOMSTR(c);
	break;
    case "OMF":
	u=vsOMF(c);
	break;
    case "OMA":
	u=vsOMA(c);
	break;
    case "OMBIND":
	u=vsOMBIND(c);
	break;
    case "OME":
	u=vsOME(c);
	break;
    case "OMATTR":
	u=vsOMATTR(c,false);
	break;
    case "OMR":
	u=vsOMR(c);
	break;
    default:
	u=vsSpanErr(c);
    }
    return u;
}

function vsOMA(e) {
    var u="";
    var err="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	case "cdbase":
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    err+=vsNoText(e);
    var els=vChildren(e);
    for(var j=0;j<els.length;j++){
	var c = els[j];
	if (j>0 && ommathindent) u+=omindent(c);
	u+=vsOMel(c);
	if(j==0){
	    u+= "(";
	} else if (j<els.length -1) {
	    u+=", ";
	}
    }
    u+=")";
    return vsSpanOut(err,u);
}

function vsOMSTR(e) {
    var err="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    if (e.childNodes.length != 1) {
	err += " (Unexpected content in OMSTR)";
    }
    return vsSpanOut(err, "<tt>\""+e.innerHTML + "\"</tt>");
}


function vsOMI(e) {
    var err="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    if (e.childNodes.length != 1) {
	err += " (Unexpected content in OMI)";
    }
    if(! e.textContent.match(/^\s*(-\s?)?[0-9]+(\s[0-9]+)*\s*$/)) {
	err += " (Invalid Integer)";
    }
    return vsSpanOut(err, e.textContent);
}

function vsOMB(e) {
    var err="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    if (e.childNodes.length != 1) {
	err += " (Unexpected content in OMB)";
    }
    if(! e.textContent.match(/^[ \t\r\na-zA-Z0-9\+/]*=*\s*$/)) {
	err += " (Invalid base64)";
    }
    return vsSpanOut(err, "<i>OMB</i>");
}

function vsOMV(e) {
    var err="";
    var v="";
    var atts=e.attributes;
    if(atts.length!=1 || atts[0].localName != "name") {
	err =" (Invalid OMV attributes)";
    } else {
	v=atts[0].value;
	err+=(v.match(omNameRE)?"":" (Invalid name)");
    }
    return "<i>" + vsSpanOut(err,v) + "</i>";
}

function vsOMF(e) {
    var err="";
    var d="";
    var h="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	    break;
	case "dec":
	    if(h=="") {
		d=atts[j].value;
		err+=(d.match(/^\s*-?[0-9]*(\.[0-9]+)?([eE]-?[0-9]*(\.[0-9]+)?)?\s*$/)?"":" (Invalid Decimal)");
	    } else {
		err+=" (Unexpected dec attribute)";
	    }
	    break;
	case "hex":
	    if(d=="") {
		h=atts[j].value;
		err+=(h.match(/^\s*[0-9A-F]+\s*$/)?"":" (Invalid hex number)");
	    } else {
		err+=" (Unexpected hex attribute)";
	    }
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    if (e.childNodes.length != 0) {
	err += " (Unexpected content in OMF)";
    }
    return vsSpanOut(err,h+d);
}


function vsOMS(e) {
    var err="";
    var n="";
    var cd="";
    var nc=0;
    var cdc=0;
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	case "cdbase":
	    break;
	case "name":
	    nc++;
	    n=atts[j].value;
	    err+=(n.match(omNameRE)?"":" (Invalid name)");
	    break;
	case "cd":
	    cdc++;
	    cd=atts[j].value;
	    err+=(cd.match(omNameRE)?"":" (Invalid name)");
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    if (e.childNodes.length != 0) {
	err += " (Unexpected content in OMS)";
    }
    if (nc==0) err += " (Missing attribute: name)";
    if (cdc==0) err += " (Missing attribute: cd)";
    if(err=="") {
	return ("<a href='../cd/" + cd + '#' + n + "'>" + n + "</a>");
    } else {
	return vsSpanOut(err,n);
    }
}

function vsOMBIND(e) {
    var err="";
    var u="";
    var cd="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	case "cdbase":
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    err+=vsNoText(e);
    var els=vChildren(e);
    if(els.length==3) {
	u +="(";
	u+=vsOMel(els[0]);
	if (ommathindent) u+=omindent(els[0]);
	u+=" [";
	u+=vsOMBVAR(els[1]);
	u+="] . ";
	if (ommathindent) u+=omindent(els[2]);
	u+=vsOMel(els[2]);
	u+=")";
    } else {
	err += "(OMBIND should have 3 children)";
    }
    return vsSpanOut(err,u);
}


function vsOMFOREIGN(e) {
    var err="";
    var u="<i>omforeign</i>(";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	case "cdbase":
	case "encoding":
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    var els=vChildren(e);
    for(var j=0;j<els.length;j++) {
	var c=els[j];
	if(j!=0) u+=", ";
	if(c.namespaceURI==omns) {
	    u+=vsOMel(c);
	} else {
	    u+="<i>foreign</i>";
	}
    }
    return vsSpanOut(err,u);
}


function vsOME(e) {
    var err="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    err+=vsNoText(e);
    var els=vChildren(e);
    var u = "<span class='ome'>Error( ";
    if (els.length == 0||els[0].localName!="OMS") {
	err += " (Missing element OMS)";
    } else {
        u+=vsOMS(els[0]);
    }
    for(var j = 1; j<els.length;j++) {
	u+= (j==1? ": " : ", ");
	u+=vsOMel(els[j]);
    }
    u +=")</span>";
    return vsSpanOut(err,u);
}

function vsOMOBJ(e) {
    var err="";
    var u="";
    if (e.localName=='OMOBJ' && e.namespaceURI==omns) {
	var atts=e.attributes;
	for(var j=0;j<atts.length;j++) {
	    switch(atts[j].localName) {
	    case "id":
	    case "version":
	    case "cdbase":
	    case "xmlns":
		break;
	    default:
		err+=" (Unexpected attribute: " + atts[j].localName +")";
	    }
	}
	err+=vsNoText(e);
	var els=vChildren(e);
	if (els.length = 1) {
	    u+=vsOMel(els[0]);
	} else if (els.length=0) {
	    err="(empty OMOBJ)";
	} else {
	    err="(Unexpected children in OMOBJ)";
	}
    } else {
	err="(Unexpected element {" + e.namespaceURI + "}" + e.localName + ")";
    }
    return vsSpanOut(err,u);
}

function vsOMATTR(e,bvar) {
    var err="";
    var u="";
    var cd="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	case "cdbase":
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    err+=vsNoText(e);
    var els=vChildren(e);
    if(els.length==2) {
	if(els[0].localName=='OMATP'){
	    var c=els[1];
	    u +="(";
	    if(bvar) {
		switch(c.localName) {
		case "OMV":
		    u+=vsOMV(c);
		    break;
		case "OMATTR":
		    u+=vsOMATTR(c,true);
		    break;
		default:
		    u+=vsSpanErr(c);
		}
            } else {
		u+=vsOMel(els[1]);
	    }
	    u+="<sub>[";
	    u+=vsOMATP(els[0]);
	    u+="]</sub>)";
	} else {
	    err += "(OMBIND should have OMATP child)";
	}
    } else {
	err += "(OMBIND should have 2 children)";
    }
    return vsSpanOut(err,u);
}


function vsOMATP(e) {
    var err="";
    var u="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	case "version":
	case "cdbase":
	case "xmlns":
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    err+=vsNoText(e);
    var els=vChildren(e);
    if(els.length%2 !=0) {
	err+="( Unpaired attribute)";
    }
    for(var j=0;j<els.length;j=j+2){
	var c = els[j];
	var v = els[j+1];
	if(c.localName=="OMS"){
	    if(j!=0) u+=", ";
	    u+=vsOMS(c);
	    u+=": ";
	    if(v.localName=='OMFOREIGN') {
		u+=vsOMFOREIGN(v);
	    } else {
		u+=vsOMel(v);
	    }
	} else {
	    u+="<span class='err'>?? (Unexpected attribute)</span>";
	}
    }
    return vsSpanOut(err,u);
}

function vsOMBVAR(e) {
    var err="";
    var u = "";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    err+=vsNoText(e);
    var els=vChildren(e);
    for(var j = 0; j<els.length;j++) {
	var c=els[j];
	u+= (j>0? ", " : "");
	switch(c.localName) {
	case "OMV":
	    u+=vsOMV(c);
	    break;
	case "OMATTR":
	    u+=vsOMATTR(c,true);
	    break;
	default:
	    u+=vsSpanErr(c);
	}
    }
    return vsSpanOut(err,u);
}


function vsOMR(e) {
    var err="";
    var h="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	    break;
	case "href":
	    h=atts[j].value;
	    err+=(h.match(omURLRE)?"":" (URL)");
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    if (e.childNodes.length != 0) {
	err += " (Unexpected content in OMR)";
    }
    if(err=="") {
	return ("<a href='" + h +"'>ref</a>");
    } else {
	return vsSpanOut(err,"");
    }
}


// mathml

function vMMLmath(e) {
    var u="";
    var err="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	case "version":
	case "cdbase":
	case "xmlns":
	    break;
	default:
	    if(! atts[j].name.startsWith("xmlns:")) {
		err+=" (Unexpected attribute: " + atts[j].localName +")";
	    }
	}
    }
    vOut(err,"<b>Strict Content MathML</b>");
    err="";
    err+=vsNoText(e);
    var els=vChildren(e);
    for(var j=0;j<els.length;j++){
	var c = els[j];
	u+=vsMMLel(c);
	if (j<els.length -1) u+=", ";
    }
    vOut(err,u);
}

function vsMMLel (e) {
    var u="";
    var err="";
    switch(e.localName) {
    case "mrow": case "mfenced":
    case "mo": case "mn": case "mi": case "ms": case "mtext":
    case "mstyle":
    case "mpadded": case "mphantom": case "menclose": case "maction":
    case "mtable": case "mstack": case "mlongdiv":
    case "mglyph":
    case "mspace":
    case "msub": case "msup": case "msubsup":
    case "mover": case "munder": case "munderover":
    case "msqrt": case "mfrac":
	u+=vsSpanOut("(Presentation MathML: " + e.localName +")","");
	break;
    case "declare":
    case "piecewise": case "interval":
    case  "inverse": case "ident": case "domain": case "codomain": case "image":
    case "ln": case "log": case "moment":
    case "lambda": case "compose":
    case "quotient": case "divide": case "minus": case "power": case "rem": case "root":
    case "factorial": case "minus": case "root": case "abs": case "conjugate": case "arg":
    case "real": case "imaginary": case "floor": case "ceiling": case "exp":
    case "plus": case "times": case "gcd": case "lcm":
    case "and": case "or": case "xor": case "not": case "equivalent":
    case "implies":
    case "max": case "min":
    case "forall": case "exists":
    case "eq": case "gt": case "lt": case "geq": case "leq":
    case "neq": case "approx": case "factorof": case "tendsto":
    case "sum": case "product":
    case "int": case "diff": case "partialdiff":
    case "divergence": case "grad": case "curl": case "laplacian":
    case "union": case "intersect": case "cartesianproduct":
    case "in": case "notin": case "notsubset": case "notprsubset": case "setdiff":
    case "card":
    case "sum": case "product":
    case "limit":
    case "sin": case "cos": case "tan": case "sec": case "csc": case "cot":
    case "sinh": case "cosh": case "tanh": case "sech": case "csch": case "coth":
    case "arcsin": case "arccos": case "arctan": case "arccosh": case "arccot": case "arccoth":
    case "arccsc": case "arccsch": case "arcsec": case "arcsech": case "arcsinh": case "arctanh":
    case "mean": case "sdev": case "variance": case "median": case "mode":
    case "vector": case "matrix": case "matrixrow": case "determinant": case "transpose":
    case "selector":
    case "vectorproduct": case "scalarproduct": case "outerproduct":
    case "integers": case "reals": case "rationals": case "naturalnumbers": case "complexes":
    case "primes": case "emptyset":
    case "exponentiale": case "imaginaryi": case "notanumber": case "true": case "false":
    case "pi": case "eulergamma": case "infinity":
	u+=vsSpanOut("(Not Strict Content MathML: " + e.localName +")","");
	break;
    case "csymbol":
	u+=vsMMLcsymbol(e);
	break;
    case "cn":
	u+=vsMMLcn(e);
	break;
    case "ci":
	u+=vsMMLci(e);
	break;
    case "semantics":
	u+=vsMMLsemantics(e);
	break;
    case "cerror":
	u+=vsMMLerror(e);
	break;
    case "apply":
	u+=vsMMLapply(e);
	break;
    case "cbytes":
	u+=vsMMLcbytes(e);
	break;
    case "bind":
	u+=vsMMLbind(e);
	break;
    case "share":
	u+=vsMMLshare(e);
	break;
    case "cs":
	u+=vsMMLcs(e);
	break;
    default:
	u+=vsErr(e);
    }
    return vsSpanOut(err,u);
}


function vsMMLapply(e) {
    var u="";
    var err="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    err+=vsNoText(e);
    var els=vChildren(e);
    if(els.length>0) {
	u+=vsMMLel(els[0]);
	if(els.length>1) {
	    for(var j=1;j<els.length;j++){
		u+=(j==1?"(":", ");
		var c = els[j];
		if (ommathindent) u+=omindent(c);
		u+=vsMMLel(c);
	    }
	    u+=")";
	}
    }
    return vsSpanOut(err,u);
}

function vsMMLcsymbol(e) {
    var err="";
    var n="";
    var cd="";
    var nc=0;
    var cdc=0;
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	case "cdbase":
	    break;
	case "cd":
	    cdc++;
	    cd=atts[j].value;
	    err+=(cd.match(omNameRE)?"":" (Invalid name)");
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    err += vTextOnly(e);
    n=e.textContent;
    err+=(n.match(omNameRE)?"":" (Invalid name)");
    if (cdc==0) err += " (Missing attribute: cd)";
    if(err=="") {
	return ("<a href='../cd/" + cd + '#' + n + "'>" + n + "</a>");
    } else {
	return vsSpanOut(err,n);
    }
}

function vsMMLcn(e) {
    var err="";
    var n="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	    break;
	case "type":
	    var ty=atts[j].value;
	    err+=(ty.match("^\s*(integer|real|double|hexdouble)\s*$")?"":" (Invalid cn type)");
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    err += vTextOnly(e);
    n=e.textContent;
    return vsSpanOut(err,n);
}
function vsMMLci(e) {
    var err="";
    var n="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	    break;
	case "type":
	    var ty=atts[j].value;
	    err+=(ty.match("^\s*(integer|rational|real|complex(-(polar|cartesian))?|constant|function|vector|list|set|matrix)\s*$")?"":" (Invalid ci type)");
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    err += vTextOnly(e);
    n=e.textContent;
    return vsSpanOut(err,"<i>"+n+"</i>");
}

function vsMMLsemantics(e) {
    var err="";
    var u="";
    var n="";
    var cd="";
    var nc=0;
    var cdc=0;
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	case "cdbase":
	    break;
	case "cd":
	    cdc++;
	    cd=atts[j].value;
	    err+=(cd.match(omNameRE)?"":" (Invalid name)");
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    err+=vsNoText(e);
    u+=vsSpanOut(err,u);
    var els=vChildren(e);
    if(els.length>0) {
	u+=vsMMLel(els[0]);
    } else {
	err+=" (Missing body to semantics)";
    }
    if(els.length>1) {
	for(var j=1;j<els.length;j++) {
	    var c=els[j];
	    u+=(j==1?"<sub>[":", ");
	    switch(c.localName) {
	    case("annotation"):
		u+="annotation";
		break;
	    case("annotation-xml"):
		u+="annotation-xml";
		break;
	    default:
		u+=vsErr(c);
	    }
	}
	u+="]<sub>";
    }
    return vsSpanOut(err,u);
}


function vsMMLerror(e) {
    var err="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    err+=vsNoText(e);
    var els=vChildren(e);
    var u = "<span class='ome'>Error( ";
    if (els.length == 0||els[0].localName!="csymbol") {
	err += " (Missing element csymbol)";
    } else {
        u+=vsMMLcsymbol(els[0]);
    }
    for(var j = 1; j<els.length;j++) {
	u+= (j==1? ": " : ", ");
	u+=vsMMLel(els[j]);
    }
    u +=")</span>";
    return vsSpanOut(err,u);
}


function vsMMLcbytes(e) {
    var err="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    err += vTextOnly(e);
    if(! e.textContent.match(/^[ \t\r\na-zA-Z0-9\+/]*=*\s*$/)) {
	err += " (Invalid base64)";
    }
    return vsSpanOut(err, "<i>Base64</i>");
}

function vsMMLbind(e) {
    var err="";
    var u="";
    var cd="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    err+=vsNoText(e);
    var els=vChildren(e);
    if(els.length > 1 && els[els.length-1].localName!="bvar") {
	u +="(";
	u+=vsMMLel(els[0]);
	u+="[";
	for(var j=1;j<els.length-1;j++){
	    var c=els[j];
	    if(c.localName=="bvar"){
		if(j>1) u+=", ";
		u+=vsMMLbvar(c);
	    } else {
		err+=" (Unexpected element in bind: " + c.localName +")";
	    }
	}
	u+="] . ";
	if (ommathindent) u+=omindent(c);
	u+=vsMMLel(els[els.length-1]);
	u+=")";
    } else {
	err += "(Missing content for bind)";
    }
    return vsSpanOut(err,u);
}

function vsMMLbvar (e) {
    var err="";
    var u="";
    var els=vChildren(e);
    if (els.length==1 && (els[0].localName=="ci"  || els[0].localName=="semantics")) {
	u+=vsMMLel(els[0]);
    } else {
	err="(Malformed bvar)";
    }
    return vsSpanOut(err,u);
}
    
function vsMMLshare(e) {
    var err="";
    var h="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	    break;
	case "src":
	    h=atts[j].value;
	    err+=(h.match(omURLRE)?"":" (URL)");
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    if (e.childNodes.length != 0) {
	err += " (Unexpected content in share)";
    }
    if(err=="") {
	return ("<a href='" + h + "'>ref</a>");
    } else {
	return vsSpanOut(err,"");
    }
}

function vsMMLcs(e) {
    var err="";
    var atts=e.attributes;
    for(var j=0;j<atts.length;j++) {
	switch(atts[j].localName) {
	case "id":
	    break;
	default:
	    err+=" (Unexpected attribute: " + atts[j].localName +")";
	}
    }
    if (e.childNodes.length != 1) {
	err += " (Unexpected content in OMSTR)";
    }
    return vsSpanOut(err, "<tt>\""+e.innerHTML + "\"</tt>");
}
