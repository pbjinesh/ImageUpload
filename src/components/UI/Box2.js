import React from "react";
import { StyleSheet, View, Text } from "react-native";
const Box2 = props => {
  return <View style={styles.boxContainer}>{props.children}</View>;
};

const styles = StyleSheet.create({
  boxContainer: {
    flex:1,
    justifyContent: 'center',
    position: "relative",
    backgroundColor: "#FFF",
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 7,
    flexDirection: "row"
  }
});
export default Box2;
