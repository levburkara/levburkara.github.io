---
title: "Team | Levent Burak Kara and the Visual Design and Engineering Lab"
layout: gridlay
excerpt: "Faculty, researchers, students, and alumni of the Visual Design and Engineering Laboratory at Carnegie Mellon University."
sitemap: true
permalink: /team/
---

# Team

VDEL brings together researchers with backgrounds in mechanical engineering, artificial intelligence, computational science, design, and manufacturing. Our work combines methodological research, computational implementation, and validation on substantive engineering problems.

## Faculty

<div class="row" markdown="0">
<div class="col-sm-12 clearfix">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/leventburakkara.jpg" class="img-responsive" width="22%" style="float: left" alt="Levent Burak Kara" />
<h3>Levent Burak Kara</h3>
<p><strong>Professor of Mechanical Engineering</strong><br />
Courtesy Appointment, Robotics Institute<br />
Director, Visual Design and Engineering Laboratory<br />
Carnegie Mellon University</p>
<p>My research develops computational methods that enable machines to interpret, generate, analyze, and improve engineered designs. By connecting geometry, physics, data, and human intent, my group seeks to make engineering design and manufacturing more intelligent, accessible, and responsive to real-world constraints.</p>
<p><a href="mailto:lkara@cmu.edu">Email</a> · <a href="https://scholar.google.com/citations?user=_X2eOeQAAAAJ&hl=en">Google Scholar</a> · <a href="https://orcid.org/0000-0002-2203-4020">ORCID</a> · <a href="https://www.linkedin.com/in/lkara">LinkedIn</a></p>
</div>
</div>

## Postdoctoral Researchers

{% assign postdocs = site.data.vdel_current | where: "group", "postdoc" %}
{% for member in postdocs %}
<div class="row" markdown="0">
<div class="col-sm-12 clearfix">
{% if member.photo %}<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="18%" style="float: left" alt="{{ member.name }}" />{% endif %}
<h3>{% if member.profile %}<a href="{{ member.profile }}">{{ member.name }}</a>{% else %}{{ member.name }}{% endif %}</h3>
<p><strong>{{ member.role }}</strong>{% if member.started %}, started {{ member.started }}{% endif %}</p>
{% if member.research %}<p><strong>Research:</strong> {{ member.research }}</p>{% endif %}
{% if member.education %}<ul>{% for degree in member.education %}<li>{{ degree }}</li>{% endfor %}</ul>{% endif %}
{% if member.email %}<p><a href="mailto:{{ member.email }}">Email</a>{% if member.profile %} · <a href="{{ member.profile }}">Profile</a>{% endif %}</p>{% endif %}
</div>
</div>
{% endfor %}

## Ph.D. Students

{% assign phd_students = site.data.vdel_current | where: "group", "phd" %}
{% assign number_printed = 0 %}
{% for member in phd_students %}
{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 0 %}<div class="row" markdown="0">{% endif %}
<div class="col-sm-6 clearfix">
{% if member.photo %}<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="28%" style="float: left" alt="{{ member.name }}" />{% endif %}
<h3>{% if member.profile %}<a href="{{ member.profile }}">{{ member.name }}</a>{% else %}{{ member.name }}{% endif %}</h3>
<p><strong>{{ member.role }}</strong>{% if member.started %}, started {{ member.started }}{% endif %}</p>
{% if member.research %}<p><strong>Research:</strong> {{ member.research }}</p>{% endif %}
{% if member.education %}<ul>{% for degree in member.education %}<li>{{ degree }}</li>{% endfor %}</ul>{% endif %}
{% if member.email %}<p><a href="mailto:{{ member.email }}">Email</a>{% if member.profile %} · <a href="{{ member.profile }}">Profile</a>{% endif %}</p>{% endif %}
</div>
{% assign number_printed = number_printed | plus: 1 %}
{% if even_odd == 1 %}</div>{% endif %}
{% endfor %}
{% assign final_even_odd = number_printed | modulo: 2 %}
{% if final_even_odd == 1 %}</div>{% endif %}

## Ph.D. and PostDoc Alumni

<div class="phd-alumni">
{% for member in site.data.vdel_alumni_phd %}
<div class="alumni-entry">
<h4>{% if member.profile %}<a href="{{ member.profile }}">{{ member.name }}</a>{% else %}{{ member.name }}{% endif %}, Ph.D. {{ member.year }}</h4>
{% if member.thesis %}<p><em>{{ member.thesis }}</em></p>{% endif %}
{% if member.destination %}<p>{{ member.destination }}</p>{% endif %}
</div>
{% endfor %}
</div>

<div class="row">
<div class="col-sm-8">

## M.S. Alumni

{% for member in site.data.vdel_alumni_ms %}
{% if member.profile %}<a href="{{ member.profile }}">{{ member.name }}</a>{% else %}{{ member.name }}{% endif %}{% if member.year %}, {{ member.year }}{% endif %}<br />
{% endfor %}

</div>
<div class="col-sm-4">

## B.S. Alumni

{% for member in site.data.vdel_alumni_bs %}
{{ member.name }}<br />
{% endfor %}

</div>
</div>

## Join VDEL

We welcome inquiries from prospective Ph.D., M.S., and undergraduate researchers whose interests align with the laboratory's work. See the [Join page]({{ site.url }}{{ site.baseurl }}/join) for preparation and application information.
