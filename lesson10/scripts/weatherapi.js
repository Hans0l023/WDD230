const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=48ed0199203b4a96290775c99a2c9813'


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

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}
