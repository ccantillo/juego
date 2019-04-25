class Cargar extends Phaser.Scene {
  constructor() {
    super({
      key: "Cargar",
      active:true
    });
  }
  preload() {
    this.load.on("complete", () => {

      this.anims.create({
        key: 'turn',
        frames: [{
          key: 'front1',
          frame: 4
        }],
        frameRate: 20
      });
      this.anims.create({
        key: 'left2',
        frames: [{
            key: 'left1'
          },
          {
            key: 'left2'
          },
          {
            key: 'left3'
          }
        ],
        frameRate: 8,
        repeat: -1
      });
      this.anims.create({
        key: 'right2',
        frames: [{
            key: 'right1'
          },
          {
            key: 'right2'
          },
          {
            key: 'right3'
          }
        ],
        frameRate: 8,
        repeat: -1
      });
      this.anims.create({
        key: 'front',
        frames: [{
            key: 'front1'
          },
          {
            key: 'front2'
          },
          {
            key: 'front3'
          }
        ],
        frameRate: 8,
        repeat: -1
      });
      this.anims.create({
        key: 'back',
        frames: [{
            key: 'back1'
          },
          {
            key: 'back2'
          },
          {
            key: 'back3'
          }
        ],
        frameRate: 8,
        repeat: -1
      });
      this.scene.start("start");
    })
    this.load.spritesheet('calle',
      'assets/city.png', {
        frameWidth: 16,
        frameHeight: 16
      }
    );
    this.load.image('base', 'assets/star.PNG');
    this.load.image('background', 'assets/purple.png');
    this.load.image('enemigo', 'assets/enemyRed32.png')
    this.load.image('ground', 'assets/platform.png');
    this.load.image('left1', 'assets/player_14.png');
    this.load.image('left2', 'assets/player_15.png');
    this.load.image('left3', 'assets/player_16.png');
    this.load.image('right1', 'assets/player_11.png');
    this.load.image('right2', 'assets/player_12.png');
    this.load.image('right3', 'assets/player_13.png');
    this.load.image('front1', 'assets/player_05.png');
    this.load.image('front2', 'assets/player_06.png');
    this.load.image('front3', 'assets/player_07.png');
    this.load.image('back1', 'assets/player_08.png');
    this.load.image('back2', 'assets/player_09.png');
    this.load.image('back3', 'assets/player_10.png');
    this.load.image('perder', 'assets/perdiste.png');
    this.load.image('player', 'assets/player_05.png');
    this.load.image('win', 'assets/win.png');
  }
}
