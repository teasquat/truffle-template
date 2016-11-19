var Truffle = Truffle || {};

Truffle.game = new Phaser.Game(640, 480, Phaser.AUTO, "game", {
  create: Truffle.create,
}, false, false);

Truffle.create = function() {
  this.game.add.plugin(Phaser.Plugin.ECS);
}

Truffle.game.state.add("boot", Truffle.boot_state);
Truffle.game.state.add("preload", Truffle.preload_state);
Truffle.game.state.add("play", Truffle.play_state);

Truffle.game.state.start("boot");
