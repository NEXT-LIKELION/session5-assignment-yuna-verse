let movie = ["mv1", "mv2", "mv3", "mv4", "mv5", "mv6", "mv7", "mv8", "mv9"];

const userInput = prompt("당신의 등급은 무엇입니까?");

if (userInput == "A") {
    console.log(movie.slice(0, movie.length));
} else if (userInput == "B") {
    console.log(movie.slice(3, movie.length));
} else if (userInput == "C") {
    console.log(movie.slice(6, movie.length));
} else {
    console.log("잘못된 값입니다.");
}
