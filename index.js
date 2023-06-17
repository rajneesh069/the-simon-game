var i = 2;
//Random number generator
function randomNumber() {
    return Math.trunc((Math.random() * 4) + 1);
}

// 1 = green; 2= red; 3 = yellow; 4 = blue;

//Arrays for storing and checking user responses
var userResponse = [];
var computerResponse = [];


//For Flashing Buttons
function flashButton(key) {
    switch (key) {
        case 1: document.querySelector(".btn.green").classList.add("pressed");
            setTimeout(function () {
                var audio = new Audio("./sounds/green.mp3");
                audio.play();
                document.querySelector(".btn.green").classList.remove("pressed");
            }, 100)
            break;

        case 2: document.querySelector(".btn.red").classList.add("pressed");
            setTimeout(function () {
                var audio = new Audio("./sounds/green.mp3");
                audio.play();
                document.querySelector(".btn.red").classList.remove("pressed");
            }, 100)
            break;

        case 3: document.querySelector(".btn.yellow").classList.add("pressed");
            setTimeout(function () {
                var audio = new Audio("./sounds/green.mp3");
                audio.play();
                document.querySelector(".btn.yellow").classList.remove("pressed");
            }, 100)
            break;

        case 4: document.querySelector(".btn.blue").classList.add("pressed");
            setTimeout(function () {
                var audio = new Audio("./sounds/green.mp3");
                audio.play();
                document.querySelector(".btn.blue").classList.remove("pressed");
            }, 100)
            break;

        default: console.log(key);
            break;
    }
}



//KeyBoard Detection
function initializeGame() {
    document.addEventListener("keydown", function () {
        document.querySelector("h1").textContent = "Level 1";
        computerResponse.length = 0;
        userResponse.length = 0;
        i = 2;
        var initiateLevel = 0;
        initiateLevel = randomNumber();
        setTimeout(function () { flashButton(initiateLevel) }, 200);
        computerResponse.push(initiateLevel);
        ////console.log("Computer response in initialize game is: " + computerResponse);
        clickDetect();
    }, { once: true })
}



//Click Detection
function clickDetect() {
    var arrayOfAllButtons = document.querySelectorAll(".btn");
    for (let j = 0; j < 4; j++) {
        arrayOfAllButtons[j].addEventListener("click", whatHappensWhenYouClick)
    }
}

//Callback function for adding and removing event listener
function whatHappensWhenYouClick() {
    var arrayOfButtonClass = Array.from(this.classList);

    //Play sound when buttons are clicked
    if (arrayOfButtonClass.includes("green")) {
        ////console.log("Entered click detect 1");
        userResponse.push(1);
        flashButton(1);
        if (userResponse.length < computerResponse.length && userResponse.length !== 0 && computerResponse.length !== 0) {
            for (let s = 0; s < userResponse.length; s++) {
                if (userResponse[s] !== computerResponse[s]) {
                    //console.log("Entered the if in clickDetect");
                    continueGame(userResponse, computerResponse);
                    //console.log("Exited the if in clickDetect");
                }
            }
        }

        else if (userResponse.length === computerResponse.length && userResponse.length !== 0 && computerResponse.length !== 0) {
            //console.log("ENTERED EQUAL LENGTH IF");
            continueGame(userResponse, computerResponse);
            //console.log("EXITED EQUAL LENGTH IF");
        }
        //console.log("Exited click detect 1");
    }

    if (arrayOfButtonClass.includes("red")) {
        //console.log("Entered click detect 2");
        userResponse.push(2);
        flashButton(2);
        if (userResponse.length < computerResponse.length && userResponse.length !== 0 && computerResponse.length !== 0) {
            for (let s = 0; s < userResponse.length; s++) {
                if (userResponse[s] !== computerResponse[s]) {
                    //console.log("Entered the if in clickDetect");
                    continueGame(userResponse, computerResponse);
                    //console.log("Exited the if in clickDetect");
                }
            }
        }

        else if (userResponse.length === computerResponse.length && userResponse.length !== 0 && computerResponse.length !== 0) {
            //console.log("ENTERED EQUAL LENGTH IF");
            continueGame(userResponse, computerResponse);
            //console.log("EXITED EQUAL LENGTH IF");
        }
        //console.log("Exited click detect 2");
    }

    if (arrayOfButtonClass.includes("yellow")) {
        //console.log("Entered click detect 3");
        userResponse.push(3);
        flashButton(3);
        if (userResponse.length < computerResponse.length && userResponse.length !== 0 && computerResponse.length !== 0) {
            for (let s = 0; s < userResponse.length; s++) {
                if (userResponse[s] !== computerResponse[s]) {
                    //console.log("Entered the if in clickDetect");
                    continueGame(userResponse, computerResponse);
                    //console.log("Exited the if in clickDetect");
                }
            }
        }

        else if (userResponse.length === computerResponse.length && userResponse.length !== 0 && computerResponse.length !== 0) {
            //console.log("ENTERED EQUAL LENGTH IF");
            continueGame(userResponse, computerResponse);
            //console.log("EXITED EQUAL LENGTH IF");
        }
        //console.log("Exited click detect 3");
    }

    if (arrayOfButtonClass.includes("blue")) {
        //console.log("Entered click detect 4");
        userResponse.push(4);
        flashButton(4);
        if (userResponse.length < computerResponse.length && userResponse.length !== 0) {
            for (let s = 0; s < userResponse.length; s++) {
                if (userResponse[s] !== computerResponse[s]) {
                    //console.log("Entered the if in clickDetect");
                    continueGame(userResponse, computerResponse);
                    //console.log("Exited the if in clickDetect");
                }
            }
        }

        else if (userResponse.length === computerResponse.length && userResponse.length !== 0 && computerResponse.length !== 0) {
            //console.log("ENTERED EQUAL LENGTH IF");
            continueGame(userResponse, computerResponse);
            //console.log("EXITED EQUAL LENGTH IF");
        }
        //console.log("Exited click detect 4");
    }

}

