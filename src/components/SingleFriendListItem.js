import React, { Component } from "react";
import { connect } from "react-redux";

import FastImage from "react-native-fast-image";
import {
  tagFriendAction,
  tagFriendRemoveAction,
  taggedFriendsRemovebyId
} from "../actions/tagFriendAction";
import { bindActionCreators } from "redux";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableHighlight,
  Dimensions
} from "react-native";

class SingleFriendListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      tagged: [],
      item: props.singleItem
    };
  }

  //   componentDidMount() {
  //     console.log("ComponentDidMount", this.props.singleItem);
  //    // this.handleCheck(this.props.singleItem);
  //   }

  //   handleCheck(buddy) {
  //     console.log("handleCheck", this.props.singleItem);

  //     if (this.props.tagged.some(item => buddy.pid === item.pid)) {
  //       this.setState({
  //         selected: true
  //       });
  //       return "Remove";
  //     } else {
  //       this.setState({
  //         selected: false
  //       });
  //       return "Tag";
  //     }
  //   }

  onPressNext(buddy, itemIndex) {
    this.setState(
      {
        //placetags: tagname,
        selected: !this.props.tagged.some(
          item => this.props.singleItem.pid === item.pid
        )
      },
      function() {
        if (this.state.selected) {
          this.props.tagFriendAction(buddy);
        }
        if (!this.state.selected) {
          var userListAll = [...this.state.tagged];
          // let index = userListAll.indexOf(buddy);
          this.props.taggedFriendsRemovebyId(userListAll, itemIndex);
        }
      }
    );
  }
  render() {
    return (
      <TouchableHighlight style={styles.item}>
        <View style={styles.Viewitem}>
          <View style={styles.listleft}>
            {this.props.singleItem.image ? (
              <FastImage
                style={styles.UserIcon}
                source={{
                  uri: this.props.singleItem.image,
                  priority: FastImage.priority.normal
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            ) : (
              <FastImage
                style={styles.UserIcon}
                source={require("./resources/profile_default.png")}
                resizeMode={FastImage.resizeMode.contain}
              />
            )}

            <View>
              <Text style={styles.TextStyle}>{this.props.singleItem.name}</Text>
              <Text style={styles.TextStyle2}>
                {this.props.singleItem.phone}
              </Text>
            </View>
          </View>
          <View>
            <Button
              title={
                this.props.tagged.some(
                  item => this.props.singleItem.pid === item.pid
                )
                  ? "Remove"
                  : "Tag"
              }
              color="#0288D1"
              onPress={() =>
                this.onPressNext(
                  this.props.singleItem,
                  this.props.singleItem.pid
                )
              }
            />
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

  SectionStyle: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderBottomWidth: 0.5,
    borderBottomColor: "#cacaca",
    height: 50,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "space-between"
  },
  ImageStyle: {
    height: 25,
    width: 25,
    margin: 5,
    alignItems: "center"
  },
  Viewitem: {
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%"
  },
  TextStyle: {
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    justifyContent: "center"
  },
  TextStyle2: {
    paddingLeft: 10,
    fontSize: 12,
    color: "#333",
    justifyContent: "center"
  },

  UserIcon: {
    height: Dimensions.get("window").width * (14 / 100),
    width: Dimensions.get("window").width * (14 / 100),
    borderRadius: (Dimensions.get("window").width * (14 / 100)) / 2
  },
  item: {
    backgroundColor: "#FFF",
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
    margin: 0.5,
    height: 60 //Dimensions.get("window").width / numColumns
  },
  itemInvisible: {
    backgroundColor: "transparent"
  },
  itemText: {
    color: "#fff"
  },
  listleft: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  }
});

const mapStateToProps = state => {
  console.log("TAGGED", state.tags.tagged);
  return {
    tagged: state.tags.tagged
  };
};
const mapDispatchToProps = disaptch => ({
  ...bindActionCreators(
    { tagFriendAction, tagFriendRemoveAction, taggedFriendsRemovebyId },
    disaptch
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleFriendListItem);
