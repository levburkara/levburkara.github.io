---
title: "Visual Design and Engineering Lab - News"
layout: textlay
excerpt: "Visual Design and Engineering Lab at Carnegie Mellon University."
sitemap: true
permalink: /allnews.html
---

# News

{% for article in site.data.news %}
<p>{{ article.date }} <br>
<em>{{ article.headline }}</em></p>
{% endfor %}
