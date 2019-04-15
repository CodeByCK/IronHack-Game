class scene3 extends Phaser.Scene {
    constructor() {
        super({ key: "scene3" });

    }

    preload() {
        this.preload.audio('test', ['AUDIO GOES HERE'])
    }


    create() {
        this.soundFX = this.soundFX.add('test', { loop: "true" })
    }

}