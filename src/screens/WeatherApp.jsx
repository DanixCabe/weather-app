import React from 'react'
import { ScrollView, Text, View } from 'react-native';
import { WeatherEncounter, Search } from '../components';

export const WeatherApp = () => {


    return (
        <View className="bg-slate-700 pt-14    h-full">
            <ScrollView className=" h-full pb-10 mb-2">
                <Text className="text-4xl font-bold bg-red text-white text-center">Weather App</Text>
                <Search/>
                <WeatherEncounter/>
            </ScrollView>
        </View>
    )
}
