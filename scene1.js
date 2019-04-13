class scene1 extends Phaser.Scene {
    constructor() {
        super({ key: "scene1" });
    }


    preload() {
        this.load.image('menu', './assets/menuBG.png')


    }

    create() {
        this.image = this.add.image(400, 300, 'menu')


        // this.input.keyboard.on('keyup_UP', function (e) {
        //     if (e.key == "up") {
        //         this.scene.start("scene2");
        //     }
        // }, this)

        this.input.keyboard.on('keyup_SPACE', function (event) {
            this.scene.start("scene2");


        }, this)


    }




}
