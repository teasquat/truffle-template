var GiffelHunter = new Phaser.Game(640, 480, Phaser.AUTO, 'game', null, false, false);

GiffelHunter.state.add("boot", bootState);
GiffelHunter.state.add("preload", preloadState);

GiffelHunter.state.start("boot");
