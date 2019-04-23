let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
    },


    scene: [scene1, scene2, scene3]
    //------MENU----GAME---GAMEOVER
};



let game = new Phaser.Game(config);