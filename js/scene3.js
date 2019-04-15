class scene3 extends Phaser.Scene {
    constructor() {
        super({ key: "scene3" });

    }

    preload() {
        this.load.image('instructions', './assets/instructions.png')

    }

    create() {
        this.image = this.add.image(400, 300, 'instructions')


        this.input.keyboard.on('keyup_ESC', function (event) {
            this.scene.stop("scene3");
        }, this)

    }




}