const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var rock1, rock2, rock3, rock4, rock5;
var stone1, stone2, stone3;
var hammer;
function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(30);
    rock1 = new Rock(100, 300, 20, 1, 0.5, 1);
    rock2 = new Rock(220, 200, 30, 1, 0.2, 0.3);
    rock3 = new Rock(350, 400, 10, 1, 0.2, 0.8);
    rock4 = new Rock(480, 100, 40, 1, 0.3, 0.4);
    rock5 = new Rock(850, 20, 50, 1, 0.3, 0.1);
    stone1 = new Stone(610, 100, 100, 60, 1, 0.3, 0.6, "black", 3.5);
    stone2 = new Stone(780, 150, 140, 30, 1, 0.7, 0.7, "red", 1.5);
    stone3 = new Stone(900, 50, 80, 160, 1, 0.1, 0.3, "blue", 2);
    hammer = new Hammer();
}
function draw() {
    Engine.update(engine);
    background("lightblue");
    ground.display();
    rock1.display();
    rock2.display();
    rock3.display();
    rock4.display();
    rock5.display();
    stone1.display();
    stone2.display();
    stone3.display();
    hammer.display();
}