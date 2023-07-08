import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { CalendarDaysIcon } from 'react-native-heroicons/solid'
import { theme } from '../theme'

export default function ForecastNextDays() {
  return (
    <View className="mb-2 space-y-3">
        <View className="flex-row items-center mx-5 space-x-2">
            <CalendarDaysIcon size="22" color="white" />
            <Text className="text-base text-white" >Daily forecast</Text>
        </View>

        <ScrollView 
            horizontal 
            contentContainerStyle={{paddingHorizontal:15}}
            showsHorizontalScrollIndicator={false} 
        >
            <View 
                className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                style={{backgroundColor:theme.bgWhite(0.15)}}
            >
                <Image
                    className="h-11 w-11"
                    source={require('../assets/images/heavyrain.png')}
                />
                <Text className="text-white">Monday</Text>
                <Text className="text-white font-semibold text-xl">
                    13&#176;
                </Text>
            </View>
            <View 
                className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                style={{backgroundColor:theme.bgWhite(0.15)}}
            >
                <Image
                    className="h-11 w-11"
                    source={require('../assets/images/heavyrain.png')}
                />
                <Text className="text-white">Tuesday</Text>
                <Text className="text-white font-semibold text-xl">
                    13&#176;
                </Text>
            </View>
            <View 
                className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                style={{backgroundColor:theme.bgWhite(0.15)}}
            >
                <Image
                    className="h-11 w-11"
                    source={require('../assets/images/heavyrain.png')}
                />
                <Text className="text-white">Monday</Text>
                <Text className="text-white font-semibold text-xl">
                    13&#176;
                </Text>
            </View>
            <View 
                className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                style={{backgroundColor:theme.bgWhite(0.15)}}
            >
                <Image
                    className="h-11 w-11"
                    source={require('../assets/images/heavyrain.png')}
                />
                <Text className="text-white">Monday</Text>
                <Text className="text-white font-semibold text-xl">
                    13&#176;
                </Text>
            </View>
            <View 
                className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                style={{backgroundColor:theme.bgWhite(0.15)}}
            >
                <Image
                    className="h-11 w-11"
                    source={require('../assets/images/heavyrain.png')}
                />
                <Text className="text-white">Monday</Text>
                <Text className="text-white font-semibold text-xl">
                    13&#176;
                </Text>
            </View>
            <View 
                className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                style={{backgroundColor:theme.bgWhite(0.15)}}
            >
                <Image
                    className="h-11 w-11"
                    source={require('../assets/images/heavyrain.png')}
                />
                <Text className="text-white">Monday</Text>
                <Text className="text-white font-semibold text-xl">
                    13&#176;
                </Text>
            </View>
        </ScrollView>
    </View>
  )
}
