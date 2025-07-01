---
layout: page
title: Particulate Matters
description: An interactive data visualization of fine particulate matter.
img: assets/img/art/pm/title_pa.webp
importance: 9
date: 2017-05-09
category: selected artworks
---

This project offers an interactive data visualization of fine particulate matter concentrations, specifically $PM_{10}$ and $PM_{2 5}$, in ambient air. Fine particulate matter, or air pollution, presents a clear threat to the health and quality of life for breathing organisms, though this danger is often underestimated or overlooked.

### Project Aim
The installation aims to raise awareness by **making this invisible threat to human health visible**. When a user inputs a city, the code queries the airqn.org API for current air pollution levels. The central concept of this project is to transform a critical global health issue into an aesthetically engaging experience to foster greater public awareness.

---

# Web-based Prototype




<div class="content-wrapper">
  <div class="project-header">
    <p>Enter a city name to see a visual representation of its particulate matter ($PM_{2.5}$ and $PM_{10}$).</p>
  </div>

  <div class="input-container">
    <input type="text" id="city-input" placeholder="Enter a city name...">
    <button id="submit-button">Visualize</button>
  </div>

  <main id="p5-canvas-container"></main>
</div>

---

<style>
  body {
    margin: 0;
    padding: 2rem;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  .project-header {
    text-align: center;
    color: #333;
  }
  
  .project-header h1 {
    margin-bottom: 0.5rem;
  }
  
  .project-header p {
    margin-top: 0;
    color: #666;
  }

  .input-container {
    display: flex;
    gap: 0.5rem;
  }

  #city-input {
    font-size: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 7px;
  }

  #submit-button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid #007bff;
    background-color: #007bff;
    color: white;
    border-radius: 7px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  #submit-button:hover {
    background-color: #0056b3;
  }

  main#p5-canvas-container {
    width: 80%;
    max-width: 600px;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 20px;
  }

  canvas {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-radius: 14px;
    background-color: #f0f0f0; 
  }
</style>

<script>
  const sketchAssetPath = "{{ '/assets/js/pm/' | relative_url }}";
</script>

<script src="{{ '/assets/js/pm/lib/p5.min.js' | relative_url }}"></script>
<script src="{{ '/assets/js/pm/sketch.js' | relative_url }}"></script>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input');
    const submitButton = document.getElementById('submit-button');

    const triggerVisualization = () => {
      const city = cityInput.value.trim();
      if (city) {
        if (typeof startVisualization === 'function') {
          startVisualization(city);
        } else {
          console.error('startVisualization function not found. Check sketch.js');
        }
      } else {
        alert('Please enter a city name.');
      }
    };

    submitButton.addEventListener('click', triggerVisualization);

    cityInput.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        triggerVisualization();
      }
    });
  });
</script>

The source code for this project can be found in this [Github repository](https://github.com/laurajul/particulate_matters).



# Physical Prototype
Through a physical interface, the user can actively compare different air quality conditions by navigating through different measurement stations in the world and travelling forth and back in time, while having the simulated particle system respond to the data accessed accordingly. In addition to projecting the particle simulation on the layers of the semitranslucent 3D-screen, the corresponding raw data is shown on a small LED screen.

---

### Project Development
The code for the particle simulation was written in Java Script (P5js) and the interface for the analogue interface, developed in the Arduino IDE. The physical interface was implemented using two potentiometers (for navigation through an array of locations) and a small LED screen (for visualizing the raw data) connected to an Arduino microcontroller. The script communicates with the [aqicn.org](https://aqicn.org/api/) API.

---

### DIY 3D Screen
The frame for the screen was constructed using battens from the hardware store. Off-the-shelf mosquito nets were clamped along the edges. Using an airbrush, high-reflective paint was evenly applied to the mesh's surface to ensure optimized visibility of the projected particles.
---

### Result
<div class="row">
    <div class="col-sm mt-8 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/art/pm/result.webp" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    View of the interactive visualization of live air pollution levels read from the aqicn API.
</div>

***

*This art installation was shown at [Aachen 2025](https://futurelab-aachen.de/event/aachen2025/)* and ath the [see conference 2017](https://www.see-conference.org/en/)