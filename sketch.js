// Tower Defense Game
// Demo Starter Code
// IAT 165

// ==== Global Variables ====

const INTRO = 0;
const PLAY = 1;
const BUILD = 2;
const GAMEOVER = 4;
let mode;

// Colour
let white;
let black;

function setup() {
    // Colour
  white = color(255);
  black = color(0);
  
  createCanvas(1000, 800);
  
  initModes();
  makeButtons()


}

function initModes() {
  rectMode(CENTER);
  textAlign(CENTER);
  mode = INTRO;
}

function makeButtons() {
  // INTRO - Start
  let startButton = createButton("START")
  startButton.position(width/2, 3*height/4)
  startButton.size(200, 100)
  
  // PLAY - Next Wave => To Build Mode
  
  // BUILD - To play mode, Buy Towers
  
  // GAMEOVER - Reset Game
}

function makeNodes() {
  
}

function draw() {
  background(220);
  
  switch (mode) {
    case INTRO:
      intro()
      break;
    case PLAY:
      play()
      break;
    case BUILD:
      build()
      break;
    case GAMEOVER:
      gameOver();
      break;
  }
}
