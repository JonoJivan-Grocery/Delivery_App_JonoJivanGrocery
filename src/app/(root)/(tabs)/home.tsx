import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4 bg-white">
        <TouchableOpacity>
          <Icon name="bars" size={30} color="black" />
        </TouchableOpacity>
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
        <Marker
          coordinate={{ latitude: 28.7041, longitude: 77.1025 }} // Same coordinates for marker
          title="Delhi, India"
        />
      </MapView>
    </View>
  );
};

export default Home;
