var Truffle = Truffle || {};

Truffle.game = new Phaser.Game(640, 480, Phaser.AUTO, "game", {
  create: Truffle.create,
}, false, false);

Truffle.shake_text = function(text, x, y) {
  if(text) {
    var rand_x = Math.random();
    var rand_y = Math.random();

    if(this.game.time.time % 2) {
      rand_x *= -1;
      rand_y *= -1;
    }

    x = x || this.game.camera.x + (this.game.camera.width / 2) - (text.textWidth * 0.5);
    y = y || this.game.camera.y + (this.game.camera.height / 2) - (text.textHeight * 0.5);

    text.x = x + rand_x;
    text.y = y + rand_y;
  }
}

Truffle.create = function() {
  this.game.add.plugin(Phaser.Plugin.ECS);
}

Truffle.game.state.add("boot", Truffle.boot_state);
Truffle.game.state.add("preload", Truffle.preload_state);
Truffle.game.state.add("menu", Truffle.menu_state);
Truffle.game.state.add("play", Truffle.play_state);

Truffle.game.state.start("boot");
