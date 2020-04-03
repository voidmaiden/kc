// Make the DIV element draggable:

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

// playing cards for demo

var easyBlackCard = new Array();
    easyBlackCard[0] = "assets/cards/2_of_clubs.png";
    easyBlackCard[1] = "assets/cards/3_of_clubs.png";
    easyBlackCard[2] = "assets/cards/4_of_clubs.png";
    easyBlackCard[3] = "assets/cards/5_of_clubs.png";
    easyBlackCard[4] = "assets/cards/6_of_clubs.png";
    easyBlackCard[5] = "assets/cards/7_of_clubs.png";
    easyBlackCard[6] = "assets/cards/8_of_clubs.png";
    easyBlackCard[7] = "assets/cards/9_of_clubs.png";
    easyBlackCard[8] = "assets/cards/10_of_clubs.png";
var mediumBlackCard = new Array();
    mediumBlackCard[0] = "assets/cards/2_of_spades.png";
    mediumBlackCard[1] = "assets/cards/3_of_spades.png";
    mediumBlackCard[2] = "assets/cards/4_of_spades.png";
    mediumBlackCard[3] = "assets/cards/5_of_spades.png";
    mediumBlackCard[4] = "assets/cards/6_of_spades.png";
    mediumBlackCard[5] = "assets/cards/7_of_spades.png";
    mediumBlackCard[6] = "assets/cards/8_of_spades.png";
    mediumBlackCard[7] = "assets/cards/9_of_spades.png";
    mediumBlackCard[8] = "assets/cards/10_of_spades.png";
var hardBlackCard = new Array();
    hardBlackCard[0] = "assets/cards/jack_of_clubs.png";
    hardBlackCard[1] = "assets/cards/jack_of_spades.png";
    hardBlackCard[2] = "assets/cards/queen_of_clubs.png";
    hardBlackCard[3] = "assets/cards/queen_of_spades.png";
    hardBlackCard[4] = "assets/cards/king_of_clubs.png";
    hardBlackCard[5] = "assets/cards/king_of_spades.png";
    hardBlackCard[6] = "assets/cards/king_of_clubs.png";
    hardBlackCard[7] = "assets/cards/king_of_spades.png";
var expertBlackCard = new Array();
    expertBlackCard[0] = "assets/cards/jack_of_clubs2.png";
    expertBlackCard[1] = "assets/cards/jack_of_spades2.png";
    expertBlackCard[2] = "assets/cards/queen_of_clubs2.png";
    expertBlackCard[3] = "assets/cards/queen_of_spades2.png";
    expertBlackCard[4] = "assets/cards/king_of_clubs2.png";
    expertBlackCard[5] = "assets/cards/king_of_spades2.png";
    expertBlackCard[6] = "assets/cards/king_of_clubs2.png";
    expertBlackCard[7] = "assets/cards/king_of_spades2.png";
