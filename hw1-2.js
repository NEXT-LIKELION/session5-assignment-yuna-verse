let movies = [
    { name: "mv1", level: "A" },
    { name: "mv2", level: "A" },
    { name: "mv3", level: "B" },
    { name: "mv4", level: "B" },
    { name: "mv5", level: "C" },
    { name: "mv6", level: "C" },
];

const userInput = prompt("당신의 등급은 무엇입니까? (A, B, C)");

let accessibleLevels = [];

if (userInput === "A") {
    accessibleLevels = ["A", "B", "C"];
} else if (userInput === "B") {
    accessibleLevels = ["B", "C"];
} else if (userInput === "C") {
    accessibleLevels = ["C"];
} else {
    console.log("잘못된 값입니다.");
}

if (accessibleLevels.length > 0) {
    let accessibleMovies = movies
        .filter((movie) => accessibleLevels.includes(movie.level))
        .map((movie) => movie.name);

    console.log("시청 가능한 영화:", accessibleMovies.join(", "));
}
