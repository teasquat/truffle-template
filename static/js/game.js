var Platformer = new Phaser.Game(640, 480, Phaser.AUTO, 'game', null, false, false);

Platformer.state.add("boot", boot_state);
Platformer.state.add("preload", preload_state);

Platformer.state.start("boot");
