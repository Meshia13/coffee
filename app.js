


const coffeeContainer = document.querySelectorAll('#coffee-container');


// function whatever() {

//     fetch('https://api.sampleapis.com/coffee/hot')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Data received:', data);
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });

  
// }

// whatever() 

function coffeeMaker() {
    fetch('https://api.sampleapis.com/coffee/hot')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        getDisplay(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

}

coffeeMaker()



// async function getCoffee() {

    
//         const response = await fetch('https://api.sampleapis.com/coffee/hot')
    
//         if(!response.ok) {
//             throw new Error("Did not work")
//         }

        
//         const data = await response.json();
        

//         getDisplay(data);
//         // console.log(data);
    

  
//         // getDisplay(res)
    
// }

// getCoffee()

function getDisplay(res) {
    const coffeeContainer = document.querySelectorAll('#coffee-container');
    
    coffeeContainer.forEach(item => {
        let results = `
            <div class="title" id="title">
                <h2>${item[0].title}</h2>
            </div>
        `;
        return results
        
    })
    
    return res
}


// function coffeeMaker() {

//     fetch('https://api.sampleapis.com/coffee/hot')
//     .then(response => response.json())
//     .then(data => (console.log(data)))

//     data

// }

// coffeeMaker()


// function createCoffee(data) {

//     // Parent element
//     // const coffeeContainer = document.querySelectorAll('coffee-container');

//     coffeeContainer.forEach(coffeeChoice => {
//             // adding class name to element
//         coffeeChoice.classList.add('coffee-card')
//         // setting HTML content inside of 'coffee-card'
//         coffeeChoice.innerHTML = `
        
//             <div class="title" id="title">
//                 <h2>${data.title}</h2>
//             </div>

//             <figure class="coffee-image" id="coffee-image">
//                 <img src=${coffeeChoice.image} alt="">
//             </figure>
            
//             <div class="description" id="description">
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, facilis?
//             </div>

//             <h3>Ingredients:</h3>

//             <ul id="ingredientList">
//                 <li></li>
//             </ul>

//         `;
//     })

    
    
// }

// createCoffee(coffeeMaker())

// function showCoffee(data) {

//     window.addEventListener('DOMContentLoaded', function() {
    

    

//     function displayData(results) {
//         results = `
//         <div class="title" id="title">
//             <h2>${data.title}</h2>
//         </div>
//         `
//         coffeeContainer.innerHTML = results
//     }
   
//     coffeeContainer.forEach(displayData)
// })
// }



// Displaying the data
function displayCoffee(data) {

    // window.addEventListener('DOMContentLoaded', function() {
   

    
        coffeeContainer.forEach(createCoffee)
       
    // })
}

// getCoffee()
