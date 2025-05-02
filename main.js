const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 100;
const dotCount = 90;  // 점 개수
let angleOffset = 0;  // 회전 각도


let angle = 0; // 마법진 회전 각도
let selected = -1; // 선택된 버튼

// 선택지 데이터
const choices = [
  "1. 마을에게 말을 건다",
  "2. 마을 안쪽으로 걸어간다",
  "3. 마을 밖 쪽으로 걸어간다"
];

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // ===== 왼쪽 아래 회전 원 =====


	
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
  // ===== 오른쪽 상단 상태 표시 =====
  ctx.fillStyle = 'white';
  ctx.font = '20px monospace';
  ctx.fillText('HP: 100/100 하이델-파이바 마을-거리 1', 400, 30);

  // ===== 텍스트 박스 =====
  const textBoxX = 400;
  const textBoxY = 60;
  const textBoxWidth = 850;
  const textBoxHeight = 400;

  ctx.strokeStyle = 'white';
  ctx.strokeRect(textBoxX, textBoxY, textBoxWidth, textBoxHeight);

  const text = "당신은 마을에 들어왔습니다.\n\n마을에는 당신의 또래로 보이는 어린아이들도 뛰어다니고 있습니다. 입구 근처에는 상인들이 가판대를 펼쳐두고 있습니다. 처음보는 타인에 당신의 마음이 설렙니다. 한편으로 동생이 이 마을에 있을까 하는 생각이 듭니다.";
  const lines = text.split('\n');
  ctx.font = '18px monospace';
  let lineY = textBoxY + 30;
  for (let line of lines) {
	ctx.fillText(line, textBoxX + 10, lineY);
	lineY += 24;
  }

  // ===== 선택지 =====
  const choiceBoxHeight = 40;
  for (let i = 0; i < choices.length; i++) {
	const y = textBoxY + textBoxHeight + 20 + i * (choiceBoxHeight + 10);
	ctx.strokeStyle = 'white';
	ctx.strokeRect(textBoxX, y, textBoxWidth, choiceBoxHeight);
	ctx.fillStyle = selected === i ? 'gray' : 'white';
	ctx.fillText(choices[i], textBoxX + 10, y + 25);
  }

  // ===== 마법진 회전 업데이트 =====
  angle += 0.01;

  requestAnimationFrame(draw);
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
	  selected = i;
	  console.log(`선택지 ${i + 1} 선택됨`);
	  // TODO: 선택 시 로직 추가
	}
  }
});

draw();