// console.log(document.querySelector(".message").textContent = "Correct answer");
// console.log(document.querySelector(".guess").value = 13);

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener
("click", function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log(typeof guess)

    if(!guess){
        document.querySelector(".message").textContent= "Incorrect input"
    } else if(guess === secretNumber){
        document.querySelector(".message").textContent= "You guess the number !!! "
        document.querySelector('body').style.backgroundColor="#60b347"
    } else if(guess > secretNumber) {
        document.querySelector(".message").textContent= "Too high "
    } else if(guess < secretNumber){
        document.querySelector(".message").textContent= "Too low "
    }
})