let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

//* map 부분은 GPT의 도움을 받았습니다 ㅎㅎ *//

let newArray = users.map((user) => ({
    fullName: user.name + " " + user.surname,
    id: user.id,
}));

console.log(newArray);
