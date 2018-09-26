import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Box from "./UI/Box";
export default class Privacy extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedButton: "Everyone" };
    this.selectionOnPress = this.selectionOnPress.bind(this);
  }

  selectionOnPress(userType) {
    this.setState({ selectedButton: userType });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "flex-start", marginTop: 10 }}>
        <Box>
          <TouchableOpacity onPress={() => this.selectionOnPress("Everyone")}>
            <Text
              style={{
                fontWeight:
                  this.state.selectedButton === "Everyone" ? "bold" : "normal",
                color: "#333",
                fontSize: 15
              }}
            >
              Everyone
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.selectionOnPress("Followers")}>
            <Text
              style={{
                fontWeight:
                  this.state.selectedButton === "Followers" ? "bold" : "normal",
                color: "#333",
                fontSize: 15
              }}
            >
              Only Followers
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.selectionOnPress("Me")}>
            <Text
              style={{
                fontWeight:
                  this.state.selectedButton === "Me" ? "bold" : "normal",
                color: "#333",
                fontSize: 15
              }}
            >
              Only Me
            </Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 10, marginTop: 10 }}>
            *You can change the default from account settings
          </Text>
        </Box>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  switchButtonsText: {
    padding: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    justifyContent: "center",
    marginLeft: 20
  },
  textStyleBox: {
    flex: 1,
    color: "#333",
    fontSize: 14,
    marginLeft: 10,
    fontWeight: "bold",
    justifyContent: "center"
  }
});
