class Particle {
  // Accept the p5 instance 'p' as the first argument
  constructor(p, size) {
    this.p = p; // Store the instance

    this.x = this.p.random(this.p.width);
    this.y = this.p.random(this.p.height);
    this.xSpeed = this.p.random(-0.5, 0.5);
    this.ySpeed = this.p.random(-0.5, 0.5);
    // particleImg is a global in the sketch, so we can still access it
    this.randomShape = this.p.floor(this.p.random(1, particleImg.length));
    this.diameter = this.p.random(4, size);
    this.angle = this.p.random(this.p.TWO_PI);
    this.rotationSpeed = this.p.random(-0.05, 0.05);
  }

  createParticle() {
    this.p.push();
    this.p.translate(this.x, this.y);
    this.p.rotate(this.angle);

    if (this.randomShape >= 1 && this.randomShape < particleImg.length) {
      this.p.image(
        particleImg[this.randomShape],
        -this.diameter / 2,
        -this.diameter / 2,
        this.diameter,
        this.diameter
      );
    } else {
      this.p.ellipse(0, 0, this.diameter);
    }

    this.p.pop();
  }

  moveParticle() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.x > this.p.width) this.xSpeed *= -1;
    if (this.y < 0 || this.y > this.p.height) this.ySpeed *= -1;

    this.angle += this.rotationSpeed;
  }
}