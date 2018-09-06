import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import RouterComponent from "./src/components/RouterComponent";
import { Scene, Router } from "react-native-router-flux";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from './src/reducers';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <RouterComponent />
      </Provider>
    );
  }
}
