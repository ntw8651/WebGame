// game.js
const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'game-container',
    },
    backgroundColor: '#222',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [
        MainMenuScene,     // 게임 시작 시 이 씬부터 시작
        MovementScene,
        BattleScene
    ]
};

const game = new Phaser.Game(config);