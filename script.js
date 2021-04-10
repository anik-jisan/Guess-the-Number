
function guessNumber() {

    var result = [Math.floor(Math.random() * 10) + 1];
    var guess;

    for (var i = 1; i < 4; i++) {

        guess = prompt("Please enter a number between 1 and 10");

        if (guess < 1 || guess > 10) {
            alert("Please enter a number between 1 and 10");
        }
        else {

            if (guess == result) {
                swal("You Win!", "You guessed the number!", "success");
                i = 0;
                break;
            }
            else if (guess < result) {
                alert("Correct answer is greater!!");
            }

            else if (guess > result) {
                alert("Correct answer is Smaller!!");
            }

            else {
                alert("Error!!!");
            }
        }
    }
    if (i == 4) {
        swal("You Lose!", "All the chances are finished", "error");

    }



}






















