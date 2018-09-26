import React, { Component } from "react";
import { connect } from "react-redux";
import {
  tagPlaceAction,
  tagPlaceRemoveAction
} from "../actions/tagFriendAction";
import { bindActionCreators } from "redux";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
  Button
} from "react-native";
class SingleItemPlaceTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      placetags: [],
      placetag: [],
      tagname: props.tagname,
      bgcolor: "#FFF"
    };
  }
  componentDidMount() {
    console.log("TAGNAME", this.props.tagname);
    this.handleCheck(this.props.tagname);
  }

  handleCheck(place) {
    // console.log("handleCheck", this.state.placetag);
    this.setState({
      selected: this.props.placetag.some(item => place.subid === item.subid)
    });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.placetag === prevState.placetag
      ? {}
      : { placetag: nextProps.placetag };
  }
  _onPress(tagname) {
    this.setState(
      {
        placetags: tagname,
        //tagname: [...this.state.tagname, tagname.subid],
        selected: !this.state.selected
      },
      () => {
        var placeList = this.state.placetags;
        if (this.state.selected) {
          this.props.tagPlaceAction(placeList);
          this.setState({ bgcolor: "#DADADA" });
        }
        if (!this.state.selected) {
          this.setState({ bgcolor: "#FFF" });
          var placeAllList = [...this.state.placetag];
          let index = placeAllList.indexOf(tagname);
          this.props.tagPlaceRemoveAction(placeAllList, index);
          console.log("REMOVEPLACETAGNAME", tagname);
        }
      }
    );
  }
  render() {
    return (
      <TouchableOpacity
        key={this.state.tagname.subid}
        style={{
          margin: 5,
          padding: 7,
          backgroundColor: this.state.selected ? "#1769aa" : "#FFF",
          borderRadius: 25,
          color: "#333",
          borderWidth: 0.5,
          borderColor: "#333",
          textAlign: "center"
        }}
        onPress={() => this._onPress(this.state.tagname)}
      >
        <Text
          style={{ color: this.state.selected ? "#FFF" : "#333" }}
          key={this.state.tagname.subid}
        >
          {this.state.tagname.placetag}
        </Text>
      </TouchableOpacity>
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
const mapStateToProps = state => {
  return {
    placetag: state.places.placetag
  };
};
const mapDispatchToProps = disaptch => ({
  ...bindActionCreators({ tagPlaceAction, tagPlaceRemoveAction }, disaptch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleItemPlaceTag);
