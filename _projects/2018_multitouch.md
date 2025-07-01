---
layout: page
title: Tangibles
description: Interactive data visualization using a capacitive touchscreen and tangible markers
img: assets/img/art/2018_multitouch/title.webp
#redirect: https://unsplash.com
importance: 10
date: 2018-05-04
category: selected artworks
---

#### 2017 - 2019

---
Devices with interactive multi touch surfaces are ubiquitous and are getting more and more sophisticated in terms of providing experiences, that thanks to ultra low latencies and carefully tuned prediction algorithms are smooth and have a natural feel to them. But the digital world lacks physicality and neglects the human sense of touch and does not make use of the fine motor skills of the human hands that allow for high precision tasks and complex manipulation. Also the human capability of bi-manualism and spacial multiplexing is often not exploited.

Tangible user interfaces are an interface type that interlinks the the digital and physical worlds, and allows for exploration of digital content through manipulation of physical objects.Tangibles are not mere input devicesbut they can superimpose elements of the graphical user interface or become fully fused with it. In other words: they are - part of the interface brought to life. The goal of this project was to explore tangible objects as control elements, categorise them by comparing them to input devices and peripherals, analyse them in terms of affordances, and define scenarios, where they could be of use. All this while referring to scientific studies evaluating the performance of tangible user interfaces. This work resulted in a prototype that aims to explore, how tangible control elements could help to navigate through a complex data set, while enhancing the users experience.

<h4>First prototype</h4>

<div class="row">
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/art/2018_multitouch/fingers.webp" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/art/2018_multitouch/first_prototype.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    Testing out first prototypes.
</div>

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/art/2018_multitouch/Universal_Marker.png" class="img-fluid rounded z-depth-1" %}
    </div>
   <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/art/2018_multitouch/cad.png" class="img-fluid rounded z-depth-1" %}
    </div>

 
</div>
<div class="caption">
    The markers were printed with antistatic ABS and regular ABS.
</div>

<h4>Weather Data Visualization</h4>
<style>
    /* Styles specifically for the SVG sliders to integrate nicely */
    .slider-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap; /* Allows items to wrap on smaller screens */
        gap: 50px; /* Space between the two slider sections */
        margin-top: 50px;
        margin-bottom: 50px; /* Add some space below the sliders */
    }

    .year-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f0f0f0; /* Light gray background for sections */
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        width: 45%; /* Adjust width for two columns */
        box-sizing: border-box; /* Include padding and border in the element's total width and height */
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .slider-container {
            flex-direction: column; /* Stack vertically on small screens */
        }
        .year-section {
            width: 90%; /* Take more width on small screens */
        }
    }


    .year-section h3 {
        font-family: 'Rubik', sans-serif;
        font-size: 28px;
        font-weight: bold;
        color: #000301;
        margin-bottom: 20px;
    }

    .year-section img {
        max-width: 100%; /* Ensure images are responsive within their container */
        height: auto; /* Maintain aspect ratio */
        border: 1px solid #ddd;
        margin-bottom: 20px;
    }

    input[type=range] {
        -webkit-appearance: none;
        width: 80%;
        height: 8px;
        border-radius: 5px;
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
    }

    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #000301;
        cursor: pointer;
    }

    input[type=range]::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #000301;
        cursor: pointer;
    }

    #sliderStatus2017, #sliderStatus2018 {
        font-family: 'Rubik', sans-serif;
        font-weight: bold;
        color: #505050;
        margin-top: 10px;
    }
</style>

**Interactive Meterological Data Visualization**

