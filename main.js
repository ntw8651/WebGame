// ===== Import ======
import { setting } from './setting.js'

// ===== Init =====



// Base State
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


// Magic Circle
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 100;
const dotCount = 90;  // 점 개수
let angleOffset = 0;  // 회전 각도
let angle = 0; // 마법진 회전 각도



let selectedNumber = -1; // 선택된 버튼

// 선택지 데이터
const choices = [
  "1. 마을에게 말을 건다",
  "2. 마을 안쪽으로 걸어간다",
  "3. 마을 밖 쪽으로 걸어간다"
];

function DrawFrame() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// 다음번 타임때는 아예 골자를 다 만들어두고 canvas를 그려달라고 하자.
	// 적당한 이미지와 함수 형태를 모두 주어진 상태에서
	// 화면의 크기 비율에 해당하게, WIDTH//4 WIDTH//5 같은 크기 숫자를 이용하여라.
	// 그리고 기본적으로 11:9?? 비율에 알맞게 형태를 만들어라
	// 
	
	
	
	DrawCircle();
	DrawDialogueBox();
	DrawSelectionBox();
	DrawStateBox();

	// ===== 마법진 회전 업데이트 =====
	angle += 0.01;




	requestAnimationFrame(DrawFrame);
}

// 클릭 이벤트: 선택지 클릭 처리
canvas.addEventListener('click', function(e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const textBoxX = 400;
  const textBoxY = 60;
  const textBoxWidth = 850;
  const textBoxHeight = 400;
  const choiceBoxHeight = 40;

  for (let i = 0; i < choices.length; i++) {
	const boxY = textBoxY + textBoxHeight + 20 + i * (choiceBoxHeight + 10);
	if (x >= textBoxX && x <= textBoxX + textBoxWidth &&
		y >= boxY && y <= boxY + choiceBoxHeight) {
	  selectedNumber = i;
	  console.log(`선택지 ${i + 1} 선택됨`);
	  // TODO: 선택 시 로직 추가
	}
  }
});

function DrawCircle(){
	for (let i = 0; i < dotCount; i++) {
		const angle = (i / dotCount) * 2 * Math.PI + angleOffset;
		const x = centerX + radius * Math.cos(angle);
		const y = centerY + radius * Math.sin(angle);

		ctx.beginPath();
		ctx.arc(x, y, 4, 0, 2 * Math.PI);
		ctx.fillStyle = 'white';
		ctx.fill();
	  }
	angleOffset += 0.01;  // 회전 속도
}


function DrawDialogueBox(){
	
}


function DrawStateBox(){
	// ===== 오른쪽 상단 상태 표시 =====
	ctx.fillStyle = 'white';
	ctx.font = '20px monospace';
	ctx.fillText('HP: 100/100 하이델-파이바 마을-거리 1', 400, 30);
}

function DrawSelectionBox(){
	
	const choiceBoxHeight = 40;
	for (let i = 0; i < choices.length; i++) {
	const y = textBoxY + textBoxHeight + 20 + i * (choiceBoxHeight + 10);
	ctx.strokeStyle = 'white';
	ctx.strokeRect(textBoxX, y, textBoxWidth, choiceBoxHeight);
	ctx.fillStyle = selected === i ? 'gray' : 'white';
	ctx.fillText(choices[i], textBoxX + 10, y + 25);
	}
}








// init start!
DrawFrame();