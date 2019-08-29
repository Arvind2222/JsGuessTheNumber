    /* Global Variable  */
    let randNumber = 0;

    
    /**
     * This method checks if guess is correct or incorrect
     * 
     */
    let checkGuess = () => {
       
        let guessedValue = document.getElementById("inputBox").value;

        
        console.log("Guessed Value = " + guessedValue + " | Random Number = " + randNumber);

        /* Unhide ResultArea div */
        $('#resultArea').css({"display":"block"});

        if(guessedValue != randNumber)
            {
                

                $('#guessResultImage').attr("src", "images/sad.svg");  /* sad emotion as guessed incorrectly */

                $('#guessVerdict').html('<span> You guessed a little higher/lower</span>'); /* display verdict */

                $('#guessVerdict').css({"color":"red"});

                $('#nextLevelButton').css({"display":"none"});
            }
        else
            {   
                
                $('#guessResultImage').attr("src", "images/pumpkin.svg"); /* happy emotion as guessed correctly! */

                $('#guessVerdict').html('<span>Congrats! You made it ! Try next Level </span>')/* display vardict */

                $('#guessVerdict').css({"color":"green"});


                $('#nextLevelButton').toggle();
            }

        return guessedValue;
    }


     /**
      * Random Number  Generator between 1 and 100
      * 
      */
     let randomNumber = () => {
        let rand = Math.floor((Math.random()*100));

        return rand;
    }


   
    /**
     * click eventListener for the submit button.
     * 
     */
    let guessvalue = document.querySelector("#submit").addEventListener("click", checkGuess);
    
    


    /**
     * Create Random Number only after document is loaded completely
     * 
     */
    $(document).ready(function(){

        randNumber = randomNumber(); 

        console.log("generated Random Number on document.ready => " + randNumber);
     
    });
   
