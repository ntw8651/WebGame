// player란 id를 가진 개체에 대한 모든 것을 총괄하는 스크립트

const player = document.getElementById("player");
let posX = 100;
let posY = 100;
const speed = 10;

document.addEventListener("keydown", (input) => {
	switch (input.key){
		case "ArrowUp":
			posY = Math.max(0, posY - speed);
			break;
		case "ArrowDown":
			posY = Math.min(550, posY + speed);
			break;
		case "ArrowLeft":
			posX = Math.max(0, posX - speed);
			break
		case "ArrowRight":
			posX = Math.min(750, posX + speed);
			break
	}
	player.style.left = posX + "px";
	player.style.top = posY + "px";
});