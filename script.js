const cardText = document.getElementById('card');
const startButton = document.getElementById('start');
const solutionButton = document.getElementById('solutionButton');
const solutionsText = document.getElementById('solutions');
const onePlayerButton = document.getElementById('onePlayerButton');
const twoPlayerButton = document.getElementById('twoPlayerButton');
let card = "";
let mode = "1";
let player1Score = "0";
let player2Score = "0";

//old genNum func:
/*function genNumber() 
{
    return Math.floor(Math.random() * 9) + 1;
}*/

async function twentyFour()
{
    card =  await getCard();
    const numbers = [parseInt(card.charAt(0)), parseInt(card.charAt(1)), parseInt(card.charAt(2)), parseInt(card.charAt(3))];
        cardText.innerHTML = `<h3>Card:<br>${numbers.join(', ')}</h3>`;
}

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    twentyFour();
});

solutionButton.addEventListener('click', async () => {
    const sols = await getSolutions();
    console.log(sols);
    solutionsText.innerHTML = `<h4>please note that the order of operations do not apply to these\nSolutions:<br>${sols}</h4>`;
});

onePlayerButton.addEventListener('click', () => {
    document.getElementById('one').style.display = 'block';
    document.getElementById('two').style.display = 'none';
    mode = "1";
});

twoPlayerButton.addEventListener('click', () => {
    document.getElementById('one').style.display = 'none';
    document.getElementById('two').style.display = 'block';
    mode = "2";
});


window.addEventListener('keydown', (event) => {
    if (event.key === ' ') 
    {   
        if (mode === "1")
        {
            twentyFour();
        }
    }
    if (event.key === 'Shift') 
    {
        if (mode === "2")
        {
            if (event.location === keyboardEvent.DOM_KEY_LOCATION_LEFT)
            {
                timer();
            }
            if (event.location === keyboardEvent.DOM_KEY_LOCATION_RIGHT)
            {
                timer();
            }
        }
        
    }

});
/*function start24()
{
    cardText.
}*/

async function getCard() 
{
    try
    {
        solutionButton.style.display = 'block';
        const response = await fetch('cards.txt');
        const cardstxt = await response.text();
        const lines = cardstxt.split('\n');
        const lineNum = Math.floor(Math.random() * (lines.length-1)/2)*2;
        card = lines[lineNum];
        return lines[lineNum];
    }
    catch (error)
    {
        console.error('oh no! smth went wrong. plz contact me or something so i can try to fix', error);
    }
}

async function getSolutions()
{
    try
    {
        solutionButton.style.display = 'block';
        const response = await fetch('solutions/' + card + '.txt');
        const solutionstxt = await response.text();
        return solutionstxt;  
    }
    catch (error)
    {
        console.error('oh no! smth went wrong. plz contact me or something so i can try to fix', error);
    }
}

function timer()
{
    
}