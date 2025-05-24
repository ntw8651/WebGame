const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
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