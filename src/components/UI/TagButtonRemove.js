import React, { Component } from "react";
import { Button, View } from "react-native";
import { connect } from "react-redux";
import { tagFriendRemoveAction } from "../../actions/tagFriendAction";
import { bindActionCreators } from "redux";
class TagButtonRemove extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Remove",
      item: []
    };
  }
  componentDidMount() {
    // this.setState({ item: [...this.state.item, this.props.tagged] });
    // console.log("FriendsUpdate", this.state.item);
  }

  onPressNext = () => {
    var newState = {};

    if (this.state.buttonText === "Tag") {
      this.props.tagFriendRemoveAction(this.props.item);
    }
    if (this.state.buttonText === "Remove") {
      alert("Removed");
    }

    console.log("ARRAYITEMS", this.props.item);
  };
  render() {
    return (
      <View>
        <Button
          title={this.state.buttonText}
          color="#BDBDBD"
          onPress={this.onPressNext.bind(this)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.tags.tagged
  };
};
const mapDispatchToProps = disaptch => ({
  ...bindActionCreators({ tagFriendRemoveAction }, disaptch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagButtonRemove);
