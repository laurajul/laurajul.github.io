---
layout: page
title: Nothing Exists Alone
description: Interactive sonification through textile
img: assets/img/art/2025_nothing_exists/title.webp
#redirect: https://unsplash.com
importance: 1
category: selected artworks
---

with Ramona Sprengler and Marcel Rickli

Our new collaborator arrived in a long rectangular box, stretching the table.
Under the guidance of our instructor, we carefully assembled the machine, attaching the two long antennae—features that gave it an animal-like appearance—as they protruded behind the frame, swaying and facing us. These would guide two yarns of different colors, holding them in place to be driven across an array of hooks by a carriage that looks like a cassette player fused to an electric iron. With each turn, the carriage is driven across by hand; the hooks protrude or retract, determining the pattern of the interwoven yarns, row by row, while triggering a satisfying series of precise clicks.
The casing, of a gentle, institutional beige color typical of the 70s, was opened in part, with a microcontroller dangling from it. This old machine had been given a new brain! This allowed us to bypass the need for inserting black-and-white pattern cards, and instead send digital instructions directly from a computer, to be transformed into a knitted textile mesh.

by Laura Wagner, Marcel Rickli, Ramona Sprenger

Inspired by the seminar's theme of "weaving sustainable future stories", we became interested in how ecological systems intertwine beyond human grasp.

> “In nature nothing exists alone.”[^first]

This quote from Rachel Carson became an undercurrent throughout our process. Everything in our world is interconnected, interwoven, a layered mesh that unfolds across scales of time and space beyond comprehension to the sentient mind. The attempt to grasp these hyperconnected realities requires a deliberate alteration of perception.

How could we communicate our not-yet fully explored concept via the medium of knitted yarn and pattern, especially when limited to two colors? We decided to augment this limited binary spectrum by knitting with properties of conductivity and non-conductivity as well. One thread was a neutral yarn, and the other was a special antistatic thread whose resistance changed when touched. The resulting textile would function as a resistor, which we then incorporated into a voltage divider circuit. Touching and interacting with the fabric meant changing the resistance, and hence the voltage output of our contraption. We attached an `ESP-32` module to read this output and to modulate the speed of an audio sequence played from the `ESP DAC` pin. Initially, the audio was played at a frequency too low to be understood as speech. To reveal its meaning, the piece needs a human interlocutor: through interaction, the manipulation of the fabric, the frequency shifts, rising into a perceptible range and the spoken words become intelligible.

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/art/2025_nothing_exists/2025_nothing_exists.gif" title="MQTT Control Interface" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/art/2025_nothing_exists/2025_nothing_exists.svg" title="Robot in Action" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    *Figure 2: Left – Schematic drawing of the voltage divider circuit incorporating the antistatic fabric. Right – Interaction with the woven cloth.*![]()
</div>

The work seeks to demonstrate the necessity of altering representations of time and space to perceive hyperobjects, interconnected events and realities that otherwise escape our limited senses. It challenges the viewer to confront the limitations of human perception when exposed to information streams beyond perceptible scopes and ranges.

Conceptually, the piece reflects on the presence of everything that normally escapes our perception: things too fast, too slow, too small, or too big to understand, also referred to as hyperobjects in ecological thinking.

> "We have only to speed up our sense of time to see how strange life forms are. They arise, flicker, and vanish[^second]."

Sybille Krämer speaks of the performative materiality of media: the way material forms are not just carriers of information, but shape the very conditions of knowledge and meaning[^third]. This moment of coming-into-understanding is not merely a technical feedback loop, but also a performative and medial experience in which touch becomes a method for inquiry, exploring a form of storytelling that is not linear or didactic.

Media do not only symbolize; they make sensible by enabling aisthesis, the tension between event and perception. In our piece, information becomes accessible only through embodied interaction, a deliberate shift in perspective. The act of touching the material changes not just electrical voltage, but the very conditions of perception: the fabric becomes sensor, interface, and carrier of meaning, but only within the mode of a situated, bodily experience.

[^first]: Rachel Carson, Silent Spring (Boston: Houghton Mifflin, 1962).
[^second]: Timothy Morton, Dark Ecology: For a Logic of Future Coexistence (New York: Columbia University Press, 2016).
[^third]: Sybille Krämer, Medium, Messenger, Transmission: An Approach to Media Philosophy, trans. Anthony Enns (Amsterdam: Amsterdam University Press, 2015).
