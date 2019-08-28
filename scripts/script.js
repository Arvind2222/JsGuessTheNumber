    
    /**
     * This method alerts/logs the guessed number.
     */
    let popUp = () => {
       
        let guessedValue = document.getElementById("inputBox").value;

        console.log("Guessed Number => " + guessedValue);
        // alert("guessed Number => " + guessedValue);

        $('#guessResult').html(`You guessed ${guessedValue}`);
    }

    /**
     * click eventListener for the submit button.
     */
    document.querySelector("#submit").addEventListener("click", popUp);



