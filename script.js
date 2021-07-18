const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "817f1ff2eb47907f21c2c95c397787ba"

}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    console.log(cityId);
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)

        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

function showWeather(data) {
    console.log(data);
    let city = document.querySelector('.location .city');
    city.innerText = `${data.name}, ${data.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);



    document.querySelector('.weatherOut').innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector('.weather').textContent = data.weather[0].main;
    document.querySelector('.wind').textContent = Math.round(data.wind.speed) + ' m/s';
    document.querySelector('.hi-low').innerHTML = `${Math.round(data.main.temp_min)} ${'&deg;'} / ${Math.round(data.main.temp_max)} ${'&deg;'}`;
}


function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}



getWeather();
document.querySelector('#city').onchange = getWeather;

