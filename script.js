const cardText = document.getElementById('card');
const start = document.getElementById('start');

//placeholder for now (currently it just generates a random # 1-9)

function genNumber() 
{
    return Math.floor(Math.random() * 9) + 1;
}

start.addEventListener('click', () => {
    const numbers = [genNumber(), genNumber(), genNumber(), genNumber()];
    cardText.textContent = `Card :3 ${numbers.join(', ')}`;
});



/*function start24()
{
    cardText.
}*/