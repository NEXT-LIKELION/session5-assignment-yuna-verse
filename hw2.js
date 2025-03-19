const UserRow = Number(
    prompt("몇 줄의 크리스마스 트리를 만들고 싶은지 적어주세요!")
);

for (let i = 1; i <= UserRow; i++) {
    let output = "";

    for (let j = 1; j <= UserRow - i; j++) {
        output += " ";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
        output += "*";
    }
    console.log(output);
}
