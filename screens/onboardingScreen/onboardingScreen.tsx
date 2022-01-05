import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Feather, Ionicons } from "@expo/vector-icons";

import { Colors } from "../../utils/colors";
import { BaseStatusBar } from "../../components/baseStatusBar";
import { onboardingSlides } from "./utils/onboardingScreenConstants";

interface OnboardingScreenProps {
  handleFinishTour: () => void;
}

export const OnboardingScreen = ({
  handleFinishTour,
}: OnboardingScreenProps) => {
  // --- RENDER ---

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Feather
          name="arrow-right-circle"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="checkmark-circle"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <BaseStatusBar />

      <AppIntroSlider
        data={onboardingSlides}
        keyExtractor={(item) => item.key}
        onDone={handleFinishTour}
        renderDoneButton={renderDoneButton}
        renderItem={({ item }) => {
          return (
            <View style={styles.slide}>
              <Image source={item.image} style={styles.image} />

              <Text style={styles.title}>{item.title}</Text>
            </View>
          );
        }}
        renderNextButton={renderNextButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonCircle: {
    alignItems: "center",
    backgroundColor: "#F9A826",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    width: 40,
  },
  image: {
    height: 380,
    marginVertical: 32,
    transform: [{ scale: 0.75 }],
    width: "100%",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.ONBOARDING_BG,
    justifyContent: "center",
    minHeight: "100vh",
  },
  title: {
    color: Colors.ONBOARDING_TEXT,
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 32,
    textAlign: "center",
  },
});
