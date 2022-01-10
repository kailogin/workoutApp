import React, { ReactNode, useEffect, useState } from "react";
import { StyleSheet, View, Animated } from "react-native";

interface PinProps {
  animation: Animated.Value;
}

export const Pin = () => {
  // --- STATE ---

  const [animation, setAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.25],
  });

  return (
    <View style={styles.outerPin}>
      <View style={styles.pin}>
        <Animated.View style={[styles.innerPin, { transform: [{ scale }] }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerPin: {
    backgroundColor: "rgba(233, 172, 71, 0.25)",
    borderRadius: 40,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  pin: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  innerPin: {
    backgroundColor: "rgb(233, 172, 71)",
    borderRadius: 5,
    width: 10,
    height: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
