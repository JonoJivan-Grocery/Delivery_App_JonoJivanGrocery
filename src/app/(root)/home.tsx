import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Switch } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';

interface LocationCoords {
  latitude: number;
  longitude: number;
}

const Home = () => {
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [location, setLocation] = useState<LocationCoords | null>(null);
  const [mapRegion, setMapRegion] = useState<Region | null>(null);

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
      setMapRegion({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  const handleLocationButtonPress = () => {
    if (location) {
      setMapRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4 bg-white">
        {/* Left Button (Bars Icon) */}
        <TouchableOpacity>
          <Icon name="bars" size={30} color="black" />
        </TouchableOpacity>

        {/* Toggle Switch */}
        <Switch
          value={isOnline}
          onValueChange={() => setIsOnline(!isOnline)}
          trackColor={{ false: 'gray', true: 'green' }}
          thumbColor={isOnline ? 'white' : 'red'}
        />

        {/* Right Button (WiFi Icon) */}
        <TouchableOpacity onPress={() => setIsOnline(!isOnline)}>
          {isOnline ? (
            <Feather name="wifi" size={30} color="green" />
          ) : (
            <Feather name="wifi-off" size={30} color="red" />
          )}
        </TouchableOpacity>
      </View>

      {/* Map */}
      <MapView
        style={{ flex: 1 }}
        region={mapRegion || undefined} // Pass undefined when mapRegion is null
        showsUserLocation={true}
        followsUserLocation={true}
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
