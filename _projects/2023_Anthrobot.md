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

The **ANTHROBOT** project delves into the intricate dynamics of human-machine relationships, exploring new perspectives through a unique trio: a child, a senior, and a 6-axis industrial robot. At its heart lies the profound question of how intergenerational dialogue can be fostered and mediated through interaction with cutting-edge technology.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/anthrobot/process_1.jpg" title="Early Concept Sketch" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/anthrobot/process_2.jpg" title="Robot Programming Session" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/anthrobot/process_3.jpg" title="Rehearsal with Performers" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Initial sketches and early programming sessions capture the conceptualization of the robot's role. Alongside, a rehearsal photo showing the interaction between the robot and human performers.
</div>

## Collaboration and Development Phases

The project was brought to life in close collaboration with the **DIPHTHONG collective** ([diphthong.art](https://diphthong.art/en/info-en/)), leveraging their expertise in performance and artistic direction. The development unfolded in two intensive phases:

- **Phase 1 (October 17th - November 13th, 2023):** This initial stage involved foundational meetings and workshops held on Tuesdays and Thursdays, focusing on conceptualization, basic choreography, and technical setup.
- **Phase 2 (November 13th - November 30th, 2023):** A more intensive period dedicated to refining the choreography, integrating technical systems, and preparing the theater piece for its public debut.

The culmination of this work was a series of performances from **December 1st to 3rd, 2023, at Kunsthafen Rhenania**, offering the public a chance to experience the unique human-robot dialogue firsthand. The project was developed as a seminar at **KISD (Köln International School of Design)** ([kisd.de](https://kisd.de/)).

## Technical Backbone: UR3e MQTT Controller

At the core of ANTHROBOT's interactive capabilities is a custom **UR3e MQTT Controller** ([GitHub Repository](https://github.com/laurajul/ur3e_mqtt_controller)). This script enables the precise and dynamic control of the **Universal Robots UR3e industrial robot arm** ([universal-robots.com/products/ur3e/](https://www.universal-robots.com/products/ur3e/)) through MQTT messages.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/anthrobot/process_4.jpg" title="MQTT Control Interface" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/anthrobot/process_5.jpg" title="Robot in Action" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A view of the custom MQTT control interface used to choreograph the UR3e robot arm, alongside the robot demonstrating one of its programmed movements.
</div>

**Key Features of the UR3e MQTT Controller:**

- **Program Control:** Remotely loads and plays `.urp` programs stored directly on the robot.
- **Audio Playback:** Triggers local audio files from the controller (e.g., a Raspberry Pi), enriching the performance with soundscapes.
- **OSC Integration:** Sends Open Sound Control (OSC) cues to other systems, such as QLab, for synchronized multimedia elements.
- **Freedrive Mode:** Remotely enables and disables the robot's freedrive mode, allowing for physical interaction and collaborative movement during the performance.
- **Flexible Client Control:** Accepts MQTT messages from any client, including custom smartphone dashboards built with apps like "IoT MQTT Panel," enabling intuitive, real-time control.
