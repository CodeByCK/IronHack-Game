
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
let car21;
let car22;
let car23;
let car24;
let car25;
let car26;
let car27;
let car28;
let car29;
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
let min = 1
let max = 5
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
let randomNum55 = Math.floor(Math.random() * (max - min) + min)
let randomNum56 = Math.floor(Math.random() * (max - min) + min)


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
        car55 = this.add.sprite(-200, 3273, 'car55');
        car54 = this.add.sprite(-200, 3223, 'car54');
        car53 = this.add.sprite(-200, 3173, 'car53');
        car52 = this.add.sprite(-200, 3123, 'car52');
        car51 = this.add.sprite(-200, 3073, 'car51');
        car50 = this.add.sprite(-200, 3023, 'car50');
        car49 = this.add.sprite(-200, 2973, 'car49');
        car48 = this.add.sprite(-200, 2923, 'car48');
        car47 = this.add.sprite(-200, 2873, 'car47');
        car46 = this.add.sprite(-200, 2823, 'car46');

        car45 = this.add.sprite(-200, 2723, 'car45');
        car44 = this.add.sprite(-200, 2673, 'car44');
        car43 = this.add.sprite(-200, 2623, 'car43');
        car42 = this.add.sprite(-200, 2573, 'car42');
        car41 = this.add.sprite(-200, 2523, 'car41');
        car40 = this.add.sprite(-200, 2473, 'car40');
        car39 = this.add.sprite(-200, 2423, 'car39');
        car38 = this.add.sprite(-200, 2373, 'car38');
        car37 = this.add.sprite(-200, 2323, 'car37');
        car36 = this.add.sprite(-200, 2223, 'car36');
        car35 = this.add.sprite(-200, 2173, 'car35');
        car34 = this.add.sprite(-200, 2123, 'car34');
        car33 = this.add.sprite(-200, 2073, 'car33');
        car32 = this.add.sprite(-200, 2023, 'car32');
        car31 = this.add.sprite(-200, 1973, 'car31');
        car30 = this.add.sprite(-200, 1923, 'car30');
        car29 = this.add.sprite(-200, 1873, 'car29');
        car28 = this.add.sprite(-200, 1773, 'car28');
        car27 = this.add.sprite(-200, 1723, 'car27');
        car26 = this.add.sprite(-200, 1673, 'car26');
        car25 = this.add.sprite(-200, 1623, 'car25');
        car24 = this.add.sprite(-200, 1573, 'car24');
        car23 = this.add.sprite(-200, 1523, 'car23');
        car22 = this.add.sprite(-200, 1473, 'car22');
        car21 = this.add.sprite(-200, 1373, 'car21');
        car20 = this.add.sprite(-200, 1323, 'car20');
        car19 = this.add.sprite(-200, 1273, 'car19');
        car18 = this.add.sprite(-200, 1223, 'car18');
        car17 = this.add.sprite(-200, 1173, 'car17');
        car16 = this.add.sprite(-200, 1123, 'car16');
        car15 = this.add.sprite(-200, 1023, 'car15');
        car14 = this.add.sprite(-200, 973, 'car14');
        car13 = this.add.sprite(-200, 923, 'car13');
        car12 = this.add.sprite(-200, 873, 'car12');
        car11 = this.add.sprite(-200, 823, 'car11');
        car10 = this.add.sprite(-200, 723, 'car10');
        car9 = this.add.sprite(-200, 673, 'car9');
        car8 = this.add.sprite(-200, 623, 'car8');
        car7 = this.add.sprite(-210, 573, 'car7');
        car6 = this.add.sprite(-220, 473, 'car6');
        car5 = this.add.sprite(-190, 423, 'car5');
        car4 = this.add.sprite(-200, 373, 'car4');
        car3 = this.add.sprite(-210, 273, 'car3');
        car2 = this.add.sprite(-220, 223, 'car2');
        car1 = this.add.sprite(-190, 123, 'car1');
        player = this.physics.add.sprite(400, 75, 'player');
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
        //============================LANE 1=============================================
        car1.x -= randomNum;
        if (car1.x < -100) {
            car1.x = 950;
            randomNum = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car1.getBounds())) {
            this.gameOver();

        }

        //============================LANE 2=============================================
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

        //============================LANE 3=============================================
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
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car6.getBounds())) {
            this.gameOver();//collision
        }

        //============================LANE 4=============================================
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
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car8.getBounds())) {
            this.gameOver();//collision
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
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car10.getBounds())) {
            this.gameOver();//collision
        }

        //============================LANE 5=============================================
        car11.x -= randomNum10;
        if (car11.x < -100) {
            car11.x = 950;
            randomNum10 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car11.getBounds())) {
            this.gameOver();//collision
        }

        car12.x += randomNum11;
        car12.flipX = true;
        if (car12.x > 800) {
            car12.x = -145;
            randomNum11 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car12.getBounds())) {
            this.gameOver();//collision
        }

        car13.x -= randomNum12;
        if (car13.x < -100) {
            car13.x = 950;
            randomNum12 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car13.getBounds())) {
            this.gameOver();//collision
        }

        car14.x += randomNum13;
        car14.flipX = true;
        if (car14.x > 800) {
            car14.x = -145;
            randomNum13 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car14.getBounds())) {
            this.gameOver();//collision
        }

        car15.x -= randomNum14;
        if (car15.x < -100) {
            car15.x = 950;
            randomNum14 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car15.getBounds())) {
            this.gameOver();//collision
        }

        //============================LANE 6=============================================

        car16.x += randomNum15;
        car16.flipX = true;
        if (car16.x > 800) {
            car16.x = -145;
            randomNum15 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car16.getBounds())) {
            this.gameOver();//collision
        }


        car17.x -= randomNum16;
        if (car17.x < -100) {
            car17.x = 950;
            randomNum16 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car17.getBounds())) {
            this.gameOver();//collision
        }

        car18.x += randomNum17;
        car18.flipX = true;
        if (car18.x > 800) {
            car18.x = -145;
            randomNum17 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car18.getBounds())) {
            this.gameOver();//collision
        }

        car19.x -= randomNum18;
        if (car19.x < -100) {
            car19.x = 950;
            randomNum18 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car19.getBounds())) {
            this.gameOver();//collision
        }

        car20.x += randomNum19;
        car20.flipX = true;
        if (car20.x > 800) {
            car20.x = -145;
            randomNum19 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car20.getBounds())) {
            this.gameOver();//collision
        }

        car21.x -= randomNum20;
        if (car21.x < -100) {
            car21.x = 950;
            randomNum20 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car21.getBounds())) {
            this.gameOver();//collision
        }
        //============================LANE 7=============================================
        car22.x += randomNum21;
        car22.flipX = true;
        if (car22.x > 800) {
            car22.x = -145;
            randomNum21 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car22.getBounds())) {
            this.gameOver();//collision
        }


        car23.x -= randomNum22;
        if (car23.x < -100) {
            car23.x = 950;
            randomNum22 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car23.getBounds())) {
            this.gameOver();//collision
        }

        car24.x += randomNum23;
        car24.flipX = true;
        if (car24.x > 800) {
            car24.x = -145;
            randomNum23 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car24.getBounds())) {
            this.gameOver();//collision
        }

        car25.x -= randomNum24;
        if (car25.x < -100) {
            car25.x = 950;
            randomNum22 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car25.getBounds())) {
            this.gameOver();//collision
        }

        car26.x += randomNum25;
        car26.flipX = true;
        if (car26.x > 800) {
            car26.x = -145;
            randomNum25 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car26.getBounds())) {
            this.gameOver();//collision
        }

        car27.x -= randomNum26;
        if (car27.x < -100) {
            car27.x = 950;
            randomNum26 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car27.getBounds())) {
            this.gameOver();//collision
        }
        car28.x += randomNum27;
        car28.flipX = true;
        if (car28.x > 800) {
            car28.x = -145;
            randomNum27 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car28.getBounds())) {
            this.gameOver();//collision
        }

        //============================LANE 8=============================================

        car29.x -= randomNum28;
        if (car29.x < -100) {
            car29.x = 950;
            randomNum28 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car29.getBounds())) {
            this.gameOver();//collision
        }

        car30.x += randomNum29;
        car30.flipX = true;
        if (car30.x > 800) {
            car30.x = -145;
            randomNum29 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car30.getBounds())) {
            this.gameOver();//collision
        }

        car31.x -= randomNum30;
        if (car31.x < -100) {
            car31.x = 950;
            randomNum30 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car31.getBounds())) {
            this.gameOver();//collision
        }

        car32.x += randomNum31;
        car32.flipX = true;
        if (car32.x > 800) {
            car32.x = -145;
            randomNum31 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car32.getBounds())) {
            this.gameOver();//collision
        }

        car33.x -= randomNum32;
        if (car33.x < -100) {
            car33.x = 950;
            randomNum32 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car33.getBounds())) {
            this.gameOver();//collision
        }
        car34.x += randomNum33;
        car34.flipX = true;
        if (car34.x > 800) {
            car34.x = -145;
            randomNum33 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car34.getBounds())) {
            this.gameOver();//collision
        }

        car35.x -= randomNum34;
        if (car35.x < -100) {
            car35.x = 950;
            randomNum34 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car35.getBounds())) {
            this.gameOver();//collision
        }
        car36.x += randomNum35;
        car36.flipX = true;
        if (car36.x > 800) {
            car36.x = -145;
            randomNum35 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car36.getBounds())) {
            this.gameOver();//collision
        }

        //============================LANE 9=============================================
        car37.x -= randomNum36;
        if (car37.x < -100) {
            car37.x = 950;
            randomNum36 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car37.getBounds())) {
            this.gameOver();//collision
        }

        car38.x += randomNum37;
        car38.flipX = true;
        if (car38.x > 800) {
            car38.x = -145;
            randomNum37 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car38.getBounds())) {
            this.gameOver();//collision
        }

        car39.x -= randomNum38;
        if (car39.x < -100) {
            car39.x = 950;
            randomNum38 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car39.getBounds())) {
            this.gameOver();//collision
        }

        car40.x += randomNum39;
        car40.flipX = true;
        if (car40.x > 800) {
            car40.x = -145;
            randomNum39 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car40.getBounds())) {
            this.gameOver();//collision
        }

        car41.x -= randomNum40;
        if (car41.x < -100) {
            car41.x = 950;
            randomNum40 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car41.getBounds())) {
            this.gameOver();//collision
        }
        car42.x += randomNum41;
        car42.flipX = true;
        if (car42.x > 800) {
            car42.x = -145;
            randomNum41 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car42.getBounds())) {
            this.gameOver();//collision
        }

        car43.x -= randomNum42;
        if (car43.x < -100) {
            car43.x = 950;
            randomNum42 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car43.getBounds())) {
            this.gameOver();//collision
        }
        car44.x += randomNum43;
        car44.flipX = true;
        if (car44.x > 800) {
            car44.x = -145;
            randomNum43 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car44.getBounds())) {
            this.gameOver();//collision
        }
        car45.x -= randomNum44;
        if (car45.x < -100) {
            car45.x = 950;
            randomNum44 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car45.getBounds())) {
            this.gameOver();//collision
        }


        //============================LANE 10=============================================

        car46.x += randomNum45;
        car46.flipX = true;
        if (car46.x > 800) {
            car46.x = -145;
            randomNum45 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car46.getBounds())) {
            this.gameOver();//collision
        }


        car47.x -= randomNum46;
        if (car47.x < -100) {
            car47.x = 950;
            randomNum46 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car47.getBounds())) {
            this.gameOver();//collision
        }

        car48.x += randomNum47;
        car48.flipX = true;
        if (car48.x > 800) {
            car48.x = -145;
            randomNum47 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car48.getBounds())) {
            this.gameOver();//collision
        }

        car49.x -= randomNum48;
        if (car49.x < -100) {
            car49.x = 950;
            randomNum48 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car49.getBounds())) {
            this.gameOver();//collision
        }

        car50.x += randomNum49;
        car50.flipX = true;
        if (car50.x > 800) {
            car50.x = -145;
            randomNum39 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car50.getBounds())) {
            this.gameOver();//collision
        }

        car51.x -= randomNum50;
        if (car51.x < -100) {
            car51.x = 950;
            randomNum50 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car51.getBounds())) {
            this.gameOver();//collision
        }
        car52.x += randomNum51;
        car52.flipX = true;
        if (car52.x > 800) {
            car52.x = -145;
            randomNum51 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car52.getBounds())) {
            this.gameOver();//collision
        }

        car53.x -= randomNum52;
        if (car53.x < -100) {
            car53.x = 950;
            randomNum52 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car53.getBounds())) {
            this.gameOver();//collision
        }
        car54.x += randomNum53;
        car54.flipX = true;
        if (car54.x > 800) {
            car54.x = -145;
            randomNum53 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car54.getBounds())) {
            this.gameOver();//collision
        }
        car55.x -= randomNum54;
        if (car55.x < -100) {
            car55.x = 950;
            randomNum54 = Math.floor(Math.random() * (max - min) + min)
        }
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), car55.getBounds())) {
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

        this.physics.add.overlap(player, this.stars, this.collectStar, null, this);
    }

    collectStar(player, star) {
        star.disableBody(true, true)
        score += 1;
        this.scoreText.setText('Lanes: ' + score);
    }

}
