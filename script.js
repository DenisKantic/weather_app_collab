const form = document.getElementById('form');
const container = document.getElementsByClassName('container');
const searchBar = document.getElementsByClassName('searchbar');
const submitBtn = document.getElementsByClassName('submitBtn');
const displayContainer = document.getElementsByClassName('displayContainer');
const temperature = document.getElementsByClassName('temperature');
const description = document.getElementsByClassName('description');
const humidity = document.getElementsByClassName('humidity');
const feelsLike = document.getElementsByClassName('feelsLike');
const api = '0b8981366e5ef28551fb2db8fa544438';

form.addEventListener("submit", (e) => {

    if (searchBar[0].value.trim() === "") {
        alert("Input is empty");
    }
    else
        alert("input is valid:  " + searchBar[0].value.trim());

}
);

