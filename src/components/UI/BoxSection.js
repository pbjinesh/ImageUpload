import React from "react";
import { StyleSheet, View, Text } from "react-native";

const BoxSection = props => {
  return <View style={styles.boxContainer}>{props.children}</View>;
};

const styles = StyleSheet.create({
  boxContainer: {
   
    justifyContent: 'flex-start',
    position: "relative",
    backgroundColor: "#FFF",
    shadowColor: "#cacaca",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginLeft: 10,
    marginRight: 10,
    flexWrap: "wrap",
    padding: 7,
    flexDirection: "row"
  }
});
export default BoxSection;
