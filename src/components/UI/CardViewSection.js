import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CardViewSection = props => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    backgroundColor: "#FFF",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative",
    margin: 5
  },
  textStyle: {
    color: "#333",
    fontSize: 14,
    textAlign: "justify"
  }
});
export default CardViewSection;
