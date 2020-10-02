window.onload = function () {

//Make the DIV element draggagle:

var draggables = document.getElementsByClassName("drag");
var i;
for (i = 0; i < draggables.length; i++) {
    dragElement(draggables[i]);
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    $(this).css("position", "absolute");
    // change cursor while element is being dragged:
    $(this).addClass('dragging');
    $('body').addClass('dragging');
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position while the element is being dragged:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    // change cursor back to normal:
    $(elmnt).removeClass('dragging');
    $('body').removeClass('dragging');
  }
}

// challenge cards

var easyChallenges = document.getElementsByClassName('easyrow');
var medChallenges = document.getElementsByClassName('medrow');
var hardChallenges = document.getElementsByClassName('hardrow');
var expertChallenges = document.getElementsByClassName('expertrow');

// dice

var dice = new Array();
    dice[0] = "assets/dice/one.png";
    dice[1] = "assets/dice/two.png";
    dice[2] = "assets/dice/three.png";
    dice[3] = "assets/dice/four.png";
    dice[4] = "assets/dice/five.png";
    dice[5] = "assets/dice/six.png";

// playing cards for demo

var easyBlackCard = new Array();
    easyBlackCard[0] = "assets/cards/playing-cards/2_of_clubs.png";
    easyBlackCard[1] = "assets/cards/playing-cards/3_of_clubs.png";
    easyBlackCard[2] = "assets/cards/playing-cards/4_of_clubs.png";
    easyBlackCard[3] = "assets/cards/playing-cards/5_of_clubs.png";
    easyBlackCard[4] = "assets/cards/playing-cards/6_of_clubs.png";
    easyBlackCard[5] = "assets/cards/playing-cards/7_of_clubs.png";
    easyBlackCard[6] = "assets/cards/playing-cards/8_of_clubs.png";
    easyBlackCard[7] = "assets/cards/playing-cards/9_of_clubs.png";
    easyBlackCard[8] = "assets/cards/playing-cards/10_of_clubs.png";
var mediumBlackCard = new Array();
    mediumBlackCard[0] = "assets/cards/playing-cards/2_of_spades.png";
    mediumBlackCard[1] = "assets/cards/playing-cards/3_of_spades.png";
    mediumBlackCard[2] = "assets/cards/playing-cards/4_of_spades.png";
    mediumBlackCard[3] = "assets/cards/playing-cards/5_of_spades.png";
    mediumBlackCard[4] = "assets/cards/playing-cards/6_of_spades.png";
    mediumBlackCard[5] = "assets/cards/playing-cards/7_of_spades.png";
    mediumBlackCard[6] = "assets/cards/playing-cards/8_of_spades.png";
    mediumBlackCard[7] = "assets/cards/playing-cards/9_of_spades.png";
    mediumBlackCard[8] = "assets/cards/playing-cards/10_of_spades.png";
var hardBlackCard = new Array();
    hardBlackCard[0] = "assets/cards/playing-cards/jack_of_clubs.png";
    hardBlackCard[1] = "assets/cards/playing-cards/jack_of_spades.png";
    hardBlackCard[2] = "assets/cards/playing-cards/queen_of_clubs.png";
    hardBlackCard[3] = "assets/cards/playing-cards/queen_of_spades.png";
    hardBlackCard[4] = "assets/cards/playing-cards/king_of_clubs.png";
    hardBlackCard[5] = "assets/cards/playing-cards/king_of_spades.png";
    hardBlackCard[6] = "assets/cards/playing-cards/king_of_clubs.png";
    hardBlackCard[7] = "assets/cards/playing-cards/king_of_spades.png";

