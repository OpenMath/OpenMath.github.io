---
layout: page
title: OpenMath Home
---

{% include intro.md %}

Read more ... about [OpenMath](about) and the [OpenMath Society](society)

## News ([older news](oldnews/))

{% for post in site.posts %}
{{ post.date | date_to_string }}
: [{{ post.title }}]({{ site.baseurl}}{{ post.url }})
{% endfor %}

