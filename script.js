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
        cardText.innerHTML = `<h3>Card :3/n${numbers.join(', ')}</h3>`;
}

start.addEventListener('click', () => {
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