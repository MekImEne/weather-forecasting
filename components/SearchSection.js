import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { theme } from "../theme";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

export default function SearchSection({
  showSearch,
  setShowSearch,
  handleSearch,
}) {
  return (
    <View style={{ height: "7%" }} className="mx-4 relative z-50">
      <View
        className="flex-row justify-end items-center rounded-full"
        style={{
          backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
        }}
      >
        {showSearch ? (
          <TextInput
            placeholder="Search City"
            placeholderTextColor={"lightgray"}
            className="pl-6 h-10 pb-1 flex-1 text-base text-white"
            onChangeText={handleSearch}
          />
        ) : null}

        <TouchableOpacity
          style={{ backgroundColor: theme.bgWhite(0.3) }}
          className="rounded-full p-3 m-1"
          onPress={() => setShowSearch(!showSearch)}
        >
          <MagnifyingGlassIcon size="25" color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
