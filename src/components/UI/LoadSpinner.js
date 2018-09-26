import React, { Component } from "react";
import { ActivityIndicator, View ,StyleSheet} from "react-native";
const LoadSpinner = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="small" color="#01579B" />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop:10
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
export default LoadSpinner;
