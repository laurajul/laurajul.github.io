// Global variables for the sketch
let pm10, pm25;
let particleImg = [];
const API_PATH = 'https://api.waqi.info/feed/';
const API_TOKEN = '/?token=560a02f3c03631403153c87c17bd47a5521bd3a3';

let lastUpdateTime = 0;
let city = '';
let aqi, airQualityIndexText, station;
let pm25particles = [];
let pm10particles = [];
let baseTextSize;
let airQuality = 50;

// State management flags
let isFetching = false;
let hasData = false;
let hasError = false;
let errorMessage = '';

let targetFrameColor;

// This function is called from the HTML page to start everything
async function startVisualization(newCity) {
  city = newCity;
  isFetching = true;
  hasData = false;
  hasError = false;

  pm25particles = [];
  pm10particles = [];

  try {
    const response = await fetch(`${API_PATH}${city}${API_TOKEN}`);
    const updatedValue = await response.json();

    console.log('Fetched Data for ' + city + ':', updatedValue);

    if (updatedValue.status === 'ok') {
      aqi = updatedValue;
      station = updatedValue.data.city.name;
      updateData();
      hasData = true;
    } else {
      hasError = true;
      errorMessage = `Could not find data for "${city}".\nPlease try another city.`;
      console.error('API Error:', updatedValue.data);
    }
  } catch (error) {
    hasError = true;
    errorMessage = 'Network error. Please try again.';
    console.error("Error fetching data:", error);
  } finally {
    isFetching = false;
  }
}

function preload() {
  const imagePromises = [];
  for (let i = 1; i <= 17; i++) {
    const promise = new Promise((resolve, reject) => {
      const path = `${sketchAssetPath}images/pm25_${i}.png`;
      particleImg[i] = loadImage(path, resolve, reject);
    });
    imagePromises.push(promise);
  }

  Promise.all(imagePromises)
    .then(() => console.log("All particle images loaded successfully."))
    .catch(err => console.error("Image loading error:", err));
}

function setup() {
  const container = document.getElementById('p5-canvas-container');
  const canvas = createCanvas(container.offsetWidth, container.offsetHeight);
  canvas.parent('p5-canvas-container');

  baseTextSize = min(width, height) * 0.09;
  targetFrameColor = color(100, 100, 100);

  // *** THIS IS THE NEW LINE ***
  // Load Beijing as the default city on startup.
  startVisualization('Beijing');
}

function draw() {
  background(255);
  colorMode(RGB);

  const rgb = aqiToRgb(airQuality);
  targetFrameColor = color(rgb.r, rgb.g, rgb.b);
  drawFrameTransition();

  if (isFetching) {
    drawMessage(`Fetching data for ${city}...`);
  } else if (hasError) {
    drawMessage(errorMessage);
  } else if (hasData) {
    drawInterface();
    manageParticles(pm10particles, pm10, 20);
    manageParticles(pm25particles, pm25, 10);
    
    if (millis() - lastUpdateTime > 10000) {
      lastUpdateTime = millis();
      startVisualization(city);
    }
  } else {
    // This message is now unlikely to be seen, which is fine.
    drawMessage('Enter a city to begin.');
  }
}

function drawMessage(message) {
  textAlign(CENTER, CENTER);
  textSize(baseTextSize * 0.3);
  textStyle(NORMAL);
  fill(100);
  text(message, width / 2, height / 2);
}

function updateData() {
  try {
    pm25 = aqi.data.iaqi.pm25?.v || 0;
    pm10 = aqi.data.iaqi.pm10?.v || 0;

    console.log(`Processed Particle Values: PM2.5 = ${pm25}, PM10 = ${pm10}`);

    airQuality = aqi.data.aqi || 0;
    station = aqi.data.city.name;
    const stationParts = station.split(',').map(part => part.trim());
    aqiCity = city;
    aqiStation = stationParts[0] || 'Unknown Station';
    aqiCountry = stationParts[stationParts.length - 1]?.toUpperCase() || 'UNKNOWN COUNTRY';
    airQualityIndexText = getAirQualityText(airQuality);
    lastUpdateTime = millis();
  } catch (error) {
    hasError = true;
    errorMessage = "Error processing API data.";
    console.error("Error updating data:", error);
  }
}

