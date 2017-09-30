# The Sources of the OpenMath.org website

This is patterned after the [OpenDreamKit site](http://opendreamkit.org), also see the
readme there. 

## About

This website is hosted as a [github page](https://pages.github.com/).
In short, is built statically from Markdown source files using
[Jekyll](http://jekyllrb.com/). To update a page, just modify the
corresponding source and push. This can be done online by clicking on
"Edit this page" in the side bar. See the above links for details.

- `_config.yml`: main configuration page
- `_post/*.md`: sources of the news and blog posts
- `_data/*.yml`: YAML database from which certain pages are automatically generated
- `_layouts/*`: local style files
- `_includes/*`: reusable chunks of web pages, like the side bar
- `public/*`: Jekyll style files (almost vanilla), logos, ...

## How to use Jekyll to test/build this website

This is a
[*static website*](http://en.wikipedia.org/wiki/Static_web_page)
automatically generated with [Jekyll](http://jekyllrb.com/) by
[GitHub Pages](http://pages.github.com/).

These instructions are for OpenMath members who wish to do more than the occasional
editing.

### Editing pages online with GitHub

You can edit any page by following the *"Edit this page"* link in the
sidebar. Alternatively, you can directly navigate to the corresponding
`.md` (Markdown) file in GitHub.

This will drop you in GitHub's file editing interface, where you can
modify the source code, preview it, and save your changes, by giving a
short description of what you modified. If you have
[write access](https://help.github.com/articles/what-are-the-different-access-permissions/)
to the repository (hint: you do), your modifications will be published
right away.  If you do not have right access, you will be asked to
[fork the repository and make a pull request](https://help.github.com/articles/fork-a-repo/).

Most of the pages are written in
[Markdown](http://daringfireball.net/projects/markdown/), which is a
textual format for generating formatted text. Markdown syntax is very
intuitive, you can get a quick review
[here](https://help.github.com/articles/github-flavored-markdown/) or
[here](http://kramdown.gettalong.org/syntax.html).

### Imports from other OpenMath Repositories

Some of the content of the page is imported from other repositories:
- `cd`, `contrib`, `cdgroup`, `sts`, `cdfiles`, `cdnames.md`, `cdnamess.md`, `symbols.md`: are automatically pushed from the  `master` branch of the [CDs repository](https://github.com/OpenMath/CDs) by travis on that repository. 
- `standard`, the newer versions (in particular the editor's draft) of the OpenMath 2 standard are pushed from from the  `master` branch of the [OMSTD repository](https://github.com/OpenMath/OMSTD) by travis on that repository.  The SCSCP standard is synchronized with  [SCSCP repository](https://github.com/OpenMath/scscp) is currently synchronized manually. 

The relative paths of these are chosen for backwards compatibility with older versions of the  openmath web site. In particular,`cdfiles` is a redirect for the MathML Recommendation. 

### Working locally

If you want to do more than the occasional editing, you'll soon
realise GitHub's editor and preview are too limited. It's better to
work locally on your computer.

All you need to work locally is a [Git client](http://git-scm.com/).
[Clone the repository](https://help.github.com/articles/fork-a-repo/#step-2-create-a-local-clone-of-your-fork)
and start coding right away.

At some point, you will need to preview your work, but pushing to
GitHub each time you want to preview is clumsy. Your best option is to
[install Jekyll and the required dependencies](https://help.github.com/articles/using-jekyll-with-pages/#installing-jekyll)
on your machine. It is recommended to install the
[GitHub pages gem](https://github.com/github/pages-gem) which provides
you with the exact same versions used by GitHub to compile your site.

If you already have Ruby, the install part should be as easy as

~~~
gem install github-pages
~~~

Note that you will need Ruby headers (`ruby-dev` package on Ubuntu) in
order to compile C dependencies.

On OS X, you can just type `sudo gem install github-pages`.

Now you can `cd` into your local clone of the repository and launch
the compilation by

~~~
jekyll serve -w -b''
~~~

Your site will be generated in a `_site` sub-directory, and served
live at <http://localhost:4000/>. Any changes to the sources will
trigger an automatic recompilation!

Have fun!
