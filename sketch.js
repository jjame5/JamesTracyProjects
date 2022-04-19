let angle;
let startTime = 0;
let runGame = true;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  angle = 0
}

function draw() {
  background(255);
  stroke(0);
  fill(0);
  triangle(width/2, height-70, width/2-10, height-50, width/2+10, height-50);
  textAlign(CENTER);
  textSize(18);
  strokeWeight(0.5);
  text('PRESS ENTER HERE', width/2, height-20);
  translate(width/2,height/2);
  noFill();
  for(let i = 0; i < 40; i++) {
    rotate(9);
    circle(200, 0, 20);
  }
  RUN_GAME();
}

function RUN_GAME() {
  push();
    fill(0);
    rotate(angle);
    circle(200, 0, 20);
  pop();
  
  noStroke();
  if (runGame) {
    if (angle%360 < 63 || angle%360 > 108) {
      if (frameCount%2 === 0){
        rotate(angle);
        fill(0);
        circle(200, 0, 20);
        angle += 9;
      }
    } else {
      rotate(angle);
      fill(0);
      circle(200, 0, 20);
      angle += 9;
    }
  } else {
    textSize(30);
    if (angle%360 === 90) {
      WIN();
    } else {
      TRY_AGAIN();
    }
    rotate(angle);
    circle (200, 0, 20);
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    runGame = !runGame;
  }
}

function WIN() {
  fill(100, 255, 50);
  textAlign(CENTER);
  text('!! WIN !!', 0, 0);
}

function TRY_AGAIN() {
  fill(255, 0, 0);
  textAlign(CENTER);
  text('TRY AGAIN', 0, 0);
  textSize(10);
  text('PRESS ENTER', 0, 20);
}