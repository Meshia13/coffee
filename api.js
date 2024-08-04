// Global Variables
const coffeeContainer = document.querySelector('#coffee-container');
const hotCoffeeContainer = document.querySelector('.hotCoffee-options-container')
const icedCoffeeContainer = document.querySelector('.icedCoffee-options-container')


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

function hotCoffee() {

    fetch('https://api.sampleapis.com/coffee/hot')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {

        coffee = data;
        coffee.slice(0,4).forEach((item) => {
            hotDrink(item);
        })
        
        
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
        
        coffee = data;
        coffee.slice(0,4).forEach((item) => {
            icedDrink(item);
        })
        
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

  
}


function featuredCoffee(feature) {

    
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
    
    <figure class="coffee-image" id="coffee-image">
        <img src=${feature[6].image} alt="coffee">
    </figure>
    `;

    coffeeContainer.appendChild(divEl);
    coffeeContainer.appendChild(figEl);

}

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
    hotCoffeeContainer.appendChild(hotCoffeeEl)
}

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
    icedCoffeeContainer.appendChild(icedCoffeeEl)

}

// Declaring Functions
featCoffee();
hotCoffee();
icedCoffee();