//Remove Click Detect
function removeClickDetect(){
var arrayOfAllButtons = document.querySelectorAll(".btn");
for (let j = 0; j < 4; j++) {
    arrayOfAllButtons[j].removeEventListener("click", whatHappensWhenYouClick)
}
}

//Array Equality Checker
function arrayEqualityCheck(array1, array2) {
    if (array1.length === array2.length) {
        for (let k = 0; k < array1.length; k++) {
            if (array1[k] !== array2[k]) {
                return false;
            }

            else {
                continue;
            }
        }
        return true;
    }

    else {
        return false;
    }
}


//User response checker
function continueGame(user$Response, computer$Response) {

    if (arrayEqualityCheck(user$Response, computer$Response)) {
        //console.log("Entered 1st if");
        var storeNumber = randomNumber();
        //console.log("Computer response before push " + computer$Response);
        //console.log("User response before clearing " + user$Response);
        document.querySelector("h1").textContent = "Level " + [i];
        //console.log("i is: " + i);
        i++;
        // //console.log("i++ is: " + i);
        setTimeout(function () { flashButton(storeNumber) }, 700);
        user$Response.length = 0;
        //console.log("User response after clearing " + user$Response);
        computer$Response.push(storeNumber);
        //console.log("Computer response after push " + computer$Response);
        //console.log("Exiting 1st if");
    }

    if (!(arrayEqualityCheck(user$Response, computer$Response)) && user$Response.length !== 0) {
        //console.log("Entered other if");
        //console.log("Other if is running :- User response: " + user$Response + " Computer Response: " + computer$Response)
        computerResponse.length = 0;
        userResponse.length = 0;
        //console.log("Other if is running after clearing :- User response: " + user$Response + " Computer Response: " + computer$Response)
        document.querySelector("h1").textContent = "Game Over, Press Any Key To Restart";

        document.querySelector("body").classList.add("game-over");
        setTimeout(function () {
            var audio = new Audio("./sounds/wrong.mp3")
            audio.play();
            document.querySelector("body").classList.remove("game-over");
        }, 100)
        //console.log("User response in other if at last is: " + user$Response);
        //console.log("Computer response in other if at last is: " + computer$Response);
        //console.log("Exiting other if");
        i = 2;
        //console.log("i is reset and should be 2, is it? " + i);
        removeClickDetect();
        initializeGame();
    }
}



function startMainGame() {
    initializeGame();
}

startMainGame();
