import React, { useState } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import { Link } from "expo-router"; // Ensure expo-router is installed and configured
import { icons, images } from "@/constants";


export default function HomeScreen() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = () => {
    if (form.email && form.password) {
      // Handle sign-in logic
      console.log("Sign In Pressed", form);
    } else {
      console.log("Please fill in all fields");
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        {/* Hero Section */}
        <View className="relative w-full h-[250px]">
          <Image
            source={images.signUpCar} // Replace with your actual image object
            style={{ width: "100%", height: "100%" }}
            className="z-0"
          />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome 👋
          </Text>
        </View>

        {/* Input Fields and Buttons */}
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email} // Replace with your actual icon object
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock} // Replace with your actual icon object
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            className="mt-6"
          />
          <Link
          href={"signup"}
            className="text-lg text-center text-general-200 mt-10"
          >
            Don't have an account?{" "}
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
