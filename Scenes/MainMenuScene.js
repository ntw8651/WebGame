// src/scenes/MainMenuScene.js

class MainMenuScene extends Phaser.Scene {
    constructor() {
        super('MainMenuScene');
    }

    preload() {
        // You can preload assets specific to the main menu here if needed
    }

    create() {
        this.add.text(this.cameras.main.centerX, 100, 'Welcome to My Game!', {
            fontSize: '64px',
            fill: '#fff',
            backgroundColor: '#333',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5);

        const playButton = this.add.text(this.cameras.main.centerX, 300, 'Start Game', {
            fontSize: '48px',
            fill: '#fff',
            backgroundColor: '#0a0',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5);
        playButton.setInteractive();
        playButton.on('pointerdown', () => {
            console.log('Start Game clicked!');
            this.scene.start('MovementScene');
        });

        const optionsButton = this.add.text(this.cameras.main.centerX, 450, 'Options', {
            fontSize: '48px',
            fill: '#fff',
            backgroundColor: '#00a',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5);
        optionsButton.setInteractive();
        optionsButton.on('pointerdown', () => {
            console.log('Options clicked!');
        });

        const exitButton = this.add.text(this.cameras.main.centerX, 600, 'Exit', {
            fontSize: '48px',
            fill: '#fff',
            backgroundColor: '#a00',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5);
        exitButton.setInteractive();
        exitButton.on('pointerdown', () => {
            console.log('Exit clicked!');
        });
    }
}