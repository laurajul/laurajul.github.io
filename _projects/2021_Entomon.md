---
layout: page
title: Entomon
description: Interspecies metamorphosis
img: assets/img/art/2021_entomon/title.webp
video: assets/img/art/2021_entomon/title.webm
poster: assets/img/art/2021_entomon/title.webp
importance: 3
date: 2021-01-01
category: selected artworks
---

with [Lisa Marleen Mantel](https://lisamarleen.de/)

“Entomon – Interspecies metamorphosis” was the result of a series of experiments with retraining StyleGAN2 with Lisa Marleen Mantel.

The results were visual experiments speculating on posthuman representation. A Generative Adversarial Network was trained with the StyleGAN2-ada-pytorch framework of NVlabs. We adapted a network that was originally trained on human faces, in transfer training it with our dataset of insect close-ups. The process of training a GAN on two incompatible datasets, produced phenotypes of human-insect hybrids. Insects and arachnids species are seen as disgusting, as vermins which shouldn‘t be part of the human habitat. A hybridization between human faces and features of unwanted bodies lets us discover alternatives to the humanist understanding of the „natural“. Exploring the latent space of bodily features between species helped us to think about possible posthuman forms of representation.

How much will we need to reshape human bodies to detach from discriminating norms, from natural and artificial?

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        <a href="{{ '/entomon/' | relative_url }}">
            {% include figure.liquid path="assets/img/art/2021_entomon/screenshot.webp" title="Entomon web experience" class="img-fluid rounded z-depth-1" %}
        </a>
    </div>
</div>
<div class="caption">
    Screenshot of the web experience.
</div>

[Go to the web experience]({{ '/entomon/' | relative_url }})

Web experience developed by [Thomas Rutzer](https://github.com/ThomasRutzer), based on our artwork.
