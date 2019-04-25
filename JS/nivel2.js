var angle, jugador, platforms, objetos, textoTiempo, cursors, tiempo, tiempo = 12,
  escena;

class SceneB extends Phaser.Scene {

  constructor() {
    super({
      key: 'sceneB'
    });
  }

  create() {
    escena = this;
    var background = this.add.image(game.config.width / 2, game.config.height / 2, 'background').setDisplaySize(game.config.width, game.config.height);;
    jugador = this.physics.add.sprite(27, game.config.height * 0.1, 'player');
    jugador.setScale(0.7);
    jugador.puntos = 0;
    platforms = this.physics.add.staticGroup();
    for (var i = 0; i < 280 / 16; i++) {
      platforms.create(230, 16 * i, 'ground').setScale(0.85).refreshBody();
    }
    for (var i = 0; i < 180 / 16; i++) {
      platforms.create(742, 16 * i, 'ground').setScale(1.4).refreshBody();
    }
    for (var i = 52; i < 400 / 7; i++) {
      platforms.create(120, 7 * i, 'ground').setScale(0.3).refreshBody();
    }
    for (var i = 52; i < 400 / 7; i++) {
      platforms.create(334, 7 * i, 'ground').setScale(0.4).refreshBody();
    }
    for (var i = 180; i < 240; i += 8) {
      platforms.create(522, i, 'ground').setScale(0.3).refreshBody();
    }
    for (var i = 310; i < 390; i += 8) {
      platforms.create(522, i, 'ground').setScale(0.3).refreshBody();
    }
    for (var i = 470; i < 540; i += 8) {
      platforms.create(522, i, 'ground').setScale(0.3).refreshBody();
    }
    for (var i = 300; i < 400; i += 24) {
      platforms.create(800, i, 'ground').setScale(0.75).refreshBody();
    }
    for (var i = 500; i < 600; i += 24) {
      platforms.create(800, i, 'ground').setScale(0.75).refreshBody();
    }

    platforms.create(200, 480, 'ground').setScale(1).refreshBody();
    platforms.create(200, 512, 'ground').setScale(1).refreshBody();
    platforms.create(200, 544, 'ground').setScale(1).refreshBody();
    platforms.create(200, 576, 'ground').setScale(1).refreshBody();
    platforms.create(200, 590, 'ground').setScale(1).refreshBody();



    this.physics.add.collider(jugador, platforms);
    textoTiempo = this.add.text(16, 16, 'tiempo: ' + tiempo, {
      fontSize: '32px',
      fill: '#000'
    });
    objetos = this.physics.add.staticGroup();
    objetos.create(27, 336, 'base').setScale(1.2).refreshBody();
    objetos.create(615, 430, 'base').setScale(1.2).refreshBody();
    objetos.create(615, 270, 'base').setScale(1.2).refreshBody();
    objetos.create(750, 450, 'base').setScale(1.2).refreshBody();
    objetos.create(220, 336, 'base').setScale(1.2).refreshBody();
    objetos.create(435, 330, 'base').setScale(1.2).refreshBody();
    objetos.create(220, 440, 'base').setScale(1.2).refreshBody();
    objetos.create(435, 573, 'base').setScale(1.2).refreshBody();
    objetos.create(435, 100, 'base').setScale(1.2).refreshBody();
    objetos.children.iterate(function(child) {

      child.visitado = false;
      escena.physics.add.overlap(child, jugador, sobreponer);
    });

    jugador.setCollideWorldBounds(true);

    this.input.manager.enabled = true;

    this.input.on('pointerdown', function(pointer, time, lastFired) {

    }, this);

    this.input.keyboard.on('keydown_UP', function(event) {
      jugador.setVelocityY(-400);
      jugador.anims.play('back', true);
      // escena.scene.start('sceneB');
    });
    this.input.keyboard.on('keydown_DOWN', function(event) {
      jugador.setVelocityY(400);
      jugador.anims.play('front', true);
    });
    this.input.keyboard.on('keydown_LEFT', function(event) {
      jugador.setVelocityX(-400);
      jugador.anims.play('left2', true);
    });
    this.input.keyboard.on('keydown_RIGHT', function(event) {
      jugador.setVelocityX(400);
      jugador.anims.play('right2', true);
    });
    this.input.keyboard.on('keydown_R', function(event) {
      escena.scene.restart();
    });

    this.input.keyboard.on('keyup_UP', function(event) {
      jugador.setVelocityY(0);
      jugador.anims.play('turn');
    });
    this.input.keyboard.on('keyup_DOWN', function(event) {
      jugador.setVelocityY(0);
      jugador.anims.play('turn');
    });
    this.input.keyboard.on('keyup_LEFT', function(event) {
      jugador.setVelocityX(0);
      jugador.anims.play('turn');
    });
    this.input.keyboard.on('keyup_RIGHT', function(event) {
      jugador.setVelocityX(0);
      jugador.anims.play('turn');
    });

    var timedEvent = this.time.addEvent({
      delay: 1000,
      callback: function() {
        objetos.children.iterate(function(child) {
          if (child.visitado == true) {
            escena.physics.add.collider(jugador, child);
          }

        });
      },
      callbackScope: this,
      loop: true
    });

    var timedEvent2 = this.time.addEvent({
      delay: 1000,
      callback: function() {
        textoTiempo.setText('tiempo: ' + tiempo);
        tiempo--;
        if (tiempo <= 0) {
          tiempo = 12
          this.scene.start('perdiste');
        }
      },
      callbackScope: this,
      loop: true
    });

  }

  update(time, delta) {


  }
}

function sobreponer(objeto, jugador) {
  objeto.visitado = true;
  jugador.puntos=0
  objetos.children.iterate(function(child) {
    if (child.visitado == true) {
      jugador.puntos ++;
    }

  });
  if (jugador.puntos >= 9) {
    tiempo = 12;
    jugador.puntos = 0
    escena.scene.start('win');
  }
  //this.physics.add.collider(jugador, objeto);
}
