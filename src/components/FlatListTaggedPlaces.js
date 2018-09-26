import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { tagPlaceRemoveAction } from "../actions/tagFriendAction";
import {
  StyleSheet,
  Text,
  View,
  FlatList, 
  Alert,
 
} from "react-native";

class FlatListTaggedPlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placetag: []
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.placetag === prevState.placetag
      ? {}
      : { placetag: nextProps.placetag };
  }
  deleteUser(item) {
    Alert.alert(
      "Remove Place Tag?",
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
            
            var placeList = [...this.state.placetag];
            let index = placeList.indexOf(item);
            console.log("ITEM", item);
           
            this.props.tagPlaceRemoveAction(placeList, index);
          }
        }
      ],
      { cancelable: false }
    );
  }

  renderTagPlaceItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          <Text
            style={styles.btnStyle}
            key={item.subid}
            onPress={() => this.deleteUser(item)}
          >
            {item.placetag}
          </Text>
        </View>
      </View>
    );
  };

  render() {
    console.log("PLACETHISSTATE", this.state.placetag);
    return (
      <View>
        <FlatList
          horizontal={true}
          data={this.state.placetag}
          renderItem={this.renderTagPlaceItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginBottom: 1
  },
  btnStyle: {
    margin: 5,
    padding: 7,
    borderRadius: 25,
    color: "#333",
    borderWidth: 0.5,
    borderColor: "#333",
    textAlign: "center"
  },

  itemInvisible: {
    backgroundColor: "transparent"
  },
  itemText: {
    color: "#fff"
  }
});
const mapStateToProps = state => {
  console.log("GOTPLACESFROMREDUX", state);
  return {
    //selected: state.imgs.selected,
    placetag: state.places.placetag
  };
};

const mapDispatchToProps = disaptch => ({
  ...bindActionCreators({ tagPlaceRemoveAction }, disaptch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlatListTaggedPlaces);
