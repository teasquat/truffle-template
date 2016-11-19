var Truffle = Truffle || {};

Truffle.boot_state = function(){};

Truffle.boot_state.prototype = {
  preload: function() {
    this.load.image("load_bar", "/assets/load_bar.png");
    this.load.bitmapFont("carrier_command", "/assets/carrier_command.png", "/assets/carrier_command.xml");
  },

  create: function() {
    this.game.stage.backgroundColor = "#02171f";

    this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;

    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.state.start("preload");
  },
};
