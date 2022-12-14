
// Toggle menu
function toggleMenu() {
    document.getElementById('primary_nav').classList.toggle('open');
    document.getElementById('hamburger_button').classList.toggle('open');
    
}

const x = document.getElementById('hamburger_button')
x.onclick = toggleMenu;

// Weather
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windspeed = document.querySelector('#windspeed');
const windChillTag = document.querySelector('windchill');

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=48ed0199203b4a96290775c99a2c9813'


async function apifetch() {
    try{
 const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); 
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apifetch()

function capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function displayResults(data) {
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    windspeed.innerHTML = `${data.wind.speed.toFixed(2)}`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    let windChill = calculateWindChill(data.main.temp, data.wind.speed);
    windChillTag.innerHTML = windChill.toFixed(0);
}

// json file reading
const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(data =>{
    console.log(data);
    data.forEach(displaydata);
  })

function displaydata(dat) {
    let card = document.createElement('section1');
    let genus = document.createElement('h3');
    let h2 = document.createElement('h2');
    let family = document.createElement('h4');
    let id = document.createElement('h3');
    let carbohydrates = document.createElement('h4');
    let protien = document.createElement('h4');
    let fat = document.createElement('h4');
    let calories = document.createElement('h4');
    let sugar = document.createElement('h4');
  
    genus.textContent = `${dat.genus} \n`;
    h2.textContent = `${dat.name} `;
    family.textContent = `Family: ${dat.family} \n`;
    id.textContent= `ID: ${dat.id}  \n`;
    carbohydrates.textContent= `Carbohydrates: ${dat.nutritions.carbohydrates} \n`;
    protien.textContent= `Protien: ${dat.nutritions.protien} \n`;
    fat.textContent= `Fat: ${dat.nutritions.fat} \n`;
    calories.textContent= `Calories: ${dat.nutritions.calories} \n`;
    sugar.textContent= `Sugar: ${dat.nutritions.sugar} \n`;
    
  
    card.appendChild(h2);
    card.appendChild(genus);
    card.appendChild(id);
    card.appendChild(family);
    card.appendChild(carbohydrates);
    card.appendChild(protien);
    card.appendChild(fat);
    card.appendChild(calories);
    card.appendChild(sugar);
  
    document.querySelector('div.cards').appendChild(card);
}
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(data =>{
    console.log(data);
    data.forEach(populateSelect);
  })

// drop down poulation

function populateSelect() {
    // the json.
    let data = fetch(requestURL)
    
    for (let i = 0; i < data.length; i++) {
      ele.innerHTML = ele.innerHTML + '<option value="' + data[i]['ID'] + '">' + data[i]['name'] + '</option>';
    }
  }
