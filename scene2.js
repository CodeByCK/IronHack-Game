
// cars / objects / character
let car;
let car2;
let car3;
let car4;
let car5;
let car6;
let car7;
let car8;
let player;
let playerSpeed = 5;
let zone;
let stars;
let scoreText;
let score = 0;
let gameOverText;
//random number for car speed
let min = 1
let max = 3
let randomNum = Math.floor(Math.random() * (max - min) + min)
let randomNum1 = Math.floor(Math.random() * (max - min) + min)
let randomNum2 = Math.floor(Math.random() * (max - min) + min)
let randomNum3 = Math.floor(Math.random() * (max - min) + min)
let randomNum4 = Math.floor(Math.random() * (max - min) + min)
let randomNum5 = Math.floor(Math.random() * (max - min) + min)
let randomNum6 = Math.floor(Math.random() * (max - min) + min)
let randomNum7 = Math.floor(Math.random() * (max - min) + min)


class scene2 extends Phaser.Scene {
    constructor() {
        super({ key: "scene2" });
    }


    preload() {//everything you need to load here
        this.load.image('background', './assets/bg1.png')
        this.load.image('car8', './assets/car4.png')
        this.load.image('car7', './assets/car2.png')
        this.load.image('car6', './assets/car.png')
        this.load.image('car5', './assets/car2.png')
        this.load.image('car4', './assets/car4.png')
        this.load.image('car3', './assets/car2.png')
        this.load.image('car2', './assets/car4.png');
        this.load.image('car', './assets/car.png');
        this.load.spritesheet('player', './assets/chicken.png', { frameWidth: 50, frameHeight: 40 })
        this.load.audio('over', './assets/GAMEOVER.wav')
        this.load.audio('jump', 'http://freesound.org/data/previews/456/456374_9498993-lq.mp3');
        this.load.audio('crash', 'http://freesound.org/data/previews/237/237375_1502374-lq.mp3');
        this.load.image('star', './assets/star1.png');


    }

    create() {// make it do things
        let camera = this.cameras.main;
        camera.setViewport(0, 0, 800, 600);
        this.add.tileSprite(0, 0, 800, 5000, "background").setOrigin(0);
        // this.image = this.add.image(400, -1900, 'background');
        this.physics.world.setBounds(0, 0, 800, 5000);
        //make object move
        car8 = this.add.sprite(-200, 623, 'car8')//lane9
        car7 = this.add.sprite(-210, 573, 'car7');//lane8
        car6 = this.add.sprite(-220, 473, 'car6');//lane7
        car5 = this.add.sprite(-190, 423, 'car5');//lane6
        car4 = this.add.sprite(-200, 373, 'car4')//lane5
        car3 = this.add.sprite(-210, 273, 'car3')//lane4
        car2 = this.add.sprite(-220, 223, 'car2');//lane3
        car = this.add.sprite(-190, 123, 'car');//lane2
        player = this.physics.add.sprite(400, 75, 'player');//lane1
        player.setCollideWorldBounds(true)

        camera.setBounds(0, 0, 800, 5000);
        camera.startFollow(player);

        //animation for character
        this.anims.create({
            key: "down",
            repeat: 0,
            frameRate: 30,
            frames: this.anims.generateFrameNames('player', { start: 1, end: 4 })
        })
        this.anims.create({
            key: "up",
            repeat: 0,
            frameRate: 30,
            frames: this.anims.generateFrameNames('player', { start: 5, end: 8 })
        })
        this.anims.create({
            key: "left",
            repeat: 0,
            frameRate: 30,
            frames: this.anims.generateFrameNames('player', { start: 11, end: 15 })
        })
        this.anims.create({
            key: "right",
            repeat: 0,
            frameRate: 30,

            frames: this.anims.generateFrameNames('player', { start: 11, end: 15 })
        })

        //key inputs
        this.input.keyboard.on('keyup_RIGHT', function (event) {
            player.x += 60;


        }, this)
        this.input.keyboard.on('keyup_UP', function (event) {
            this.sound.play('jump')
            player.y -= 50;

        }, this)
        this.input.keyboard.on('keyup_LEFT', function (event) {
            player.play('left')
            player.x -= 60;

        }, this)
        this.input.keyboard.on('keyup_DOWN', function (event) {
            player.play("down")
            player.y += 50;

        }, this)

        //Counter Text
        this.scoreText = this.add.text(0, 50, 'score: 0', { fontSize: '32px', fill: '#473A15' });
        this.gameOverText = this.add.text(400, 4500, 'TRY AGAIN', { fontSize: '100px', fill: 'red' });
        this.gameOverText.setOrigin(0.5)
        this.gameOverText.visible = false
        // stars
        this.createStars()


    }
    update(delta) { //animate
        // move cars
        car.x -= randomNum;
        if (car.x < -100) {
            car.x = 950;
            randomNum = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car.getBounds())) {
            this.gameOver();

        }
        car2.x += randomNum1;
        car2.flipX = true;
        if (car2.x > 800) {
            car2.x = -175;
            randomNum1 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car2.getBounds())) {
            this.gameOver();//collision
        }
        car3.x -= randomNum2;
        if (car3.x < -100) {
            car3.x = 950;
            randomNum2 = Math.floor(Math.random() * (max - min) + min)

        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car3.getBounds())) {
            this.gameOver();//collision
        }
        car4.x += randomNum3;
        car4.flipX = true;
        if (car4.x > 800) {
            car4.x = -135;
            randomNum3 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car4.getBounds())) {
            this.gameOver();//collision
        }

        car5.x += randomNum;
        car5.flipX = true;
        if (car5.x > 800) {
            car5.x = -250;
            randomNum4 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car5.getBounds())) {
            this.gameOver();//collision
        }
        car6.x -= randomNum1;
        if (car6.x < -100) {
            car6.x = 950;
            randomNum5 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car6.getBounds())) {
            this.gameOver();//collision
        }
        car7.x += randomNum2;
        car7.flipX = true;
        if (car7.x > 800) {
            car7.x = -145;
            randomNum6 = Math.floor(Math.random() * (max - min) + min)

        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car7.getBounds())) {
            this.gameOver();//collision
        }
        car8.x -= randomNum3;
        if (car8.x < -100) {
            car8.x = 950;
            randomNum7 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car8.getBounds())) {

            this.gameOver();//collision
        }
    };

    gameOver = function () {
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


    createStars() {

        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 100,
            setXY: { x: 400, y: 30, stepY: 50 }
        });

        this.physics.add.overlap(player, this.stars, this.collectStar, null, this);
    }

    collectStar(player, star) {
        star.disableBody(true, true)
        score += 10;
        this.scoreText.setText('Score: ' + score);
    }

}