var randomBlackCard = new Array();
    randomBlackCard[0] = "assets/cards/2_of_clubs.png";
    randomBlackCard[1] = "assets/cards/2_of_spades.png";
    randomBlackCard[2] = "assets/cards/3_of_clubs.png";
    randomBlackCard[3] = "assets/cards/3_of_spades.png";
    randomBlackCard[4] = "assets/cards/4_of_clubs.png";
    randomBlackCard[5] = "assets/cards/4_of_spades.png";
    randomBlackCard[6] = "assets/cards/5_of_clubs.png";
    randomBlackCard[7] = "assets/cards/5_of_spades.png";
    randomBlackCard[8] = "assets/cards/6_of_clubs.png";
    randomBlackCard[9] = "assets/cards/6_of_spades.png";
    randomBlackCard[10] = "assets/cards/7_of_clubs.png";
    randomBlackCard[11] = "assets/cards/7_of_spades.png";
    randomBlackCard[12] = "assets/cards/8_of_clubs.png";
    randomBlackCard[13] = "assets/cards/8_of_spades.png";
    randomBlackCard[14] = "assets/cards/9_of_clubs.png";
    randomBlackCard[15] = "assets/cards/9_of_spades.png";
    randomBlackCard[16] = "assets/cards/10_of_clubs.png";
    randomBlackCard[17] = "assets/cards/10_of_spades.png";
    randomBlackCard[18] = "assets/cards/10_of_clubs.png";
    randomBlackCard[19] = "assets/cards/10_of_spades.png";
    randomBlackCard[20] = "assets/cards/jack_of_clubs2.png";
    randomBlackCard[21] = "assets/cards/jack_of_spades2.png";
    randomBlackCard[22] = "assets/cards/queen_of_clubs2.png";
    randomBlackCard[23] = "assets/cards/queen_of_spades2.png";
    randomBlackCard[24] = "assets/cards/king_of_clubs2.png";
    randomBlackCard[25] = "assets/cards/king_of_spades2.png";
    randomBlackCard[26] = "assets/cards/ace_of_clubs.png";
    randomBlackCard[27] = "assets/cards/ace_of_spades.png";
var randomRedCard = new Array();
    randomRedCard[0] = "assets/cards/2_of_hearts.png";
    randomRedCard[1] = "assets/cards/2_of_diamonds.png";
    randomRedCard[2] = "assets/cards/3_of_hearts.png";
    randomRedCard[3] = "assets/cards/3_of_diamonds.png";
    randomRedCard[4] = "assets/cards/4_of_hearts.png";
    randomRedCard[5] = "assets/cards/4_of_diamonds.png";
    randomRedCard[6] = "assets/cards/5_of_hearts.png";
    randomRedCard[7] = "assets/cards/5_of_diamonds.png";
    randomRedCard[8] = "assets/cards/6_of_hearts.png";
    randomRedCard[9] = "assets/cards/6_of_diamonds.png";
    randomRedCard[10] = "assets/cards/7_of_hearts.png";
    randomRedCard[11] = "assets/cards/7_of_diamonds.png";
    randomRedCard[12] = "assets/cards/8_of_hearts.png";
    randomRedCard[13] = "assets/cards/8_of_diamonds.png";
    randomRedCard[14] = "assets/cards/9_of_hearts.png";
    randomRedCard[15] = "assets/cards/9_of_diamonds.png";
    randomRedCard[16] = "assets/cards/10_of_hearts.png";
    randomRedCard[17] = "assets/cards/10_of_diamonds.png";
    randomRedCard[18] = "assets/cards/10_of_hearts.png";
    randomRedCard[19] = "assets/cards/10_of_diamonds.png";
    randomRedCard[20] = "assets/cards/jack_of_hearts2.png";
    randomRedCard[21] = "assets/cards/jack_of_diamonds2.png";
    randomRedCard[22] = "assets/cards/queen_of_hearts2.png";
    randomRedCard[23] = "assets/cards/queen_of_diamonds2.png";
    randomRedCard[24] = "assets/cards/king_of_hearts2.png";
    randomRedCard[25] = "assets/cards/king_of_diamonds2.png";
    randomRedCard[26] = "assets/cards/ace_of_hearts.png";
    randomRedCard[27] = "assets/cards/ace_of_diamonds.png";


// actual cards (no images yet)

