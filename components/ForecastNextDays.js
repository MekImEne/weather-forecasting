import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { CalendarDaysIcon } from "react-native-heroicons/solid";
import { theme } from "../theme";
import { weatherImages } from "../constants";

export default function ForecastNextDays({ weather }) {
  return (
    <View className="mb-2 space-y-3">
      <View className="flex-row items-center mx-5 space-x-2">
        <CalendarDaysIcon size="22" color="white" />
        <Text className="text-base text-white">Daily forecast</Text>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {weather?.forecast?.forecastday?.map((item, index) => {
          let date = new Date(item?.date);
          let options = { weekday: "long" };
          let dayName = date.toLocaleDateString("en-US", options);
          dayName.split(",")[0];
          return (
            <View
              key={index}
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                className="h-11 w-11"
                //source={require("../assets/images/heavyrain.png")}
                source={weatherImages[item?.day?.condition?.text]}
              />
              <Text className="text-white">{dayName}</Text>
              <Text className="text-white font-semibold text-xl">
                {item?.day?.avgtemp_c}&#176;
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
