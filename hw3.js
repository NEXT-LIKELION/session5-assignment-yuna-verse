let user = prompt("가위, 바위, 보 중 하나를 입력해 주세요!");
let randomNum = Math.random(); // 0 이상 1 미만의 랜덤 숫자 생성
let computer;

if (randomNum < 1 / 3) {
    computer = "가위";
} else if (randomNum < 2 / 3) {
    computer = "바위";
} else {
    computer = "보";
}

console.log("컴퓨터는 ", computer, "를 냈습니다.");

if (user === computer) {
    console.log("비겼습니다.");
} else if (
    (user === "가위" && computer === "보") ||
    (user === "바위" && computer === "가위") ||
    (user === "보" && computer === "바위")
) {
    console.log("이겼습니다.");
} else {
    console.log("졌습니다.");
}
