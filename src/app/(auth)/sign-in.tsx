import { View, Text, Image, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import InputField from "@/src/components/InputField";
import CustomButton from "@/src/components/CustomButton";

type FormState = {
    email: string;
    password: string;
  };

const SignIn = () => {
  // State to handle form input
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

 // Function to handle input changes
 const handleInputChange = (key: keyof FormState, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [key]: value }));
  };

  // Function to handle Sign In button press
  const onSignInPress = () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }
    // Add your authentication logic here
    Alert.alert("Success", "Signed in successfully!");
  };

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header Section */}
      <View className="relative w-full h-[250px]">
        <Image
          source={images.signUpCar} // Ensure images.signUpCar is a valid image source
          className="z-0 w-full h-[250px]"
          resizeMode="cover"
        />
        <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
          Welcome 👋
        </Text>
      </View>

      {/* Form Section */}
      <View className="p-5">
        {/* Email Input */}
        <InputField
          label="Email"
          placeholder="Enter email"
          icon={icons.email}
          textContentType="emailAddress"
          value={form.email}
          onChangeText={(value) => handleInputChange("email", value)}
        />

        {/* Password Input */}
        <InputField
          label="Password"
          placeholder="Enter password"
          icon={icons.lock}
          secureTextEntry={true}
          textContentType="password"
          value={form.password}
          onChangeText={(value) => handleInputChange("password", value)}
        />

        {/* Sign In Button */}
        <CustomButton
          title="Sign In"
          onPress={onSignInPress}
          className="mt-6"
        />

        {/* Correct usage of the Link component with href */}
        <Link
          href="/"
          className="text-lg text-center text-general-200 mt-10"
        >
          Don't have an account?{" "}
          <Text className="text-primary-500">Sign Up</Text>
        </Link>
      </View>
    </ScrollView>
  );
};

export default SignIn;