var expertBlackCard = new Array();
    expertBlackCard[0] = "assets/cards/playing-cards/jack_of_clubs2.png";
    expertBlackCard[1] = "assets/cards/playing-cards/jack_of_spades2.png";
    expertBlackCard[2] = "assets/cards/playing-cards/queen_of_clubs2.png";
    expertBlackCard[3] = "assets/cards/playing-cards/queen_of_spades2.png";
    expertBlackCard[4] = "assets/cards/playing-cards/king_of_clubs2.png";
    expertBlackCard[5] = "assets/cards/playing-cards/king_of_spades2.png";
    expertBlackCard[6] = "assets/cards/playing-cards/king_of_clubs2.png";
    expertBlackCard[7] = "assets/cards/playing-cards/king_of_spades2.png";
var randomBlackCard = new Array();
    randomBlackCard[0] = "assets/cards/playing-cards/2_of_clubs.png";
    randomBlackCard[1] = "assets/cards/playing-cards/2_of_spades.png";
    randomBlackCard[2] = "assets/cards/playing-cards/3_of_clubs.png";
    randomBlackCard[3] = "assets/cards/playing-cards/3_of_spades.png";
    randomBlackCard[4] = "assets/cards/playing-cards/4_of_clubs.png";
    randomBlackCard[5] = "assets/cards/playing-cards/4_of_spades.png";
    randomBlackCard[6] = "assets/cards/playing-cards/5_of_clubs.png";
    randomBlackCard[7] = "assets/cards/playing-cards/5_of_spades.png";
    randomBlackCard[8] = "assets/cards/playing-cards/6_of_clubs.png";
    randomBlackCard[9] = "assets/cards/playing-cards/6_of_spades.png";
    randomBlackCard[10] = "assets/cards/playing-cards/7_of_clubs.png";
    randomBlackCard[11] = "assets/cards/playing-cards/7_of_spades.png";
    randomBlackCard[12] = "assets/cards/playing-cards/8_of_clubs.png";
    randomBlackCard[13] = "assets/cards/playing-cards/8_of_spades.png";
    randomBlackCard[14] = "assets/cards/playing-cards/9_of_clubs.png";
    randomBlackCard[15] = "assets/cards/playing-cards/9_of_spades.png";
    randomBlackCard[16] = "assets/cards/playing-cards/10_of_clubs.png";
    randomBlackCard[17] = "assets/cards/playing-cards/10_of_spades.png";
    randomBlackCard[18] = "assets/cards/playing-cards/10_of_clubs.png";
    randomBlackCard[19] = "assets/cards/playing-cards/10_of_spades.png";
    randomBlackCard[20] = "assets/cards/playing-cards/jack_of_clubs2.png";
    randomBlackCard[21] = "assets/cards/playing-cards/jack_of_spades2.png";
    randomBlackCard[22] = "assets/cards/playing-cards/queen_of_clubs2.png";
    randomBlackCard[23] = "assets/cards/playing-cards/queen_of_spades2.png";
    randomBlackCard[24] = "assets/cards/playing-cards/king_of_clubs2.png";
    randomBlackCard[25] = "assets/cards/playing-cards/king_of_spades2.png";
    randomBlackCard[26] = "assets/cards/playing-cards/ace_of_clubs.png";
    randomBlackCard[27] = "assets/cards/playing-cards/ace_of_spades.png";
