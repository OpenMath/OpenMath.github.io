<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0"
                xmlns="http://www.w3.org/1999/xhtml">

<xsl:param name="changelog">no</xsl:param>
<xsl:output method="text" encoding="iso-8859-1"/>


<xsl:key name="new"  match="*[@revisionflag='added']" use="ancestor::section[1]/@id"/>
<xsl:key name="ids" match="*[@id]" use="@id"/>

<xsl:template match="*">
\textcolor{red}{[[[<xsl:value-of select="name()"/>]]]}
</xsl:template>

<xsl:template match="book">
\documentclass[11pt,twoside,chapter]{openmath}
\setcounter{secnumdepth}{4}
\usepackage[latin1]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{ae,amsfonts,amssymb,url,graphics,color,hyperref}

\let\cellsep&amp;

\catcode`\&amp;=12
\catcode`\_=12
\catcode`\^=12
\catcode`\#=12
\catcode`\$=12
\catcode`\�=1
\catcode`\�=2
\let\omlogo\relax
\begin{document}
\catcode`\%=12
\catcode`\{=12
\catcode`\}=12

\raggedbottom

\title�<xsl:value-of select="title"/>�

\version�<xsl:apply-templates select="bookinfo/releaseinfo"/>�
\author�<xsl:apply-templates select="bookinfo/author"/>�

<xsl:for-each select="bookinfo/editor">
\editor�<xsl:value-of select="."/>�
</xsl:for-each>


\date�<xsl:value-of select="bookinfo/date"/>�

\begin�abstract�
<xsl:apply-templates select="bookinfo/abstract/*"/>
\end�abstract�

\maketitle


\subsection*�Change-marked edition notes�
This edition contains colour coded change markings
relative to the OpenMath 1.0 document\ldots
\begin�itemize�
\color�green�
\item New text is marked in green.
\color�red�
\item Deleted text is marked in red.
\end�itemize�

\subsubsection*�Sections with new text�
\begin�itemize�
<xsl:for-each select="//section">
<xsl:if test="key('new',@id)">
\item
\ref�<xsl:value-of select="@id"/>� <xsl:value-of select="title[1]"/>\\
</xsl:if>
</xsl:for-each>
\end�itemize�
<xsl:apply-templates/>
\catcode`\{=1
\catcode`\}=2
\end�document�

</xsl:template>

<xsl:template match="bookinfo"/>
<xsl:template match="title"/>



<xsl:template match="para">

�<xsl:apply-templates select="@revisionflag|node()"/>�

</xsl:template>


<xsl:template match="@revisionflag[.='deleted']">
<xsl:text>\color�red�</xsl:text>
</xsl:template>

<xsl:template match="@revisionflag[.='added']">
<xsl:text>\color�green�</xsl:text>
</xsl:template>



<xsl:template match="emphasis">
<xsl:text>\emph�</xsl:text>
<xsl:apply-templates/>
<xsl:text>�</xsl:text>
</xsl:template>

<xsl:template match="acronym">
<xsl:text>\textsc�</xsl:text>
<xsl:value-of select="."/>
<xsl:text>�</xsl:text>
</xsl:template>

<xsl:template match="chapter">

\chapter�<xsl:apply-templates select="title/node()"
           />�\label�<xsl:value-of select="@id"/>�
<xsl:apply-templates/>
</xsl:template>

<xsl:template match="chapter" mode="number">
<xsl:number/>
</xsl:template>

<xsl:template match="appendix">
<xsl:if test="not(preceding-sibling::appendix)">

\appendix

</xsl:if>
\chapter�<xsl:apply-templates select="title/node()"
           />�\label�<xsl:value-of select="@id"/>�
<xsl:apply-templates/>
</xsl:template>

<xsl:template match="appendix" mode="number">
<xsl:number format="A"/>
</xsl:template>


<xsl:template match="section">
  <xsl:if test="parent::appendix">\clearpage</xsl:if>
  <xsl:text>�</xsl:text>
  <xsl:apply-templates select="@revisionflag"/>
\<xsl:for-each select="ancestor::section">sub</xsl:for-each>
  <xsl:text/>section�<xsl:apply-templates select="title/node()"
           />�\label�<xsl:value-of select="@id"/>�
<xsl:apply-templates/>
  <xsl:text>�</xsl:text>

</xsl:template>

<xsl:template match="section" mode="number">
<xsl:apply-templates mode="number" select="ancestor::chapter|ancestor::appendix"/>
<xsl:text>.</xsl:text>
<xsl:number level="multiple"  from="chapter|appendix"/>
</xsl:template>


<xsl:template match="ulink">
<xsl:text/>\href�<xsl:value-of select="@url"/>ߣ<xsl:apply-templates/>�<xsl:text/>
</xsl:template>

<xsl:template match="quote">
<xsl:text/>``<xsl:apply-templates/>''<xsl:text/>
</xsl:template>


