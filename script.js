const cardText = document.getElementById('card');
const startButton = document.getElementById('start');
const solutionButton = document.getElementById('solutionButton');
const solutionsText = document.getElementById('solutions');
const card = "";

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
    solutionsText.innerHTML = `<h4>please note that the order of operations do not apply to these\nSolutions:<br>${sols}</h4>`;
});



window.addEventListener('keydown', (event) => {
    if (event.key === ' ') 
    {
        twentyFour();
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