const { argv } = require('./config/yargs')
const { getAddressLatLng } = require('./modules/address/address')
const { getWeather } = require('./modules/weather/weather')


const getWeatherInfo = async address => {
  try {
    let coords = await getAddressLatLng(address);
    let temperature = await getWeather(coords.latitude, coords.longitude)

    return `The weather for '${address}' is C° ${temperature}`
  } catch (error) {
    throw new Error(`Could not be determined the weather for ${address}`)
  }
}

getWeatherInfo(argv.address)
    .then(console.log)
    .catch(console.log)
