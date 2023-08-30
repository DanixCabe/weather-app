import React from 'react'
import { Image, Text, View } from 'react-native'

export const WeatherForecastList = ({forecast}) => {
    const getDate = (date) => {
        const dateSet = new Date(date).toString();
        const day = dateSet.split(" ")[0];
        return day;
    }

    return (
        <View className="flex flex-col items-center justify-center">
            {
                forecast.map((dayWeather, id) => {
                    return (
                        <View 
                            key={dayWeather.date_epoch} 
                            className={`flex flex-row items-center justify-center px-2 py-1 w-full ${(id !== 0) ? 'border-t border-slate-700 ': '' }`}>
                            <View className="w-[25%]">
                                <Text className="text-xl text-white  text-justify">{(id === 0) ? 'Today' : getDate(dayWeather.date)}</Text>
                            </View>
                            <View className="w-[25%]">
                                <Image source={{ uri: 'https:'+ dayWeather.icon}} className="w-12 h-12 mx-auto"/> 
                            </View>
                            <View className="w-[25%]">
                                <Text className="text-xl text-white text-center">{Math.round(dayWeather.min_temp)}°</Text>
                            </View>
                            <View className="w-[25%]">
                                <Text className="text-xl text-white text-center">{Math.round(dayWeather.max_temp)}°</Text>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}
