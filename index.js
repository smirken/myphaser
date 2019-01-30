// Import stylesheets
import './style.css';
import 'phaser';
import BootScene from './scenes/BootScene';
var LogoScene = 0;
import LogoScene2 from './scenes/LogoScene2';

var config = {
  type: Phaser.AUTO,

  width: 600,
  height: 400,
  /*
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },*/
  // ID of the DOM element to add the canvas to
  parent: 'game-container',
  scene: [
    LogoScene2
  ]

};
var config2 = {
  type: Phaser.AUTO, // Which renderer to use
  pixelArt: true,
  // Canvas width in pixels
  width: 600,
  // Canvas height in pixels
  height: 400,

  // ID of the DOM element to add the canvas to
  parent: 'game-container',
  scene: [
    BootScene
  ]
};


window.PHSR_GAME = new Phaser.Game(config)