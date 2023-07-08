import React from 'react'
import { Image, Text, View } from 'react-native'

export default function ForecastSection() {
  return (
    <View className="mx-4 flex justify-around flex-1 mb-2">
        {/* Location */}
        <Text className="text-white text-center text-2xl font-bold">
            London,      
            <Text className="text-lg font-semibold text-gray-300">
                 United Kingdom
            </Text>
        </Text>
        {/* Weather Image */}
        <View className="flex-row justify-center">
            <Image
                className="w-52 h-52"
                source={require('../assets/images/partlycloudy.png')}
            />
        </View>
        {/* Degree celcius */}
        <View className="space-y-2">
            <Text className="text-center font-bold text-white text-6xl ml-5">
                23&#176;
            </Text>
            <Text className="text-center text-white text-xl ml-5 tracking-widest">
                Partly cloudy
            </Text>
        </View>
        {/* Other stats */}
        <View className="flex-row justify-between mx-4">
            <View className="flex-row space-x-2 items-center">
                <Image
                    source={require('../assets/icons/wind.png')}
                    className="w-6 h-6"
                />
                <Text className="text-white font-semibold text-base">
                    22Km
                </Text>
            </View>
            <View className="flex-row space-x-2 items-center">
                <Image
                    source={require('../assets/icons/drop.png')}
                    className="w-6 h-6"
                />
                <Text className="text-white font-semibold text-base">
                    23%
                </Text>
            </View>
            <View className="flex-row space-x-2 items-center">
                <Image
                    source={require('../assets/icons/sun.png')}
                    className="w-6 h-6"
                />
                <Text className="text-white font-semibold text-base">
                    6:05 AM
                </Text>
            </View>
        </View>
    </View>
  )
}
