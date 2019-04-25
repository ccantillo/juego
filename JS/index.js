
var config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 600,
  backgroundColor: '#000000',
  parent: 'contenedor',
  scene: [Cargar,Start, SceneA, Perdiste, Ganaste],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0
      },
      debug: false
    }
  }
};

var game = new Phaser.Game(config);
