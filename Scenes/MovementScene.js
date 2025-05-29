class MovementScene extends Phaser.Scene {
    constructor() {
        super('MovementScene');
        this.currentEventIndex = 0;
        this.eventsr = [
            {
                text: "당신은 탑의 입구에 도착했습니다. 어떤 길을 선택하시겠습니까?",
                options: [
                    { text: "앞으로 나아간다.", nextEvent: 1 },
                    { text: "잠시 주변을 둘러본다.", nextEvent: 2 }
                ]
            },
            {
                text: "좁은 길을 따라 걷던 중, 작은 몬스터와 마주쳤습니다! 전투를 시작합니다.",
                options: [
                    { text: "전투 시작", nextScene: 'BattleScene', battleData: { enemy: 'Goblin', level: 1 } }
                ]
            },
            {
                text: "주변을 둘러보니 오래된 약초 더미를 발견했습니다. 약간의 허기를 채울 수 있을 것 같습니다.",
                options: [
                    { text: "약초를 먹는다.", nextEvent: 3 },
                    { text: "그냥 지나친다.", nextEvent: 1 }
                ]
            },
            {
                text: "약초를 먹고 허기가 약간 회복되었습니다.",
                options: [
                    { text: "다시 앞으로 나아간다.", nextEvent: 1 }
                ]
            }
            // 앞으로 더 많은 이벤트 추가 가능
        ];
    }

    create() {
        this.eventText = this.add.text(100, 100, '', { fontSize: '32px', fill: '#fff' });
        this.optionButtons = [];
        this.showEvent(this.currentEventIndex);
    }

    showEvent(eventIndex) {
        const currentEvent = this.eventsr[eventIndex];
		console.log(this.eventsr);
        
		
		this.eventText.setText(currentEvent.text);

        // 기존 버튼 제거
        this.optionButtons.forEach(button => button.destroy());
        this.optionButtons = [];

        currentEvent.options.forEach((option, index) => {
            const buttonY = 400 + index * 60;
            const button = this.add.text(100, buttonY, option.text, { fontSize: '24px', fill: '#fff', backgroundColor: '#444', padding: { x: 10, y: 5 } })
                .setInteractive()
                .on('pointerdown', () => {
                    if (option.nextEvent !== undefined) {
                        this.currentEventIndex = option.nextEvent;
                        this.showEvent(this.currentEventIndex);
                    } else if (option.nextScene === 'BattleScene') {
                        this.scene.start(option.nextScene, option.battleData);
                    }
                });
            this.optionButtons.push(button);
        });
    }
}