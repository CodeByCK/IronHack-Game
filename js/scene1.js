class scene1 extends Phaser.Scene {
    constructor() {
        super({ key: "scene1" });
    }


    preload() {
        this.load.image('menu', './assets/menu.png')
        this.load.audio('music', './assets/music.mp3')

    }

    create() {
        this.image = this.add.image(400, 300, 'menu')

        this.input.keyboard.on('keyup_ENTER', function (event) {
            this.scene.start("scene2");
        }, this)

        this.input.keyboard.on('keyup_I', function (event) {
            this.scene.launch("scene3");

        }, this)

        this.sound.play('music');

    }




}
