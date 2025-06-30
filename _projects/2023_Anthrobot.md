---
layout: page
title: Anthrobot
description: A human robot dance performance
video: assets/img/seminars/2023/anthrobot/title_an.webm
poster: assets/img/seminars/2023/anthrobot/poster_an.png
importance: 1
date: 2023-11-15
category: seminars
giscus_comments: false
---

#### 2023
###### with [Lasse Scherffig](http://lassescherffig.de/), Cihan Subasi and the [Diphtong Collective](https://diphthong.art/)


---


The **ANTHROBOT** project delves into the intricate dynamics of human-machine relationships, exploring new perspectives through a unique trio: a child, a senior, and a 6-axis industrial robot. At its heart lies the profound question of how intergenerational dialogue can be mediated through encounters with the 'otherness'[^otherware] of an industrial robot arm.



<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/seminars/2023/anthrobot/course_01.jpg" title="Early Concept Sketch" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/seminars/2023/anthrobot/process_02.jpg" title="Robot Programming Session" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/seminars/2023/anthrobot/process_03.jpeg" title="Rehearsal with Performers" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Initial sketches and early programming sessions capture the conceptualization of the robot's role. Alongside, a rehearsal photo showing the interaction between the robot and human performers.
</div>

## Collaboration and Development Phases

The project was brought to life in close collaboration with the [Diphtong Collective](https://diphthong.art/), contributing their expertise in performance and artistic direction.

The culmination of this work was a series of performances from **December 1st to 3rd, 2023, at Kunsthafen Rhenania**, offering the public a chance to experience the unique human-robot dialogue firsthand. The project was developed as a seminar at [**KISD Köln International School of Design**](https://kisd.de/).

At the core of ANTHROBOT's interactive capabilities is a custom **UR3e MQTT Controller** ([GitHub Repository](https://github.com/laurajul/ur3e_mqtt_controller)). This script enables the precise and dynamic control of the [**Universal Robots UR3e industrial robot arm**](https://www.universal-robots.com/products/ur3e/) through MQTT messages.

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/seminars/2023/anthrobot/rehearsal_01.png" title="MQTT Control Interface" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/seminars/2023/anthrobot/process_04.png" title="Robot in Action" class="img-fluid rounded z-depth-1" %}
    </div>
        <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/seminars/2023/anthrobot/schema.png" title="Robot in Action" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A view of the custom MQTT control interface used to choreograph the UR3e robot arm, alongside the robot demonstrating one of its programmed movements.
</div>

Within the seminar, students focused on principles of human-computer interaction and interaction design. They developed choreographed programs for the robot that could be loaded and played remotely. To enrich the performance, they also designed soundscapes by integrating triggers into the MQTT communication scheme, which controlled the audio via OSC. A portion of the performance utilized a 'freedrive' mode, enabling an actor to move the robot's arm directly for more fluid interaction. To manage these elements live, the students created a control dashboard for sending MQTT commands to the robot during the performance.

---

## Performance

<div class="mt-3">
  {% include figure.liquid 
     loading="eager" 
     path="assets/img/seminars/2023/anthrobot/performance_01.jpg" 
     title="Creative Process Overview" 
     class="img-fluid rounded z-depth-1 w-100" 
  %}
</div>
<div class="caption">
  Projection mapping test on a replica of the Vilnius city hall to test the final projection.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/seminars/2023/anthrobot/performance_01.jpg" title="Early Concept Sketch" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/seminars/2023/anthrobot/performance_02.jpg" title="Robot Programming Session" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/seminars/2023/anthrobot/performance_03.jpg" title="Rehearsal with Performers" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
  <strong>Impressions from the performance</strong> photography by
  <a href="http://www.alessandrodematteis.com/" target="_blank">Alessandro de Matteis&reg;</a>.
</div>
---


### Students

- Tyanka Demyanka Adrian
- Alina Bertacca
- Lilith Greta Meyer
- Johannes Hermut Förster
- Diana Guadalupe Espino Flores
- Carlos Andres Luis Strohm
- Pedro dos Santos Palavra
- Ema Imbrasaite
- Eduarda Marisa Lima Cerqueira
- Phillip Gatzke


---

[^otherware]: Matthias Laschke et al., *Otherware Needs Otherness: Understanding and Designing Artificial Counterparts*, in *Proceedings of the 11th Nordic Conference on Human-Computer Interaction: Shaping Experiences, Shaping Society* (New York: Association for Computing Machinery, 2020), [https://doi.org/10.1145/3419249.3420079](https://doi.org/10.1145/3419249.3420079).

