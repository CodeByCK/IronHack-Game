
// cars / objects / character
let playerSpeed = 5;
let stars;
let scoreText;
let score = 0;
let gameOverText;

// Random car speed for the function section
let Sarr = []
let min = 8
let max = 15
for (i = 0; i < 54; i++) {
    let randomNum = Math.floor(Math.random() * (max - min) + min)
    Sarr.push(randomNum)
}

// All car pictures for the preload section
let carPics = [
    'car.png',
    'car2.png',
    'car3.png',
    'car4.png',
    'car5.png',
    'car6.png'

]


let myCars = []

class scene2 extends Phaser.Scene {
    constructor() {
        super({ key: "scene2" });
    }

    preload() {//everything you need to load here
        this.load.image('background', './assets/bg1.png')
        for (let i = 0; i < 55; i++) {
            this.load.image('car' + i, `./assets/${carPics[Math.floor(Math.random() * carPics.length)]}`);
        }

        this.load.spritesheet('player', './assets/chicken.png', { frameWidth: 40, frameHeight: 40 })
        this.load.audio('jump', './assets/jump.mp3');
        this.load.audio('jumpB', "./assets/jumpB.mp3");
        this.load.image('star', './assets/star1.png');
    }

    create() {// make it do things
        let camera = this.cameras.main;
        camera.setViewport(0, 0, 800, 600);
        this.add.tileSprite(0, 0, 800, 5000, "background").setOrigin(0);
        // this.image = this.add.image(400, -1900, 'background');
        this.physics.world.setBounds(0, 0, 800, 5000);

        this.player = this.physics.add.sprite(400, 75, 'player');
        this.player.setCollideWorldBounds(true)
        camera.setBounds(0, 0, 800, 5000);
        camera.startFollow(this.player);

        //make object move
        this.car55 = this.add.sprite(-200, 3273, 'car55');
        this.car54 = this.add.sprite(-200, 3223, 'car54');
        this.car53 = this.add.sprite(-200, 3173, 'car53');
        this.car52 = this.add.sprite(-200, 3123, 'car52');
        this.car51 = this.add.sprite(-200, 3073, 'car51');
        this.car50 = this.add.sprite(-200, 3023, 'car50');
        this.car49 = this.add.sprite(-200, 2973, 'car49');
        this.car48 = this.add.sprite(-200, 2923, 'car48');
        this.car47 = this.add.sprite(-200, 2873, 'car47');
        this.car46 = this.add.sprite(-200, 2823, 'car46');
        this.car45 = this.add.sprite(-200, 2723, 'car45');
        this.car44 = this.add.sprite(-200, 2673, 'car44');
        this.car43 = this.add.sprite(-200, 2623, 'car43');
        this.car42 = this.add.sprite(-200, 2573, 'car42');
        this.car41 = this.add.sprite(-200, 2523, 'car41');
        this.car40 = this.add.sprite(-200, 2473, 'car40');
        this.car39 = this.add.sprite(-200, 2423, 'car39');
        this.car38 = this.add.sprite(-200, 2373, 'car38');
        this.car37 = this.add.sprite(-200, 2323, 'car37');
        this.car36 = this.add.sprite(-200, 2223, 'car36');
        this.car35 = this.add.sprite(-200, 2173, 'car35');
        this.car34 = this.add.sprite(-200, 2123, 'car34');
        this.car33 = this.add.sprite(-200, 2073, 'car33');
        this.car32 = this.add.sprite(-200, 2023, 'car32');
        this.car31 = this.add.sprite(-200, 1973, 'car31');
        this.car30 = this.add.sprite(-200, 1923, 'car30');
        this.car29 = this.add.sprite(-200, 1873, 'car29');
        this.car28 = this.add.sprite(-200, 1773, 'car28');
        this.car27 = this.add.sprite(-200, 1723, 'car27');
        this.car26 = this.add.sprite(-200, 1673, 'car26');
        this.car25 = this.add.sprite(-200, 1623, 'car25');
        this.car24 = this.add.sprite(-200, 1573, 'car24');
        this.car23 = this.add.sprite(-200, 1523, 'car23');
        this.car22 = this.add.sprite(-200, 1473, 'car22');
        this.car21 = this.add.sprite(-200, 1373, 'car21');
        this.car20 = this.add.sprite(-200, 1323, 'car20');
        this.car19 = this.add.sprite(-200, 1273, 'car19');
        this.car18 = this.add.sprite(-200, 1223, 'car18');
        this.car17 = this.add.sprite(-200, 1173, 'car17');
        this.car16 = this.add.sprite(-200, 1123, 'car16');
        this.car15 = this.add.sprite(-200, 1023, 'car15');
        this.car14 = this.add.sprite(-200, 973, 'car14');
        this.car13 = this.add.sprite(-200, 923, 'car13');
        this.car12 = this.add.sprite(-200, 873, 'car12');
        this.car11 = this.add.sprite(-200, 823, 'car11');
        this.car10 = this.add.sprite(-200, 723, 'car10');
        this.car9 = this.add.sprite(-200, 673, 'car9');
        this.car8 = this.add.sprite(-200, 623, 'car8');
        this.car7 = this.add.sprite(-210, 573, 'car7');
        this.car6 = this.add.sprite(-220, 473, 'car6');
        this.car5 = this.add.sprite(-190, 423, 'car5');
        this.car4 = this.add.sprite(-200, 373, 'car4');
        this.car3 = this.add.sprite(-210, 273, 'car3');
        this.car2 = this.add.sprite(-220, 223, 'car2');
        this.car1 = this.add.sprite(-190, 123, 'car1');

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
        // stars
        this.createStars()
    }
    update(delta) { //animate
        // move cars
        for (let i = 1; i <= 55; i++) {// looping over vehicles
            if (i % 2 == 0) {// even vehicles will flip over the X axis and move the other direction
                this['car' + i].x += Sarr[i];// direction of car moving
                this['car' + i].flipX = true; //flip image over the X axis.
                if (this['car' + i].x > 800) { // width of loop
                    this['car' + i].x = -175; // start position of each vehicle
                    Sarr[i];// speed from global array
                }
                if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this['car' + i].getBounds())) {
                    this.gameOver();//collision
                }
            } else {
                this['car' + i].x -= Sarr[i]; // direction of car moving
                if (this['car' + i].x < -100) { // width of loop
                    this['car' + i].x = 950;// start position of each vehicle
                    Sarr[i];// speed from global array
                }
                if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this['car' + i].getBounds())) {
                    this.gameOver();//collision
                }
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
        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
    }
    collectStar(player, star) {
        star.disableBody(true, true)
        score += 1;
        this.scoreText.setText('score:  ' + score);
    }
}