var randomRedCard = new Array();
    randomRedCard[0] = "assets/cards/playing-cards/2_of_hearts.png";
    randomRedCard[1] = "assets/cards/playing-cards/2_of_diamonds.png";
    randomRedCard[2] = "assets/cards/playing-cards/3_of_hearts.png";
    randomRedCard[3] = "assets/cards/playing-cards/3_of_diamonds.png";
    randomRedCard[4] = "assets/cards/playing-cards/4_of_hearts.png";
    randomRedCard[5] = "assets/cards/playing-cards/4_of_diamonds.png";
    randomRedCard[6] = "assets/cards/playing-cards/5_of_hearts.png";
    randomRedCard[7] = "assets/cards/playing-cards/5_of_diamonds.png";
    randomRedCard[8] = "assets/cards/playing-cards/6_of_hearts.png";
    randomRedCard[9] = "assets/cards/playing-cards/6_of_diamonds.png";
    randomRedCard[10] = "assets/cards/playing-cards/7_of_hearts.png";
    randomRedCard[11] = "assets/cards/playing-cards/7_of_diamonds.png";
    randomRedCard[12] = "assets/cards/playing-cards/8_of_hearts.png";
    randomRedCard[13] = "assets/cards/playing-cards/8_of_diamonds.png";
    randomRedCard[14] = "assets/cards/playing-cards/9_of_hearts.png";
    randomRedCard[15] = "assets/cards/playing-cards/9_of_diamonds.png";
    randomRedCard[16] = "assets/cards/playing-cards/10_of_hearts.png";
    randomRedCard[17] = "assets/cards/playing-cards/10_of_diamonds.png";
    randomRedCard[18] = "assets/cards/playing-cards/10_of_hearts.png";
    randomRedCard[19] = "assets/cards/playing-cards/10_of_diamonds.png";
    randomRedCard[20] = "assets/cards/playing-cards/jack_of_hearts2.png";
    randomRedCard[21] = "assets/cards/playing-cards/jack_of_diamonds2.png";
    randomRedCard[22] = "assets/cards/playing-cards/queen_of_hearts2.png";
    randomRedCard[23] = "assets/cards/playing-cards/queen_of_diamonds2.png";
    randomRedCard[24] = "assets/cards/playing-cards/king_of_hearts2.png";
    randomRedCard[25] = "assets/cards/playing-cards/king_of_diamonds2.png";
    randomRedCard[26] = "assets/cards/playing-cards/ace_of_hearts.png";
    randomRedCard[27] = "assets/cards/playing-cards/ace_of_diamonds.png";


// actual cards (no images yet)

var randomChallenge = new Array();
    randomChallenge[0] = "challenge-cards/";
    randomChallenge[1] = "challenge-cards/";
    randomChallenge[2] = "challenge-cards/";
    randomChallenge[3] = "challenge-cards/";
    randomChallenge[4] = "challenge-cards/";
    randomChallenge[5] = "challenge-cards/";
    randomChallenge[6] = "challenge-cards/";
    randomChallenge[7] = "challenge-cards/";
    randomChallenge[8] = "challenge-cards/";
    randomChallenge[9] = "challenge-cards/";
    randomChallenge[10] = "challenge-cards/";
    randomChallenge[11] = "challenge-cards/";
    randomChallenge[12] = "challenge-cards/";
    randomChallenge[13] = "challenge-cards/";
    randomChallenge[14] = "challenge-cards/";
    randomChallenge[15] = "challenge-cards/";
    randomChallenge[16] = "challenge-cards/";
    randomChallenge[17] = "challenge-cards/";
    randomChallenge[18] = "challenge-cards/";
    randomChallenge[19] = "challenge-cards/";
    randomChallenge[20] = "challenge-cards/";
    randomChallenge[21] = "challenge-cards/";
    randomChallenge[22] = "challenge-cards/";
    randomChallenge[23] = "challenge-cards/";
    randomChallenge[24] = "challenge-cards/";
    randomChallenge[25] = "challenge-cards/";
    randomChallenge[26] = "challenge-cards/";
    randomChallenge[27] = "challenge-cards/";
    randomChallenge[28] = "challenge-cards/";
    randomChallenge[29] = "challenge-cards/";

