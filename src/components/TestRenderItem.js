import React, { Component } from "react";
import data from "./example.json";
import TestRenderItem from "./TestRenderItem";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableHighlight,
  Animated,
  Button
} from "react-native";
class TestRendrItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item
    };
  }
 
  render() {
    return (
      <TouchableHighlight style={styles.item}>
        <View style={styles.Viewitem}>
          <View style={{ justifyContent: "flex-start", padding: 10 }}>
            <Text style={styles.TextStyle}>{this.state.item.placetype}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            {this.state.item.tags.map(tagname => (
              <Text style={styles.btnStyle} key={tagname.subid}>
                {tagname.placetag}
              </Text>
            ))}
          </View>

        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 0
  },

  Viewitem: {
    flexWrap: "wrap",
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    borderBottomWidth: 0.5,
    borderColor: "#dadada"
  },
  btnStyle: {
    margin: 5,
    padding: 7,
    backgroundColor: "#FFF",
    borderRadius: 25,
    color: "#333",
    borderWidth: 0.5,
    borderColor: "#333",
    textAlign: "center"
  },
  TextStyle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    justifyContent: "center"
  },

  ImageStyle: {
    height: 25,
    width: 25,
    margin: 5,
    alignItems: "center"
  },
  UserIcon: {
    height: Dimensions.get("window").width * (14 / 100),
    width: Dimensions.get("window").width * (14 / 100),
    borderRadius: (Dimensions.get("window").width * (14 / 100)) / 2
  },
  item: {
    backgroundColor: "#FFF"
  },
  itemInvisible: {
    backgroundColor: "transparent"
  },
  itemText: {
    color: "#fff"
  }
});

export default TestRendrItem;
