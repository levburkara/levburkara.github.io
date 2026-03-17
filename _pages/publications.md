---
title: "Visual Design and Engineering Lab - Publications"
layout: gridlay
excerpt: "Publications."
sitemap: false
permalink: /publications/
---

# Publications 

You can find our publications at [Google Scholar](https://scholar.google.com/citations?user=_X2eOeQAAAAJ&hl=en), [ResearchGate](https://www.researchgate.net/profile/Levent_Kara2), and [ORCID](https://orcid.org/0000-0002-2203-4020). If having trouble, [contact us](mailto:lkara@cmu.edu) and we would be happy to send you pre-prints. 


<script src="https://bibbase.org/show?bib=https%3A%2F%2Fraw.githubusercontent.com%2Flevburkara%2Flevburkara.github.io%2Frefs%2Fheads%2Fmain%2F_data%2Flbkrefs.bib&commas=true&noBootstrap=1&jsonp=1"></script>



<!-- 
## Highlights

For a full list see [below](#full-list)

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ publi.title }}</pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="33%" style="float: left" />
  <p>{{ publi.description }}</p>
  <p><em>{{ publi.authors }}</em></p>
  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}
 -->

<!-- <p> &nbsp; </p> -->


<!-- ## Full List -->

<!-- {% for publi in site.data.publist %}

  {{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>

{% endfor %}
-->

