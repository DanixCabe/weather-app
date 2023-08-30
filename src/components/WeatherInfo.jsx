import React from 'react'
import { Image, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { WeatherForecastList } from './WeatherForecastList';

export const WeatherInfo = () => {
    const { weatherCity } = useSelector(state => state.weather);
    const {current, forecast} = weatherCity

    const {city, country, icon, region, tempActually, text} = current;
    

    return (
        <View className="flex justify-center items-center px-10 ">
            <View className="flex items-center justify-center bg-slate-800 p-2 rounded-lg w-full">
                <Text className="text-4xl font-semibold text-white ">{city}</Text>
                <Text className="text-8xl font-extralight text-white mt-3 mb-0">{Math.round(tempActually)}°</Text>
                <Text className="text-lg font-semibold  text-slate-400 mb-4">{text}</Text>
                <View className="flex flex-row ">
                    <View>
                        <Text className="text-xl font-semibold  text-white text-center">min</Text>
                        <Text className="text-xl font-semibold  text-slate-400 text-center">{Math.round(forecast[0].min_temp)}°</Text>
                    </View>
                    <View className="w-[1px] h-[80%] my-auto mx-2 bg-slate-500/60 "></View>
                    <View>
                        <Text className="text-xl font-semibold  text-white text-center">max</Text>
                        <Text className="text-xl font-semibold  text-slate-400 text-center">{Math.round(forecast[0].max_temp)}°</Text>
                    </View>
                </View>
            </View>
            <View className="bg-slate-800 p-2 rounded-lg w-full mt-2">
                <WeatherForecastList forecast={forecast}/>
            </View>
        </View>
    )
}
