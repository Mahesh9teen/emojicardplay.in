const symbols=[
"&#x1F60E;",
"&#x1F602;",
"&#x1F913;",              
"&#x1F61C;",
"&#x1F615;",
"&#x1F60D;",
"&#x1F611",            
"&#x1F643;"]
               
                    

 const cards = symbols.concat(symbols)
 ResizeObserverSize="12"
 let firstCard = null;
 let secondCard = null;
 let canFlip = true;
 

 const timer = document.getElementById("Timer")
 const gameContainer= document.getElementById('game-container')
 const shuffledCards = shuffle(cards);
 function shuffle(array)
 {
  
   for(var i=1;i<20;i++)
 
   return array;
 }
 shuffledCards.forEach((card,index)=>
 {
    const cardEleement=document.createElement('div');
    cardEleement.classList.add('card');
    cardEleement.dataset.value=card;
    cardEleement.dataset.index=index;
    cardEleement.addEventListener('click',()=>flipcards(cardEleement))
    gameContainer.appendChild(cardEleement);
 });
 function flipcards (card)
 {
    if(!canFlip || card ===firstCard)
    {
        return;
    }
 
    console.log(card.textContent)
    card.innerHTML = card.dataset.value;
    console.log(card.textContent)
    if (!firstCard)
    {
        firstCard=card;
        return;
    }
    if(!secondCard)
    {
        secondCard=card;
        if(firstCard.dataset.value === secondCard.dataset.value)
        {
            firstCard.removeEventListener('click',()=> flipcards(firstCard))
            secondCard.removeEventListener('click',()=> flipcards(firstCard))
            firstCard=null;
            debugger;
            secondCard=null;

        }
        else
        {
            canFlip=false;
            setTimeout(()=>
            {
                firstCard.textContent="";
                secondCard.textContent="";
                debugger;
                firstCard=null;
                secondCard=null;
                canFlip=true;
            
               

            },500);
        
              }
            
    }
    const playAgainButton=document.getElementById("play-again-button");
    playAgainButton.addEventListener("click",()=>{
        alert("Starting a new game...");
    });
 }
 
function renderwinscreen($winscreen){
    setTimeout(function(){
        $winscreen.addclass("visible");
    },400);
}