class Start extends Phaser.Scene {

  constructor() {
    super({
      key: 'start',
      active:true
    });
  }

  create() {
    var background = this.add.image(game.config.width / 2, game.config.height / 2, 'background').setDisplaySize(game.config.width, game.config.height);

    this.input.manager.enabled = true;

    this.input.once('pointerdown', function() {

      this.scene.start('sceneA');

    }, this);
  }

}
