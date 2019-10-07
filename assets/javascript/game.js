//GLOBAL VARIABLES

var crystal = {
    blue: {
        name: "Blue",
        value: 0
    },
    white: {
        name: "White",
        value: 0
    },
    hang: {
        name: "Hanger",
        value: 0
    },
    opal: {
        name: "Opal",
        value: 0
    }
};

//SCORES

var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;

//========================================================================
//Functions

var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startGame = function () {

    //reset 
    currentScore = 0;
    winCount = 0;
    lossCount = 0;

    targetScore = getRandom(19, 120);

    crystal.blue.value = getRandom(1, 12);
    crystal.hang.value = getRandom(1, 12);
    crystal.opal.value = getRandom(1, 12);
    crystal.white.value = getRandom(1, 12);

    $("#targScore").html(targetScore)
    $("#curScore").html(currentScore)

}

//change crystal values
var chgVal = function (crystal) {
    currentScore = currentScore + crystal.value;
    $("#curScore").html(currentScore);

    checkWin();
};

//check if user won
var checkWin = function () {

    //if loss
    if (currentScore > targetScore) {
        alert("Sorry, try again!");

        lossCount++;
        $("#lossCount").html(lossCount);
        startGame();

    }

    else if (currentScore == targetScore) {
        alert("YOU WIN!!!");

        winCount++;
        $("#winCount").html(winCount);

        startGame();
    }
}

//========================================================================
//main Processes
startGame();

$("#blue").click(function () {
    chgVal(crystal.blue);
});

$("#opal").click(function () {
    chgVal(crystal.opal);
});

$("#white").click(function () {
    chgVal(crystal.white);
});

$("#hang").click(function () {
    chgVal(crystal.hang);
});