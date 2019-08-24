
    let popUp = () => {
       
        let guessedValue = document.getElementById("inputBox").value;

        console.log("Guessed Number => " + guessedValue);
        alert("guessed Number => " + guessedValue);
    }

    document.querySelector("#submit").addEventListener("click", popUp);



