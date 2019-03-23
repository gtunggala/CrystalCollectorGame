// If you can't code, do da pseudocode gabz
// This game has 4 crystals
// A random number between 19-120 will be generated 
// Every crystal will hold a random value between 1-12
// The objective of the game is to add the sums of the crystals to equal the random number that is generated
// When clicking a crystal, the random numbers within the crystals will continue to add
// If the total is greater than the random number, we decrement a lose counter
// If the total is equal, then we incremenet a win counter

var randomResult;
var lose = 0 ;
var win = 0;
var previousNum = 0;

var resetAndStart = function() {

    $(".crystals").empty();

    randomResult = Math.floor(Math.random() * 101) + 19;

    $('#result').html('Random Result: ' + randomResult);

    for(var i = 0; i < 4; i++){

        var random= Math.floor(Math.random()* 12) + 1;
        // console.log(random);
        
        var crystal= $("<div>");
            crystal.attr({  //setting values
                "class":'crystal', 
                "dataRandom": random
            });

            crystal.html(random);

        $(".crystals").append(crystal);

    }

    $("#previousNum").html("Total Score: " + previousNum);
}

resetAndStart();

// var reset = function() { }

$(".crystal").on('click', function () {

    // getting values
    var num = parseInt($(this).attr('dataRandom'));

    previousNum += num;

    // console.log(previousNum);

    $("#previousNum").html("Total score: " + previousNum)

    console.log(previousNum);

    if(previousNum > randomResult){
        lose++;
        $("#lose").html("You lose: " + lose);
        previousNum= 0;
        resetAndStart();
    }
    else if(previousNum === randomResult){
        win++;
        $("#win").html("You win " + win);
        previousNum= 0;
        resetAndStart();
    }
    
});