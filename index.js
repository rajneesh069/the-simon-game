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
        var initiateLevel = randomNumber();
        flashButton(initiateLevel);
        computerResponse.push(initiateLevel);
        console.log(computerResponse);
    }, { once: true })
}



//Click Detection
function clickDetect() {
    var arrayOfAllButtons = document.querySelectorAll(".btn");
    for (let j = 0; j < 4; j++) {
        arrayOfAllButtons[j].addEventListener("click", function () {
            var arrayOfButtonClass = Array.from(this.classList);

            //Play sound when buttons are clicked
            if (arrayOfButtonClass.includes("green")) {
                userResponse.push(1);
                flashButton(1);
                if (userResponse.length < computerResponse.length && userResponse.length !== 0) {
                    for (let s = 0; s < userResponse.length; s++) {
                        if (userResponse[s] !== computerResponse[s]) {
                            continueGame(userResponse, computerResponse);
                        }
                    }
                }

                if (userResponse.length === computerResponse.length) {
                    continueGame(userResponse, computerResponse);
                }
            }

            if (arrayOfButtonClass.includes("red")) {
                userResponse.push(2);
                flashButton(2);
                if (userResponse.length < computerResponse.length && userResponse.length !== 0) {
                    for (let s = 0; s < userResponse.length; s++) {
                        if (userResponse[s] !== computerResponse[s]) {
                            continueGame(userResponse, computerResponse);
                        }
                    }
                }

                if (userResponse.length === computerResponse.length) {
                    continueGame(userResponse, computerResponse);
                }

            }

            if (arrayOfButtonClass.includes("yellow")) {
                userResponse.push(3);
                flashButton(3);
                if (userResponse.length < computerResponse.length && userResponse.length !== 0) {
                    for (let s = 0; s < userResponse.length; s++) {
                        if (userResponse[s] !== computerResponse[s]) {
                            continueGame(userResponse, computerResponse);
                        }
                    }
                }

                if (userResponse.length === computerResponse.length) {
                    continueGame(userResponse, computerResponse);
                }
            }

            if (arrayOfButtonClass.includes("blue")) {
                userResponse.push(4);
                flashButton(4);
                if (userResponse.length < computerResponse.length && userResponse.length !== 0) {
                    for (let s = 0; s < userResponse.length; s++) {
                        if (userResponse[s] !== computerResponse[s]) {
                            continueGame(userResponse, computerResponse);
                        }
                    }
                }

                if (userResponse.length === computerResponse.length) {
                    continueGame(userResponse, computerResponse);
                }
            }

        })
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
        var storeNumber = randomNumber();
        console.log("Computer response before push " + computer$Response);
        console.log("User response before clearing " + user$Response);
        document.querySelector("h1").textContent = "Level " + [i];
        i++;
        setTimeout(function () { flashButton(storeNumber) }, 1000);
        user$Response.length = 0;
        console.log("User response after clearing " + user$Response);
        computer$Response.push(storeNumber);
        console.log("Computer response after push " + computer$Response);

    }

    if (!(arrayEqualityCheck(user$Response, computer$Response)) && user$Response.length !== 0) {
        // computerResponse.length = 0;
        // userResponse.length = 0;
        console.log("Other if is running :- User response: " + user$Response + " Computer Response: " + computer$Response)
        document.querySelector("h1").textContent = "Game Over, Press Any Key To Restart";

        document.querySelector("body").classList.add("game-over");
        setTimeout(function () {
            var audio = new Audio("./sounds/wrong.mp3")
            audio.play();
            document.querySelector("body").classList.remove("game-over");
        }, 100)
        initializeGame();
    }
}


function startMainGame() {
    initializeGame();
    clickDetect();
}

startMainGame();
