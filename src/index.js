import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import GeoLocation from '@react-native-community/geolocation';

// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default function App() {
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    GeoLocation.getCurrentPosition(({coords}) => {
      setCoordinates(coords);
      setLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={'#fff'} />
      ) : (
        <MapView
          initialRegion={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.0068,
            longitudeDelta: 0.0068,
          }}
          style={styles.map}>
          {}
        </MapView>
      )}
    </View>
  );
}
