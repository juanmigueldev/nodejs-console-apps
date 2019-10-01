const axios = require('axios')

// register in https://openweathermap.org/ to get one
const openWeatherApiKey = 'YOUR-API-KEY-HERE'


const getWeather = async (lat, lng) => {

    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${openWeatherApiKey}`)

    return response.data.main.temp;
}


module.exports = {
    getWeather
}





