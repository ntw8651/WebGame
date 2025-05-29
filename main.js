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

    scene: {

        preload,

        create,

        update

    }

};



const game = new Phaser.Game(config);

let player;

let cursors;

let textBox1, textBox2, textBox3; // 텍스트 박스 변수 추가



function preload() {

    // 정사각형 플레이어를 임시로 그리기 위한 그래픽 생성

    this.graphics = this.add.graphics();

    this.graphics.fillStyle(0xffffff, 1);

    this.graphics.fillRect(0, 0, 50, 50);

    this.graphics.generateTexture('player', 50, 50);

    this.graphics.destroy();

}



function create() {

    player = this.physics.add.sprite(400, 300, 'player');

    player.setCollideWorldBounds(true); // 화면 밖으로 못 나가게

    cursors = this.input.keyboard.createCursorKeys(); // 방향키

    this.WASD = this.input.keyboard.addKeys('W,A,S,D'); // WASD



    // 첫 번째 텍스트 박스

    textBox1 = this.add.text(this.cameras.main.centerX, 150, 'Text Box 1', { 

        fontSize: '32px', 

        fill: '#fff', 

        backgroundColor: '#555',

        padding: { x: 10, y: 5 }

    });

    textBox1.setOrigin(0.5); // 가운데 정렬

    textBox1.setInteractive(); // 클릭 가능하게 설정

    textBox1.on('pointerdown', () => { // 클릭 이벤트 리스너

        console.log('Text Box 1 clicked!');

        // 여기에 텍스트 박스 1 클릭 시 수행할 작업을 추가합니다.

    });



    // 두 번째 텍스트 박스

    textBox2 = this.add.text(this.cameras.main.centerX, 250, 'Text Box 2', { 

        fontSize: '32px', 

        fill: '#fff', 

        backgroundColor: '#555',

        padding: { x: 10, y: 5 }

    });

    textBox2.setOrigin(0.5); // 가운데 정렬

    textBox2.setInteractive();

    textBox2.on('pointerdown', () => {

        console.log('Text Box 2 clicked!');

        // 여기에 텍스트 박스 2 클릭 시 수행할 작업을 추가합니다.

    });



    // 세 번째 텍스트 박스

    textBox3 = this.add.text(this.cameras.main.centerX, 350, 'Text Box 3', { 

        fontSize: '32px', 

        fill: '#fff', 

        backgroundColor: '#555',

        padding: { x: 10, y: 5 }

    });

    textBox3.setOrigin(0.5); // 가운데 정렬

    textBox3.setInteractive();

    textBox3.on('pointerdown', () => {

        console.log('Text Box 3 clicked!');

        // 여기에 텍스트 박스 3 클릭 시 수행할 작업을 추가합니다.

    });

}



function update() {

    const speed = 200;

    player.setVelocity(0);



    // 방향키 또는 WASD 둘 다 지원

    if (cursors.left.isDown || this.WASD.A.isDown) {

        player.setVelocityX(-speed);

    } else if (cursors.right.isDown || this.WASD.D.isDown) {

        player.setVelocityX(speed);

    }



    if (cursors.up.isDown || this.WASD.W.isDown) {

        player.setVelocityY(-speed);

    } else if (cursors.down.isDown || this.WASD.S.isDown) {

        player.setVelocityY(speed);

    }

}