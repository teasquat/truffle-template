var preload_state = {
  preload: function() {
    game.load.image("player", "assets/dude.png");
  },

  create: function() {
    game.state.start("play");
  }
};
