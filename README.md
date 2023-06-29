# the-simon-game
It is one of the projects I've made during the Web Development course. 
The Java script file has been written from "scratch", each and every code, by me. I've used loops, setTimeout and other basic functions to create the js file. 
However,  the CSS, HTML and sound files are from course, though I do know how to design it properly.

Date : 17-06-2023 - I've fixed some bugs in the game. The game was not restarting after level 2 if you input wrong number the first time, fixed it, turns out, the error was in the 'if' conditions of the clickDetect() method. Therefore, I changed the second if to 'elseif' and added an extra condition that 'userResponse.length' and 'computerResponse.length' shouldn't be 0, and yup, it got fixed.
There was also an error with the variable i, as when game was re-initialized it it skipped Level 2 heading, therefore, I re-initialized "i" before the initializegame() function in the 'second if' of continueGame() method and also inside initializeGame().
Also, there was one bug that if you started the game and pressed a few buttons then it wont't work, so I moved click detection to game initializer and problem got solved!!!
And one last bug was, after the game was over, it won't work properly so I removed click detection and it works fine now! I hope, there's no bug now😁😎😎
Also, if all of this sounds like "What in the world is this!",  then hey, take a look at index.js and do read the commented out console.logs and other comments.😁😎