<p>
Linear data representations are more common than polar graphs, for good reasons. It's way easier to compare the deltas of outliers and see trends unfold. Because we read from left to right (in some languages from right to left) a cartesian representation of values is more intuitive while a polar representation requires the onlooker to make an additional step of mental decoding. However a dataset, that describes natural cyclic activity, a polar representation might grant the onlooker with new perspective and a new mental model. One such example is meterological data visualised in one-year intervals. A year is a cyclic process made up of recurring sub-cyles.
</p>
<p>
The resulting visualisations show temperature and global radiation (intensity of sun rays hitting the earth's surface at the measuring station). The data was provided by the [Solar Institute in Jülich](https://www.fh-aachen.de/forschung/institute/sij/) and visualised.
</p>

<div class="slider-container">
    <div class="year-section">
        <h3>2017</h3>
        <img id="img2017" src="{{ site.baseurl }}/assets/img/art/2018_multitouch/nov17.svg" alt="2017 Data Visualization">
        <input type="range" id="slider2017" value="10" min="0" max="11" step="1">
        <span id="sliderStatus2017">May</span>
    </div>

    <div class="year-section">
        <h3>2018</h3>
        <img id="img2018" src="{{ site.baseurl }}/assets/img/art/2018_multitouch/nov18.svg" alt="2018 Data Visualization">
        <input type="range" id="slider2018" value="10" min="0" max="11" step="1">
        <span id="sliderStatus2018">November</span>
    </div>
</div>

<div class="row">
 <div class="col-sm-12 mt-6 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/art/2018_multitouch/05_03.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Sketch of interactive weather data visualization with tangible markers.
</div>






<!-- Spacer and Divider -->
<div style="margin: 3rem 0;">
  <hr style="border: none; border-top: 1px solid #ccc;">
</div>

<h2>Bachelor Thesis Prototype</h2>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://player.vimeo.com/video/1097540326" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
          frameborder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowfullscreen>
  </iframe>
</div>



---

<a href="{{ '/assets/pdf/my_bachelor_thesis.pdf' | relative_url }}" download="My Bachelor's Thesis - Your Name.pdf" class="btn btn-primary mt-3">
  <i class="fas fa-download mr-2"></i> Download Bachelor's Thesis (PDF)
</a>

---

<h2>Trade Fair Demonstrators for Fraunhofer</h2>
During my Bachelor's studies, I had the opportunity to work at [Fraunhofer IPT](https://www.ipt.fraunhofer.de/) in Aachen. Together with Hoc-Tin Trieu and the team at Fraunhofer, I developed several interactive trade fair demonstrators designed to communicate different use cases in industrial production chains. Since these chains typically involve a single workpiece undergoing multiple stages of manufacturing, I integrated this concept with the 3D-printed capacitive markers I had developed for my Bachelor's thesis.

A key part of this work involved close collaboration with engineers from various departments. I spent a lot of time discussing their workflows and trying to understand what aspects of their processes they wanted to convey to visitors. These conversations directly informed the design of the demonstrators. The tangible interfaces we created turned out to be an ideal medium for industrial exhibitions, as they allowed us to represent both the digital and physical aspects of production in an engaging and accessible way.



<h4>Pilotline "Tooling"</h4>
This trade fair demonstrator presents a tooling production pipeline, outlining sequential steps in component fabrication. The display begins with additive manufacturing, specifically Laser Metal Deposition, followed by various subtractive processes like milling and EDM. Viewers can interact with physical models representing workpieces at different production stages. As these workpiece models are positioned along the chain, the displayed information dynamically adjusts to reflect the corresponding manufacturing phase. This interactive element allows for direct exploration of how specific operations contribute to the overall production flow. The demonstration illustrates the integration of diverse manufacturing techniques, from initial material build-up to final surface treatment. It provides a functional overview of the coordinated processes involved in creating advanced tools.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/art/2018_multitouch/Bild1.png" title="Process Image 1" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/art/2018_multitouch/custom – 4.png" title="Process Image 1" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Custom chain.
</div>


<div class="row">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/art/2018_multitouch/18.gif" title="Process Image 1" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/art/2018_multitouch/10.jpg" title="Process Image 2" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The tangibles on the multitouch-table during a fair.
</div>


<h4>Process Chain Blisk manufacturing</h4>
This interactive demonstrator illustrates the complex manufacturing sequence for engine blisks, critical components in aircraft engines. It outlines a multi-stage production chain, beginning with initial material shaping and progressing through various machining operations. Attendees can place physical blisk models, representing different stages of completion, onto the exhibit's designated positions. When a model is moved, the display immediately updates to detail the specific manufacturing processes, tools, and parameters relevant to that stage. This feature offers a practical understanding of how precision machining, surface treatment, and inspection are integrated. The demonstration highlights the iterative refinement required to achieve the exacting tolerances of these high-performance parts. It effectively conveys the coordinated steps involved in transforming raw material into a finished engine blisk.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/art/2018_multitouch/gear_01.gif" title="Process Image 1" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/art/2018_multitouch/gear_02.jpeg" title="Process Image 2" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: first prototype, Right: HMI trade fair (Hannovermesse) 2018 with German education minister Karliczeck
</div>

<h4>Process Chain Gear Manufacturing</h4>
This exhibit showcases the detailed "PROCESS CHAINS FOR GEAR MANUFACTURING," specifically highlighting techniques relevant to producing gears for heavy-duty applications like those at Scania. The demonstrator outlines key stages such as Gear Shaping, Gear Shaving, and the critical Process of Case Hardening. When different physical gear models, representing their respective production stages, are placed on the multi-touch table, the display dynamically updates. This interaction provides immediate visual and textual information about the unique characteristics and parameters of that specific manufacturing step. The demonstrator also touches upon potential "Gear Deviations," illustrating how meticulous process control is essential. This hands-on approach allows for a direct understanding of the precision and complexity inherent in fabricating robust gears. It serves to convey the comprehensive journey from raw material to a finished, high-performance gear.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://player.vimeo.com/video/1097544586" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
          frameborder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowfullscreen>
  </iframe>
</div>