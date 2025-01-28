import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <MaterialIcons name="home" size={50} color="#6200EE" />
      <Text className="mt-4 text-lg text-gray-700 font-semibold">
        Welcome to Home
      </Text>
    </View>
  );
}
