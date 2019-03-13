import React from "react";
import { StyleSheet, View } from "react-native";

const Box3 = props => {
  return <View style={styles.boxContainer}>{props.children}</View>;
};

const styles = StyleSheet.create({
  boxContainer: {
   
    justifyContent: 'space-between',
    position: "relative",
    backgroundColor: "#FFF",
    shadowColor: "#cacaca",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginLeft: 10,
    marginRight: 10,
    flexWrap: "wrap",
    width:'80%',

  
  
    flexDirection: "row"
  }
});
export default Box;
