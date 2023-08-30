import { ActivityIndicator, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { WeatherInfo } from './WeatherInfo'

export const WeatherEncounter = () => {
    const { weatherCity, isValidate ,isError, isMessage } = useSelector(state => state.weather)
    return (
        <View className="mt-10">
            {
                (isValidate) && <ActivityIndicator size={'large'}/>
            }

            {
                (weatherCity) && <WeatherInfo/>
                    
            }

        </View>
    )
}
