import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { BaseStatusBar } from "../components/baseStatusBar";
import { BaseText } from "../components/baseText";

import { BaseView } from "../components/baseView";
import { useAppDispatch } from "../stores/rootStore/rootStore";
import { setFirstVisitedStateFalse } from "../stores/userStore/userActions";
import { Colors } from "../utils/colors";

export const OnboardingScreen = () => {
  const dispatch = useAppDispatch();

  // --- CALLBACKS ---

  const handleButtonPress = () => {
    // https://js.coach/react-native-button?search=react-native+button
    dispatch(setFirstVisitedStateFalse(false));
  };

  // --- RENDER ---

  return (
    <BaseView baseViewStyle={{ backgroundColor: Colors.WHITE }}>
      <BaseStatusBar />

      <BaseText
        style={{
          color: Colors.BLACK,
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 40,
          marginTop: 40,
        }}
      >
        Welcome to KRAFT
      </BaseText>

      <Image
        source={require("../images/hello.svg")}
        style={{
          borderRadius: 16,
          height: 300,
          marginBottom: 40,
          width: "100%",
        }}
      />

      <TouchableOpacity
        onPress={handleButtonPress}
        style={homeScreenStyles.button}
      >
        <BaseText style={{ alignSelf: "center", fontWeight: "bold" }}>
          Continue
        </BaseText>
      </TouchableOpacity>
    </BaseView>
  );
};

const homeScreenStyles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: "#F2994A",
    borderRadius: 16,
    padding: 12,
    width: 140,
  },
});
