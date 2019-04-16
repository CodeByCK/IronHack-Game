
// cars / objects / character
let playerSpeed = 5;
let stars;
let scoreText;
let score = 0;
let gameOverText;
//random number for car speed
let min = 8
let max = 13



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
let randomNum16 = Math.floor(Math.random() * (max - min) + min)
let randomNum17 = Math.floor(Math.random() * (max - min) + min)
let randomNum18 = Math.floor(Math.random() * (max - min) + min)
let randomNum19 = Math.floor(Math.random() * (max - min) + min)
let randomNum20 = Math.floor(Math.random() * (max - min) + min)
let randomNum21 = Math.floor(Math.random() * (max - min) + min)
let randomNum22 = Math.floor(Math.random() * (max - min) + min)
let randomNum23 = Math.floor(Math.random() * (max - min) + min)
let randomNum24 = Math.floor(Math.random() * (max - min) + min)
let randomNum25 = Math.floor(Math.random() * (max - min) + min)
let randomNum26 = Math.floor(Math.random() * (max - min) + min)
let randomNum27 = Math.floor(Math.random() * (max - min) + min)
let randomNum28 = Math.floor(Math.random() * (max - min) + min)
let randomNum29 = Math.floor(Math.random() * (max - min) + min)
let randomNum30 = Math.floor(Math.random() * (max - min) + min)
let randomNum31 = Math.floor(Math.random() * (max - min) + min)
let randomNum32 = Math.floor(Math.random() * (max - min) + min)
let randomNum33 = Math.floor(Math.random() * (max - min) + min)
let randomNum34 = Math.floor(Math.random() * (max - min) + min)
let randomNum35 = Math.floor(Math.random() * (max - min) + min)
let randomNum36 = Math.floor(Math.random() * (max - min) + min)
let randomNum37 = Math.floor(Math.random() * (max - min) + min)
let randomNum38 = Math.floor(Math.random() * (max - min) + min)
let randomNum39 = Math.floor(Math.random() * (max - min) + min)
let randomNum40 = Math.floor(Math.random() * (max - min) + min)
let randomNum41 = Math.floor(Math.random() * (max - min) + min)
let randomNum42 = Math.floor(Math.random() * (max - min) + min)
let randomNum43 = Math.floor(Math.random() * (max - min) + min)
let randomNum44 = Math.floor(Math.random() * (max - min) + min)
let randomNum45 = Math.floor(Math.random() * (max - min) + min)
let randomNum46 = Math.floor(Math.random() * (max - min) + min)
let randomNum47 = Math.floor(Math.random() * (max - min) + min)
let randomNum48 = Math.floor(Math.random() * (max - min) + min)
let randomNum49 = Math.floor(Math.random() * (max - min) + min)
let randomNum50 = Math.floor(Math.random() * (max - min) + min)
let randomNum51 = Math.floor(Math.random() * (max - min) + min)
let randomNum52 = Math.floor(Math.random() * (max - min) + min)
let randomNum53 = Math.floor(Math.random() * (max - min) + min)
let randomNum54 = Math.floor(Math.random() * (max - min) + min)


class scene2 extends Phaser.Scene {
    constructor() {
        super({ key: "scene2" });
    }


