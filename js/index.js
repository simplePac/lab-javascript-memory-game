const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);
let blockedBoard = false


window.addEventListener('load', (event) => {
  //memoryGame.shuffleCards()
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;

  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      if(blockedBoard){
        return
      }
      let elementPairsClicked = document.querySelector('#pairs-clicked')
      let elementPairsGuessed = document.querySelector('#pairs-guessed')

      if(memoryGame.pickedCards.length < 2) {
        card.className = 'card turned'
        memoryGame.pickedCards.push(card)
      }

      if(memoryGame.pickedCards.length === 2){
        let card1Name = memoryGame.pickedCards[0].getAttribute('data-card-name');
        let card2Name = memoryGame.pickedCards[1].getAttribute('data-card-name');
        blockedBoard = true

        if(memoryGame.checkIfPair(card1Name, card2Name)){
          memoryGame.pickedCards[0].classList.add('blocked');
          memoryGame.pickedCards[1].classList.add('blocked');
          memoryGame.pickedCards = []
          blockedBoard = false
        } else {
          setTimeout(()=> {
            memoryGame.pickedCards[0].classList.remove('turned');
            memoryGame.pickedCards[1].classList.remove('turned');
            memoryGame.pickedCards = []
            blockedBoard = false
          }, 500)
        }
        elementPairsClicked.innerText = memoryGame.pairsClicked
        elementPairsGuessed.innerText = memoryGame.pairsGuessed
      } 
      
      if(memoryGame.checkIfFinished()){
        setTimeout(() => {
          alert('HAS GANADO!!')
        }, 500)
        
      }
      console.log(`Card clicked: ${card}`);
    });
  });
});






