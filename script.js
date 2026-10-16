const cardText = document.getElementById('card');
const startButton = document.getElementById('start');

/*function genNumber() 
{
    return Math.floor(Math.random() * 9) + 1;
}*/

//placeholder for now (currently it just generates a random # 1-9)
function twentyFour()
{
    const numbers = [parseInt(getCard().charAt(0)), parseInt(getCard().charAt(1)), parseInt(getCard().charAt(2)), parseInt(getCard().charAt(3))];
        cardText.innerHTML = `<h3>Card:<br>${numbers.join(', ')}</h3>`;
}

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    twentyFour();
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
        const response = await fetch('cards.txt');
    }
    catch (error)
    {
        console.error('oh no! smth went wrong. plz contact me or something so i can try to fix', error);
    }
    const cardstxt = await response.text();
    const lines = cardstxt.split('\n');
    return lines[Math.floor(Math.random() * (lines.length-1)/2)*2+1];
}