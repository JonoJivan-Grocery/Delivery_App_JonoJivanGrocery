import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Location from 'expo-location';

interface LocationCoords {
  latitude: number;
  longitude: number;
}

const Home = () => {
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [location, setLocation] = useState<LocationCoords | null>(null);

  useEffect(() => {
    // Request permission to access location
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      // Get the current location of the user
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4 bg-white">
  {/* Left Button (Bars Icon) */}
  <TouchableOpacity>
    <Icon name="bars" size={30} color="black" />
  </TouchableOpacity>

  {/* Toggle Button in the middle */}
  <TouchableOpacity
    onPress={() => setIsOnline(!isOnline)}
    style={{
      backgroundColor: isOnline ? 'green' : 'red',
      borderRadius: 50,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text className="text-white font-bold">
      {isOnline ? 'Online' : 'Offline'}
    </Text>
  </TouchableOpacity>

  {/* Right Button (WiFi Icon) */}
  <TouchableOpacity onPress={() => setIsOnline(!isOnline)}>
    {isOnline ? (
      <MaterialIcon name="wifi" size={30} color="green" />
    ) : (
      <MaterialIcon name="wifi-off" size={30} color="red" />
    )}
  </TouchableOpacity>
</View>


      {/* Map */}
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 28.7041, // Latitude for Delhi, India
          longitude: 77.1025, // Longitude for Delhi, India
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Marker for current user location */}
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Your Location"
          />
        )}
      </MapView>
    </View>
  );
};

export default Home;