    preload() {//everything you need to load here

        this.load.image('background', './assets/bg1.png')
        this.load.image('car55', './assets/car2.png')
        this.load.image('car54', './assets/car.png')
        this.load.image('car53', './assets/car2.png')
        this.load.image('car52', './assets/car4.png')
        this.load.image('car51', './assets/car2.png')
        this.load.image('car50', './assets/car4.png');
        this.load.image('car49', './assets/car.png')
        this.load.image('car48', './assets/car4.png')
        this.load.image('car47', './assets/car2.png')
        this.load.image('car46', './assets/car4.png')

        this.load.image('car45', './assets/car2.png')
        this.load.image('car44', './assets/car.png')
        this.load.image('car43', './assets/car2.png')
        this.load.image('car42', './assets/car4.png')
        this.load.image('car41', './assets/car2.png')
        this.load.image('car40', './assets/car4.png');
        this.load.image('car39', './assets/car.png')
        this.load.image('car38', './assets/car4.png')
        this.load.image('car37', './assets/car2.png')
        this.load.image('car36', './assets/car4.png')
        this.load.image('car35', './assets/car2.png')
        this.load.image('car34', './assets/car.png')
        this.load.image('car33', './assets/car2.png')
        this.load.image('car32', './assets/car4.png')
        this.load.image('car31', './assets/car2.png')
        this.load.image('car30', './assets/car4.png');
        this.load.image('car29', './assets/car.png')
        this.load.image('car28', './assets/car4.png')
        this.load.image('car27', './assets/car2.png')
        this.load.image('car26', './assets/car.png')
        this.load.image('car25', './assets/car2.png')
        this.load.image('car24', './assets/car4.png')
        this.load.image('car23', './assets/car2.png')
        this.load.image('car22', './assets/car4.png');
        this.load.image('car21', './assets/car.png')
        this.load.image('car20', './assets/car2.png')
        this.load.image('car19', './assets/car4.png')
        this.load.image('car18', './assets/car.png')
        this.load.image('car17', './assets/car2.png')
        this.load.image('car16', './assets/car.png')
        this.load.image('car15', './assets/car.png')
        this.load.image('car14', './assets/car2.png')
        this.load.image('car13', './assets/car4.png')
        this.load.image('car12', './assets/car.png')
        this.load.image('car11', './assets/car2.png')
        this.load.image('car10', './assets/car.png')
        this.load.image('car9', './assets/car.png')
        this.load.image('car8', './assets/car4.png')
        this.load.image('car7', './assets/car2.png')
        this.load.image('car6', './assets/car.png')
        this.load.image('car5', './assets/car2.png')
        this.load.image('car4', './assets/car4.png')
        this.load.image('car3', './assets/car2.png')
        this.load.image('car2', './assets/car4.png');
        this.load.image('car1', './assets/car.png');
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
        this.player = this.physics.add.sprite(400, 75, 'player');
        this.player.setCollideWorldBounds(true)

        camera.setBounds(0, 0, 800, 5000);
        camera.startFollow(this.player);

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
        //============================LANE 1=============================================
        this.car1.x -= randomNum;
        if (this.car1.x < -100) {
            this.car1.x = 950;
            randomNum = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car1.getBounds())) {
            this.gameOver();

        }

