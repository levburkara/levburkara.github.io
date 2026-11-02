---
title: "Research | Levent Burak Kara and the Visual Design and Engineering Lab"
layout: textlay
excerpt: "VDEL develops AI, geometric, and physics-based methods for engineering design, simulation, and manufacturing."
sitemap: true
permalink: /research/
---

# Research

## Intelligent computational methods for engineering

Our research develops computational methods that enable machines to interpret, generate, analyze, and improve engineered designs. By connecting geometry, physics, data, and human intent, we seek to make engineering design and manufacturing more intelligent, accessible, and responsive to real-world constraints.

This goal has guided VDEL from its early work in sketch-based modeling and learned shape representations to current research in generative design, scientific machine learning, intelligent manufacturing, and engineering-focused vision-language systems. Across these areas, we are interested not only in predicting an answer, but also in representing the engineering information, constraints, and physical relationships needed to produce useful and reliable results.

Our work is organized around four connected research directions.

---

## Computational representations for engineering

Engineering knowledge appears in many forms: sketches, drawings, diagrams, CAD models, meshes, physical fields, requirements, and systems models. For a computational system to support design, it must first represent and interpret this information in a form that preserves engineering meaning.

VDEL's early research developed pen- and sketch-based methods for constructing and editing three-dimensional geometry. We subsequently introduced methods for jointly analyzing collections of shapes, learning common deformation structures, and controlling geometry through semantic concepts rather than conventional CAD operations. This work helped establish a progression from direct geometric interaction to learned representations of design intent.

Today, we are extending this research to engineering documents and structured models. Current projects investigate graph-based understanding of technical drawings, generation of editable CAD from orthographic views, and translation of natural-language requirements into SysML models. The long-term objective is to connect informal human communication with the structured representations required for engineering analysis and downstream redesign.

**Representative work**

