// Global Variables
const coffeeContainer = document.querySelector('#coffee-container');
const hotCoffeeContainer = document.querySelector('.hotCoffee-options-container');
const icedCoffeeContainer = document.querySelector('.icedCoffee-options-container');

// Fetching Featured Coffee
function featCoffee() {
    
    fetch('https://api.sampleapis.com/coffee/hot')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        featuredCoffee(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

// Fetching Hot Coffee
function hotCoffee() {

    fetch('https://api.sampleapis.com/coffee/hot')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // obtaining the first four items in api to display
        coffee = data;
        coffee.slice(0,4).forEach((item) => {
            hotDrink(item);
        })
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

// Fetching Iced Coffee
function icedCoffee() {

    fetch('https://api.sampleapis.com/coffee/iced')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // obtaining the first four items in api to display
        coffee = data;
        coffee.slice(0,4).forEach((item) => {
            icedDrink(item);
        })
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

// Dynamically populating feature coffee elements
function featuredCoffee(feature) {

    // Creating elements to write to html and choosing one item to be featured drink
    const divEl = document.createElement('div');
    divEl.classList.add("coffee-card")
    divEl.innerHTML = `

        <div class="featured-drink">
            <h4>Featured Drink</h4>
        </div>
        
        <div class="featured-title" id="featured-title">
            <h2>${feature[6].title}</h2>
        </div>
        
        <div class="description" id="description">
            ${feature[6].description}
        </div>
    `;

    const figEl = document.createElement('figure');
    figEl.classList.add("coffee-image");
    figEl.innerHTML = `
    
        <figure class="feature-image" id="feature-image">
            <img src=${feature[6].image} alt="coffee">
        </figure>
    `;

    // Appending child elements to parent element
    coffeeContainer.appendChild(divEl);
    coffeeContainer.appendChild(figEl);

}

// Dynamically populating hot coffee elements
function hotDrink(hot) {
    const hotCoffeeEl = document.createElement('div');
    hotCoffeeEl.classList.add('coffee-options');
    hotCoffeeEl.innerHTML = `
    
    <div class="coffee">
        <img src=${hot.image} alt="coffee">
        <div class="coffee-drink">
            <h3 class="title">${hot.title}</h3>
            <hr>
            <p>
                ${hot.description}
            </p>
            <button class="coffee-btn btn">More</button>
        </div>
    </div>
    `;

    // Appending child element to parent element
    hotCoffeeContainer.appendChild(hotCoffeeEl);
}

// Dynamically populating iced coffee elements
function icedDrink(iced) {
    const icedCoffeeEl = document.createElement('div');
    icedCoffeeEl.classList.add('coffee-options');
    icedCoffeeEl.innerHTML = `
    
    <div class="coffee">
        <img src=${iced.image} alt="coffee">
        <div class="coffee-drink">
            <h3 class="title">${iced.title}</h3>
            <hr>
            <p>
                ${iced.description}
            </p>
            <button class="coffee-btn btn">More</button>
        </div>
    </div>
    `;

    // Appending child element to parent element
    icedCoffeeContainer.appendChild(icedCoffeeEl);
}

// Calling Functions
featCoffee();
hotCoffee();
icedCoffee();


