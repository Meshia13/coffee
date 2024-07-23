

const title = document.getElementById('title')
const descrip = document.getElementById('description');

async function getCoffee () {

    

    try {
        const response = await fetch('https://api.sampleapis.com/coffee/hot')
    
        if(!response.ok) {
            throw new Error("Did not work")
        }

        
        const data = await response.json();
        displayCoffee(data);
        console.log(data);
    }

    catch(error) {
        console.log('Error fetching coffe data',error)

    }
}
getCoffee()

function displayCoffee(data) {
    const coffeeInfo = document.getElementById('coffee-container'); 
    
    let results = `
        <h2>${data.title}<h2>
        <p>${data.descrip}</p>
    `;

    coffeeInfo.innerHTML = results;
}