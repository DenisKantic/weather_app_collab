const form = document.getElementById('form');
const container = document.getElementsByClassName('container');
const searchBar = document.getElementsByClassName('searchbar')[0];
const submitBtn = document.getElementsByClassName('submitBtn')[0];
const displayContainer = document.getElementsByClassName('displayContainer');
const temperature = document.getElementsByClassName('temperature');
const description = document.getElementsByClassName('description');
const humidity = document.getElementsByClassName('humidity');
const feelsLike = document.getElementsByClassName('feelsLike');
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
    displayContainer.style.display = 'flex';
    
} 


