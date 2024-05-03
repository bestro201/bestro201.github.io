// async function fetchWeather() {
//     document.getElementById('weather').innerHTML = 'Загрузка данных о погоде...';
    
//     const geoResponse = await fetch('https://get.geojs.io/v1/ip/geo.json');
//     const geoData = await geoResponse.json();
//     const location = `${geoData.city}, ${geoData.region}, ${geoData.country}`;
//     document.getElementById('location').innerHTML = `Ваше местоположение: ${location}`;

//     const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${geoData.latitude}&longitude=${geoData.longitude}&current_weather=true`;
//     const weatherResponse = await fetch(weatherUrl);
//     const weatherData = await weatherResponse.json();

//     setTimeout(() => {
//         if (weatherData && weatherData.current_weather) {
//             const weather_code = weatherData.current_weather.weather_code;
//             const weatherDescription = decodeWeatherCode(weather_code);
//             const weather = `Температура: ${weatherData.current_weather.temperature}°C, 
//                             Погода: ${weatherDescription},
//                             Скорость ветра: ${weatherData.current_weather.windspeed} km/h,
//                             Код погоды: ${weather_code}`;
//             document.getElementById('weather').innerHTML = weather;
//         } else {
//             document.getElementById('weather').innerHTML = 'Данные о погоде недоступны.';
//         }
//     }, 1500);
// }

// function decodeWeatherCode(code) {
//     const codes = {
//         '0': 'Ясно',
//         '1': 'Частично облачно',
//         '2': 'Облачно',
//         '3': 'Пасмурно',
//         '45': 'Туман',
//         '48': 'Изморозь',
//         '51': 'Легкая морось',
//         '53': 'Морось',
//         '55': 'Сильная морось',
//         '56': 'Легкая замерзающая морось',
//         '57': 'Сильная замерзающая морось',
//         '61': 'Легкий дождь',
//         '63': 'Умеренный дождь',
//         '65': 'Сильный дождь',
//         '66': 'Легкий замерзающий дождь',
//         '67': 'Сильный замерзающий дождь',
//         '71': 'Легкий снегопад',
//         '73': 'Умеренный снегопад',
//         '75': 'Сильный снегопад',
//         '77': 'Снежные зерна',
//         '80': 'Легкие ливневые дожди',
//         '81': 'Умеренные ливневые дожди',
//         '82': 'Сильные ливневые дожди',
//         '85': 'Легкий ливневый снег',
//         '86': 'Сильный ливневый снег',
//         '95': 'Гроза',
//         '96': 'Гроза с градом',
//         '99': 'Сильная гроза с градом'
//         // 'undefined': 'Погода непонятная'
//     };
//     return codes[code] || 'Недоступно';
// }

// document.addEventListener('DOMContentLoaded', fetchWeather);




// async function fetchWeather() {
//     document.getElementById('weather').innerHTML = 'Загрузка данных о погоде...';

//     try {
//         const geoResponse = await fetch('https://get.geojs.io/v1/ip/geo.json');
//         const geoData = await geoResponse.json();
//         const location = `${geoData.city}, ${geoData.region}, ${geoData.country}`;
//         document.getElementById('location').innerHTML = `Ваше местоположение: ${location}`;

//         const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${geoData.latitude}&longitude=${geoData.longitude}&current_weather=true`;
//         const weatherResponse = await fetch(weatherUrl);
//         const weatherData = await weatherResponse.json();

//         setTimeout(() => {
//             if (weatherData && weatherData.current_weather) {
//                 const weather_code = weatherData.current_weather.weather_code;
//                 const weatherDescription = decodeWeatherCode(weather_code);
//                 const weather = `Температура: <span class="temperature">${weatherData.current_weather.temperature}°C</span>, 
//                                 Погода: <span class="weather-detail">${weatherDescription}</span>,
//                                 Скорость ветра: <span class="wind-speed">${weatherData.current_weather.windspeed} km/h</span>,
//                                 Код погоды: <span class="code">${weather_code}</span>`;
//                 document.getElementById('weather').innerHTML = weather;
//             } else {
//                 document.getElementById('weather').innerHTML = 'Данные о погоде недоступны.';
//             }
//         }, 1500);
//     } catch (error) {
//         console.error('Failed to fetch location or weather:', error);
//         document.getElementById('weather').innerHTML = 'Не удалось загрузить данные о погоде.';
//     }
// }

