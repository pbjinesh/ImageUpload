import React, { Component } from "react";
import { connect } from "react-redux";
import LoadSpinner from "./UI/LoadSpinner";
import SingleFriendListItem from "./SingleFriendListItem";
import { NetInfo } from "react-native";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  FlatList,
  Dimensions,
  ScrollView
} from "react-native";
import axios from "axios";
const accesstkn="ceyXdlkfjjlkd.didsdfds";

const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXMiOiJra2pma2dkIiwidWlkIjoiNTUiLCJzdWIiOiJhdXRoLXRva2VuIiwiaXNzIjoidHJhdmFsb3VyIiwiZXhwIjoxNTM3ODg5NTkzLCJpYXQiOjE1Mzc4ODIzOTN9._uuHOCGs4Hg72OWGTMtTffKZd13Va70J9Ma7W9gDc-0";

class AddTravalourBuddy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      users: "",
      loading: false,
      searchloading: false,
      tagged: false,
      extraData: ""
    };
  }

  renderFriendItem = ({ item, index }) => {
    console.log("SINGLE", item);
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return <SingleFriendListItem singleItem={item} />;
  };

  componentDidMount() {
    var postData = {
      userId: 55,
      startLimit: 0,
      limitCount: 20,
      query: ""
    };
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "X-ACCESS-TOKEN": accessToken
      }
    };

    this.setState({ loading: true }, () => {
      axios
        .post(
          "https://mobile-api-dev.travalour.com/v1/message/get-users",
          postData,
          axiosConfig
        )
        .then(json =>
          json.data.usersByName.map((result, index) => ({
            pid: result.userId,
            name: result.userName,
            image: result.userImage
              ? `https://s3.amazonaws.com/uat.travalour.usermedia/${
                  result.userImage
                }`
              : "",
            phone: result.userUserName,
            buttonText: "Tag"
          }))
        )
        .then(newData => {
          this.setState({ users: newData, loading: false });
        });
    });
  }

  searchFilterFunction = text => {
    // cancel the previous request
    if (typeof this.source != typeof undefined) {
      this.source.cancel("Operation canceled due to new request.");
      console.log("RequestStatus", this.source.cancel);
      this.setState({ searchloading: false });
    }
    // save the new request for cancellation
    this.source = axios.CancelToken.source();
    console.log("SOURCE-TYPE", this.source);

    var postData = {
      userId: 55,
      startLimit: 0,
      limitCount: 20,
      query: text
    };
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "X-ACCESS-TOKEN": accessToken
      }
    };

    const request = this.setState({ searchloading: true }, () => {
      axios
        .post(
          "https://mobile-api-dev.travalour.com/v1/message/get-users",
          postData,
          axiosConfig,
          { cancelToken: this.source.token }
        )
        .then(json =>
          json.data.usersByName.map((result, index) => ({
            pid: result.userId,
            name: result.userName,
            image: result.userImage
              ? `https://s3.amazonaws.com/uat.travalour.usermedia/${
                  result.userImage
                }`
              : "",
            phone: result.userUserName,
            buttonText: "Tag"
          }))
        )
        .then(newData => {
          this.setState({
            users: newData,
            searchloading: false,
            extraData: newData
          });
          console.log("STATEDATA", this.state.users);
        })
        .catch(error => {
          //handle error
          if (axios.isCancel(error)) {
            console.log("Request-canceled", error.cancel);
          } else {
            console.log("Request-canceled", error.cancel);
          }
        });
    });
  };
  render() {
    const loading = this.state.loading;
    const searchloading = this.state.searchloading;
    console.log("LOADING", loading);
    console.log("NEWSTATE", this.state.users);

    return (
      <View style={styles.container} keyboardShouldPersistTaps="never">
        <View style={styles.SectionStyle}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Image
              source={require("./resources/search.png")}
              style={styles.ImageStyle}
            />

            <TextInput
              style={{ width: "80%" }}
              placeholder="Search Travalour Buddies..."
              underlineColorAndroid="transparent"
              onChangeText={text => this.searchFilterFunction(text)}
            />
          </View>
          {searchloading ? <LoadSpinner /> : null}
        </View>
        {loading ? (
          <LoadSpinner />
        ) : (
          <ScrollView>
            <View>
              <FlatList
                data={this.state.users}
                extraData={this.state.extraData}
                style={{ marginBottom: 50 }}
                renderItem={this.renderFriendItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </ScrollView>
        )}
      </View>
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
  return {
    tagged: state.tags.tagged
  };
};

export default connect(mapStateToProps)(AddTravalourBuddy);
