var Platformer = Platformer || {};

Platformer.preload_state = {
  preload: function() {

    var loading_text = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY - 64, "carrier_command", "LOADING THINGS AND STUFF", 14);
    loading_text.anchor.setTo(0.5, 0.5);

    this.preload_bar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "load-bar");
    this.preload_bar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preload_bar);

    // load menu level : tiled_map
    this.load.tilemap("menu", "/assets/tilemaps/menu.json", null, Phaser.Tilemap.TILED_JSON);

    // load levels : tiled_maps
    // i <= *ammount of defined levels*
    for (var i = 1; i <= 2; i++) {
      this.load.tilemap(i.toString(), "/assets/tilemaps/" + i.toString() + ".json", null, Phaser.Tilemap.TILED_JSON);
    }

    this.load.image("tiles", "/assets/img/tiles.png");
    this.load.image("outside-tiles", "/assets/img/outside-tiles.png");

    this.load.spritesheet("player", "/assets/img/player.png", 16, 16, 16);
    this.load.spritesheet("dust", "/assets/img/dust.png", 8, 8);
  },
};