// function decodeWeatherCode(code) {
//     const codes = {
//         '0': 'Ясно',
//         '1': 'Частично облачно',
//         '2': 'Облачно',
//         '3': 'Пасмурно',
//        
//     };
//     return codes[code] || 'Недоступно';
// }

// document.addEventListener('DOMContentLoaded', fetchWeather);



// async function fetchWeather() {
//     document.getElementById('weather').innerHTML = 'Загрузка данных о погоде...';

//     try {
//         const geoResponse = await fetch('https://get.geojs.io/v1/ip/geo.json');
//         const geoData = await geoResponse.json();
//         const location = `${geoData.city}, ${geoData.region}, ${geoData.country}`;
//         document.getElementById('location').innerHTML = `Ваше местоположение: ${location}`;

//         const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${geoData.latitude}&longitude=${geoData.longitude}&current_weather=true`;
//         const weatherResponse = await fetch(weatherUrl);
//         const weatherData = await weatherResponse.json();

//         setTimeout(() => {
//             if (weatherData && weatherData.current_weather) {
//                 const weather_code = weatherData.current_weather.weather_code;
//                 const weatherDescription = decodeWeatherCode(weather_code);
//                 const areaDescription = decodeAreaCode(weatherData.current_weather.area_code);
//                 const weather = `Температура: <span class="temperature">${weatherData.current_weather.temperature}°C</span>, 
//                                 Погода: <span class="weather-detail">${weatherDescription}</span>,
//                                 Скорость ветра: <span class="wind-speed">${weatherData.current_weather.windspeed} km/h</span>,
//                                 Регион: <span class="area-code">${areaDescription}</span>,
//                                 Код погоды: <span class="code">${weather_code}</span>`;
//                 document.getElementById('weather').innerHTML = weather;
//             } else {
//                 document.getElementById('weather').innerHTML = 'Данные о погоде недоступны.';
//             }
//         }, 1500);
//     } catch (error) {
//         console.error('Failed to fetch location or weather:', error);
//         document.getElementById('weather').innerHTML = 'Не удалось загрузить данные о погоде.';
//     }
// }




// async function fetchWeather() {
//     document.getElementById('weather').innerHTML = 'Загрузка данных о погоде...';

//     try {
//         const geoResponse = await fetch('https://get.geojs.io/v1/ip/geo.json');
//         const geoData = await geoResponse.json();
//         const location = `${geoData.city}, ${geoData.region}, ${geoData.country}`;
//         document.getElementById('location').innerHTML = `Ваше местоположение: ${location}`;

//         const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${geoData.latitude}&longitude=${geoData.longitude}&current_weather=true`;
//         const weatherResponse = await fetch(weatherUrl);
//         const weatherData = await weatherResponse.json();

//         setTimeout(() => {
//             if (weatherData && weatherData.current_weather) {
//                 const weather_code = weatherData.current_weather.weather_code;
//                 const weatherDescription = decodeWeatherCode(weather_code);
//                 const areaDescription = decodeAreaCode(weatherData.current_weather.area_code);
//                 const weather = `Температура: <span class="temperature">${weatherData.current_weather.temperature}°C</span>, 
//                                 Погода: <span class="weather-detail">${weatherDescription}</span>,
//                                 Скорость ветра: <span class="wind-speed">${weatherData.current_weather.windspeed} km/h</span>,
//                                 Регион: <span class="area-code">${areaDescription}</span>,
//                                 Код погоды: <span class="code">${weather_code}</span>`;
//                 document.getElementById('weather').innerHTML = weather;
//             } else {
//                 document.getElementById('weather').innerHTML = 'Данные о погоде недоступны.';
//             }
//         }, 1500);
//     } catch (error) {
//         console.error('Failed to fetch location or weather:', error);
//         document.getElementById('weather').innerHTML = 'Не удалось загрузить данные о погоде.';
//     }
// }

// function decodeWeatherCode(code) {
//     const codes = {
//         '0': 'Ясно',
//         '1': 'Частично облачно',
//         '2': 'Облачно',
//         '3': 'Пасмурно',
//         
//     };
//     return codes[code] || 'Недоступно';
// }

// function decodeAreaCode(code) {
//     const areaCodes = {
//         '101': 'Северная территория',
//         '102': 'Южная территория',
//         '103': 'Западная территория',
//         '104': 'Восточная территория',
//     
//     };
//     return areaCodes[code] || 'Неизвестный регион';
// }

