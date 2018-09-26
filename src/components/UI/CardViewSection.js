import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CardViewSection = props => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    backgroundColor: "#FFF",    
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
    position: "relative",
    marginLeft:10,
    marginRight:10,
    marginTop:10
    },

});
export default CardViewSection;
