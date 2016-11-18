var Platformer = Platformer || {};

Platformer.game = new Phaser.Game(640, 480, Phaser.AUTO, "", null, false, false);

Platformer.game.state.add("boot", Platformer.boot_state);

Platformer.game.state.start("boot");
