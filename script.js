let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener
    ("click", function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(typeof guess)

        if (!guess) {
            document.querySelector('.message').textContent = "no number selected"
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = "You got the Number !";
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = "#60b347"
            document.querySelector('.number').style.width = "30rem"
            document.querySelector(".h1").textContent = "Thats amazing !";

            if (score > highScore) {
                highScore = score;
                document.querySelector(".highscore").textContent = highScore;
            }

        } else if (guess > secretNumber) {

            if (score > 1) {
                document.querySelector('.message').textContent = "too high";
                score--;
                document.querySelector(".score").textContent = score;
            } else {
                document.querySelector('.message').textContent = "Yoo lose the game";
                document.querySelector(".score").textContent = 0;
            }
        } else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = "too low";
                score--;
                document.querySelector(".score").textContent = score;
            } else {
                document.querySelector('.message').textContent = "Yoo lose the game";
                document.querySelector(".score").textContent = 0;
            }
        }
    })

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = "?"
    document.querySelector(".score").textContent = score;
    document.querySelector(".score").textContent = score;
    document.querySelector('body').style.backgroundColor = "#222"
})
