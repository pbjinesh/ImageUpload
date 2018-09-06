import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image
} from "react-native";
import { connect } from "react-redux";
const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `id-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 3;

class FlatlistDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
    this.state.selected = props.dataSelected;
    console.log("SELECTED-FLATLIST", props.selected);
  }

  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <Image
          source={{ uri: item.uri }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={formatData(this.state.selected, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
        keyExtractor={(item, index) => index}
      />
    );
  }
}
const mapStateToProps = state => {
  return { selected: state.imgs.selected };
};

export default connect(mapStateToProps)(FlatlistDemo);

const styles = StyleSheet.create({
  container: {
    flex: 1,

    margin: 5,
    marginVertical: 0
  },
  item: {
    backgroundColor: "#BCAAA4",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1,
    height: Dimensions.get("window").width / numColumns
  },
  itemInvisible: {
    backgroundColor: "transparent"
  },
  itemText: {
    color: "#fff"
  }
});
