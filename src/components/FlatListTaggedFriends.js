import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { tagFriendRemoveAction } from "../actions/tagFriendAction";
import FastImage from "react-native-fast-image";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableHighlight,
  Alert,
  Button
} from "react-native";

class FlatListTaggedFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagged: []
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.tagged === prevState.tagged
      ? {}
      : { tagged: nextProps.tagged };
  }
  deleteUser(item) {
    console.log("DELETE", item);
    Alert.alert(
      "Remove Friend?",
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
            var userList = [...this.state.tagged];
            let index = userList.indexOf(item);
            console.log("USRLST", userList);
            // userList.splice(index, 1);
            // this.setState({ userList });
            this.props.tagFriendRemoveAction(userList, index);
            console.log("DEATIL", index);
          }
        }
      ],
      { cancelable: false }
    );
  }

  renderTagFriendItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <TouchableHighlight style={styles.item}>
        <View style={styles.Viewitem}>
          {item.image ? (
            <FastImage
              style={styles.UserIcon}
              source={{
                uri: item.image,
                priority: FastImage.priority.normal
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          ) : (
            <Image
              source={require("./resources/profile_default.png")}
              style={styles.UserIcon}
            />
          )}

          <View>
            <Text style={styles.TextStyle}>{item.name}</Text>
            <Text style={styles.TextStyle2}>{item.phone} </Text>
          </View>

          <View
            style={[
              {
                width: "auto",
                position: "absolute",
                right: 10,
                paddingLeft: 10,
                paddingRight: 10
              }
            ]}
          >
            <View>
              <Button
                title="Remove"
                color="#BDBDBD"
                onPress={() => this.deleteUser(item)}
              />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    console.log("THISSTATE", this.state.tagged);
    return (
      <FlatList
        data={this.state.tagged}
        renderItem={this.renderTagFriendItem}
        keyExtractor={(item, index) => index.toString()}
      />
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
    justifyContent: "center",
    alignItems: "center"
  },
  Viewitem: {
    alignItems: "center",

    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    flex: 1
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
  }
});
const mapStateToProps = state => {
  console.log("mapStateToProps", state.tags.tagged);
  return {
    tagged: state.tags.tagged
  };
};

const mapDispatchToProps = disaptch => ({
  ...bindActionCreators({ tagFriendRemoveAction }, disaptch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlatListTaggedFriends);
