    /* Global Variable  */
    let randNumber = 0;
    let level = 0;
    let attempts = 0;

    /**
     * Create Random Number only after document is loaded completely
     * 
     */
    $(document).ready(function(){

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
        $('#resultArea').css({"display":"block"});

       
        if(guessedValue != randNumber) /* Guessed Incorrectly */
            {
                

                $('#guessResultImage').attr("src", "images/sad.svg");  /* sad emotion as guessed incorrectly */

                /* display verdict */
                if(guessedValue > randNumber)
                    $('#guessVerdict').html('<span> You guessed a little higher</span>');
                else
                    $('#guessVerdict').html('<span> You guessed a little lower</span>');


                $('#guessVerdict').css({"color":"red"});

                $('#nextLevelButton').css({"display":"none"});
            }
        else /* Guessed correctly */
            {   
                
                $('#guessResultImage').attr("src", "images/pumpkin.svg"); /* happy emotion as guessed correctly! */

                $('#guessVerdict').html('<span>Congrats! You made it ! Try next Level </span>')/* display verdict */

                $('#guessVerdict').css({"color":"green"});


                $('#nextLevelButton').toggle();
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
     * click eventListener for next Level button.
     */
    let nextLevel = document.querySelector('#nextLevelButton').addEventListener('click', levelUp );

    
   
