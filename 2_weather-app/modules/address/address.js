const axios = require('axios')

// register in https://rapidapi.com/dev132/api/city-geo-location-lookup to get one
const rapidApiKey = 'YOUR-API-KEY-HERE'


const getAddressLatLng = async (address) => {
    const encodedAddress = encodeURI(address)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedAddress}`,
        timeout: 4000,
        headers: { 'X-RapidAPI-Key': rapidApiKey }
    })

    let response = await instance.get()

    if (response.data.Results.length === 0)
        throw new Error(`Not results found for ${address}`)

    let data = response.data.Results[0];

    return {
        addres: data.name,
        latitude: data.lat,
        longitude: data.lon
    }
}


module.exports = {
    getAddressLatLng
}





