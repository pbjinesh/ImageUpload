import React from "react";
import { StyleSheet, View, Text } from "react-native";

const BoxSection = props => {
  return <View style={styles.boxContainer}>{props.children}</View>;
};

const styles = StyleSheet.create({
  boxContainer: {
    
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#9E9E9E",
    
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative",
    marginLeft: 10,
    marginRight:10,
    marginBottom:10

    
    

  },
 
});
export default BoxSection;
