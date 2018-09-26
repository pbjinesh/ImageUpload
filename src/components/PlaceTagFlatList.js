import React, { Component } from "react";
import data from "./example.json";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableHighlight,
  Animated,
  Button
} from "react-native";
import PlaceTag from "./PlaceTag";

class PlaceTagFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {}

  renderItem = ({ item }) => {
    //console.log("JSON-DATA", item.tags.length);

    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return <PlaceTag item={item} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{
            paddingTop: 5,
            backgroundColor: "#F5F5F5"
          }}
          data={data}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
        />
        </View>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10
  },

  item: {
    backgroundColor: "#FFF"
  },
  itemInvisible: {
    backgroundColor: "transparent"
  }
});

export default PlaceTagFlatList;
