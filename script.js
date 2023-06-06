




function highlightCard(card) {
    // Eliminăm clasa 'highlight' de pe toate cardurile pentru a asigura că doar unul este evidențiat la un moment dat
    const cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('highlight');
    }

    // Adăugăm clasa 'highlight' pe cardul selectat
    card.classList.add('highlight');
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

var subscribe_button = document.querySelector(".subscribe_button");

subscribe_button.addEventListener('click', function () {
    var subscribing = document.querySelector(".subscribing");
    var thanks = document.querySelector(".thanks");
    var login = document.querySelector(".login");

    subscribing.classList.add("subscribing_active");
    subscribe_button.classList.add("subscribe_button_active");
    setTimeout(function () {
        login.classList.add("login_active");
    }, 1200);
    setTimeout(function () {
        thanks.classList.add("thanks_active");
    }, 1400);

    setTimeout(function () {
        thanks.classList.remove("thanks_active");
        login.classList.remove("login_active");
        subscribing.classList.remove("subscribing_active");
        subscribe_button.classList.remove("subscribe_button_active");
    }, 4000);
});