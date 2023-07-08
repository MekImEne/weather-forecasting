import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Image, SafeAreaView } from "react-native";
import SearchSection from "../components/SearchSection";
import Locations from "../components/Locations";
import ForecastSection from "../components/ForecastSection";
import ForecastNextDays from "../components/ForecastNextDays";
import { debounce } from "lodash";
import { fetchLocations, fetchWeatherForecast } from "../api/weather";

export default function HomeScreen() {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});


  const handleLocation = (loc) => {
    setLocations([]);
    setShowSearch(false);
    fetchWeatherForecast({
      cityName: loc?.name,
      days: "7",
    }).then((data) => {
      console.log(data);
      setWeather(data);
    });
  };

  const handleSearch = (value) => {
    //console.log('value : ', value);
    // fetch locations
    if (value.length > 2) {
      fetchLocations({ cityName: value }).then((data) => {
        console.log("locations : ", data);
        setLocations(data);
      });
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  const { current, location } = weather;

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/bg.png")}
        className="absolute h-full w-full"
        blurRadius={70}
      />

      <SafeAreaView className="flex flex-1 mt-16">
        <SearchSection
          showSearch={showSearch}
          setShowSearch={setShowSearch}
          handleSearch={handleTextDebounce}
        />
        <Locations
          showSearch={showSearch}
          locations={locations}
          handleLocation={handleLocation}
        />

        <ForecastSection location={location} current={current} />
        <ForecastNextDays weather={weather} />
      </SafeAreaView>
    </View>
  );
}
