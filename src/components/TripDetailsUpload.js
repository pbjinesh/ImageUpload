import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  Dimensions
} from "react-native";
import CardViewSection from "./UI/CardViewSection";
import BoxSection from "./UI/BoxSection";
import FlatlistDemo from "./FlatlistDemo";
import { connect } from "react-redux";
const data = [
  { key: "A" },
  { key: "B" },
  { key: "C" },
  { key: "D" },
  { key: "E" },
  { key: "F" },
  { key: "G" },
  { key: "H" },
  { key: "I" },
  { key: "J" },
  { key: "K" },
  { key: "L" }
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 3;
class TripDetailsUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
    this.state.selected = props.data;
    console.log("PROPSEMAIL", props.email);
   
  }

 

  async openAndroidDatePicker() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date()
      });
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <CardViewSection>
            <Text style={styles.textStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

            <Text style={styles.textStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </CardViewSection>
          <BoxSection onPress={this.openAndroidDatePicker.bind(this)}>
            <Image
              source={require("./resources/camera.png")}
              style={{ width: 32, height: 32, marginLeft: 10 }}
            />
            <Text style={styles.textStyleBox}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Text>
          </BoxSection>

          <BoxSection>
            <Image
              source={require("./resources/usergroup.png")}
              style={{ width: 32, height: 32, marginLeft: 10 }}
            />
            <Text style={styles.textStyleBox}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Text>
          </BoxSection>
          <BoxSection>
            <Image
              source={require("./resources/usergroup.png")}
              style={{ width: 32, height: 32, marginLeft: 10 }}
            />
            <Text style={styles.textStyleBox}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Text>
          </BoxSection>
        </View>

        <FlatlistDemo dataSelected={this.state.selected} />
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    email: state.imgs.email
  };
};
export default connect(mapStateToProps)(TripDetailsUpload);

var styles = StyleSheet.create({
  textStyle: {
    color: "#333",
    fontSize: 14,
    textAlign: "justify"
  },
  textStyleBox: {
    color: "#FFF",
    fontSize: 14,
    marginLeft: 10
  },
  mainContainer: {
    flex: 0,

    backgroundColor: "#DADADA",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
