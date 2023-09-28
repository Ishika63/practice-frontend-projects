let fingers;

function setup() {
  createCanvas(1280, 720);
  // specify multiple formats for different browsers
  fingers = createVideo('assets/rick.mp4');
  fingers.loop();
  fingers.hide();
  //fingers.volume(0);
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  fingers.loadPixels();
  const stepSize = round(constrain(mouseX / 8, 6, 32));
  for (let y = 0; y < height; y += stepSize) {
    for (let x = 0; x < width; x += stepSize) {
      const i = y * width + x;
      const darkness = (255 - fingers.pixels[i * 4]) / 255;
      const radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
}