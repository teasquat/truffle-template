var preload_state = {
    preload: function() {
        game.load.image("player", "assets/dude.png");
    },
    create: function() {
        console.log("PRELOAD");
        game.state.start("play");
    }
};
