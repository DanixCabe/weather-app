import { createSlice } from '@reduxjs/toolkit';

    export const weatherSlice = createSlice({
        name: 'weather',
        initialState: {
            weatherCity: null,
            isValidate: false,
            isError: false,
            isMessage: '',
        },
        reducers: {
            setValidate: (state) => {
                state.isValidate = true;
                state.weatherCity = null;
                state.isError = false
                state.isMessage = ''
            },
            getWeatherCity: (state, action  ) => {
                state.isValidate = false;
                state.weatherCity = action.payload;
                state.isError = false
                state.isMessage = 'Search successful.'
            },
            setErrorWeather: (state) => {
                state.isValidate = false;
                state.weatherCity = null;
                state.isError = true
                state.isMessage = 'Error for search weather in this location.'
            }
        }
});
// Action creators are generated for each case reducer function
export const { getWeatherCity, setValidate, setErrorWeather } = weatherSlice.actions;