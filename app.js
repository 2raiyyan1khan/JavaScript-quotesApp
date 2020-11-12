(function (){
let btn = document.querySelector('.btn');
let cardText = document.querySelector('.quote');
let quoteAuth = document.querySelector('.blockquote-footer ');

btn.addEventListener('click', showQuotes);
function showQuotes(){
    
    for (let i = 0; i < quotes.length; i++) {
        let randIndex = Math.floor(Math.random()*quotes.length);
        let author = quotes[randIndex].author;
        let quote= quotes[randIndex].quote;
        cardText.textContent= quote;
        quoteAuth.textContent = author;
    }
}
})();
