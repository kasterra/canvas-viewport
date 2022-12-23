export default class GameMap {
  constructor(width, height) {
    // map dimensions
    this.width = width;
    this.height = height;

    // map texture
    this.image = null;
  }

  generate() {
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.canvas.width = this.width;
    ctx.canvas.height = this.height;

    const rows = ~~(this.width / 44) + 1;
    const columns = ~~(this.height / 44) + 1;

    let color = "red";
    ctx.save();
    ctx.fillStyle = "red";
    for (let x = 0, i = 0; i < rows; x += 44, i++) {
      ctx.beginPath();
      for (let y = 0, j = 0; j < columns; y += 44, j++) {
        ctx.rect(x, y, 40, 40);
      }
      color = color == "red" ? "blue" : "red";
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
    }
    ctx.restore();

    // store the generate map as this image texture
    this.image = new Image();
    this.image.src = ctx.canvas.toDataURL("image/png");
  }

  draw(context, xView, yView) {
    // easiest way: draw the entire map changing only the destination coordinate in canvas
    // canvas will cull the image by itself (no performance gaps -> in hardware accelerated environments, at least)
    /*context.drawImage(this.image, 0, 0, this.image.width, this.image.height, -xView, -yView, this.image.width, this.image.height);*/

    // didactic way ( "s" is for "source" and "d" is for "destination" in the variable names):

    // location on canvas to draw the croped image
    const dx = 0;
    const dy = 0;
    // offset point to crop the image
    const sx = xView;
    const sy = yView;
    let sWidth, sHeight;

    // dimensions of cropped image
    sWidth = context.canvas.width;
    sHeight = context.canvas.height;

    // if cropped image is smaller than canvas we need to change the source dimensions
    if (this.image.width - sx < sWidth) {
      sWidth = this.image.width - sx;
    }
    if (this.image.height - sy < sHeight) {
      sHeight = this.image.height - sy;
    }

    // match destination with source to not scale the image
    const dWidth = sWidth;
    const dHeight = sHeight;

    context.drawImage(
      this.image,
      sx,
      sy,
      sWidth,
      sHeight,
      dx,
      dy,
      dWidth,
      dHeight
    );
  }
}
