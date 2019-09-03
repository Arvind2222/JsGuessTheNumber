    /* Global Variable  */
    let randNumber = 0;
    let level = 0;
    let attempts = 0;

    /**
     * Create Random Number only after document is loaded completely
     * 
     */
    $(document).ready(function() {

        randNumber = randomNumber();

        console.log("generated Random Number on document.ready => " + randNumber);

    });

    /**
     * Get Verdict of guess
     * 
     */
    let checkGuess = () => {

        let guessedValue = document.getElementById("inputBox").value;


        console.log("Guessed Value = " + guessedValue + " | Random Number = " + randNumber);

        /* Unhide ResultArea div */
        $('#resultArea').css({ "display": "block" });


        if (guessedValue != randNumber) /* Guessed Incorrectly */ {

            //emotion Array
            let emotions = ['ghostAngry.svg', 'ghostDelighted.svg', 'ghostInnocent.svg', 'ghostSad.svg', 'owl.svg', 'ghostBleeding.svg', 'devil.svg', 'bat.svg', 'pirate.svg', 'sad.svg'];


            //randomly select emotions
            let imageIndex = Math.floor(Math.random() * 10);
            console.log("index = " + imageIndex);


            /* random emotions till guess is incorrect */
            $('#guessResultImage').attr("src", `images/${emotions[imageIndex]}`);


            /* display verdict */
            if (guessedValue > randNumber)
                $('#guessVerdict').html('<span> You guessed a little higher</span>');
            else
                $('#guessVerdict').html('<span> You guessed a little lower</span>');

            /* Verdict Font color */
            $('#guessVerdict').css({ "color": "red" });



            /* Show Previous Guesses */
            $('#previousGuessValues').append("<span class= 'badge badge-danger rounded-pill' >" + `${guessedValue}` + "</span> &nbsp;");

            /* Reset input field */
            $('input[name=inputBox').val('');


            /* Hide Level is hidden */
            $('#nextLevelButton').css({ "display": "none" });
        } else /* Guessed correctly */ {
            /* happy emotion as guessed correctly! */
            $('#guessResultImage').attr("src", "images/pumpkin.svg");

            /* display verdict */
            $('#guessVerdict').html('<span>Congrats! You made it ! Try next Level </span>')

            /* Success Verdict Color */
            $('#guessVerdict').css({ "color": "green" });

            /* display correct guess in green */
            $('#previousGuessValues').append("<span class= 'badge badge-success rounded-pill' >" + `${guessedValue}` + "</span> &nbsp;");

            /* submit button disabled after correct guess  */
            $('#submit').prop('disabled', true);

            /* Show next level button */
            $('#nextLevelButton').toggle();

            /* Reset input field */
            $('input[name=inputBox').val('');


        }

        return guessedValue;
    }

    /**
     * Level up
     */

    let levelUp = () => {
        level++;

        /* Update the DOM with new level */
        $('#levelIndicator').html(`Level: ${level} `);

        /* Now hide next level button  */
        $('#nextLevelButton').toggle();

        /* Hide result Area */
        $('#resultArea').toggle();

        /* Change Result Image */
        $('#guessResultImage').attr("src", "images/nerd.svg");

        /* submit button enabled again  */
        $('#submit').prop('disabled', false);

    }



    /**
     * Random Number  Generator between min and max
     * 
     */

    function getRandomInt(min = 1, max = 100) {
        return Math.floor(Math.random() * (max - min + 1));
    }

    let randomNumber = () => {
        let rand = getRandomInt();
        return rand
    }





    /**
     * click eventListener for the submit button.
     * 
     */

    let guessvalue = document.querySelector("#submit").addEventListener("click", checkGuess);

    /**
     * click eventListener for next Level button.
     */

    let nextLevel = document.querySelector('#nextLevelButton').addEventListener('click', levelUp);
