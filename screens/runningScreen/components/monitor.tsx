import React, { useEffect, useState } from "react";
import * as _ from "lodash";
import moment from "moment";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import { Svg, Path } from "react-native-svg";
import { Feather as Icon } from "@expo/vector-icons";
// import { path as SVGPath } from "d3-path";
import * as d3 from "d3-path";
import { path as d3path } from "d3-path";
import * as path from "svg-path-properties";

const radius = 100;
const strokeWidth = 20;

var pi = Math.PI;

/**
 * Draws a circular arc segment with the specified radius that starts tangent to the line between the current point and the specified point ⟨x1, y1⟩
 * and ends tangent to the line between the specified points ⟨x1, y1⟩ and ⟨x2, y2⟩. If the first tangent point is not equal to the current point,
 * a straight line is drawn between the current point and the first tangent point. Equivalent to context.arcTo and uses SVG’s elliptical arc curve commands.
 *
 * @param x1 x-Coordinate of the first tangent point
 * @param y1 y-Coordinate of the first tangent point
 * @param x2 x-Coordinate of the second tangent point
 * @param y2 y-Coordinate of the second tangent point
 * @param r  Radius of the arc segment
 */
// arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;

// const d = d3path()
//   .moveTo(strokeWidth, radius + strokeWidth)
//   // TODO: HOW arcTo?
//   .arcTo(radius * 2, radius + strokeWidth, radius)
//   .toSVG();

// const properties = path.svgPathProperties(d);
// const length = properties.getTotalLength();

interface MonitorProps {
  distance: number;
  totalDistance: number;
  pace: number;
}

export const Monitor = ({ distance, totalDistance, pace }: MonitorProps) => {
  // --- STATE ---

  const [duration, setDuration] = useState(0);

  // --- EFFECTS ---

  // TODO: WHY THIS?
  useEffect(() => {
    setInterval(() => setDuration(duration + 1), 1000);
  }, []);

  // --- HELPERS ---

  const formatDuration = (seconds: number) =>
    moment.utc(moment.duration(seconds, "s").asMilliseconds()).format("mm:ss");

  const ratio = distance === 0 ? 0 : distance / totalDistance;

  // --- RENDER ---

  return (
    <SafeAreaView style={styles.monitor}>
      <View style={styles.progressContainer}>
        <Svg style={styles.progressBar}>
          {/* TODO: Hier wird d wieder genutzt */}
          {/* <Path stroke="white" fill="transparent" {...{ d, strokeWidth }} /> */}

          {/* <Path
            stroke="#e9ac47"
            fill="transparent"
            strokeDasharray={length}
            strokeDashoffset={length - ratio * length}
            {...{ d, strokeWidth }}
          /> */}
        </Svg>
        <View style={styles.progressLabelContainer}>
          <Text style={styles.progressLabel}>{_.round(distance)}</Text>
        </View>
      </View>
      <View style={styles.params}>
        <View style={styles.row}>
          <Icon name="watch" color="white" size={28} />
          <Text style={styles.value}>{formatDuration(pace)}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="clock" color="white" size={28} />
          <Text style={styles.value}>{formatDuration(duration)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  monitor: {
    backgroundColor: "#222222",
  },
  progressContainer: {
    alignItems: "center",
  },
  progressBar: {
    height: radius * 2 + strokeWidth,
    width: radius * 2 + strokeWidth,
  },
  progressLabelContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  progressLabel: {
    color: "white",
    fontSize: 72,
    marginTop: 64,
  },
  params: {
    flexDirection: "row",
    height: 64,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  value: {
    marginLeft: 16,
    color: "white",
    fontSize: 28,
  },
});
