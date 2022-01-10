import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Camera, Polyline, Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as turf from "turf";

import { Colors } from "../../../utils/theme";
import { Monitor } from "./monitor";
import { Pin } from "./pin";

const LATITUDE_DELTA = 0.001;
const LONGITUDE_DELTA = 0.01;

type Position = {
  coords: Location.LocationObjectCoords;
  timestamp: number;
};

interface RunProps {
  distanceProp: number;
  latitudeProp: number;
  longitudeProp: number;
}

export const Run = ({
  distanceProp,
  latitudeProp,
  longitudeProp,
}: RunProps) => {
  // --- STATE ---

  const [positions, setPositions] = useState<Position[]>([]);
  const [distanceState, setDistanceState] = useState(0);
  const [duration, setDuration] = useState(0);
  const [pace, setPace] = useState(0);

  const mapRef = useRef<MapView>(null);

  // --- EFFECTS ---

  const getLocations = async () => {
    const options = {
      distanceInterval: 1,
      timeInterval: 1000,
    };

    await Location.watchPositionAsync(options, onPositionChange);
  };

  useEffect(() => {
    getLocations();
  }, []);

  // useEffect(() => {
  //   if (mapRef.current) {
  //     console.log({ positions });
  //     const newCamera: Camera = {
  //       center: {
  //         latitude: positions[positions.length - 1].coords.latitude,
  //         longitude: positions[positions.length - 1].coords.longitude,
  //       },
  //       zoom: 15,
  //       heading: 0,
  //       pitch: 0,
  //       altitude: 5,
  //     };

  //     mapRef.current.animateCamera(newCamera, { duration: 5000 });
  //   }
  // }, [positions]);

  // --- HELPERS ---

  const currentPosition = positions[positions.length - 1];

  // --- CALLBACKS ---

  const distanceBetween = (origin: Position, destination: Position) => {
    const from = turf.point([origin.coords.longitude, origin.coords.latitude]);
    const to = turf.point([
      destination.coords.longitude,
      destination.coords.latitude,
    ]);
    const options = { units: "meters" };

    // @ts-ignore
    const distance = turf.distance(from, to, options);

    return distance;
  };

  const paceBetween = (distance: number, from: Position, to: Position) => {
    const pace = (to.timestamp - from.timestamp) / distance;

    return pace;
  };

  const onPositionChange = (position: Position) => {
    const newDuration = positions[0]
      ? position.timestamp - positions[0].timestamp
      : 0;
    const newDistance = positions[0]
      ? distanceBetween(positions[positions.length - 1], position)
      : 0;
    const pace = positions[0]
      ? paceBetween(newDistance, positions[positions.length - 1], position)
      : 0;

    setPositions([...positions, position]);
    setDuration(newDuration);
    setDistanceState(distanceState + newDistance);
    setPace(pace);
  };

  // --- RENDER ---
  return (
    <View style={styles.container}>
      <Monitor
        {...{
          distance: distanceState,
          totalDistance: distanceProp,
          pace,
        }}
      />
      <MapView
        provider="google"
        style={{ flex: 1 }}
        region={{
          latitude: 42.882,
          longitude: 74.58,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      {/* <MapView
        ref={mapRef}
        provider="google"
        style={styles.map}
        initialCamera={{
          center: { latitude: 0, longitude: 0 },
          pitch: 0,
          zoom: 12,
          heading: 0,
          altitude: 0,
        }}
      >
        <Marker
          coordinate={
            // TODO: Check this with currentPosition
            currentPosition
              ? currentPosition.coords
              : { latitude: latitudeProp, longitude: longitudeProp }
          }
          anchor={{ x: 0.5, y: 0.5 }}
        >
          <Pin />
        </Marker>
        <Polyline
          coordinates={positions.map((position) => position.coords)}
          strokeWidth={4}
          strokeColor={Colors.ORANGE}
        />
      </MapView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