- [Pen-based styling design of 3D geometry](https://doi.org/10.1145/1128888.1128909), ACM Solid and Physical Modeling, 2006
- [Beautification of design sketches using trainable stroke clustering and curve fitting](https://doi.org/10.1109/TVCG.2010.105), *IEEE Transactions on Visualization and Computer Graphics*, 2011
- [Co-Abstraction of Shape Collections](https://dl.acm.org/citation.cfm?id=2366185), ACM SIGGRAPH Asia, 2012
- [Co-Constrained Handles for Deformation in Shape Collections](https://dl.acm.org/citation.cfm?id=2661234), ACM SIGGRAPH Asia, 2014
- [Semantic Shape Editing Using Deformation Handles](https://dl.acm.org/citation.cfm?id=2766908), ACM SIGGRAPH, 2015
- [Ortho2CAD: 3D CAD Generation from Orthographic Drawings Using Vision Language Models](https://arxiv.org/abs/2607.08891), 2026
- [Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement](https://arxiv.org/abs/2607.14162), 2026

---

## Generative design and manufacturing

Generative engineering requires more than producing plausible geometry. A viable design must satisfy physical requirements, manufacturing constraints, cost objectives, and the realities of available processes and resources.

Our work in this area combines geometry, optimization, machine learning, and engineering analysis. We have developed methods for designing lightweight structures under uncertain loading, coupling structural and process decisions in metal additive manufacturing, synthesizing three-dimensional forms from design data, and accelerating topology optimization using learned physical fields.

More recently, we have introduced **generative manufacturing**, a framework in which products are redesigned in response to both functional requirements and available manufacturing resources. This direction expands generative design beyond shape creation toward the coordinated reasoning needed when materials, machines, processes, suppliers, or mission requirements change.

**Representative work**

- [Procedural Modeling Using Autoencoder Networks](https://doi.org/10.1145/2807442.2807448), ACM UIST, 2015
- [Lightweight Structure Design Under Force Location Uncertainty](https://dl.acm.org/citation.cfm?id=3073626), ACM SIGGRAPH, 2017
- [Concurrent Structure and Process Optimization for Minimum-Cost Metal Additive Manufacturing](http://mechanicaldesign.asmedigitalcollection.asme.org/article.aspx?articleid=2717395), *Journal of Mechanical Design*, 2019
- [TopologyGAN: Topology Optimization Using Generative Adversarial Networks Based on Physical Fields](https://doi.org/10.1115/1.4049533), *Journal of Mechanical Design*, 2021
- [Multi-scale topology optimization using neural networks](https://doi.org/10.1007/s00366-025-02156-6), *Engineering with Computers*, 2025
- [Generative Manufacturing: A requirements- and resource-driven approach to part making](https://doi.org/10.1016/j.compind.2025.104286), *Computers in Industry*, 2025

---

## AI for physics and engineering simulation

High-fidelity engineering simulation can be computationally expensive, particularly when it must be repeated across many geometries, operating conditions, or design iterations. We investigate how machine learning can accelerate these calculations without discarding the geometry and physics that govern them.

Our research has developed neural methods for stress and scalar-field prediction, graph- and mesh-based learning, topology generation, and reduced-order modeling. These approaches operate on engineering representations rather than only regular images, allowing predictions to respect complex domains and discretizations. Current work explores neural fields, operator-learning architectures, low-rank attention, and geometry-conditioned models for large-scale physical systems.

The goal is not to replace physical reasoning with a black-box approximation. We seek computational models that combine the speed and adaptability of learning with the structure, constraints, and interpretability required in engineering analysis.

**Representative work**

- [StressGAN: A Generative Deep Learning Model for 2D Stress Distribution Prediction](https://asmedigitalcollection.asme.org/appliedmechanics/article/88/5/051005/1096635/StressGAN-A-Generative-Deep-Learning-Model-for-Two), *Journal of Applied Mechanics*, 2021
- [Scalar Field Prediction on Meshes Using Interpolated Multiresolution Convolutional Neural Networks](https://doi.org/10.1115/1.4065782), *Journal of Applied Mechanics*, 2024
- [SNF-ROM: Projection-based nonlinear reduced-order modeling with smooth neural fields](https://doi.org/10.1016/j.jcp.2025.113957), *Journal of Computational Physics*, 2025
- [FLARE: Fast Low-rank Attention Routing Engine](https://arxiv.org/abs/2508.12594), 2025

---

## Intelligent manufacturing systems

Manufacturing processes generate rich streams of acoustic, thermal, visual, geometric, and process data. We develop methods that transform these measurements into useful estimates of process state, product quality, and manufacturing risk.

Our work in metal additive manufacturing includes acoustic and thermal monitoring, inference of melt-pool behavior, prediction of lack-of-fusion defects, and analysis of fast physical phenomena during laser-material interaction. These projects combine sensing, machine learning, mechanics, and manufacturing science to reveal events that may be difficult or impossible to observe directly during production.

We also investigate manufacturability prediction and resource-aware redesign. Together, these efforts support a broader vision in which engineering systems can interpret available evidence, anticipate production problems, and adapt designs to changing manufacturing conditions.

**Representative work**

- [Inference of melt-pool characteristics and lack-of-fusion defects using acoustic and thermal emission data](https://doi.org/10.1016/j.addma.2024.104057), *Additive Manufacturing*, 2024
- [VIRL: Volume-Informed Representation Learning toward few-shot manufacturability estimation](https://doi.org/10.1007/s10845-025-02575-8), *Journal of Intelligent Manufacturing*, 2026
- [Aeroacoustic signatures reveal transient dynamics in metallic additive manufacturing](https://arxiv.org/abs/2603.00789), 2026

---

## Research across application domains

The computational ideas developed in VDEL have been tested across a range of engineering and scientific domains. Applications have included additive manufacturing, integrated-circuit design, fuel cells, environmental sensing, molecular and peptide design, patient-specific modeling, soft-tissue deformation, and organ preservation.

These collaborations are not separate from the laboratory's central research identity. They provide demanding settings in which representations, learning methods, physical models, and design algorithms can be evaluated against consequential real-world problems.

Examples include [generative design of target-specific peptide inhibitors](https://doi.org/10.1038/s41467-024-45766-2) in *Nature Communications* and a [computational liver perfusion model](https://doi.org/10.1038/s41598-025-85170-4) in *Scientific Reports*.

---

## Working with VDEL

VDEL brings together students and collaborators with backgrounds in mechanical engineering, computer science, applied mathematics, manufacturing, and related fields. Our projects typically combine methodological research with computational implementation and validation on substantive engineering problems.

[View our publications]({{ site.url }}{{ site.baseurl }}/publications) · [Meet the team]({{ site.url }}{{ site.baseurl }}/team) · [Join VDEL]({{ site.url }}{{ site.baseurl }}/join)
