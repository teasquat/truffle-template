var game = new Phaser.Game(640, 480, Phaser.AUTO, "game", {
  create: create,
});

function create() {
  game.add.plugin(Phaser.Plugin.ECS);

  game.state.add("boot", boot_state);
  game.state.add("preload", preload_state);
  game.state.add("play", play_state);

  game.state.start("boot");
}
