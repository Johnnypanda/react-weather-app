//API key might be obsolete, make sure it's fine or replace it
//Axios fetches an api and returns a url, just like jquery GET method
import axios from 'axios';

const API_KEY = '12d10aff5c29b4947737f39b00533f83'; 
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}