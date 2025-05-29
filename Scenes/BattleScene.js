class BattleScene extends Phaser.Scene {
    constructor() {
        super('BattleScene');
    }

    init(data) {
        this.enemy = data.enemy;
        this.enemyLevel = data.level;
        this.playerHealth = 100; // 임시 플레이어 체력
        this.enemyHealth = 50 * this.enemyLevel; // 임시 적 체력 (레벨에 따라 스케일링)
    }

    create() {
        this.add.text(this.cameras.main.centerX, 100, `전투 시작! 상대: ${this.enemy} (Lv. ${this.enemyLevel})`, { fontSize: '32px', fill: '#f00' }).setOrigin(0.5);
        this.playerText = this.add.text(100, 300, `플레이어: 체력 ${this.playerHealth}`, { fontSize: '24px', fill: '#fff' });
        this.enemyText = this.add.text(this.cameras.main.width - 300, 300, `${this.enemy}: 체력 ${this.enemyHealth}`, { fontSize: '24px', fill: '#fff' }).setOrigin(1, 0);

        const attackButton = this.add.text(100, 400, '공격', { fontSize: '24px', fill: '#fff', backgroundColor: '#555', padding: { x: 10, y: 5 } })
            .setInteractive()
            .on('pointerdown', () => {
                this.attack();
            });

        this.add.text(100, 460, '스킬 (미구현)', { fontSize: '24px', fill: '#888', backgroundColor: '#333', padding: { x: 10, y: 5 } });
        this.add.text(100, 520, '도망 (미구현)', { fontSize: '24px', fill: '#888', backgroundColor: '#333', padding: { x: 10, y: 5 } });

        this.messageText = this.add.text(this.cameras.main.centerX, 600, '', { fontSize: '24px', fill: '#ddd', align: 'center' }).setOrigin(0.5);
    }

    attack() {
        const playerDamage = Phaser.Math.Between(10, 20);
        const enemyDamage = Phaser.Math.Between(5, 15);

        this.enemyHealth -= playerDamage;
        this.playerHealth -= enemyDamage;

        this.playerText.setText(`플레이어: 체력 ${this.playerHealth}`);
        this.enemyText.setText(`${this.enemy}: 체력 ${this.enemyHealth}`);
        this.messageText.setText(`플레이어가 ${this.enemy}에게 ${playerDamage}의 피해를 입혔습니다!\n${this.enemy}가 플레이어에게 ${enemyDamage}의 피해를 입혔습니다!`);

        if (this.enemyHealth <= 0) {
            this.messageText.setText(`${this.enemy}를 물리쳤습니다!`);
            this.time.delayedCall(2000, () => {
                this.scene.start('MovementScene');
            });
        } else if (this.playerHealth <= 0) {
            this.messageText.setText('플레이어가 쓰러졌습니다...');
            this.time.delayedCall(2000, () => {
                this.scene.start('MainMenuScene'); // 또는 게임 오버 씬
            });
        }
    }
}