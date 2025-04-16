// This function draws the INTRO screen

function intro() {
  background(pink);
  startButton.mouseClicked(changeMode);
}

function changeMode() {
    mode = PLAY;
    startButton.hide()

    
}