const form = document.getElementById('form');
const container = document.getElementsByClassName('container')[0];
const searchBar = document.getElementsByClassName('searchbar')[0];
const submitBtn = document.getElementsByClassName('submitBtn')[0];
const displayContainer = document.getElementsByClassName('displayContainer')[0];
const temperature = document.getElementsByClassName('temperature')[0];
const descriptionEL = document.getElementsByClassName('description')[0];
const humidityEL = document.getElementsByClassName('humidity')[0];
const feelsLike = document.getElementsByClassName('feelsLike')[0];
const city = document.getElementsByClassName('city')[0];
const api = '0b8981366e5ef28551fb2db8fa544438';

function fetchApi(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`)
    .then((response) => response.json())
    .then((data) => displayWeather(data));
}

submitBtn.addEventListener("click", (e) => {
    if (searchBar.value != "") {
        fetchApi(searchBar.value);
    }
    else console.log("not works");
}
);

function displayWeather(data){

    container.style.display = 'none';
    displayContainer.style.display = 'block';
    const { humidity } = data.main;
    const { feels_like } = data.main;
    const { name } = data;
    const { description } = data.weather[0];
    const { temp } = data.main;

    humidityEL.innerText = `${humidity}`;
    temperature.innerText = `${Math.round(temp)}`;
    feelsLike.innerText = `${Math.round(feels_like)}`
    city.innerText = `${name}`;
    descriptionEL.innerText = `${description}`;
} 


