import React, { Component } from "react";
import { Router, Scene, Actions } from "react-native-router-flux";
import { StyleSheet } from "react-native";

import Home from "./Home";
import ImageGallerySelection from "./ImageGallerySelection";
import TripDetailsUpload from "./TripDetailsUpload";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="home"
          component={Home}
          title="Home"
          titleStyle={styles.navigationBarTitleStyle}
          initial
        />
        <Scene
          key="gallery"
          component={ImageGallerySelection}
          title="Add Images"
          titleStyle={styles.navigationBarTitleStylePadding}
          onRight={() => Actions.home()}
          rightTitle="Done"
        />
        <Scene
          key="tripupload"
          component={TripDetailsUpload}
          title="Wadi Rum"
          titleStyle={styles.navigationBarTitleStylePadding}
          onRight={() => Actions.home()}
          rightTitle="Done"
        />
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  navigationBarTitleStyle: {
    // centering for Android
    flex: 1,
    textAlign: "center",
    fontSize: 14
  },
  navigationBarTitleStylePadding: {
    // centering for Android
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    marginLeft: -30
  }
});

export default RouterComponent;
