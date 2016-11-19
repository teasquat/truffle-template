var Truffle = Truffle || {};

Truffle.boot_state = function(){};

Truffle.boot_state.prototype = {
  preload: function() {
    this.load.image("load_bar", "/assets/load_bar.png");
  },

  create: function() {
    this.game.stage.backgroundColor = "#02171f";

    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.state.start("preload");
  },
};
