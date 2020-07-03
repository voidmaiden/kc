var easyCards = [
    'https://i.imgur.com/Eg7JzeC.png',
    'https://i.imgur.com/9Faiq0r.png',
    'https://i.imgur.com/s43rXo6.png',
    'https://i.imgur.com/DfCdcJj.png',
    'https://i.imgur.com/V85TQ8N.png',
    'https://i.imgur.com/0ENRPXH.png',
      'https://i.imgur.com/21tROtZ.png',
       'https://i.imgur.com/J7yisB0.png',
       'https://i.imgur.com/ty4hU3g.png',
       'https://i.imgur.com/Enppvak.png',
       'https://i.imgur.com/iktIaCh.png',
       'https://i.imgur.com/rJ5kg0W.png',
       'https://i.imgur.com/pLyTemS.png',
       'https://i.imgur.com/NZteVJB.png',
       'https://i.imgur.com/OuRvfeM.png',
    'https://i.imgur.com/S9XUJn5.png',
    'https://i.imgur.com/FgfSEbJ.png',
    'https://i.imgur.com/PozIFCs.png'
    ]
var mediumCards = [
    'https://i.imgur.com/GnGCCgt.png',
    'https://i.imgur.com/qWlIr7p.png',
    'https://i.imgur.com/wFd2Fkq.png',
    'https://i.imgur.com/IoVQt3U.png',
    'https://i.imgur.com/vhckXr0.png',
    'https://i.imgur.com/0PF4Fav.png'
    ]
var hardCards = [
    'https://i.imgur.com/Cf5el2Z.png',
    'https://i.imgur.com/sL9BHVq.png',
    'https://i.imgur.com/hvGe8Wi.png',
    'https://i.imgur.com/cFszvte.png',
    'https://i.imgur.com/DKsCWsm.png',
    'https://i.imgur.com/JuIgrRr.png',
    'https://i.imgur.com/UncUMFI.png',
    'https://i.imgur.com/JHxeEKr.png'
    ]
var expertCards = [
    'https://i.imgur.com/YbYB5VT.png',
    'https://i.imgur.com/pryI9F5.png',
    'https://i.imgur.com/mvoAMQo.png',
    'https://i.imgur.com/APsh1GW.png',
    'https://i.imgur.com/gvwYBTZ.png',
    'https://i.imgur.com/Bfhn3cP.png',
    'https://i.imgur.com/zWSuQr6.png',
    'https://i.imgur.com/7mSiUIk.png',
    'https://i.imgur.com/W5WSvNq.png',
    'https://i.imgur.com/1gw7mdB.png',
    'https://i.imgur.com/dQh4v4w.png',
    'https://i.imgur.com/sF9QSmg.png',
    'https://i.imgur.com/qbiRUJS.png',
    'https://i.imgur.com/cULM6FG.png',
    'https://i.imgur.com/YoeuSNh.png',
    'https://i.imgur.com/Tr0K2e6.png',
    'https://i.imgur.com/vKd3HJL.png',
    'https://i.imgur.com/vciN8TG.png',
    'https://i.imgur.com/StRi59Z.png',
    'https://i.imgur.com/Loew64P.png'
    ]

window.onload = function () {

    function sliderChange() {
        var slider = document.getElementById('difficulty'),
            easy = document.getElementsByClassName('easy'),
            medium = document.getElementsByClassName('medium'),
            hard = document.getElementsByClassName('hard'),
            expert = document.getElementsByClassName('expert');
        slider.onchange = function() {
            if (slider.value == '0') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'inline-block';
                    medium[i].style.display = 'none';
                    hard[i].style.display = 'none';
                    expert[i].style.display = 'none';   
                }
            }
            else if (slider.value == '1') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'inline-block';
                    hard[i].style.display = 'none';
                    expert[i].style.display = 'none';
                }
            }
            else if (slider.value == '2') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'none';
                    hard[i].style.display = 'inline-block';
                    expert[i].style.display = 'none';
                }
            }
            else if (slider.value == '3') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'none';
                    hard[i].style.display = 'none';
                    expert[i].style.display = 'inline-block';
                }
            }
        }
        slider.defaultValue = '1';
    }
    sliderChange();

    function pullCard() {
        var cardContainer = document.getElementById('card_pull'),
            message = document.getElementById('pull_card'),
            slider = document.getElementById('difficulty'),
            cardImage = document.createElement('img');
        cardContainer.onclick = function () {
            message.style.display = 'none';
            if (slider.value == '0') {
                cardContainer.style.background = '#F36024';
                var number = Math.floor(Math.random()*easyCards.length);
                cardImage.src = easyCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '1') {
                cardContainer.style.background = '#42BFAE';
                var number = Math.floor(Math.random()*mediumCards.length);
                cardImage.src = mediumCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '2') {
                cardContainer.style.background = '#2861AC';
                var number = Math.floor(Math.random()*hardCards.length);
                cardImage.src = hardCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '3') {
                cardContainer.style.background = '#ABC54A';
                var number = Math.floor(Math.random()*expertCards.length);
                cardImage.src = expertCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
        }
    }
    pullCard();

}