const secretNumber = Math.trunc(Math.random() * 20 + 1);

console.log(secretNumber);

let selectHighscore = document.querySelector('.highscore');
selectHighscore = 0;

let score = 20;
document.querySelector(".check").addEventListener('click', function() {

    let guess = parseInt(document.querySelector(".guess").value);

    if (!guess) {
        document.querySelector(".messege").textContent = ' ❌please insert a number 🔕';

    } else if (secretNumber === guess) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector(".messege").textContent = ' wow you won 💥💞';
        document.querySelector('.highscore').textContent = score;

    } else if (secretNumber > guess) {


        document.querySelector('.highscore').textContent = score - 1;

        if (score > 0) {
            document.querySelector(".messege").textContent = ' wow its too low';

            document.querySelector('.score').textContent = score;
            score--;
        } else {
            document.querySelector(".messege").textContent = ' you lost the game';

        }

    } else if (secretNumber < guess) {

        if (score > 0) {
            document.querySelector(".messege").textContent = ' wow its high';

            document.querySelector('.score').textContent = score;
            score--;
        } else {
            document.querySelector(".messege").textContent = ' you lost the game';

        }

    }
})




// thisis for the again button

document.querySelector('.again').addEventListener('click', function() {
    window.location.reload();
})