var randomChallenge = new Array();
    randomChallenge[0] = "assets/cards/";
    randomChallenge[1] = "assets/cards/";
    randomChallenge[2] = "assets/cards/";
    randomChallenge[3] = "assets/cards/";
    randomChallenge[4] = "assets/cards/";
    randomChallenge[5] = "assets/cards/";
    randomChallenge[6] = "assets/cards/";
    randomChallenge[7] = "assets/cards/";
    randomChallenge[8] = "assets/cards/";
    randomChallenge[9] = "assets/cards/";
    randomChallenge[10] = "assets/cards/";
    randomChallenge[11] = "assets/cards/";
    randomChallenge[12] = "assets/cards/";
    randomChallenge[13] = "assets/cards/";
    randomChallenge[14] = "assets/cards/";
    randomChallenge[15] = "assets/cards/";
    randomChallenge[16] = "assets/cards/";
    randomChallenge[17] = "assets/cards/";
    randomChallenge[18] = "assets/cards/";
    randomChallenge[19] = "assets/cards/";
    randomChallenge[20] = "assets/cards/";
    randomChallenge[21] = "assets/cards/";
    randomChallenge[22] = "assets/cards/";
    randomChallenge[23] = "assets/cards/";
    randomChallenge[24] = "assets/cards/";
    randomChallenge[25] = "assets/cards/";
    randomChallenge[26] = "assets/cards/";
    randomChallenge[27] = "assets/cards/";
    randomChallenge[28] = "assets/cards/";
    randomChallenge[29] = "assets/cards/";
var randomRhythm = new Array();
    randomRhythm[0] = "assets/cards/";
    randomRhythm[1] = "assets/cards/";
    randomRhythm[2] = "assets/cards/";
    randomRhythm[3] = "assets/cards/";
    randomRhythm[4] = "assets/cards/";
    randomRhythm[5] = "assets/cards/";
    randomRhythm[6] = "assets/cards/";
    randomRhythm[7] = "assets/cards/";
    randomRhythm[8] = "assets/cards/";
    randomRhythm[9] = "assets/cards/";
    randomRhythm[10] = "assets/cards/";
    randomRhythm[11] = "assets/cards/";
    randomRhythm[12] = "assets/cards/";
    randomRhythm[13] = "assets/cards/";
    randomRhythm[14] = "assets/cards/";
    randomRhythm[15] = "assets/cards/";
    randomRhythm[16] = "assets/cards/";
    randomRhythm[17] = "assets/cards/";
    randomRhythm[18] = "assets/cards/";
    randomRhythm[19] = "assets/cards/";
    randomRhythm[20] = "assets/cards/";
    randomRhythm[21] = "assets/cards/";
    randomRhythm[22] = "assets/cards/";
    randomRhythm[23] = "assets/cards/";
    randomRhythm[24] = "assets/cards/";
    randomRhythm[25] = "assets/cards/";
    randomRhythm[26] = "assets/cards/";
    randomRhythm[27] = "assets/cards/";
    randomRhythm[28] = "assets/cards/";
    randomRhythm[29] = "assets/cards/";


// function to randomly generate + display cards:

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
    $(this).parent().addClass('whitebg');
    if ($('#difficulty').val() == '0') {
        var number = Math.floor(Math.random()*easyBlackCard.length);
        $(this).prepend('<img src="'+easyBlackCard[number]+'" class="pulledch pull">');
    }
    else if ($('#difficulty').val() == '1') {
        var number = Math.floor(Math.random()*mediumBlackCard.length);
        $(this).prepend('<img src="'+mediumBlackCard[number]+'" class="pulledch pull">');
    }
    else if ($('#difficulty').val() == '2') {
        var number = Math.floor(Math.random()*hardBlackCard.length);
        $(this).prepend('<img src="'+hardBlackCard[number]+'" class="pulledch pull">');
    }
    else if ($('#difficulty').val() == '3') {
        var number = Math.floor(Math.random()*expertBlackCard.length);
        $(this).prepend('<img src="'+expertBlackCard[number]+'" class="pulledch pull">');
    }
});
$('#rhcardimg').click(function() {
    $(this).parent().addClass('whitebg');
    var number = Math.floor(Math.random()*randomRedCard.length);
    $(this).prepend('<img src="'+randomRedCard[number]+'" class="pulledrh pull">');
    $('#next_turn').addClass('fadein');
});

// flip cards back down for the next player's turn

$('#next_turn').click(function() {
    $('.pull').css('display', 'none');
    $(this).removeClass('fadein');
    $('.carddiv').removeClass('whitebg');
});
