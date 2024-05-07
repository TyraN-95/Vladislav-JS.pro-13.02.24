async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '5d066958a60d315387d9492393935c19'; 
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            const { temp, pressure, humidity } = data.main;
            const { speed, deg } = data.wind;
            const { description, icon } = data.weather[0];

            const weatherInfo = `
                <p>Город: ${city}</p>
                <p>Температура: ${temp}°C</p>
                <p>Давление: ${pressure} hPa</p>
                <p>Влажность: ${humidity}%</p>
                <p>Скорость ветра: ${speed} м/с</p>
                <p>Направление ветра: ${deg}°</p>
                <p>Описание: ${description}</p>
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="${description}">
            `;

            document.getElementById('weatherDisplay').innerHTML = weatherInfo;
        } else {
            document.getElementById('weatherDisplay').innerHTML = `<p>Ошибка: ${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('weatherDisplay').innerHTML = '<p>Не удалось получить данные о погоде.</p>';
    }
}