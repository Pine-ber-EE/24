const cardText = document.getElementById('card');
const start = document.getElementById('start');

function genNumber() 
{
    return Math.floor(Math.random() * 9) + 1;
}

//placeholder for now (currently it just generates a random # 1-9)
function twentyFour()
{
    const numbers = [genNumber(), genNumber(), genNumber(), genNumber()];
        cardText.innerHTML = `<h3>Card:<br>${numbers.join(', ')}</h3>`;
}

start.addEventListener('click', () => {
    twentyFour();
    start.style.display = 'none';
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