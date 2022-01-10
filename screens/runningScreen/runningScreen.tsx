import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import * as Location from "expo-location";

import { BaseText } from "../../components/baseText";
import { BaseView } from "../../components/baseView";
import { Colors } from "../../utils/theme";
import { Run } from "./components/run";

type RunningScreenState = {
  ready: boolean;
  latitude: number;
  longitude: number;
};

export const RunningScreen = () => {
  // --- STATE ---

  const [isReady, setIsReady] = useState(false);
  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState("");

  // Pick<Location.LocationObjectCoords, "longitude">
  const [longitude, setLongitude] = useState<number>(0);

  // Pick<Location.LocationObjectCoords, "latitude">
  const [latitude, setLatitude] = useState<number>(0);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});

      setLatitude(latitude);
      setLongitude(longitude);
      setIsReady(true);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  if (!isReady) {
    return (
      <BaseView>
        <BaseText>{text}</BaseText>
      </BaseView>
    );
  }

  return (
    <BaseView>
      <Run
        distanceProp={200}
        {...{ longitudeProp: longitude, latitudeProp: latitude }}
      />
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.RED,
  },
});
