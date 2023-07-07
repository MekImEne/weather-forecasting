import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Image, SafeAreaView, TouchableOpacity, Text } from "react-native";
import SearchSection from "../components/SearchSection";
import { MapPinIcon } from "react-native-heroicons/solid";

export default function HomeScreen() {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([1,2,3]);

  const handleLocation =(loc)=>{
    console.log('====================================');
    console.log('location : ',loc);
    console.log('====================================');
  }

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image 
        source={require("../assets/images/bg.png")} 
        className="absolute h-full w-full" 
        blurRadius={70}
      />

      <SafeAreaView className="flex flex-1 mt-16">
        <SearchSection showSearch={showSearch} setShowSearch={setShowSearch} />
        {
          locations.length>0 && showSearch  ? 
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
              {
                locations.map((loc,index)=>{
                  let showBorder = index+1 != locations.length;
                  let borderClass = showBorder? ' border-b-2 border-b-gray-400':'';
                  return (
                    <TouchableOpacity
                      key={index}
                      className={"flex-row items-center border-0 p-3 px-4 mb-1" + borderClass}
                      onPress={()=>handleLocation(loc)}
                    >
                      <MapPinIcon size="20" color="gray" />
                      <Text className="text-black text-lg ml-2" >London, UK</Text>
                    </TouchableOpacity>
                  )
                })
              }
            </View> 
          : null
        }
      </SafeAreaView>
    </View>
  );
}
