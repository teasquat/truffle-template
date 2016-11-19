var Platformer = Platformer || {};

Platformer.game = new Phaser.Game(640, 480, Phaser.AUTO, "game", null, false, false);

Platformer.game.state.add("boot", Platformer.boot_state);
Platformer.game.state.add("preload", Platformer.preload_state);

Platformer.game.state.start("boot");
