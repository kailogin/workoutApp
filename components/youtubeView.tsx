import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

interface YouTubeViewProps {
  youtubeId: string;
}
export const YouTubeView = ({ youtubeId }: YouTubeViewProps) => {
  return (
    <View style={{ height: 300 }}>
      <WebView
        style={styles.WebViewContainer}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: `https://www.youtube.com/embed/${youtubeId}` }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  WebViewContainer: {
    margin: 20,
  },
});
