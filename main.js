const cards = document.querySelectorAll(".memory-cards");
let hasFlippedCard = false
let FirstCard, SecondCard;
let lockBoard = false;



/* function DarleFuego () {
    flipCard();
    shuffle();
}
 */
function flipCard() {
    if (lockBoard) return;
    if (this === FirstCard) return;
    /*console.log("Me hiciste un click")
    console.log(this)*/
    this.classList.toggle("flip");
    if (!hasFlippedCard) {
        // primer click
        hasFlippedCard = true;
        FirstCard = this;
        //   console.log({hasFlippedCard, FirstCard})
        // Segundo Click

        return;
    } 
        hasFlippedCard = false;
        SecondCard = this;
        //console.log({FirstCard, SecondCard});
        //Cuando coinciden?
        /* prueba    console.log(FirstCard.dataset.framework);
            console.log(SecondCard.dataset.framework);*/
        CheckForMatch();
}
function CheckForMatch() {
    let IsMatch = FirstCard.dataset.framework === SecondCard.dataset.framework
    IsMatch ? DisableCards() : UnFlipCards()
    //Reemplaza al uso del if con el else, todo en una sola linea
    /*if () {
        //Se emparejan!
        DisableCards();
    } else {
        // no hay coincidencia
        UnFlipCards();
    }*/
}

function DisableCards() {
    FirstCard.removeEventListener("click", flipCard);
    SecondCard.removeEventListener("click", flipCard);
    ResetBoard();
}
function UnFlipCards() {
    lockBoard = true;

    setTimeout(() => {
        FirstCard.classList.remove("flip");
        SecondCard.classList.remove("flip");
        lockBoard = false;
    }, 1500);
}
function ResetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [FirstCard, SecondCard] = [null. null]
}
(function shuffle (){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener("click", flipCard));
