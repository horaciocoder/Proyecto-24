class Stone {
    constructor(x, y, width, height, Restitution, Friction, Density, color, radian) {
        var stone_properties = {
            restitution: Restitution,
            friction: Friction,
            density: Density
        }
        this.body = Bodies.rectangle(x, y, width, height, stone_properties);
        if (radian != null) {
        Matter.Body.setAngle(this.body, PI/radian);
        }
        World.add(world, this.body);
        this.width = width;
        this.height = height;
        this.color = color;
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        fill(this.color);
        stroke("#33ff14");
        rectMode(CENTER);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
}