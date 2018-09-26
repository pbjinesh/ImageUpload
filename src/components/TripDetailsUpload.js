import React, { Component } from "react";
import CardViewSection from "./UI/CardViewSection";
import BoxSection from "./UI/BoxSection";
import Box2 from "./UI/Box2";
import FlatlistDemo from "./FlatlistDemo";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import FlatListTaggedFriends from "./FlatListTaggedFriends";
import FlatListTaggedPlaces from "./FlatListTaggedPlaces";
import Privacy from "./Privacy";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  DatePickerAndroid,
  TextInput
} from "react-native";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

class TripDetailsUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      tagged: [],
      taggedplace: [],
      selectedDate: "",
      selectedDatebool: false,
      selectedTagPlacebool: false,
      selectedFriendsbool: false
    };
  }

  onPressNextPlaceTag() {
    Actions.placetag();
  }
  onPressGallery() {
    Actions.gallery();
  }

  onPressNext() {
    Actions.addbuddy();
  }
  async openAndroidDatePicker() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(),
        maxDate: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        var date = monthNames[month] + " " + day + " " + year;
        this.setState({
          selectedDate: date,
          selectedDatebool: true
        });
        console.log("SELECTED-DATE", date);
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return nextProps.tagged === prevState.tagged
  //     ? {}
  //     : { tagged: nextProps.tagged };
  // }

  render() {
    console.log("ARRAYLENGTH", this.state.tagged.length);
    // console.log("TaggedFriends", this.props.tagged);
    let dateBox,
      dateSelection,
      tagplaceSelection,
      friendSelection,
      taglists,
      taggedplacelist;

    if (this.props.placetag.length > 0) {
      taggedplacelist = (
        <View>
          <TouchableOpacity
            style={styles.item}
            onPress={this.onPressNextPlaceTag.bind(this)}
          >
            <Box2>
              <View
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              >
                <Image
                  source={require("./resources/tag.png")}
                  style={{ width: 32, height: 32, alignItems: "center" }}
                />

                <Text style={styles.textStyleBox}>Place Tags</Text>
              </View>
            </Box2>
          </TouchableOpacity>

          <BoxSection>
            <FlatListTaggedPlaces />
          </BoxSection>
        </View>
      );
    }

    if (this.props.tagged.length > 0) {
      taglists = (
        <View>
          <TouchableOpacity
            style={styles.item}
            onPress={this.onPressNext.bind(this)}
          >
            <Box2>
              <View
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              >
                <Image
                  source={require("./resources/usergroup.png")}
                  style={{ width: 32, height: 32, alignItems: "center" }}
                />
                <Text style={styles.textStyleBox}>Travel Buddies</Text>
              </View>
            </Box2>
          </TouchableOpacity>
          <BoxSection>
            <FlatListTaggedFriends />
          </BoxSection>
        </View>
      );
    }

    if (this.props.placetag.length <= 0) {
      tagplaceSelection = (
        <TouchableOpacity
          style={styles.item}
          onPress={this.onPressNextPlaceTag.bind(this)}
        >
          <Box2>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Image
                source={require("./resources/tag.png")}
                style={{ width: 32, height: 32 }}
              />

              <Text style={styles.textStyle}>
                Select some tags. Tell us what kind of place
              </Text>
            </View>
          </Box2>
        </TouchableOpacity>
      );
    }

    if (this.props.tagged.length <= 0) {
      friendSelection = (
        <TouchableOpacity
          style={styles.item}
          onPress={this.onPressNext.bind(this)}
        >
          <Box2>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Image
                source={require("./resources/usergroup.png")}
                style={{ width: 32, height: 32 }}
              />

              <Text style={styles.textStyle}>
                Visited with friends? Tag travel buddies
              </Text>
            </View>
          </Box2>
        </TouchableOpacity>
      );
    }

    if (!this.state.selectedDatebool) {
      dateSelection = (
        <TouchableOpacity
          style={styles.item}
          onPress={this.openAndroidDatePicker.bind(this)}
        >
          <Box2>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Image
                source={require("./resources/calendar.png")}
                style={{ width: 32, height: 32 }}
              />

              <Text style={styles.textStyle}>
                Set a date of visit. We cant find one from the uploaded
              </Text>
            </View>
          </Box2>
        </TouchableOpacity>
      );
    }

    if (this.state.selectedDatebool) {
      dateBox = (
        <TouchableOpacity
          style={styles.item}
          onPress={this.openAndroidDatePicker.bind(this)}
        >
          <Box2>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Image
                source={require("./resources/calendar.png")}
                style={{ width: 32, height: 32 }}
              />

              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  marginLeft: 10,
                  color: "#333"
                }}
              >
                {this.state.selectedDate}
              </Text>
            </View>
          </Box2>
        </TouchableOpacity>
      );
    }

    return (
      <ScrollView>
        <View>
          <CardViewSection>
            <TextInput style={{ color: "#333" }} multiline={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. nulla pariatur.
            </TextInput>
          </CardViewSection>
        </View>

        {dateSelection}
        {friendSelection}
        {tagplaceSelection}
        <TouchableOpacity
          style={styles.item}
          onPress={this.onPressGallery.bind(this)}
        >
          <Box2>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Image
                source={require("./resources/camera.png")}
                style={{ width: 32, height: 32, alignItems: "center" }}
              />
              <Text style={styles.textStyleBox}>Photos & Videos</Text>
            </View>
          </Box2>
        </TouchableOpacity>
        <BoxSection>
          <FlatlistDemo />
        </BoxSection>

        {dateBox}
        {taglists}
        {taggedplacelist}

        <Box2>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("./resources/lock.png")}
              style={{ width: 32, height: 32, alignItems: "center" }}
            />

            <Text style={{ marginLeft: 10 }}>Who can view?</Text>
          </View>
        </Box2>

        <BoxSection>
          <Privacy />
        </BoxSection>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    //selected: state.imgs.selected,
    tagged: state.tags.tagged,
    placetag: state.places.placetag
  };
};
export default connect(mapStateToProps)(TripDetailsUpload);

var styles = StyleSheet.create({
  textStyle: {
    color: "#333",
    fontSize: 14,
    textAlign: "justify",
    marginLeft: 10
  },
  item: {},
  textStyleBox: {
    flex: 1,
    color: "#333",
    fontSize: 14,
    marginLeft: 10,
    fontWeight: "bold",
    justifyContent: "center"
  },
  mainContainer: {
    flex: 0,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "flex-start"
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
  ImageStyle: {
    height: 25,
    width: 25,
    margin: 5,
    alignItems: "center"
  }
});
