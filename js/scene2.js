let lane;
let scoreText;
let score = 0;
let gameOverText;
let winText;
// Random car speed for the function section
let Sarr = []
let min = 8
let max = 15
for (i = 0; i < 54; i++) {
    let randomNum = Math.floor(Math.random() * (max - min) + min)
    Sarr.push(randomNum)
}
// All car pictures for the preload section
let carPics = ['car.png', 'car2.png', 'car3.png', 'car4.png', 'car5.png', 'car6.png',
    'car7.png', 'car8.png', 'car9.png', 'car10.png', 'car11.png', 'bus.png', 'bus2.png',
    'scooter.png']
//Array of car's Y-Axis for the create section
let yAxis = [3273, 3223, 3173, 3123, 3073, 3023, 2973, 2923, 2873, 2823, 2723,
    2673, 2623, 2573, 2523, 2473, 2423, 2373, 2323, 2223, 2173, 2123,
    2073, 2023, 1973, 1923, 1873, 1773, 1723, 1673, 1623, 1573, 1523,
    1473, 1373, 1323, 1273, 1223, 1173, 1123, 1023, 973, 923, 873, 823,
    723, 673, 623, 573, 473, 423, 373, 273, 223]

class scene2 extends Phaser.Scene {
    constructor() {
        super({ key: "scene2" });
    }
    preload() {//everything you need to load here
        this.load.image('background', './assets/bg1.png')
        for (let i = 1; i <= 55; i++) {
            this.load.image(`car${i}`, `./assets/${carPics[Math.floor(Math.random() * carPics.length)]}`);
        }
        this.load.spritesheet('player', './assets/chicken.png', { frameWidth: 40, frameHeight: 40 })
        this.load.audio('jump', './assets/jump.mp3');
        this.load.audio('jumpB', "./assets/jumpB.mp3");
        this.load.image('star', './assets/star1.png');
    }
    create() {// make it do things
        //camera viewport and backbround set on the canvas.
        let camera = this.cameras.main;
        camera.setViewport(0, 0, 800, 600);
        this.add.tileSprite(0, 0, 800, 5000, "background").setOrigin(0);
        // this.image = this.add.image(400, -1900, 'background');
        this.physics.world.setBounds(0, 0, 800, 5000);
        this.car1 = this.add.sprite(-190, 123, 'car1');
        this.player = this.physics.add.sprite(400, 75, 'player');
        this.player.setCollideWorldBounds(true)
        //camera bounds and follow player
        camera.setBounds(0, 0, 800, 5000);
        camera.startFollow(this.player);
        //make object move
        for (let k = yAxis.length; k >= 2; k--) {
            this['car' + k] = this.add.sprite(-200, yAxis[k], `car${k}`)
        }
        //animation for character
        this.anims.create({
            key: "down",
            repeat: 0,
            frameRate: 30,
            frames: this.anims.generateFrameNames('player', { start: 0, end: 4 })
        })
        this.anims.create({
            key: "up",
            repeat: 0,
            frameRate: 30,
            frames: this.anims.generateFrameNames('player', { start: 5, end: 9 })
        })
        this.anims.create({
            key: "left",
            repeat: 0,
            frameRate: 30,
            frames: this.anims.generateFrameNames('player', { start: 10, end: 14 })
        })
        this.anims.create({
            key: "right",
            repeat: 0,
            frameRate: 30,
            frames: this.anims.generateFrameNames('player', { start: 15, end: 20 })
        })
        //key inputs
        this.input.keyboard.on('keyup_RIGHT', function (event) {
            this.player.anims.play("right", true);
            this.player.x += 60;
        }, this)
        this.input.keyboard.on('keyup_UP', function (event) {
            this.player.anims.play("up", true);
            this.sound.play('jumpB')
            this.player.y -= 50;
        }, this)
        this.input.keyboard.on('keyup_LEFT', function (event) {
            this.player.anims.play("left", true);
            this.player.x -= 60;
        }, this)
        this.input.keyboard.on('keyup_DOWN', function (event) {
            this.player.anims.play("down", true);
            this.sound.play('jump')
            this.player.y += 50;
        }, this)
        //Counter Text
        this.scoreText = this.add.text(0, 0, 'score: 0', { fontSize: '32px', fill: 'white' }).setScrollFactor(0)
        this.gameOverText = this.add.text(400, 300, 'TRY AGAIN', { fontSize: '100px', fill: 'red' }).setScrollFactor(0)
        this.gameOverText.setOrigin(0.5)
        this.gameOverText.visible = false
        this.winText = this.add.text(400, 300, 'YOU DID IT!!', { fontSize: '100px', fill: 'blue' }).setScrollFactor(0)
        this.winText.setOrigin(0.5)
        this.winText.visible = false
        // stars
        this.laneHop()
    }
    update(delta) { //animate
        // move cars
        for (let i = 1; i <= yAxis.length; i++) {// looping over vehicles
            if (i % 2 == 0) {// even vehicles will flip over the X axis and move the other direction
                this['car' + i].x += Sarr[i];// direction of car moving
                this['car' + i].flipX = true; //flip image over the X axis.
                if (this['car' + i].x > 800) { // width of loop
                    this['car' + i].x = -175; // start position of each vehicle
                    Sarr[i];// speed from global array
                }
            } else {
                this['car' + i].x -= Sarr[i]; // direction of car moving
                if (this['car' + i].x < -100) { // width of loop
                    this['car' + i].x = 950;// start position of each vehicle
                    Sarr[i];// speed from global array
                }
            }
            if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this['car' + i].getBounds())) {
                this.gameOver();//collision
            }
            //WINNING
            if (score === 65) {
                this.youWin();
            }
        }
    };
    gameOver() {
        // flag to set player is dead
        this.isPlayerAlive = false;
        // shake the camera
        this.cameras.main.shake(500);
        // fade camera
        this.time.delayedCall(550, function () {
            this.cameras.main.fade(250);
        }, [], this);
        // restart game
        this.time.delayedCall(500, function () {
            this.scene.restart();
        }, [], this);
        this.gameOverText.visible = true
        score = 0 //reset score to 0
    };
    laneHop() {
        //distributes 
        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 100,
            setXY: { x: 400, y: 123, stepY: 50 }
        });
        this.physics.add.overlap(this.player, this.stars, this.updateScore, null, this);
    }
    updateScore(player, lane) {
        lane.disableBody(true, true)
        score += 1
        this.scoreText.setText('score:  ' + score);
    }
    youWin() {
        this.isPlayerAlive = false;
        this.winText.visible = true
        this.scene.pause();
    }
}