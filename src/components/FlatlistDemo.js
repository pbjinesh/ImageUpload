import React, { Component } from "react";
import { connect } from "react-redux";
import FastImage from "react-native-fast-image";
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  TouchableHighlight,
  Alert
} from "react-native";

// const formatData = (data, numColumns) => {
//   //const numberOfFullRows = Math.floor(data.length / numColumns);

//   // let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
//   // while (
//   //   numberOfElementsLastRow !== numColumns &&
//   //   numberOfElementsLastRow !== 0
//   // ) {
//   //   //data.push({ key: `id-${numberOfElementsLastRow}`, empty: true });
//   //  // numberOfElementsLastRow++;
//   // }

//   return data;
// };

const numColumns = 3;

class FlatlistDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected
    };
    // this.state.selected = props.dataSelected;
  }

  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <TouchableHighlight
        style={styles.item}
        underlayColor="#f1f1f1"
        onLongPress={() => this.removeHandler(index)}
      >
        <FastImage
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: item.uri,
            priority: FastImage.priority.normal
          }}
        />
      </TouchableHighlight>
    );
  };
  removeHandler(index) {
    var newState = {};
    Alert.alert(
      "Remove Image",
      "Are you sure want to remove?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            newState.selected = this.state.selected.slice(0);
            newState.selected.splice(index, 1);

            this.setState(newState);
            console.log("NEWSTATE", this.state.selected);
          }
        }
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.selected}
        renderItem={this.renderItem}
        numColumns={numColumns}
        keyExtractor={item => item.pid}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    selected: state.imgs.selected
  };
};

export default connect(mapStateToProps)(FlatlistDemo);

const styles = StyleSheet.create({
  container: {
    marginVertical: 0
  },
  item: {
    backgroundColor: "#BCAAA4",
    alignItems: "center",
    justifyContent: "space-between",
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
