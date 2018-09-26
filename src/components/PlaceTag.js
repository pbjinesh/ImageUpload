import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated
} from "react-native";

// import { connect } from "react-redux";
// import { tagPlaceAction } from "../actions/tagFriendAction";
// import { bindActionCreators } from "redux";
import SingleItemPlaceTag from "./SingleItemPlaceTag";
class PlaceTag extends Component {
  constructor(props) {
    super(props);

    this.icons = {
      up: require("./resources/arrowup.png"),
      down: require("./resources/arrowdown.png")
    };

    this.state = {
      item: props.item,
      title: props.title,
      expanded: true,
      animation: new Animated.Value(),
      placetags: [],
      checkeditems: [],
      selected: false,
      bgcolor: "#DADADA"
    };
  }

  _onPress(tagname) {
    this.setState(
      {
        placetags: tagname,
        checkeditems: [...this.state.checkeditems, tagname.subid],
        selected: !this.state.selected
      },
      () => {
        var placeList = this.state.placetags;
        console.log("PLACETAGS", placeList);

        if (this.state.selected) {
          this.setState({ bgcolor: "#DADADA" });
        }
        if (!this.state.selected) {
          this.setState({ bgcolor: "#FFF" });
        }
        console.log("ItemArray", this.state.checkeditems);
      }
    );
  }

  toggle() {
    let initialValue = this.state.expanded
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.expanded
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(this.state.animation, {
      toValue: finalValue
    }).start();
  }

  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height
    });
  }

  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height
    });
  }

  render() {
    let icon = this.icons["down"];

    if (this.state.expanded) {
      icon = this.icons["up"];
    }

    return (
      <Animated.View
        style={[styles.container, { height: this.state.animation }]}
      >
        <View
          style={styles.titleContainer}
          onLayout={this._setMinHeight.bind(this)}
        >
          <Text style={styles.TextStyle} onPress={this.toggle.bind(this)}>
            {this.state.item.placetype}
          </Text>
          <TouchableHighlight
            style={styles.button}
            underlayColor="#f1f1f1"
            onPress={this.toggle.bind(this)}
          >
            <Image style={styles.buttonImage} source={icon} />
          </TouchableHighlight>
        </View>

        <View
          style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}
          onLayout={this._setMaxHeight.bind(this)}
        >
          {this.state.item.tags.map(
            tagname => (
              console.log("SINGLEITEMPLACE", tagname),
              <SingleItemPlaceTag tagname={tagname} key={tagname.subid} />
            )
          )}
        </View>
      </Animated.View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginBottom: 1
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50
  },

  buttonImage: {
    width: 25,
    height: 25
  },

  TextStyle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    width: "90%",
    justifyContent: "center"
  },
  btnStyle: {
    margin: 5,
    padding: 7,
    borderRadius: 25,
    backgroundColor: "#cacaca",
    borderWidth: 0.5,
    borderColor: "#333"
  }
});

// const mapStateToProps = state => {
//   console.log("mapStateToPlaceTag", state);
//   return {
//     placetag: state.places.placetag
//   };
// };
// const mapDispatchToProps = disaptch => ({
//   ...bindActionCreators({ tagPlaceAction }, disaptch)
// });


export default PlaceTag;
