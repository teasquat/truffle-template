var Truffle = Truffle || {};

Truffle.preload_state = function(){};

Truffle.preload_state.prototype = {
  preload: function() {
    this.game.load.image("player", "assets/dude.png");
  },

  create: function() {
    this.game.state.start("play");
  }
};
