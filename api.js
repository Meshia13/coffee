// Global Variables
const coffeeContainer = document.querySelector('#coffee-container');
const navBar = document.querySelector('.navbar');

// Function to create navbar dynamically
function createNavBar() {
    const navBarEl = document.createElement('div');
    navBarEl.classList.add('nav-links-container');
    navBarEl.innerHTML = `
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Our Menu</a>
        <a href="#">Company</a>
        <a href="#">Contact Us</a>
    `;

    navBar.appendChild(navBarEl)
}

function hotCoffee() {

    fetch('https://api.sampleapis.com/coffee/hot')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayHTML(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

  
}

function icedCoffee() {

    fetch('https://api.sampleapis.com/coffee/iced')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayHTML(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

  
}


// function displayHTML(stuff) {

//     const divEl = document.createElement('div');
//     divEl.classList.add("coffee-list")
//     divEl.innerHTML = `
     
//     <div class="title" id="title">
//         <h2>${stuff[2].title}</h2>
//     </div>

//     <figure class="coffee-image" id="coffee-image">
//         <img src=${stuff[2].image} alt="">
//     </figure>
    
//     <div class="description" id="description">
//         ${stuff[2].description}
//     </div>

//     <h3>Ingredients:</h3>

//     <ul id="ingredientList">
//         <li>${stuff[2].ingredients}</li>
//     </ul>
// `
//     coffeeContainer.appendChild(divEl)

// }


createNavBar()
hotCoffee() 
// icedCoffee()

