// Draw a square on screen.
import { Stage, Shape } from "@createjs/easeljs";
import createjs from "@createjs/easeljs";
console.log(createjs);
let stage = new Stage("myCanvas");
let shape = new Shape();
shape.graphics.beginFill("red").drawRect(0, 0, 120, 120);
stage.addChild(shape);
stage.update();