<xsl:template match="phrase">
<xsl:text/>�<xsl:apply-templates select="@*|node()"/>�<xsl:text/>
</xsl:template>


<xsl:template match="phrase[@role='sl']">
<xsl:text/>\textsl�<xsl:apply-templates/>�<xsl:text/>
</xsl:template>

<xsl:template match="phrase[@role='tt']">
<xsl:text/>\texttt�<xsl:apply-templates/>�<xsl:text/>
</xsl:template>

<xsl:template match="itemizedlist">
\begin�itemize�
<xsl:apply-templates/>
\end�itemize�
</xsl:template>


<xsl:template match="orderedlist">
\begin�enumerate�
<xsl:choose>
<xsl:when test="@numeration='lowerroman'">
\def\theenumi�\roman�enumi��
\def\labelenumi�(\theenumi)�
</xsl:when>
</xsl:choose>
<xsl:apply-templates/>
\end�enumerate�
</xsl:template>


<xsl:template match="variablelist">
\begin�description�
<xsl:apply-templates/>
\end�description�
</xsl:template>

<xsl:template match="listitem">
\item
<xsl:apply-templates select="@*|*"/>
</xsl:template>

<xsl:template match="varlistentry">
<xsl:apply-templates/>
</xsl:template>

<xsl:template match="varlistentry/listitem">
<xsl:apply-templates select="../@*|node()"/>
</xsl:template>

<xsl:template match="varlistentry/term">
\item[<xsl:apply-templates select="../@*|node()"/>]
</xsl:template>

<xsl:template match="varname">
<xsl:text/>\textbf�<xsl:apply-templates/>�<xsl:text/>
</xsl:template>

<xsl:template match="filename">
<xsl:text/>\textbf�<xsl:apply-templates/>�<xsl:text/>
</xsl:template>



<xsl:template match="systemitem">
<xsl:text/>\texttt�<xsl:apply-templates/>�<xsl:text/>
</xsl:template>


<xsl:template match="blockquote">
\begin�quotation�
<xsl:apply-templates/>
\end�quotation�
</xsl:template>


<xsl:template match="figure">
\begin�figure�

<xsl:apply-templates/>

\caption�<xsl:apply-templates select="title/node()"
        />�\label�<xsl:value-of select="@id"/>�
\end�figure�
</xsl:template>


<xsl:template match="figure" mode="number">
<xsl:number level="multiple" count="chapter"/>.<xsl:number level="any"  from="chapter"/>
</xsl:template>



<xsl:template match="xref">
<a href="#�@linkend�">
<xsl:variable name="n" select="key('ids',@linkend)"/>
<xsl:choose>
<xsl:when test="$n/ancestor::appendix">Appendix</xsl:when>
<xsl:otherwise>
<xsl:value-of select="translate(substring(name($n),1,1),'acfs','ACFS')"/>
<xsl:value-of select="substring(name($n),2)"/>
</xsl:otherwise>
</xsl:choose>
<xsl:text>&#160;</xsl:text>
<xsl:apply-templates mode="number" select="$n"/>
</a>
</xsl:template>

<xsl:template match="programlisting|literallayout">
<xsl:if test="@role='small'">�\footnotesize</xsl:if>
\begin�verbatim�<xsl:apply-templates/>\end{verbatim}<xsl:if test="@role='small'">\par\vspace�-10pt��</xsl:if>
<xsl:text>&#10;</xsl:text>
</xsl:template>

<xsl:template match="sidebar">
<xsl:if test="$changelog='yes'">
changelog entry here
</xsl:if>
</xsl:template>


<xsl:template match="informaltable">
<xsl:if test="@role='small'">�\footnotesize</xsl:if>
\begin�tabularߣccccccccccccc�
<xsl:apply-templates select="tgroup/*"/>
\end�tabular�<xsl:if test="@role='small'">�</xsl:if>
<xsl:text>&#10;</xsl:text>
</xsl:template>


<xsl:template match="tbody|thead">
<xsl:apply-templates/>
</xsl:template>

<xsl:template match="row">
<xsl:apply-templates/>
<xsl:if test="parent::head or position() &lt; last()">\\
</xsl:if>
</xsl:template>


<xsl:template match="entry">
<xsl:apply-templates select="@revisionflag|../@revisionflag"/>
<xsl:apply-templates/>
<xsl:if test="position() &lt; last()"> \cellsep </xsl:if>
</xsl:template>


<xsl:key name="cite" match="citation" use="."/>

<xsl:template match="graphic">
<xsl:text/>\includegraphics�<xsl:value-of select="@fileref"/>�<xsl:text/>
</xsl:template>

<xsl:template match="footnote">
<xsl:text/>\footnote�<xsl:apply-templates select="para/node()"/>�<xsl:text/>
</xsl:template>


