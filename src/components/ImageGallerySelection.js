import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { imageSelected } from "../actions/imageSelectionAction";
import { bindActionCreators } from "redux";
import CameraRollPicker from "react-native-camera-roll-picker";

import { PermissionsAndroid } from "react-native";
import { Actions } from "react-native-router-flux";

class ImageGallerySelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
      selected: []
    };
  }

  requestCameraPermission() {
    try {
      const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "Read Write Permission Needed",
          message: " App needs access to your storage"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Permission Granted");
      } else {
        console.log("Permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  getSelectedImages(images, current) {
    var num = images.length;

    this.setState({
      num: num,
      selected: images
    });

    this.props.imageSelected(this.state.selected);
    console.log("SELECTEDIMGS", this.state.selected);
  }
  // onPressNext() {
  //   Actions.tripupload({ data: this.state.selected });
  // }
  componentDidMount() {
    this.requestCameraPermission();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>
            <Text style={styles.bold}> {this.state.num} </Text> images has been
            selected
          </Text>
        </View>

        <CameraRollPicker
          scrollRenderAheadDistance={500}
          initialListSize={1}
          pageSize={6}
          removeClippedSubviews={false}
          groupTypes="SavedPhotos"
          batchSize={5}
          maximum={25}
          selected={this.state.selected}
          assetType="Photos"
          imagesPerRow={3}
          imageMargin={3}
          callback={this.getSelectedImages.bind(this)}
        />
      </View>
    );
  }
}

// const mapStateToProps = state => ({
//   selected: state.selected
// });

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = disaptch => ({
  ...bindActionCreators({ imageSelected }, disaptch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGallerySelection);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  content: {
    height: 56,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "transparent"
  },
  text: {
    fontSize: 16,
    alignItems: "center",
    color: "#333"
  },
  bold: {
    fontWeight: "bold"
  },
  info: {
    fontSize: 12
  }
});
