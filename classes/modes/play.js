// This function draws the PLAY screen

function play() {
  background(green);
  drawRoads()
  drawToolbar()
}

function drawRoads() {
    push()
    stroke(orange)
    strokeWeight(50)
    
    // Draws roads from locations
    for (let i = 0; i < nodePositions.length-1; i++) {
      line(nodePositions[i][0], nodePositions[i][1], nodePositions[i+1][0], nodePositions[i+1][1])
    }
    pop();

    // temp node drawing space
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].show();
    }

}

function drawToolbar() {
    push()
    rectMode(CENTER)
    fill(black)
    rect(1150, height/2, 280, height);
    pop()
}