<!-- toc -->

<xsl:template match="toc">
\catcode`\{=1
\catcode`\}=2
\tableofcontents
\catcode`\{=12
\catcode`\}=12
</xsl:template>

<xsl:template match="lot">
\catcode`\{=1
\catcode`\}=2
\listoffigures
\catcode`\{=12
\catcode`\}=12
</xsl:template>




<!-- bibliography -->
<xsl:template match="bibliography">
\begin�thebibliographyߣ99�
<xsl:for-each select="biblioentry[key('cite',@id)]">
<xsl:sort select="(author[1]/surname|author[1]/othername|bibliomisc[@role='key'])[1]"/>

\bibitem�<xsl:value-of select="@id"/>�
<xsl:for-each select="author">
 <xsl:choose>
   <xsl:when test="position() = last() and last() &gt; 1"> and </xsl:when>
   <xsl:when test="position() &lt; last() and position() &gt; 1">, </xsl:when>
 </xsl:choose>
 <xsl:value-of select="."/>
</xsl:for-each>
  <xsl:text> </xsl:text>
 <i><xsl:apply-templates select="title/node()"/></i>
<xsl:text>&#10;</xsl:text>
</xsl:for-each>
\end�thebibliography�
</xsl:template>


<xsl:template match="bibliography" mode="number">
<xsl:number format="A" value="1+count(preceding-sibling::appendix)"/>
</xsl:template>

<xsl:variable name="bib" select="/book/bibliography/biblioentry[key('cite',@id)]"/>

<xsl:template match="citation">
<xsl:text/>\cite�<xsl:value-of select="."/>�<xsl:text/>
</xsl:template>

<xsl:template match="releaseinfo|firstname|surname|othername">
 <xsl:value-of select="."/>
</xsl:template>

<xsl:template match="editor|author">
<xsl:for-each select="*">
  <xsl:apply-templates select="."/>
 <xsl:if test="position() &lt; last()">&#160;</xsl:if>
</xsl:for-each>
 <xsl:if test="position() &lt; last()">,&#160;</xsl:if>
</xsl:template>


<!-- MathML -->
<xsl:template match="math">\protect\(<xsl:apply-templates/>\protect\)</xsl:template>
<xsl:template match="math[@display='block']">\protect\[<xsl:apply-templates/>\protect\]</xsl:template>


<xsl:template match="mi|mn|mo">
<xsl:value-of select="."/>
</xsl:template>

<xsl:template match="mi[@mathvariant='bold']">
<xsl:text/>\mathbf�<xsl:value-of select="."/>�<xsl:text/>
</xsl:template>

<xsl:template match="mi[@mathvariant='monospace']">
<xsl:text/>\mathtt�<xsl:value-of select="."/>�<xsl:text/>
</xsl:template>

<xsl:template match="mo[.='&#8594;']">\longrightarrow </xsl:template>
<xsl:template match="mi[.='&#937;']">\Omega </xsl:template>
<xsl:template match="mi[.='&#955;']">\lambda </xsl:template>
<xsl:template match="mi[.='&#945;']">\alpha </xsl:template>
<xsl:template match="mi[.='&#960;']">\pi </xsl:template>
<xsl:template match="mi[.='&#8230;']">\ldots </xsl:template>

<xsl:template match="phrase[.='&#8230;']">\ldots </xsl:template>
<xsl:template match="phrase[.='&#8211;']">\textendash </xsl:template>


<xsl:template match="mo[.='&#8805;']">\geq </xsl:template>

<xsl:template match="msub">
<xsl:apply-templates select="*[1]"/>
<xsl:text>\sb�</xsl:text>
<xsl:apply-templates select="*[2]"/>
<xsl:text>�</xsl:text>
</xsl:template>

<xsl:template match="msup">
<xsl:apply-templates select="*[1]"/>
<xsl:text>\sp�</xsl:text>
<xsl:apply-templates select="*[2]"/>
<xsl:text>�</xsl:text>
</xsl:template>

<xsl:template match="mfrac">
<xsl:text>\frac�</xsl:text>
<xsl:apply-templates select="*[1]"/>
<xsl:text>ߣ</xsl:text>
<xsl:apply-templates select="*[2]"/>
<xsl:text>�</xsl:text>
</xsl:template>


<xsl:template match="mrow">
<xsl:text>�</xsl:text>
<xsl:apply-templates />
<xsl:text>�</xsl:text>
</xsl:template>

<xsl:template match="mtext">
<xsl:text>\mbox�</xsl:text>
<xsl:apply-templates />
<xsl:text>�</xsl:text>
</xsl:template>

<xsl:template match="mspace">
<xsl:text>\hspace�</xsl:text>
<xsl:value-of select="@width"/>
<xsl:text>�</xsl:text>
</xsl:template>


</xsl:stylesheet>

