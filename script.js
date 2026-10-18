

const cardText = document.getElementById('card');
const cardText2 = document.getElementById('card2');
const startButton = document.getElementsByClassName('start')[0];
const startButton2 = document.getElementsByClassName('start')[1]
const solutionButton = document.getElementById('solutionButton');
const solutionsText = document.getElementById('solutions');
const onePlayer = document.getElementById('onePlayerButton');
const twoPlayer = document.getElementById('twoPlayerButton');
const timerText = document.getElementById('timer');
let card = "";
let mode = "1";
let player1Score = "0";
let player2Score = "0";
let timeLeft = 0;
let timerActivate = false;

//old genNum func:
/*function genNumber() 
{
    return Math.floor(Math.random() * 9) + 1;
}*/

async function twentyFour()
{
    card =  await getCard();
    const numbers = [parseInt(card.charAt(0)), parseInt(card.charAt(1)), parseInt(card.charAt(2)), parseInt(card.charAt(3))];
    console.log(mode);
    console.log(card);
    console.log(cardText)
    console.log(cardText2)
    if(mode === "1")
    {
        cardText.innerHTML = `<h3>Card:<br>${numbers.join(', ')}</h3>`;
    }
    if(mode === "2")
    {   
        cardText2.innerHTML = `<h3>Card:<br>${numbers.join(', ')}</h3>`;
    }
}

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    twentyFour();
});

startButton2.addEventListener('click', () => {
    startButton2.style.display = 'none';
    twentyFour();
})

solutionButton.addEventListener('click', async () => {
    const sols = await getSolutions();
    console.log(sols);
    solutionsText.innerHTML = `<h4>please note that the order of operations do not apply to these\nSolutions:<br>${sols}</h4>`;
});

onePlayer.addEventListener('click', () => {
    document.getElementById('one').style.display = 'block';
    document.getElementById('two').style.display = 'none';
    document.getElementById('playerText').style.display = 'none';
    onePlayer.style.display = 'none';
    twoPlayer.style.display = 'none';
    mode = "1";
});

twoPlayer.addEventListener('click', () => {
    document.getElementById('one').style.display = 'none';
    document.getElementById('two').style.display = 'block';
    document.getElementById('playerText').style.display = 'none';
    onePlayer.style.display = 'none';
    twoPlayer.style.display = 'none';
    mode = "2";
});


window.addEventListener('keydown', (event) => {
    if (event.key === ' ') 
    {   
        if (mode === "1")
        {
            twentyFour();
        }
        if(mode === "2" && timerActivate === true)
        {
            timerActivate = false; 
            colsole.log("timer deacted!");
            timerText.style.display = 'none';
        }
    }
    if (event.key === 'Shift') 
    {
        if (mode === "2")
        {
            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT)
            {
                timer(player1Score, player2Score);
            }
            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT)
            {
                timer(player2Score, player2Score);
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

function timer (n, o)
{
    timerText.style.display = 'block';
    timerActivate = true;
    console.log(timerActivate);
    timeLeft = 5;
    setTimeout(oneSec, 1000);

    setTimeout(oneSec, 1000);
    setTimeout(oneSec, 1000);
    setTimeout(oneSec, 1000);
    setTimeout(oneSec, 1000);
    if (timerActivate = false)
    { 
        n += 1;
    }
    else
    {
        o += 1;
    }
    updateScore();
    timerText.style.display = 'none';
    
}

function oneSec()
{
    //remove later:
    timerText.style.display = 'block';
    //
    timeLeft = timeLeft - 1;
    console.log(timeLeft);
    timerText.innerHTML = `<h1>${timer}</h1>`;
}

function updateScore()
{
    document.getElementById('player1Score').innerHTML = `<h4>Player 1 Score: ${player1Score}</h4>`;
    document.getElementById('player2Score').innerHTML = `<h4>Player 2 Score: ${player1Score}</h4>`
}