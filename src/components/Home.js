import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Actions } from "react-native-router-flux";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 12,
      abc:15
    };
  //  console.log("HOMESTATE", this.state.num);
  }

  onPressNext() {
    Actions.gallery({passedVal: this.state });
    
}

render(){
  return (
    <View style={styles.container}>
      <Button title="Go to Gallery" onPress={this.onPressNext.bind(this)}  />
    </View>
  );
}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#ffffff"
  }
});
