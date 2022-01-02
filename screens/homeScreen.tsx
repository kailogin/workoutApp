import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import { BaseView } from "../components/baseView";

import { setFirstVisitedStateFalse } from "../stores/userStore/userActions";
import { Colors } from "../utils/colors";
import { useAppDispatch } from "../utils/hooks";

export const HomeScreen = () => {
  const dispatch = useAppDispatch();

  // --- CALLBACKS ---

  const handleButtonPress = () => {
    // https://js.coach/react-native-button?search=react-native+button
    dispatch(setFirstVisitedStateFalse(false));
  };

  // --- RENDER ---

  return (
    <BaseView>
      <ImageBackground
        resizeMode="cover"
        source={require("../images/dumbbell.jpg")}
        style={homeScreenStyles.image}
      >
        <Text style={homeScreenStyles.title}>Welcome to</Text>
        <Text style={homeScreenStyles.secondTitle}>KRAFT</Text>

        <TouchableOpacity
          onPress={handleButtonPress}
          style={homeScreenStyles.button}
        >
          <Text style={homeScreenStyles.text}>Continue</Text>
        </TouchableOpacity>

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </ImageBackground>
    </BaseView>
  );
};

const homeScreenStyles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: "#F2994A",
    borderRadius: 12,
    padding: 12,
    width: 140,
  },
  image: {
    flex: 1,
  },
  text: {
    alignSelf: "center",
    color: Colors.WHITE,
  },
  title: {
    alignSelf: "center",
    color: Colors.WHITE,
    fontSize: 48,
    fontWeight: "bold",
    marginTop: 48,
  },
  secondTitle: {
    alignSelf: "center",
    color: Colors.WHITE,
    fontSize: 48,
    fontWeight: "bold",
    margin: 16,
  },
});
