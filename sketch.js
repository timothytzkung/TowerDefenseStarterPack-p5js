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
let white;  
let black; 

let pink;
let orange;
let green;
let blue;
let purple;

// Mouse and keyboard interaction variables
let mouseReleased; // :boolean
let wasPressed // :boolean

// Buttons
let startButton;

// Collection of objects
let nodes = [];
let nodePositions = [
  [0, 400],
  [235, 400],
  [235, 125],
  [525, 125],
  [525, 630],
  [370, 630],
  [370, 485],
  [700, 485],
  [700, 300],
  [1050, 300]
]


// Images


// Fonts



function setup() {
  createCanvas(1280, 800);
  
  initModes();
  initVariables()
  makeButtons()
  
}

function initModes() {
  rectMode(CENTER);
  textAlign(CENTER);
  mode = INTRO;
}

function initVariables() {
  // Load colours
  white = color(255);
  black = color(0);

  pink = color('#ff595e');
  orange = color('#ffca3a');
  green = color('#8ac926');
  blue = color('#1982c4');
  purple = color('#6a4c93')


  // Load images
  
  // Load fonts
  
  // Create collection of objects
  makeNodes()
}

function makeButtons() {
  // INTRO - Start
  startButton = createButton("START")
  startButton.position(width/2 - 100, 3*height/4)
  startButton.size(200, 100)
  
  // PLAY - Next Wave => To Build Mode
  
  // BUILD - To play mode, Buy Towers
  
  // GAMEOVER - Reset Game
}

function makeNodes() {
  // Plot nodes on the map
  nodes.push(new Node(nodePositions[1][0], nodePositions[1][1], 0, -1))
  nodes.push(new Node(nodePositions[2][0], nodePositions[2][1], 1, 0))
  nodes.push(new Node(nodePositions[3][0], nodePositions[3][1], 0, 1))
  nodes.push(new Node(nodePositions[4][0], nodePositions[4][1], -1, 0))
  nodes.push(new Node(nodePositions[5][0], nodePositions[5][1], 0, -1))
  nodes.push(new Node(nodePositions[6][0], nodePositions[6][1], 1, 0))
  nodes.push(new Node(nodePositions[7][0], nodePositions[7][1], 0, -1))
  nodes.push(new Node(nodePositions[8][0], nodePositions[8][1], 1, 0))
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

  // Cursor tracker
  textSize(30)
  text(mouseX + "," + mouseY, mouseX + 50, mouseY - 10);
}
