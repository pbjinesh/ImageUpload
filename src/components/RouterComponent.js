import React, { Component } from "react";
import { Router, Scene, Actions } from "react-native-router-flux";
import { StyleSheet } from "react-native";

import Home from "./Home";
import ImageGallerySelection from "./ImageGallerySelection";
import TripDetailsUpload from "./TripDetailsUpload";
import AddTravalourBuddy from "./AddTravalourBuddy";
import PlaceTagFlatList from "./PlaceTagFlatList";

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
          titleStyle={styles.navigationBarTitleStyle}
          onRight={() => Actions.tripupload()}
          rightTitle="Done"
        />
        <Scene
          key="tripupload"
          component={TripDetailsUpload}
          title="Wadi Rum"
          titleStyle={styles.navigationBarTitleStyle}
          onRight={() => Actions.home()}
          rightTitle="Done"
        />

        <Scene
          key="addbuddy"
          component={AddTravalourBuddy}
          title="Add Travlour Buddies"
          titleStyle={styles.navigationBarTitleStyle}
          onRight={() => Actions.tripupload()}
          rightTitle="Done"
        />
        <Scene
          key="placetag"
          component={PlaceTagFlatList}
          title="Pick Tags"
          titleStyle={styles.navigationBarTitleStyle}
          onRight={() => Actions.tripupload()}
          rightTitle="Done"
        />

       
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  navigationBarTitleStyle: {
    flex: 1,
    textAlign: "center",
    fontSize: 15
  }
});

export default RouterComponent;
