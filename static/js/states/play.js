var Truffle = Truffle || {};

Truffle.play_state = function(){};

Truffle.play_state.prototype = {
  create: function() {
    this.game.add.sprite(100,100,"player");
    console.log("PLAY");
  },
};
