import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import SearchSection from "../components/SearchSection";
import Locations from "../components/Locations";
import ForecastSection from "../components/ForecastSection";
import ForecastNextDays from "../components/ForecastNextDays";
import { debounce } from "lodash";
import { fetchLocations, fetchWeatherForecast } from "../api/weather";
import * as Progress from "react-native-progress";
import { getData, storeData } from "../utils/asyncStorage";
import { theme } from "../theme";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

export default function HomeScreen() {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchWeatherData = async () => {
    let myCity = await getData("city");
    let cityName = "Algeria";
    if (myCity) {
      cityName = myCity;
    }
    fetchWeatherForecast({
      cityName,
      days: "7",
    }).then((data) => {
      setWeather(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleLocation = (loc) => {
    setLocations([]);
    setShowSearch(false);
    setLoading(true);
    fetchWeatherForecast({
      cityName: loc?.name,
      days: "7",
    }).then((data) => {
      console.log(data);
      setWeather(data);
      setLoading(false);
      storeData("city", loc.name);
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

      {loading ? (
        <View className="flex-1 flex-row justify-center items-center">
          <Progress.CircleSnail thickness={10} size={140} color="#0bb3b2" />
        </View>
      ) : (
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
      )}
    </View>
  );
}
