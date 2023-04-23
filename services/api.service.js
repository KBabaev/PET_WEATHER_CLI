import {getKeyValue, TOKEN_DICTIONARY} from './storage.service.js'
import axios from "axios";

export const getWeather = async (city) => {
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token)
    if (!token) {
        throw new Error('API key is not set, set it via -t [API-KEY]')
    }
    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    })
    console.log('data', data)
    return data
}