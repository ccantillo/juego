class Ganaste extends Phaser.Scene {

  constructor() {
    super({
      key: 'win'
    });
  }

  create() {
    var perder = this.add.image(game.config.width / 2, game.config.height / 2, 'win');

    this.input.manager.enabled = true;
    /*var theOtherScene = this.scene.get('sceneA');
    theOtherScene.scene.restart();*/
    this.input.once('pointerdown', function() {
      this.scene.start('start');
    }, this);
  }

}
