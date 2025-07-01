---
layout: page
title: Particulate Matters
description: An interactive data visualization of fine particulate matter.
img: assets/img/art/pm/title_pa.webp
importance: 9
date: 2017-05-09
category: selected artworks
---

This project is an interactive data visualization of fine particulate matter, specifically the concentration of $PM_{10}$ and $PM_{xs}$ in the ambient air.
The threat that fine particulate matter (commonly known as air pollution) poses to the health and life quality of breathing organisms is evident, yet it is widely downplayed or not even perceived at all. The goal of this installation is to create awareness by making an invisible threat to human health visible.
---

<div class="content-wrapper">
  <div class="project-header">
    <p>An interactive data visualization of real-time air quality index (AQI) data from around the world.</p>
    <p>Enter a city name to see a representation of its particulate matter ($PM_{2.5}$ and $PM_{10}$).</p>
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



### Prototype
Through a physical interface, the user can actively compare different air quality conditions by navigating through different measurement stations in the world and travelling forth and back in time, while having the simulated particle system respond to the data accessed accordingly[cite: 5]. In addition to projecting the particle simulation on the layers of the semitranslucent 3D-screen, the corresponding raw data is shown on a small LED screen.


<div class="mt-3">
  {% include figure.liquid 
     loading="eager" 
     path="assets/img/art/pm/render.png" 
     title="Creative Process Overview" 
     class="img-fluid rounded z-depth-1 w-100" 
  %}
</div>
<div class="caption">
  Projection mapping test on a replica of the Vilnius city hall to test the final projection.
</div>

---

### Project Development
The code for the particle simulation was written in the Processing IDE (Java) and the Arduino IDE (C++). The physical interface was implemented using two potentiometers (for navigation through the data array) and a small LED screen (for visualizing the raw data) connected to an Arduino microcontroller.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/art/pm/prototyp_03.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-1 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/art/pm/schema_02.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/art/pm/cube.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>

---

### DIY 3D Screen
The frame for the screen was constructed using battens from the hardware store. Off-the-shelf mosquito nets were clamped along the edges. Using an airbrush, high-reflective paint was evenly applied to the mesh's surface to ensure optimized visibility of the projected particles.


### Result
The code for the particle simulation was written in the Processing IDE (Java) and the Arduino IDE (C++). The physical interface was implemented using two potentiometers (for navigation through the data array) and a small LED screen (for visualizing the raw data) connected to an Arduino microcontroller.

<div class="row">
    <div class="col-sm mt-8 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/art/pm/result.webp" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>

***




*The installation was shown at [Aachen 2025](https://futurelab-aachen.de/event/aachen2025/)* and ath the [see conference 2017](https://www.see-conference.org/en/)