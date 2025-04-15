// Tower Defense Game
// Demo Starter Code
// IAT 165

/* 
======= Global Variables =======
*/

const INTRO = 0;
const PLAY = 1;
const BUILD = 2;
const GAMEOVER = 4;
let mode; // :int

// Colour
let white;  // :color
let black;  // :color

// Mouse and keyboard interaction variables
let mouseReleased; // :boolean
let wasPressed // :boolean

// Buttons
let startButton;

// Collection of objects


// Images


// Fonts



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

function initVariables() {
  // Load images
  
  // Load fonts
  
  // Create collection of objects
}

function makeButtons() {
  // INTRO - Start
  startButton = createButton("START")
  startButton.position(width/2, 3*height/4)
  startButton.size(200, 100)
  
  // PLAY - Next Wave => To Build Mode
  
  // BUILD - To play mode, Buy Towers
  
  // GAMEOVER - Reset Game
}

function makeNodes() {
  // Plot nodes on the map
}

/*
======== DRAW ==========
*/

function draw() {
  click()
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
