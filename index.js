import Game from "./gameObject/Game";

const controls = {
  left: false,
  up: false,
  right: false,
  down: false,
};

const gameObj = new Game(30, controls);

window.addEventListener(
  "keydown",
  function (e) {
    switch (e.code) {
      case "ArrowLeft": // left arrow
        controls.left = true;
        break;
      case "ArrowUp": // up arrow
        controls.up = true;
        break;
      case "ArrowRight": // right arrow
        controls.right = true;
        break;
      case "ArrowDown": // down arrow
        controls.down = true;
        break;
    }
  },
  false
);

window.addEventListener(
  "keyup",
  function (e) {
    switch (e.code) {
      case "ArrowLeft": // left arrow
        controls.left = false;
        break;
      case "ArrowUp": // up arrow
        controls.up = false;
        break;
      case "ArrowRight": // right arrow
        controls.right = false;
        break;
      case "ArrowDown": // down arrow
        controls.down = false;
        break;
      case "KeyP": // key P pauses the game
        gameObj.togglePause();
        break;
    }
  },
  false
);

// -->

// start the game when page is loaded
window.onload = function () {
  gameObj.play();
};
