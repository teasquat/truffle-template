var Truffle = Truffle || {};

Truffle.boot_state = function(){};

Truffle.boot_state.prototype = {
  create: function() {
    this.game.state.start("preload");
  }
};
