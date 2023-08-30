import axios from "axios";
import { getWeatherCity, setErrorWeather, setValidate } from "./weatherSlice"

const api_Key = '7ffe3435553b47cab6e14117230908 ';

export const startGetWeather = ({weatherText}) => {
    return async (dispatch) => {

        const arrayWeather = {current: {}, forecast: []}
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${api_Key}&q=${weatherText}&days=10`;

        const myWeather = axios.create({
            baseURL: url,
        });

        dispatch(setValidate());
        const getWeather = async () => {
            await myWeather.get()
                .then (response =>{
                    const data = response.data
                    const {current, location, forecast} = data;
                    arrayWeather.current = {icon: current.condition.icon, text: current.condition.text, country: location.country, city: location.name, region: location.region, tempActually: current.temp_c }
                    forecast.forecastday.map(weatherDay => {
                        arrayWeather.forecast.push({date: weatherDay.date, date_epoch: weatherDay.date_epoch , max_temp: weatherDay.day.maxtemp_c, min_temp: weatherDay.day.mintemp_c, icon: weatherDay.day.condition.icon, text: weatherDay.day.condition.text })
                    });
                    return dispatch(getWeatherCity(arrayWeather));
                })
                .catch(error => {
                    dispatch(setValidate());
                    return dispatch(setErrorWeather());
                })


        }
        getWeather();

    }
}