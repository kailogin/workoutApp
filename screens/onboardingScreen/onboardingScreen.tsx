import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Feather, Ionicons } from "@expo/vector-icons";

import { Colors } from "../../utils/theme";
import { BaseStatusBar } from "../../components/baseStatusBar";

interface OnboardingScreenProps {
  handleFinishTour: () => void;
}
type OnboardingSlides = {
  image: any;
  key: string;
  text?: string;
  title: string;
};

const onboardingSlides: OnboardingSlides[] = [
  {
    image: require("../../assets/images/hiking.png"),
    key: "one",
    title: "Welcome to \nKraft",
  },
  {
    image: require("../../assets/images/fit.png"),
    key: "two",
    title: "Track your \n workouts",
  },
  {
    image: require("../../assets/images/track.png"),
    key: "three",
    title: "Track your runs",
  },
];

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
    marginBottom: 16,
    transform: [{ scale: 0.75 }],
    width: "100%",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    justifyContent: "center",
  },
  title: {
    color: Colors.ONBOARDING_TEXT,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
});