        //============================LANE 2=============================================
        this.car2.x += randomNum1;
        this.car2.flipX = true;
        if (this.car2.x > 800) {
            this.car2.x = -175;
            randomNum1 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car2.getBounds())) {
            this.gameOver();//collision
        }


        this.car3.x -= randomNum2;
        if (this.car3.x < -100) {
            this.car3.x = 950;
            randomNum2 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car3.getBounds())) {
            this.gameOver();//collision
        }

        //============================LANE 3=============================================
        this.car4.x += randomNum3;
        this.car4.flipX = true;
        if (this.car4.x > 800) {
            this.car4.x = -135;
            randomNum3 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car4.getBounds())) {
            this.gameOver();//collision
        }


        this.car5.x -= randomNum4;
        if (this.car5.x < -100) {
            this.car5.x = 950;
            randomNum4 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car5.getBounds())) {
            this.gameOver();//collision
        }


        this.car6.x += randomNum5;
        this.car6.flipX = true;
        if (this.car6.x > 800) {
            this.car6.x = -145;
            randomNum5 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car6.getBounds())) {
            this.gameOver();//collision
        }

        //============================LANE 4=============================================
        this.car7.x -= randomNum6;
        if (this.car7.x < -100) {
            this.car7.x = 950;
            randomNum6 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car7.getBounds())) {
            this.gameOver();//collision
        }

        this.car8.x += randomNum7;
        this.car8.flipX = true;
        if (this.car8.x > 800) {
            this.car8.x = -145;
            randomNum7 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car8.getBounds())) {
            this.gameOver();//collision
        }

        this.car9.x -= randomNum8;
        if (this.car9.x < -100) {
            this.car9.x = 950;
            randomNum8 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car9.getBounds())) {
            this.gameOver();//collision
        }

        this.car10.x += randomNum9;
        this.car10.flipX = true;
        if (this.car10.x > 800) {
            this.car10.x = -145;
            randomNum9 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car10.getBounds())) {
            this.gameOver();//collision
        }

        //============================LANE 5=============================================
        this.car11.x -= randomNum10;
        if (this.car11.x < -100) {
            this.car11.x = 950;
            randomNum10 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car11.getBounds())) {
            this.gameOver();//collision
        }

        this.car12.x += randomNum11;
        this.car12.flipX = true;
        if (this.car12.x > 800) {
            this.car12.x = -145;
            randomNum11 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car12.getBounds())) {
            this.gameOver();//collision
        }

        this.car13.x -= randomNum12;
        if (this.car13.x < -100) {
            this.car13.x = 950;
            randomNum12 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car13.getBounds())) {
            this.gameOver();//collision
        }

        this.car14.x += randomNum13;
        this.car14.flipX = true;
        if (this.car14.x > 800) {
            this.car14.x = -145;
            randomNum13 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car14.getBounds())) {
            this.gameOver();//collision
        }

        this.car15.x -= randomNum14;
        if (this.car15.x < -100) {
            this.car15.x = 950;
            randomNum14 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car15.getBounds())) {
            this.gameOver();//collision
        }

        //============================LANE 6=============================================

        this.car16.x += randomNum15;
        this.car16.flipX = true;
        if (this.car16.x > 800) {
            this.car16.x = -145;
            randomNum15 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car16.getBounds())) {
            this.gameOver();//collision
        }


        this.car17.x -= randomNum16;
        if (this.car17.x < -100) {
            this.car17.x = 950;
            randomNum16 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car17.getBounds())) {
            this.gameOver();//collision
        }

        this.car18.x += randomNum17;
        this.car18.flipX = true;
        if (this.car18.x > 800) {
            this.car18.x = -145;
            randomNum17 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car18.getBounds())) {
            this.gameOver();//collision
        }

        this.car19.x -= randomNum18;
        if (this.car19.x < -100) {
            this.car19.x = 950;
            randomNum18 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car19.getBounds())) {
            this.gameOver();//collision
        }

        this.car20.x += randomNum19;
        this.car20.flipX = true;
        if (this.car20.x > 800) {
            this.car20.x = -145;
            randomNum19 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car20.getBounds())) {
            this.gameOver();//collision
        }

        this.car21.x -= randomNum20;
        if (this.car21.x < -100) {
            this.car21.x = 950;
            randomNum20 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car21.getBounds())) {
            this.gameOver();//collision
        }
        //============================LANE 7=============================================
        this.car22.x += randomNum21;
        this.car22.flipX = true;
        if (this.car22.x > 800) {
            this.car22.x = -145;
            randomNum21 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car22.getBounds())) {
            this.gameOver();//collision
        }


        this.car23.x -= randomNum22;
        if (this.car23.x < -100) {
            this.car23.x = 950;
            randomNum22 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car23.getBounds())) {
            this.gameOver();//collision
        }

        this.car24.x += randomNum23;
        this.car24.flipX = true;
        if (this.car24.x > 800) {
            this.car24.x = -145;
            randomNum23 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car24.getBounds())) {
            this.gameOver();//collision
        }

        this.car25.x -= randomNum24;
        if (this.car25.x < -100) {
            this.car25.x = 950;
            randomNum24 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car25.getBounds())) {
            this.gameOver();//collision
        }

        this.car26.x += randomNum25;
        this.car26.flipX = true;
        if (this.car26.x > 800) {
            this.car26.x = -145;
            randomNum25 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car26.getBounds())) {
            this.gameOver();//collision
        }

        this.car27.x -= randomNum26;
        if (this.car27.x < -100) {
            this.car27.x = 950;
            randomNum26 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car27.getBounds())) {
            this.gameOver();//collision
        }
        this.car28.x += randomNum27;
        this.car28.flipX = true;
        if (this.car28.x > 800) {
            this.car28.x = -145;
            randomNum27 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car28.getBounds())) {
            this.gameOver();//collision
        }

        //============================LANE 8=============================================

        this.car29.x -= randomNum28;
        if (this.car29.x < -100) {
            this.car29.x = 950;
            randomNum28 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car29.getBounds())) {
            this.gameOver();//collision
        }

        this.car30.x += randomNum29;
        this.car30.flipX = true;
        if (this.car30.x > 800) {
            this.car30.x = -145;
            randomNum29 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car30.getBounds())) {
            this.gameOver();//collision
        }

        this.car31.x -= randomNum30;
        if (this.car31.x < -100) {
            this.car31.x = 950;
            randomNum30 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car31.getBounds())) {
            this.gameOver();//collision
        }

        this.car32.x += randomNum31;
        this.car32.flipX = true;
        if (this.car32.x > 800) {
            this.car32.x = -145;
            randomNum31 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car32.getBounds())) {
            this.gameOver();//collision
        }

        this.car33.x -= randomNum32;
        if (this.car33.x < -100) {
            this.car33.x = 950;
            randomNum32 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car33.getBounds())) {
            this.gameOver();//collision
        }
        this.car34.x += randomNum33;
        this.car34.flipX = true;
        if (this.car34.x > 800) {
            this.car34.x = -145;
            randomNum33 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car34.getBounds())) {
            this.gameOver();//collision
        }

        this.car35.x -= randomNum34;
        if (this.car35.x < -100) {
            this.car35.x = 950;
            randomNum34 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car35.getBounds())) {
            this.gameOver();//collision
        }
        this.car36.x += randomNum35;
        this.car36.flipX = true;
        if (this.car36.x > 800) {
            this.car36.x = -145;
            randomNum35 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car36.getBounds())) {
            this.gameOver();//collision
        }

        //============================LANE 9=============================================
        this.car37.x -= randomNum36;
        if (this.car37.x < -100) {
            this.car37.x = 950;
            randomNum36 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car37.getBounds())) {
            this.gameOver();//collision
        }

        this.car38.x += randomNum37;
        this.car38.flipX = true;
        if (this.car38.x > 800) {
            this.car38.x = -145;
            randomNum37 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car38.getBounds())) {
            this.gameOver();//collision
        }

        this.car39.x -= randomNum38;
        if (this.car39.x < -100) {
            this.car39.x = 950;
            randomNum38 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car39.getBounds())) {
            this.gameOver();//collision
        }

        this.car40.x += randomNum39;
        this.car40.flipX = true;
        if (this.car40.x > 800) {
            this.car40.x = -145;
            randomNum39 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car40.getBounds())) {
            this.gameOver();//collision
        }

        this.car41.x -= randomNum40;
        if (this.car41.x < -100) {
            this.car41.x = 950;
            randomNum40 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car41.getBounds())) {
            this.gameOver();//collision
        }
        this.car42.x += randomNum41;
        this.car42.flipX = true;
        if (this.car42.x > 800) {
            this.car42.x = -145;
            randomNum41 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car42.getBounds())) {
            this.gameOver();//collision
        }

        this.car43.x -= randomNum42;
        if (this.car43.x < -100) {
            this.car43.x = 950;
            randomNum42 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car43.getBounds())) {
            this.gameOver();//collision
        }
        this.car44.x += randomNum43;
        this.car44.flipX = true;
        if (this.car44.x > 800) {
            this.car44.x = -145;
            randomNum43 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car44.getBounds())) {
            this.gameOver();//collision
        }
        this.car45.x -= randomNum44;
        if (this.car45.x < -100) {
            this.car45.x = 950;
            randomNum44 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car45.getBounds())) {
            this.gameOver();//collision
        }


        //============================LANE 10=============================================

        this.car46.x += randomNum45;
        this.car46.flipX = true;
        if (this.car46.x > 800) {
            this.car46.x = -145;
            randomNum45 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car46.getBounds())) {
            this.gameOver();//collision
        }
        this.car47.x -= randomNum46;
        if (this.car47.x < -100) {
            this.car47.x = 950;
            randomNum46 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car47.getBounds())) {
            this.gameOver();//collision
        }
        this.car48.x += randomNum47;
        this.car48.flipX = true;
        if (this.car48.x > 800) {
            this.car48.x = -145;
            randomNum47 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car48.getBounds())) {
            this.gameOver();//collision
        }
        this.car49.x -= randomNum48;
        if (this.car49.x < -100) {
            this.car49.x = 950;
            randomNum48 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car49.getBounds())) {
            this.gameOver();//collision
        }
        this.car50.x += randomNum49;
        this.car50.flipX = true;
        if (this.car50.x > 800) {
            this.car50.x = -145;
            randomNum49 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car50.getBounds())) {
            this.gameOver();//collision
        }
        this.car51.x -= randomNum50;
        if (this.car51.x < -100) {
            this.car51.x = 950;
            randomNum50 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car51.getBounds())) {
            this.gameOver();//collision
        }
        this.car52.x += randomNum51;
        this.car52.flipX = true;
        if (this.car52.x > 800) {
            this.car52.x = -145;
            randomNum51 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car52.getBounds())) {
            this.gameOver();//collision
        }

        this.car53.x -= randomNum52;
        if (this.car53.x < -100) {
            this.car53.x = 950;
            randomNum52 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car53.getBounds())) {
            this.gameOver();//collision
        }
        this.car54.x += randomNum53;
        this.car54.flipX = true;
        if (this.car54.x > 800) {
            this.car54.x = -145;
            randomNum53 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car54.getBounds())) {
            this.gameOver();//collision
        }
        this.car55.x -= randomNum54;
        if (this.car55.x < -100) {
            this.car55.x = 950;
            randomNum54 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.car55.getBounds())) {
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
