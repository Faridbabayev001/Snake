var s;
var scl = 20; // scale
var food;

function setup() {
    createCanvas(1350, 620);
    s = new Snake();
    frameRate(10);
    pickLocation();
}

function mousePressed() {
      var fs = fullscreen();
      fullscreen(!fs);
  }

function draw() {
    background(51);
    s.death();
    s.update();
    s.show();

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);

    if (s.eat(food)) {
        pickLocation();
    }

    fill(255);
    text("Your score: " + s.total, 10, 20);
    text("Author: Farid Babayev ", 10, height - 20);
}

function pickLocation() {
    var cols = floor(width / scl);
    var row = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(row)));
    food.mult(scl);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}