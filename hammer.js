class Hammer {
    constructor() {
        var hammer_options = {
            restitution: 1,
            isStatic: true,
            friction: 1,
            density: 5
        }
        this.body = Bodies.rectangle(600, 300, 80, 50);
        World.add(world, this.body);
        this.width = 80;
        this.height = 50;
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        stroke("black");
        strokeWeight(5);
        fill("yellow")
        rectMode(CENTER);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
}