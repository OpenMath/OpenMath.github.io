---
layout: page
title: OpenMath Home
---

{% include intro.md %}

Read more ... about [OpenMath](about) and the [OpenMath Society](society)

## News ([older news](news/); [really old news](oldnews/))

{% for post in site.posts %}
   {% if forloop.index < 5 %}
   {{ post.date | date_to_string }}
   : [{{ post.title }}]({{ site.baseurl}}{{ post.url }})
   {% endif %}
{% endfor %}

