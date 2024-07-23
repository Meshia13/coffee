

// const title = document.getElementById('title')
// const descrip = document.getElementById('description');
// const ingredient = document.getElementById('ingredientList');
// const image = document.getElementById('coffee-image');
// const card = document.getElementById('coffee-card');

// Function to fetch the api
async function getCoffee () {

    try {
        const response = await fetch('https://api.sampleapis.com/coffee/hot')
    
        if(!response.ok) {
            throw new Error("Did not work")
        }

        
        const data = await response.json();
        data.slice(0,3)
        // displayCoffee(data);
        showCoffee(data)
        console.log(data);
    }

    catch(error) {
        console.log('Error fetching coffee data',error)

    }
}

function showCoffee(data) {

    window.addEventListener('DOMContentLoaded', function() {
    const coffeeContainer = document.getElementById('coffee-container');

    

    function displayData(results) {
        results = `
        <div class="title" id="title">
            <h2>${data.title}</h2>
        </div>
        `
        coffeeContainer.innerHTML = results
    }
   
    coffeeContainer.forEach(displayData)
})
}



// // Displaying the data
// function displayCoffee(data) {

//     window.addEventListener('DOMContentLoaded', function() {
   

//     function createCoffee(coffeeChoice) {

//     // Parent element
//      const coffeeContainer = document.getElementById('coffee-container'); 
//     // adding class name to element
//     coffeeChoice.classList.add('coffee-card')
//     // setting HTML content inside of 'coffee-card'
//     coffeeChoice.innerHTML = `
    
//         <div class="title" id="title">
//             <h2>${data.title}</h2>
//         </div>

//         <figure class="coffee-image" id="coffee-image">
//             <img src=${coffeeChoice.image} alt="">
//         </figure>
        
//         <div class="description" id="description">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, facilis?
//         </div>

//         <h3>Ingredients:</h3>

//         <ul id="ingredientList">
//             <li></li>
//         </ul>

//     `;
    
//     }
    
//     coffeeContainer.forEach(createCoffee)
//     // coffeeContainer.appendChild(coffeeInfo);
// })
// }

getCoffee()