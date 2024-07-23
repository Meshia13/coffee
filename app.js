


const coffeeContainer = document.querySelectorAll('coffee-container');

// Function to fetch the api
async function getCoffee () {

    try {
        const response = await fetch('https://api.sampleapis.com/coffee/hot')
    
        if(!response.ok) {
            throw new Error("Did not work")
        }

        
        const data = await response.json();
        

        // data.slice(0,3)
        displayCoffee(data);
        // showCoffee(data)
        // getDisplay(data);
        console.log(data);
    }

    catch(error) {
        console.log('Error fetching coffee data',error)

    }
}



// function getDisplay(coffee) {
//     const coffeeContainer = document.querySelectorAll('coffee-container');
    
//     coffeeContainer.forEach(item => {
//         let results = `
//             <div class="title" id="title">
//                 <h2>${item.title}</h2>
//             </div>
//         `;

        
//     })
    
    
// }

function showCoffee(data) {

    window.addEventListener('DOMContentLoaded', function() {
    

    

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



// Displaying the data
function displayCoffee(data) {

    // window.addEventListener('DOMContentLoaded', function() {
   

    function createCoffee(data) {

        // Parent element
        // const coffeeContainer = document.querySelectorAll('coffee-container');

        coffeeContainer.forEach(coffeeChoice => {
                // adding class name to element
            coffeeChoice.classList.add('coffee-card')
            // setting HTML content inside of 'coffee-card'
            coffeeChoice.innerHTML = `
            
                <div class="title" id="title">
                    <h2>${data.title}</h2>
                </div>

                <figure class="coffee-image" id="coffee-image">
                    <img src=${coffeeChoice.image} alt="">
                </figure>
                
                <div class="description" id="description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, facilis?
                </div>

                <h3>Ingredients:</h3>

                <ul id="ingredientList">
                    <li></li>
                </ul>

            `;
        })

        
        
        }
        coffeeContainer.forEach(createCoffee)
       
    // })
}

getCoffee()
