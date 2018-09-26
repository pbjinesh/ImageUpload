import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SubHeader = props => {
  return <View style={styles.subheader}>{props.children}</View>;
};

const styles = StyleSheet.create({
  subheader: {
    alignItems: "center",
    justifyContent: "center",
    position:'relative',
    backgroundColor: "#FFF",
    
    padding:10,
    flexDirection: "row"
  }
});
export default SubHeader;
