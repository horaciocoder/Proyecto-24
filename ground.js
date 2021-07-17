class Ground {
    constructor(height) {
        var ground_options = {
            isStatic: true,
            friction: 0
        }
        this.body = Bodies.rectangle(canvas.width / 2, canvas.height - (height / 3), canvas.width, height, ground_options);
        World.add(world, this.body);

        this.width = canvas.width;
        this.height = height;
    }
    display() {
        var pos = this.body.position;
        fill("brown");
        stroke("red");
        strokeWeight(4);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}