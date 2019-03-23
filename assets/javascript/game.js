// If you can't code, do da pseudocode gabz
// This game has 4 crystals
// A random number between 19-120 will be generated 
// Every crystal will hold a random value between 1-12
// The objective of the game is to add the sums of the crystals to equal the random number that is generated
// When clicking a crystal, the random numbers within the crystals will continue to add
// If the total is greater than the random number, we decrement a lose counter
// If the total is equal, then we incremenet a win counter

var randomResult;
var lose ;
var win;

randomResult = Math.floor(Math.random() * 101) + 19;

$('#result').html('Random Result: ' + randomResult);

for(var i = 0; i < 4; i++){

    var random= Math.floor(Math.random()* 12) + 1;
    // console.log(random);

    var crystal= $('<div>');
        crystal.attr({  //setting values
            'class':'crystal', 
            'dataRandom': random
        });

    $('.crystals').append(crystal);

}

$('.crystal').on('click', function () {

    // getting values
    var num = parseInt($(this).attr('dataRandom'));

    var result = num + 5;
    console.log(num, result);

});