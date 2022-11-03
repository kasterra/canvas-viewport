import GameMap from "./GameMap.js";
import Player from "./Player.js";
import Camera from "./Camera.js";

export default class Game {
  runningId = -1;
  constructor(FPS, controlsObj) {
    this.controlsObj = controlsObj;

    this.canvas = document.getElementById("gameCanvas");
    this.context = this.canvas.getContext("2d");
    this.INTERVAL = 1000 / FPS; // milliseconds
    this.STEP = this.INTERVAL / 1000; // seconds

    this.room = {
      width: 5000,
      height: 3000,
      map: new GameMap(5000, 3000),
    };

    // setup an object that represents the room
    // generate a large image texture for the room
    this.room.map.generate();

    // setup player
    this.player = new Player(50, 50);

    // Old camera setup. It not works with maps smaller than canvas. Keeping the code deactivated here as reference.
    /* let camera = new Game.Camera(0, 0, canvas.width, canvas.height, room.width, room.height);*/
    /* camera.follow(player, canvas.width / 2, canvas.height / 2); */

    // Set the right viewport size for the camera
    this.vWidth = Math.min(this.room.width, this.canvas.width);
    this.vHeight = Math.min(this.room.height, this.canvas.height);

    // Setup the camera
    this.camera = new Camera(
      0,
      0,
      this.vWidth,
      this.vHeight,
      this.room.width,
      this.room.height
    );
    this.camera.follow(this.player, this.vWidth / 2, this.vHeight / 2);
  }

  update() {
    this.player.update(
      this.controlsObj,
      this.STEP,
      this.room.width,
      this.room.height
    );
    this.camera.update();
  }

  // Game draw
  draw() {
    // clear the entire canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // redraw all objects
    this.room.map.draw(this.context, this.camera.xView, this.camera.yView);
    this.player.draw(this.context, this.camera.xView, this.camera.yView);
  }

  gameLoop() {
    this.update();
    this.draw();
  }

  play() {
    if (this.runningId == -1) {
      this.runningId = setInterval(() => {
        this.gameLoop();
      }, this.INTERVAL);
      console.log("play");
    }
  }

  togglePause() {
    if (this.runningId == -1) {
      this.play();
    } else {
      clearInterval(this.runningId);
      this.runningId = -1;
      console.log("paused");
    }
  }
}
