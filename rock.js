class Rock {
    constructor(x, y, radius, Restitution, Friction, Density) {
        var rock_options = {
            restitution: Restitution,
            friction: Friction,
            density: Density
        }
        this.body = Bodies.circle(x, y, radius, rock_options);
        World.add(world, this.body);
        this.radius = radius;
    }
    display() {
        var pos = this.body.position;
        fill("gray");
        strokeWeight(this.radius / 10);
        stroke("black")
        ellipse(pos.x, pos.y + (this.radius / 3.5), this.radius, this.radius);
    }
}