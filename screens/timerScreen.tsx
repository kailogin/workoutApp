import React, { useCallback, useState, useRef, useEffect } from "react";
import {
  Vibration,
  TextInput,
  Dimensions,
  Animated,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import uuid from "react-native-uuid";

import { BaseStatusBar } from "../components/baseStatusBar";
import { Colors } from "../utils/theme";

const { width, height } = Dimensions.get("window");

const timers = [...Array(13).keys()].map((i) => (i === 0 ? 1 : i * 5));
const ITEM_SIZE = width * 0.38;
const ITEM_SPACING = (width - ITEM_SIZE) / 2;

export const TimerScreen = () => {
  // --- STATE ---

  const scrollX = useRef(new Animated.Value(0)).current;
  const inputRef = useRef<any>();

  const [duration, setDuration] = useState(timers[0]);

  const timerAnimation = useRef(new Animated.Value(height)).current;
  const buttonAnimation = useRef(new Animated.Value(0)).current;
  const textInputAnimiation = useRef(new Animated.Value(timers[0])).current;

  // --- EFFECTS ---

  useEffect(() => {
    const listener = textInputAnimiation.addListener(({ value }) => {
      inputRef?.current?.setNativeProps({
        text: Math.ceil(value).toString(),
      });
    });

    return () => {
      textInputAnimiation.removeListener(listener);
      textInputAnimiation.removeAllListeners();
    };
  });

  // --- CALLBACKS ---

  const animation = useCallback(() => {
    textInputAnimiation.setValue(duration);

    Animated.sequence([
      Animated.timing(buttonAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(timerAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(textInputAnimiation, {
          toValue: 0,
          duration: duration * 1000,
          useNativeDriver: true,
        }),
        Animated.timing(timerAnimation, {
          toValue: height,
          duration: duration * 1000,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(400),
    ]).start(() => {
      // Simple vibration api
      Vibration.cancel();
      Vibration.vibrate();

      textInputAnimiation.setValue(duration);

      Animated.timing(buttonAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      });
    });
  }, [duration]);

  const textOpacity = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const opacity = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const translateY = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  // --- RENDER ---

  return (
    <View style={styles.container}>
      <BaseStatusBar />

      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            height,
            width,
            backgroundColor: Colors.RED,
            transform: [
              {
                translateY: timerAnimation,
              },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            opacity,
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 100,
            transform: [
              {
                translateY: translateY,
              },
            ],
          },
        ]}
      >
        <TouchableOpacity onPress={animation}>
          <View style={styles.roundButton} />
        </TouchableOpacity>
      </Animated.View>

      <View
        style={{
          position: "absolute",
          top: height / 3,
          left: 0,
          right: 0,
          flex: 1,
        }}
      >
        <Animated.View
          style={{
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            opacity: textOpacity,
            position: "absolute",
            width: ITEM_SIZE,
          }}
        >
          <TextInput
            defaultValue={duration.toString()}
            ref={inputRef}
            style={styles.text}
          />
        </Animated.View>

        <Animated.FlatList
          bounces={false}
          contentContainerStyle={{
            paddingHorizontal: ITEM_SPACING,
          }}
          data={timers}
          decelerationRate="fast"
          horizontal
          keyExtractor={() => uuid.v4().toString()}
          onMomentumScrollEnd={(ev) => {
            const index = Math.round(
              ev.nativeEvent.contentOffset.x / ITEM_SIZE
            );
            setDuration(timers[index]);
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * ITEM_SIZE,
              index * ITEM_SIZE,
              (index + 1) * ITEM_SIZE,
            ];

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.4, 1, 0.4],
            });

            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.7, 1, 0.7],
            });

            return (
              <View
                style={{
                  width: ITEM_SIZE,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Animated.Text
                  style={[styles.text, { opacity, transform: [{ scale }] }]}
                >
                  {item}
                </Animated.Text>
              </View>
            );
          }}
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_SIZE}
          style={{ flexGrow: 0, opacity }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  roundButton: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: Colors.RED,
  },
  text: {
    fontSize: ITEM_SIZE * 0.8,
    fontFamily: "Menlo",
    color: Colors.WHITE,
    fontWeight: "900",
  },
});
