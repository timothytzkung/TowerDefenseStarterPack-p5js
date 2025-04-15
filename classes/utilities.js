function click() {
    mouseReleased = false
    
    if (mouseIsPressed) {
      wasPressed = true
    }
    if (wasPressed && !mouseIsPressed) {
      mouseReleased = true
      wasPressed = false
    }
  }