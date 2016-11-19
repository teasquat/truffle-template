var Truffle = Truffle || {};

Truffle.preload_state = function(){};

Truffle.preload_state.prototype = {
  preload: function() {
    this.preload_bar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "load_bar");
    this.preload_bar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preload_bar);

    this.load.tilemap("map", "/tilemaps/map.json", null, Phaser.Tilemap.TILED_JSON);
  },

  create: function() {
    this.game.state.start("play");
  },
};
