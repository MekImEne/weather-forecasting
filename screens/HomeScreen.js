import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Image, SafeAreaView} from "react-native";
import SearchSection from "../components/SearchSection";
import Locations from "../components/Locations";

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
        <Locations showSearch={showSearch} locations={locations} />
      </SafeAreaView>
    </View>
  );
}
