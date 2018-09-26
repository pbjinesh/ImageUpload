import React, { Component } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import Panel from "./PlaceTag";
import data from "./example.json";

export default class PlaceTagMain extends Component {
  constructor() {
    super();

    this.state = {
      selected: false,
      backgroundColor: "#FFF",
      data:{}
    };
  }
  componentDidMount() {
    const word = data.name;
    this.setState({ data: data });
    console.log("JSON-DATA", this.state.data);
   // data.tags.map(x => console.log(x.placetag));
  }

  changeColor() {
    this.setState({ selected: !this.state.selected });
    if (!this.state.selected) {
      this.setState({
        backgroundColor: "#29B6F6"
      });
    } else {
      this.setState({
        backgroundColor: "#FFF"
      });
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Panel title="Nature">
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            <Text
              onPress={this.changeColor.bind(this)}
              style={[
                styles.btnStyle,
                { backgroundColor: this.state.backgroundColor }
              ]}
            >
              Beach
            </Text>

            <Text
              onPress={this.changeColor.bind(this)}
              style={[
                styles.btnStyle,
                { backgroundColor: this.state.backgroundColor }
              ]}
            >
              Waterfall
            </Text>
            <Text _onPress={status => {}} style={styles.btnStyle}>
              Lake/River/Pond
            </Text>
            <Text _onPress={status => {}} style={styles.btnStyle}>
              Viewpoints
            </Text>
            <Text _onPress={status => {}} style={styles.btnStyle}>
              Desert
            </Text>
            <Text _onPress={status => {}} style={styles.btnStyle}>
              Grassland
            </Text>
          </View>
        </Panel>
        <Panel title="Trek/Hike">
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            <Text _onPress={status => {}} style={styles.btnStyle}>
              2-5 day Trek
            </Text>
            <Text _onPress={status => {}} style={styles.btnStyle}>
              1 Day Trek
            </Text>
            <Text _onPress={status => {}} style={styles.btnStyle}>
              Urban Walk
            </Text>
            <Text _onPress={status => {}} style={styles.btnStyle}>
              Short Hike
            </Text>
            <Text _onPress={status => {}} style={styles.btnStyle}>
              6-10 day trek
            </Text>
          </View>
        </Panel>
        <Panel title="Adventure Activites" expanded="false">
          <Text>Lorem ipsum dolor sit amet...</Text>
        </Panel>

        <Panel title="Food & Drinks">
          <Text>Lorem ipsum dolor sit amet...</Text>
        </Panel>
        <Panel title="Man-made Structures">
          <Text>Lorem ipsum dolor sit amet...</Text>
        </Panel>
        <Panel title="Events & Festivals">
          <Text>Lorem ipsum dolor sit amet...</Text>
        </Panel>
        <Panel title="Shopping">
          <Text>Lorem ipsum dolor sit amet...</Text>
        </Panel>
        <Panel title="Religious Places">
          <Text>Lorem ipsum dolor sit amet...</Text>
        </Panel>
        <Panel title="Stay/Wellness">
          <Text>Lorem ipsum dolor sit amet...</Text>
        </Panel>
        <Panel title="History & Culture">
          <Text>Lorem ipsum dolor sit amet...</Text>
        </Panel>
      </ScrollView>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 10,
    paddingBottom: 20
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
  btnStyleClick: {
    margin: 5,
    padding: 7,
    backgroundColor: "#01579B",
    borderRadius: 25,
    color: "#FFF",
    borderWidth: 0.5,
    borderColor: "#333",
    textAlign: "center"
  }
});
