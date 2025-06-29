---
layout: page
title: Particulate Matters
description: An interactive data visualization of fine particulate matter.
img: assets/img/art/pm/cube.png
importance: 9
date: 2017-05-09
category: selected artworks
---

This project is an interactive data visualization of fine particulate matter, specifically the concentration of $PM_{10}$ and $PM_{xs}$ in the ambient air.
The threat that fine particulate matter (commonly known as air pollution) poses to the health and life quality of breathing organisms is evident, yet it is widely downplayed or not even perceived at all. The goal of this installation is to create awareness by making an invisible threat to human health more comprehensible for the layperson by making it visible.
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

---

### Interaction Design
Through a physical interface, the user can actively compare different air quality conditions by navigating through different measurement stations in the world and travelling forth and back in time, while having the simulated particle system respond to the data accessed accordingly[cite: 5]. In addition to projecting the particle simulation on the layers of the semitranslucent 3D-screen, the corresponding raw data is shown on a small LED screen.

---

### Project Development
The code for the particle simulation was written in the Processing IDE (Java) and the Arduino IDE (C++). The physical interface was implemented using two potentiometers (for navigation through the data array) and a small LED screen (for visualizing the raw data) connected to an Arduino microcontroller.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded" src="https://raw.githubusercontent.com/user-attachments/assets/5815a519-79f0-466c-9c3b-7a3b3fd8959f" alt="A closeup of the Arduino-based control panel with potentiometers and a small screen.">
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded" src="https://raw.githubusercontent.com/user-attachments/assets/384a32a6-e173-45a2-974a-4a253018e690" alt="The wooden frame of the DIY 3D screen with mosquito nets stretched across.">
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded" src="https://raw.githubusercontent.com/user-attachments/assets/91c130d2-5a2a-4649-8c26-5381f727c9d9" alt="The final installation in a dark room with particles projected onto the screen.">
    </div>
</div>
<div class="caption">
    From left to right: The physical interface prototype, the DIY 3D screen during construction, and the final installation.
</div>

---

### DIY 3D Screen
The frame for the screen was constructed using battens from the hardware store. Off-the-shelf mosquito nets were clamped along the edges. Using an airbrush, high-reflective paint was evenly applied to the mesh's surface to ensure optimized visibility of the projected particles.

***
---

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://vimeo.com/1097361717" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
          frameborder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowfullscreen>
  </iframe>
</div>

*The installation was shown at [Aachen 2025](https://futurelab-aachen.de/event/aachen2025/)*