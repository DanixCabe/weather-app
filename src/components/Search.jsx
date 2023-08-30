
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useForm } from '../hooks/useForm';
import { startGetWeather } from '../../store/weather';
import Toast from 'react-native-root-toast';



export const Search = () => {

    const dispatch = useDispatch();
    const { weatherCity, isValidate, isError, isMessage } = useSelector(state => state.weather)

    const {weatherText, onInputChange, onResetForm, formState} = useForm({weatherText: ''})
    
    const onSend = (form) => {
        dispatch(startGetWeather(form))
        onResetForm(form)
    }

    const activateButton = (weatherText.length > 0) ? false : true;

    useEffect(() => {
        if (isMessage.length > 0){
            const bgColorToast = (isError) ? 'rgb(239, 68, 68)' : 'rgb(34 197 94)';
            Toast.show(isMessage,{
                duration: Toast.durations.SHORT,
                backgroundColor: bgColorToast,
            });
        }
    }, [isMessage])
    
    return (

        <View className="w-full px-10">
            <TextInput 
                className="text-slate-700 font-semibold mt-4 h-12 rounded-lg px-4 bg-white focus:border-2 focus:border-cyan-400" 
                placeholder='Enter a city name...'
                keyboardType='default'
                value={weatherText}
                onChange={target => onInputChange('weatherText', target)}
            ></TextInput>
            <TouchableOpacity
                onPress={() => onSend(formState)}
                disabled={(activateButton)}
                className={`bg-cyan-400 rounded-full p-2 mt-4 ${(activateButton) ? 'opacity-30': ''}`}>
                <Text className="text-center text-white font-bold text-lg">Search</Text>

            </TouchableOpacity>
        </View>
    )
}
