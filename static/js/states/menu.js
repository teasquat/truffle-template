var Truffle = Truffle || {};

Truffle.menu_state = function(){};

Truffle.menu_state.prototype = {
  create: function() {
    this.map = this.game.add.tilemap("map");
    this.map.addTilesetImage("lavaTiles", "tiles");
    this.map.createLayer("lavaLayer").resizeWorld();

    this.title_text = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY, "carrier_command", "TRUFFLE THINGY", 32);

    var credit_text = this.game.add.bitmapText(this.game.world.centerX, this.game.height - 12, 'carrier_command', 'Made by Tea Squat', 8);
    credit_text.x = this.game.world.centerX - (credit_text.textWidth * 0.5);
  },

  update: function() {
    Truffle.shake_text(this.title_text);
  }
}
