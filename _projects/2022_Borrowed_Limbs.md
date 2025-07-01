---
layout: page
title: Borrowed Limbs
description: Text-to-image short film
img: assets/img/art/borrowed_limbs/title_bl.webp
#redirect: https://unsplash.com
importance: 3
date: 2021-05-04
category: selected artworks
---
#### 2021 - 2022

### An Experimental Short Film
The experimental short film “Borrowed Limbs”, created in collaboration with [Lisa-Marleen Mantel](https://lisamarleen.de/), emphasizes the mediating role speculative design has in the face of disruptive technological advancements, as it allows for the exploration and simulation of ethical issues. The short film is centered around an AI main character who uses the human body as a sensing device to gain a physical understanding of their surroundings. Influenced by posthuman thinkers, the work aims to provoke a discussion about Cartesian notions of disembodied intelligence.

The work combines recent developments in philosophy and cognitive science with state-of-the-art technologies and artistic practice: Main part of the film was produced with a machine-learning-backed process called “CLIP guided diffusion”. This method enables image synthesis based on language prompts. Prompts are carefully refined in a human-machine communication loop. In a way, the practical processes involved in producing the film reflect the speculative idea of an ongoing dialogue found in the narrative. The work was created as part of the Master Research at KISD – Cologne International School of Design (Faculty of TH Köln).

The short film "Borrowed Limbs" was created using a **artistic appropriation of AI tools**, with a focus on exploring the symbiotic relationship between humans and AI, and subverting common science fiction tropes about AI and cyborgs. The production intentionally avoided hackneyed narratives, particularly those romanticizing or sexualizing female cyborgs or depicting evil gynoids.

---

### Production Process

The core of the film's footage was generated through a novel process called CLIP-guided image synthesis[^crowson] as pioneered by Katherine Crowson. This method involves image synthesis based on language prompts, which were meticulously refined in a human-machine feedback loop. This iterative process involved prompting the machine, evaluating the results, and then refining subsequent prompts to achieve the desired visual outcome. This creative process is mirrored to the AI's journey (the film's protagonist) to becoming an embodied, complete agent within the film's narrative.

A significant aspect of the production involved decoupling the AI from a physical body, transmitting it as disembodied data streams. This was visually represented through different visual aesthetics that conveyed various states of "connectedness" between the AI and its human "device" (a human body utilized by the AI). The film aims to provide insight into an AI's training iteration, with the constant loop of the AI becoming an embodied agent mirroring the film's production.

The hypothetical **birth of consciousness**, the first moment that the sensory input and memories of our AI protagonist would form a coherent memory is a reflection on Daniel Dennets critique of cartesian dualism. We experimented with the visual output of the very first training iterations of StyleGAN Networks. They specifically used StyleGAN3 by NVlabs, a Generative Adversarial Network (GAN) where a generator creates images and a discriminator evaluates them. The initial noise distribution of a neural network was used to represent the "incoherence" before the AI perceived the world, speculating that noise might be a "frightening sight" to a machine.

For scenes depicting the "human device," a StyleGAN3 model was trained on approximately 2000 portrait shots of a single human model. This allowed for the exploration of latent space interpolations, where the StyleGAN, trained on one person, could interpolate between movements and facial expressions in an "unnatural manner" while still maintaining natural individual poses and expressions. The aim was to show the human representation through "machine eyes."

The process of visualizing the birth of consciousness was specifically achieved through truncation interpolation, a method published by [Derrick Schultz](https://dvschultz.github.io/design/index.html). Truncation, a parameter for StyleGAN inference, allows the generating algorithm to "wander off" into less likely results in the latent space until it devolves into incoherent nothingness the perlin noise distribution of the inital noise.

**Prompt design** was crucial, with careful attention to overall composition and color scheme. Objects and color contrasts were used to create important shapes and image compositions. For instance, the "attachment" of the AI to the human model was achieved using a bathing cap and woolen balls, with skin tone faded to match the bathing cap for a "grown-to-the-head" look. Style frames were created to define the look of scenes and integrate prompt design, showing different stages of connection: detachment, symbiotic fusion, attachment, and inner view, each with specific prompts and parameters.

---

### Technical Details

* **Core Image Generation Process:** CLIP-guided diffusion
* **AI Models Used:**
    * **CLIP** (for guiding image generations)
    * **VQGAN** (for producing high visual quality outputs with CLIP guidance)
    * **StyleGAN3 by NVlabs** (for visualizing the birth of consciousness and generating footage of the "human device")
* **Training Data for StyleGAN3:** Approximately 2000 portrait shots of a human model, maintaining constant image composition.
* **Training Duration for StyleGAN3:** Approximately four days.
* **Image Generation Technique for Birth of Consciousness:** Truncation-interpolation (using truncation values in StyleGAN inference).
* **Software/Libraries:**
    * `pytti 5 beta.ipynb` (mentioned for text prompt usage)
    * `NVlabs/Stylegan3` (for StyleGAN3 infrastructure)
    * `StyleGAN-3-fun repository` (an adaptation of StyleGAN3 by Diego Porres, used for discriminator synthesis experimentation)

---


<h2>Watch the film</h2>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://player.vimeo.com/video/682432232" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
          frameborder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowfullscreen>
  </iframe>
</div>

<!-- Spacer and Divider -->
<div style="margin: 3rem 0;">
  <hr style="border: none; border-top: 1px solid #ccc;">
</div>

<h2>List of screenings</h2>

<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Event</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>August 2022</td>
      <td><a href="https://ars.electronica.art/planetb/en/welcome-to-planetb/" target="_blank" rel="noopener">Ars Electronica</a></td>
      <td>Linz, Austria</td>
    </tr>
    <tr>
      <td>November 2022</td>
      <td>Museumsnacht Köln – <em>States of Motion</em></td>
      <td>Cologne, Germany</td>
    </tr>
    <tr>
      <td>August 2022</td>
       <td><a href="https://site.gardening.nu/en/event/gardening" target="_blank" rel="noopener">Gardening Amelisweerd</a></td>
      <td>Utrecht, the Netherlands</td>
    </tr>
      <tr>
        <td>August 2022</td>
        <td><a href="https://example.com/phantom-horizon" target="_blank" rel="noopener">Phantom Horizon</a></td>
        <td>Künstlerhaus Bethanien</td>
      </tr>
      <tr>
      <td>August 2022</td>
      <td>KISD Parcours</td>
      <td>Cologne, Germany</td>
    </tr>
  </tbody>
</table>

<a href="{{ 'assets/pdf/FinalThesis_Mantel_Wagner.pdf' | relative_url }}" download="My Bachelor's Thesis - Your Name.pdf" class="btn btn-primary mt-3">
  <i class="fas fa-download mr-2"></i> Download Master's Thesis (PDF)
</a>

---

[^crowson]: Katherine Crowson et al., "VQGAN-CLIP: Open Domain Image Generation and Editing with Natural Language Guidance," arXiv, last revised September 4, 2022, arXiv:2204.08583, https://doi.org/10.48550/arXiv.2204.08583.




