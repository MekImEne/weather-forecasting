import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MapPinIcon } from "react-native-heroicons/solid";

export default function Locations({ locations, showSearch, handleLocation }) {
  return (
    <View>
      {locations.length > 0 && showSearch ? (
        <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
          {locations.map((loc, index) => {
            let showBorder = index + 1 != locations.length;
            let borderClass = showBorder ? " border-b-2 border-b-gray-400" : "";
            return (
              <TouchableOpacity
                key={index}
                className={
                  "flex-row items-center border-0 p-3 px-4 mb-1" + borderClass
                }
                onPress={() => handleLocation(loc)}
              >
                <MapPinIcon size="20" color="gray" />
                <Text className="text-black text-lg ml-2">
                  {loc?.name}, {loc?.country}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}