// document.addEventListener('DOMContentLoaded', fetchWeather);
// async function fetchWeather() {
//     document.getElementById('weather').innerHTML = 'Загрузка данных о погоде...';

//     try {
//         const geoResponse = await fetch('https://get.geojs.io/v1/ip/geo.json');
//         const geoData = await geoResponse.json();
//         const location = `${geoData.city}, ${geoData.region}, ${geoData.country}`;
//         document.getElementById('location').innerHTML = `Ваше местоположение: ${location}`;

//         const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${geoData.latitude}&longitude=${geoData.longitude}&current_weather=true`;
//         const weatherResponse = await fetch(weatherUrl);
//         const weatherData = await weatherResponse.json();

//         setTimeout(() => {
//             if (weatherData && weatherData.current_weather) {
//                 const weather_code = weatherData.current_weather.weather_code;
//                 const weatherDescription = decodeWeatherCode(weather_code);
//                 const areaDescription = decodeAreaCode(weatherData.current_weather.area_code);
//                 const weather = `Температура: <span class="temperature">${weatherData.current_weather.temperature}°C</span>, 
//                                 Погода: <span class="weather-detail">${weatherDescription}</span>,
//                                 Скорость ветра: <span class="wind-speed">${weatherData.current_weather.windspeed} km/h</span>,
//                                 Регион: <span class="area-code">${areaDescription}</span>,
//                                 Код погоды: <span class="code">${weather_code}</span>`;
//                 document.getElementById('weather').innerHTML = weather;
//             } else {
//                 document.getElementById('weather').innerHTML = 'Данные о погоде недоступны.';
//             }
//         }, 1500);
//     } catch (error) {
//         console.error('Failed to fetch location or weather:', error);
//         document.getElementById('weather').innerHTML = 'Не удалось загрузить данные о погоде.';
//     }
// }

// function decodeWeatherCode(code) {
//     const codes = {
//         '0': 'Ясно',
//         '1': 'Частично облачно',
//         '2': 'Облачно',
//         '3': 'Пасмурно',
//         
//     };
//     return codes[code] || 'Недоступно';
// }

// function decodeAreaCode(code) {
//     const areaCodes = {
//         '101': 'Северная территория',
//         '102': 'Южная территория',
//         '103': 'Западная территория',
//         '104': 'Восточная территория',
//         
//     };
//     return areaCodes[code] || 'Неизвестный регион';
// }

// document.addEventListener('DOMContentLoaded', fetchWeather);
async function fetchWeather() {
    document.getElementById('weather').innerHTML = 'Загрузка данных о погоде...';

    try {
        
        const geoResponse = await fetch('https://get.geojs.io/v1/ip/geo.json');
        const geoData = await geoResponse.json();
        const location = `${geoData.city}, ${geoData.region}, ${geoData.country}`;
        document.getElementById('location').innerHTML = `Ваше местоположение: ${location}`;

       
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${geoData.latitude}&longitude=${geoData.longitude}&current_weather=true`;

        
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        
        setTimeout(() => {
            if (weatherData && weatherData.current_weather) {
                const currentWeather = weatherData.current_weather;
                const weather = `Температура: <span class="temperature">${currentWeather.temperature}°C</span>, 
                                Погода: <span class="weather-detail">${decodeWeatherCode(currentWeather.weather_code)}</span>,
                                Скорость ветра: <span class="wind-speed">${currentWeather.windspeed} km/h</span>,
                                Код погоды: <span class="code">${currentWeather.weather_code}</span>`;
                document.getElementById('weather').innerHTML = weather;
            } else {
                document.getElementById('weather').innerHTML = 'Данные о погоде недоступны.';
            }
        }, 1500);
    } catch (error) {
        console.error('Failed to fetch location or weather:', error);
        document.getElementById('weather').innerHTML = 'Не удалось загрузить данные о погоде.';
    }
}

function decodeWeatherCode(code) {
    const codes = {
        'clear_sky': 'Ясно',
        'mainly_clear': 'В основном ясно',
        'partly_cloudy': 'Переменная облачность',
        'overcast': 'Пасмурно',
        'fog': 'Туман',
        };
    return codes[code] || 'Недоступно';
}

document.addEventListener('DOMContentLoaded', fetchWeather);