var randomRhythm = new Array();
    randomRhythm[0] = "rhythm-cards/";
    randomRhythm[1] = "rhythm-cards/";
    randomRhythm[2] = "rhythm-cards/";
    randomRhythm[3] = "rhythm-cards/";
    randomRhythm[4] = "rhythm-cards/";
    randomRhythm[5] = "rhythm-cards/";
    randomRhythm[6] = "rhythm-cards/";
    randomRhythm[7] = "rhythm-cards/";
    randomRhythm[8] = "rhythm-cards/";
    randomRhythm[9] = "rhythm-cards/";
    randomRhythm[10] = "rhythm-cards/";
    randomRhythm[11] = "rhythm-cards/";
    randomRhythm[12] = "rhythm-cards/";
    randomRhythm[13] = "rhythm-cards/";
    randomRhythm[14] = "rhythm-cards/";
    randomRhythm[15] = "rhythm-cards/";
    randomRhythm[16] = "rhythm-cards/";
    randomRhythm[17] = "rhythm-cards/";
    randomRhythm[18] = "rhythm-cards/";
    randomRhythm[19] = "rhythm-cards/";
    randomRhythm[20] = "rhythm-cards/";
    randomRhythm[21] = "rhythm-cards/";
    randomRhythm[22] = "rhythm-cards/";
    randomRhythm[23] = "rhythm-cards/";
    randomRhythm[24] = "rhythm-cards/";
    randomRhythm[25] = "rhythm-cards/";
    randomRhythm[26] = "rhythm-cards/";
    randomRhythm[27] = "rhythm-cards/";
    randomRhythm[28] = "rhythm-cards/";
    randomRhythm[29] = "rhythm-cards/";


// function to randomly generate + display cards:

document.getElementById("difficulty").defaultValue = '1';
$('#difficulty').change(function() {
    if ($(this).val() == '0') {
        $('.easy').css('display', 'inline-block');
        $('.medium').css('display', 'none');
        $('.hard').css('display', 'none');
        $('.expert').css('display', 'none');
    }
    else if ($(this).val() == '1') {
        $('.easy').css('display', 'none');
        $('.medium').css('display', 'inline-block');
        $('.hard').css('display', 'none');
        $('.expert').css('display', 'none');
    }
    else if ($(this).val() == '2') {
        $('.easy').css('display', 'none');
        $('.medium').css('display', 'none');
        $('.hard').css('display', 'inline-block');
        $('.expert').css('display', 'none');
    }
    else if ($(this).val() == '3') {
        $('.easy').css('display', 'none');
        $('.medium').css('display', 'none');
        $('.hard').css('display', 'none');
        $('.expert').css('display', 'inline-block');
    }
});
$('input[type=range]').on('input', function() {
    $(this).trigger('change');
});
$('#chcardimg').click(function() {
    if ($('#difficulty').val() == '0') {
        $('.pull').css('display', 'none');
        var number = Math.floor(Math.random()*easyChallenges.length);
        $(easyChallenges[number]).css('display', 'table').addClass('pull');
        var carddiv = $(easyChallenges[number]).parents('.carddiv');
        $(carddiv).find('h3').css('display', 'none');
    }
    else if ($('#difficulty').val() == '1') {
        $('.pull').css('display', 'none');
        var number = Math.floor(Math.random()*medChallenges.length);
        $(medChallenges[number]).css('display', 'table').addClass('pull');
        var carddiv = $(medChallenges[number]).parents('.carddiv');
        $(carddiv).find('h3').css('display', 'none');
    }
    else if ($('#difficulty').val() == '2') {
        $('.pull').css('display', 'none');
        var number = Math.floor(Math.random()*hardChallenges.length);
        $(hardChallenges[number]).css('display', 'table').addClass('pull');
        var carddiv = $(hardChallenges[number]).parents('.carddiv');
        $(carddiv).find('h3').css('display', 'none');
    }
    else if ($('#difficulty').val() == '3') {
        $('.pull').css('display', 'none');
        var number = Math.floor(Math.random()*expertChallenges.length);
        $(expertChallenges[number]).css('display', 'table').addClass('pull');
        var carddiv = $(expertChallenges[number]).parents('.carddiv');
        $(carddiv).find('h3').css('display', 'none');
    }
});
$('#rollme').click(function() {
    var number = Math.floor(Math.random()*dice.length);
    $(this).prepend('<img src="'+dice[number]+'" class="pulledrh pull">');
    $('#next_turn').addClass('fadein');
});

// flip cards back down for the next player's turn

$('#next_turn').click(function() {
    $('.pull').css('display', 'none');
    $('.carddiv h3').css('display', 'block');
    $(this).removeClass('fadein');
});

}
