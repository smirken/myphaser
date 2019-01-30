class LogoScene2 extends Phaser.Scene {
  constructor(key) {
    super({ key: 'LogoScene2' })
  }

  preload() {
 this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
  }

  create() {
     this.add.image(400, 300, 'sky');

    // Help text that has a 'fixed' position on the screen
    this.add
      .text(200, 200, 'Phaser Stackblitz', {
        font: '18px Fira Code',
        fill: '#ffffff',
        padding: { x: 20, y: 10 },
        backgroundColor: '#000000'
      })
      .setScrollFactor(0);
  }

  update(time, delta) {

  }
}

export default LogoScene2;