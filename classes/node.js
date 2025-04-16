/*
Nodes are invisible objects on the map to direct flow of mobs.
When a mob collides with a node object, it will change direction according to the node's instructions
*/

class Node {
    x; // Node location
    y;

    dx; // Direction instructions
    dy;
  constructor(_x, _y, _dx, _dy) {
    this.x = _x;
    this.y = _y;

    this.dx = _dx;
    this.dy = _dy;
  }

  show() {
    push()
    fill(pink)
    ellipse(this.x, this.y, 30, 30)
    line(this.x, this.y, this.x+this.dx*50, this.y+this.dy*50)
    pop()
  }
}