const cardText = document.getElementById('card');
const startButton = document.getElementById('start');

/*function genNumber() 
{
    return Math.floor(Math.random() * 9) + 1;
}*/

async function twentyFour()
{
    const card =  await getCard();
    console.log(card);
    console.log(card.charAt(0));
    console.log(card.charAt(1));
    console.log(card.charAt(2));
    console.log(card.charAt(3));
    const numbers = [parseInt(card.charAt(0)), parseInt(card.charAt(1)), parseInt(card.charAt(2)), parseInt(card.charAt(3))];
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
        const cardstxt = await response.text();
        const lines = cardstxt.split('\n');
        console.log(Math.floor(Math.random() * (lines.length-1)/2)*2+1);
        console.log(lines[Math.floor(Math.random() * (lines.length-1)/2)*2+1]);
        return (lines[Math.floor(Math.random() * (lines.length-1)/2)*2+1]);
    }
    catch (error)
    {
        console.error('oh no! smth went wrong. plz contact me or something so i can try to fix', error);
    }
}