class BootScene extends Phaser.Scene {
  constructor(key) {
    super({ key: 'BootScene' })
  }

  preload() {

  }

  create() {
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

export default BootScene;