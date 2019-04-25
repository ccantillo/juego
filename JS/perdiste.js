class Perdiste extends Phaser.Scene {

  constructor() {
    super({
      key: 'perdiste'
    });
  }

  create() {
    var perder = this.add.image(game.config.width / 2, game.config.height / 2, 'perder').setDisplaySize(game.config.width, game.config.height);

    this.input.manager.enabled = true;
    /*var theOtherScene = this.scene.get('sceneA');
    theOtherScene.scene.restart();*/
    this.input.once('pointerdown', function() {
      this.scene.start('start');
    }, this);
  }

}
