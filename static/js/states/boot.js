var Platformer = Platformer || {};

Platformer.boot_state = {
  preload: function() {
    this.load.image("load-bar", "/assets/img/load-bar.png");
    this.load.bitmapFont("carrier_command", "/assets/font/carrier_command.png", "assets/font/carrier_command.xml");
  },

  create: function() {
    this.game.stage.backgroundColor = "#02171f";

    this.scale.scaleMode             = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically   = true;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.state.start("preload");
  }
};
