
// cars / objects / character
let car1;
let car2;
let car3;
let car4;
let car5;
let car6;
let car7;
let car8;
let car9;
let car10;
let car11;
let car12;
let car13;
let car14;
let car15;
let car16;
let car17;
let car18;
let car19;
let car20;
let car30;
let car31;
let car32;
let car33;
let car34;
let car35;
let car36;
let car37;
let car38;
let car39;
let car40;
let car41;
let car42;
let car43;
let car44;
let car45;
let car46;
let car47;
let car48;
let car49;
let car50;
let car51;
let car52;
let car53;
let car54;
let car55;
let car56;
let car57;
let car58;
let car59;
let car60;
let player;
let playerSpeed = 5;
let zone;
let stars;
let scoreText;
let score = 0;
let gameOverText;
//random number for car speed
let min = 8
let max = 20
let randomNum = Math.floor(Math.random() * (max - min) + min)
let randomNum1 = Math.floor(Math.random() * (max - min) + min)
let randomNum2 = Math.floor(Math.random() * (max - min) + min)
let randomNum3 = Math.floor(Math.random() * (max - min) + min)
let randomNum4 = Math.floor(Math.random() * (max - min) + min)
let randomNum5 = Math.floor(Math.random() * (max - min) + min)
let randomNum6 = Math.floor(Math.random() * (max - min) + min)
let randomNum7 = Math.floor(Math.random() * (max - min) + min)
let randomNum8 = Math.floor(Math.random() * (max - min) + min)
let randomNum9 = Math.floor(Math.random() * (max - min) + min)
let randomNum10 = Math.floor(Math.random() * (max - min) + min)
let randomNum11 = Math.floor(Math.random() * (max - min) + min)
let randomNum12 = Math.floor(Math.random() * (max - min) + min)
let randomNum13 = Math.floor(Math.random() * (max - min) + min)
let randomNum14 = Math.floor(Math.random() * (max - min) + min)
let randomNum15 = Math.floor(Math.random() * (max - min) + min)


class scene2 extends Phaser.Scene {
    constructor() {
        super({ key: "scene2" });
    }


    preload() {//everything you need to load here
        this.load.image('background', './assets/bg1.png')
        this.load.image('car10', './assets/car4.png')
        this.load.image('car9', './assets/car.png')
        this.load.image('car8', './assets/car4.png')
        this.load.image('car7', './assets/car2.png')
        this.load.image('car6', './assets/car.png')
        this.load.image('car5', './assets/car2.png')
        this.load.image('car4', './assets/car4.png')
        this.load.image('car3', './assets/car2.png')
        this.load.image('car2', './assets/car4.png');
        this.load.image('car1', './assets/car.png');
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
        car10 = this.add.sprite(-200, 723, 'car10')//lane11
        car9 = this.add.sprite(-200, 673, 'car9')//lane10
        car8 = this.add.sprite(-200, 623, 'car8')//lane9
        car7 = this.add.sprite(-210, 573, 'car7');//lane8
        car6 = this.add.sprite(-220, 473, 'car6');//lane7
        car5 = this.add.sprite(-190, 423, 'car5');//lane6
        car4 = this.add.sprite(-200, 373, 'car4')//lane5
        car3 = this.add.sprite(-210, 273, 'car3')//lane4
        car2 = this.add.sprite(-220, 223, 'car2');//lane3
        car1 = this.add.sprite(-190, 123, 'car1');//lane2
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
        car1.x -= randomNum;
        if (car1.x < -100) {
            car1.x = 950;
            randomNum = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car1.getBounds())) {
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

        car5.x -= randomNum4;
        if (car5.x < -100) {
            car5.x = 950;
            randomNum4 = Math.floor(Math.random() * (max - min) + min)

        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car5.getBounds())) {
            this.gameOver();//collision
        }

        car6.x += randomNum5;
        car6.flipX = true;
        if (car6.x > 800) {
            car6.x = -145;
            randomNum5 = Math.floor(Math.random() * (max - min) + min)
            if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car6.getBounds())) {
                this.gameOver();//collision
            }
        }
        car7.x -= randomNum6;
        if (car7.x < -100) {
            car7.x = 950;
            randomNum6 = Math.floor(Math.random() * (max - min) + min)

        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car7.getBounds())) {
            this.gameOver();//collision
        }
        car8.x += randomNum7;
        car8.flipX = true;
        if (car8.x > 800) {
            car8.x = -145;
            randomNum7 = Math.floor(Math.random() * (max - min) + min)
            if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car8.getBounds())) {
                this.gameOver();//collision
            }
        }
        car9.x -= randomNum8;
        if (car9.x < -100) {
            car9.x = 950;
            randomNum8 = Math.floor(Math.random() * (max - min) + min)

        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car9.getBounds())) {
            this.gameOver();//collision
        }
        car10.x += randomNum9;
        car10.flipX = true;
        if (car10.x > 800) {
            car10.x = -145;
            randomNum9 = Math.floor(Math.random() * (max - min) + min)
            if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car10.getBounds())) {
                this.gameOver();//collision
            }
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
            setXY: { x: 400, y: 123, stepY: 50 }
        });

        this.physics.add.overlap(player, this.stars, this.collectStar, null, this);
    }

    collectStar(player, star) {
        star.disableBody(true, true)
        score += 1;
        this.scoreText.setText('Lanes: ' + score);
    }

}
