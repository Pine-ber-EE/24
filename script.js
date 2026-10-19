

const cardText = document.getElementById('card');
const cardText2 = document.getElementById('card2');
const startButton = document.getElementsByClassName('start')[0];
const startButton2 = document.getElementsByClassName('start')[1]
const solutionButton = document.getElementById('solutionButton');
const solutionsText = document.getElementById('solutions');
const onePlayer = document.getElementById('onePlayerButton');
const twoPlayer = document.getElementById('twoPlayerButton');
const timerText = document.getElementById('timer');
const cardDifficulty = document.getElementById('diff');
let cardDiff = 0;
let card = "";
let mode = "1";
let player1Score = "0";
let player2Score = "0";
let timeLeft = 0;
let timerActivate = false;
let playerTurn = 0;
let debugShift = 0;

//old genNum func:
/*function genNumber() 
{
    return Math.floor(Math.random() * 9) + 1;
}*/

async function twentyFour()
{
    solutionsText.innerHTML=``;
    const matrix = await getCard();
    //console.log(matrix[0]);
    //console.log(matrix[1]);
    card =  matrix[0];
    solN = matrix[1];
    //console.log(solN);
    if(solN <= 3)
    {
        //console.log("<=3 ");
        cardDiff = 3;
        cardDifficulty.src = "3.png";
    }
    else if(solN <= 10)
    {
        //console.log("<= 15");
        cardDiff = 2;
        cardDifficulty.src = "2.png";
    }
    else
    {
        //console.log("else");
        cardDiff = 1;
        cardDifficulty.src = "1.png";
    }
    //console.log("e");
    const numbers = [parseInt(card.charAt(0)), parseInt(card.charAt(1)), parseInt(card.charAt(2)), parseInt(card.charAt(3))];
    //console.log(mode);
    //console.log(card);
    //console.log(cardText)
    //console.log(cardText2)
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
    cardDifficulty.removeAttribute('hidden');
    twentyFour();
});

startButton2.addEventListener('click', () => {
    startButton2.style.display = 'none';
    cardDifficulty.removeAttribute('hidden');
    twentyFour();
})

solutionButton.addEventListener('click', async () => {
    const sols = await getSolutions();
    solutionsText.innerHTML = `<h4>please note that the order of operations do not apply to these\nsolutions:<br>${sols}</h4>`;
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
        if(mode === "2")
        {
            if(timerActivate === true)
            {
                timerActivate = false; 
                //console.log("timer deacted!");
                timerText.style.display = 'none';
                if(playerTurn === 1)
                {
                    player1Score = (+player1Score)+1;
                }
                else if(playerTurn === 2)
                {
                    player2Score = (+player2Score)+1;
                }
                updateScore();
                twentyFour();
            }
        }
    }
    if (event.key === 'Shift') 
    {
        if (mode === "2")
        {
            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT)
            {
                timer1();
            }
            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT)
            {
                timer2();
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
        solutionButton.removeAttribute('hidden');
        const response = await fetch('cards.txt');
        const cardstxt = await response.text();
        const lines = cardstxt.split('\n');
        const lineNum = Math.floor(Math.random() * (lines.length-1)/2)*2;
        card = lines[lineNum];
        return [lines[lineNum],lines[lineNum+1]];
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
        solutionButton.removeAttribute('hidden');
        const response = await fetch('solutions/' + card + '.txt');
        const solutionstxt = await response.text();
        return solutionstxt;  
    }
    catch (error)
    {
        console.error('oh no! smth went wrong. plz contact me or something so i can try to fix', error);
    }
}

function timer1 ()
{
    playerTurn = 1;
    if (timerActivate === false)
    {
        debugShift = (+debugShift)+1;
        timerText.style.display = 'block';
        timerActivate = true;
        timeLeft = 6;

        setTimeout(() => oneSec(debugShift), 0o0);

        setTimeout(() => oneSec(debugShift), 1000);

        setTimeout(() => oneSec(debugShift), 2000);

        setTimeout(() => oneSec(debugShift), 3000);

        setTimeout(() => oneSec(debugShift), 4000);

        setTimeout(()=> {
            if (timerActivate === true)
            {
                timerActivate = false;
                player2Score = (+player2Score)+1;
                updateScore();
                timerText.style.display = 'none';
                twentyFour();
            }
        }, 4500);
    }
}

function timer2()
{
    playerTurn = 2;
    if (timerActivate === false)
    {
        debugShift = (+debugShift)+1;
        //console.log(debugShift);
        timerText.style.display = 'block';
        timerActivate = true;
        timeLeft = 6;

        setTimeout(() => oneSec(debugShift), 0o0);

        setTimeout(() => oneSec(debugShift), 1000);

        setTimeout(() => oneSec(debugShift), 2000);

        setTimeout(() => oneSec(debugShift), 3000);

        setTimeout(() => oneSec(debugShift), 4000);

        setTimeout(()=> {
            if (timerActivate === true)
            {
                timerActivate = false;
                player1Score = (+player1Score)+1;
                updateScore();
                timerText.style.display = 'none';
            }
        }, 4500);

    }
}

function oneSec(n)
{
    //console.log("shift:");
    //console.log(n);
    //console.log(debugShift);
    if (n===debugShift)
    {
        if (timerActivate === true)
        {
            timeLeft = (+timeLeft) - 1;
            document.getElementById('timer').innerHTML = `<h1 id="timer">${timeLeft}</h1>`;
        }
    }
}

function updateScore()
{
    document.getElementById('player1Score').innerHTML = `<h4>Player 1 Score: ${player1Score}</h4>`;
    document.getElementById('player2Score').innerHTML = `<h4>Player 2 Score: ${player2Score}</h4>`;
}