function drawInterface() {
  let scaledTextSize = width * 0.08;
  let xOffset = width * 0.08;
  let yOffset = height * 0.12;
  let lineSpacing = height * 0.09;

  fill(red(targetFrameColor), green(targetFrameColor), blue(targetFrameColor));
  textAlign(LEFT, TOP);

  textStyle(BOLD);
  textSize(scaledTextSize);
  let cityLines = splitTextIntoLines(aqiCity.toUpperCase());
  for (let i = 0; i < cityLines.length; i++) {
    text(cityLines[i], xOffset, yOffset + i * lineSpacing);
  }

  let currentY = yOffset + cityLines.length * lineSpacing;
  
  textStyle(ITALIC);
  textSize(scaledTextSize * 0.5);
  let stationLines = splitTextIntoLines(aqiStation);
   for (let i = 0; i < stationLines.length; i++) {
    text(stationLines[i], xOffset, currentY + i * (lineSpacing * 0.6));
  }

  currentY += stationLines.length * (lineSpacing * 0.6);

  textStyle(NORMAL);
  textSize(scaledTextSize * 0.4);
  text(aqiCountry, xOffset, currentY + (lineSpacing * 0.5));
  
  textAlign(RIGHT, BOTTOM);
  textStyle(BOLD);
  textSize(scaledTextSize * 0.8);
  text(airQuality, width - xOffset, height - yOffset);
  
  textStyle(NORMAL);
  textSize(scaledTextSize * 0.4);
  text(airQualityIndexText, width - xOffset, height - yOffset - (lineSpacing * 0.8));
  
  textAlign(LEFT, TOP);
}

function splitTextIntoLines(text) {
    let words = text.split(' ');
    let lines = [];
    let currentLine = '';
    let maxWidth = width * 0.8;

    for (let word of words) {
        let testLine = currentLine + (currentLine.length > 0 ? ' ' : '') + word;
        if (textWidth(testLine) > maxWidth && currentLine.length > 0) {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = testLine;
        }
    }
    lines.push(currentLine);
    return lines;
}

function manageParticles(particles, pmValue, size) {
  while (particles.length < pmValue && particles.length < 500) {
    particles.push(new Particle(size));
  }
  while (particles.length > pmValue) {
    particles.pop();
  }
  for (let particle of particles) {
    particle.createParticle();
    particle.moveParticle();
  }
}

class Particle {
  constructor(size) {
    this.x = random(width);
    this.y = random(height);
    this.xSpeed = random(-0.5, 0.5);
    this.ySpeed = random(-0.5, 0.5);
    this.randomShape = floor(random(1, particleImg.length));
    this.diameter = random(4, size);
    this.angle = random(TWO_PI);
    this.rotationSpeed = random(-0.05, 0.05);
  }
  createParticle() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    if (particleImg[this.randomShape]) {
      image(
        particleImg[this.randomShape], -this.diameter / 2, -this.diameter / 2,
        this.diameter, this.diameter
      );
    } else {
      ellipse(0, 0, this.diameter);
    }
    pop();
  }
  moveParticle() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x < 0 || this.x > width) this.xSpeed *= -1;
    if (this.y < 0 || this.y > height) this.ySpeed *= -1;
    this.angle += this.rotationSpeed;
  }
}

function windowResized() {
    const container = document.getElementById('p5-canvas-container');
    if (container) {
        resizeCanvas(container.offsetWidth, container.offsetHeight);
        baseTextSize = min(width, height) * 0.09;
    }
}

function aqiToRgb(aqiValue) {
  if (aqiValue <= 50) return { r: 120, g: 216, b: 230 };
  if (aqiValue <= 100) return { r: 255, g: 255, b: 102 };
  if (aqiValue <= 150) return { r: 255, g: 153, b: 51 };
  if (aqiValue <= 200) return { r: 255, g: 102, b: 102 };
  if (aqiValue <= 300) return { r: 153, g: 102, b: 255 };
  return { r: 128, g: 0, b: 0 };
}

function drawFrameTransition() {
  let frameSteps = 9;
  let stepSize = min(width, height) * 0.003;
  let initialAlpha = 255;
  let alphaStep = initialAlpha / frameSteps;
  if (!targetFrameColor) return;
  for (let i = 0; i < frameSteps; i++) {
    let offset = i * stepSize;
    let frameWidth = width - 2 * offset;
    let frameHeight = height - 2 * offset;
    let currentAlpha = initialAlpha - i * alphaStep;
    stroke(red(targetFrameColor), green(targetFrameColor), blue(targetFrameColor), currentAlpha);
    strokeWeight(stepSize);
    noFill();
    rect(offset, offset, frameWidth, frameHeight);
  }
}

function getAirQualityText(aqiValue) {
    if (aqiValue < 50) return 'Good';
    if (aqiValue < 100) return 'Moderate';
    if (aqiValue < 150) return 'Unhealthy for Sensitive Groups';
    if (aqiValue < 200) return 'Unhealthy';
    if (aqiValue < 300) return 'Very Unhealthy';
    return 'Hazardous';
}