import React, { Component } from "react";
import { Button, View } from "react-native";
import { connect } from "react-redux";
import {
  tagFriendAction,
  tagFriendRemoveAction,
  taggedFriendsRemovebyId
} from "../../actions/tagFriendAction";
import { bindActionCreators } from "redux";
class TagButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Tag",
      item: props.item,
      itemindex: props.itemindex,
      selectedbuddy: [],
      tagged: [],
      selected: false
    };
  }
  componentDidMount() {
    console.log("ItemIndex", this.state.itemindex);
    this.handleCheck(this.props.item);
  }

  handleCheck(buddy) {
    if (this.props.tagged.some(item => buddy.pid === item.pid)) {
      this.setState({
        selected: true,
        buttonText: "Remove"
      });
    } else {
      this.setState({
        selected: false,
        buttonText: "Tag"
      });
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("NEXT PROPS", nextProps.tagged);

    return nextProps.tagged === prevState.tagged
      ? {}
      : { tagged: nextProps.tagged };
  }

  onPressNext(buddy, itemIndex) {
    console.log("STATE-INDEX", itemIndex);
    console.log("BUDDYLIST", buddy);
    this.setState(
      {
        //placetags: tagname,
        selected: !this.state.selected
      },
      function() {
        if (this.state.selected) {
          this.setState({ buttonText: "Remove" });
          this.props.tagFriendAction(buddy);
        }
        if (!this.state.selected) {
          this.setState({ buttonText: "Tag" });
          var userListAll = [...this.state.tagged];
          // let index = userListAll.indexOf(buddy);
          this.props.taggedFriendsRemovebyId(userListAll, itemIndex);
          console.log("REMOVEINDEX", itemIndex);
        }
      }
    );

    // if (this.state.buttonText === "Tag")
    // {
    //   this.setState({
    //     buttonText: "Remove"
    //   });

    //   this.props.tagFriendAction(this.props.item);
    //   console.log("ACTION","ADDACTION Executed");
    // }
    // if (this.state.buttonText === "Remove") {
    //   this.setState({
    //     buttonText: "Tag"
    //   });

    //   var userList = [this.state.tagged];
    //   let index = userList.indexOf(this.props.item);
    //   console.log("INDEX",index);
    //   console.log("USERLIST",userList);
    //   this.props.tagFriendRemoveAction(userList, index);
    //   console.log("ACTION"," REMOVEACTION Executed");
    // }

    //console.log("ARRAYITEMS", userList);
  }
  render() {
    return (
      
      <View>
        <Button
          title={this.state.buttonText}
          color="#0288D1"
          onPress={() => this.onPressNext(this.state.item, this.state.item.pid)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log("TAGGED", state.tags.tagged);
  return {
    tagged: state.tags.tagged
  };
};
const mapDispatchToProps = disaptch => ({
  ...bindActionCreators(
    { tagFriendAction, tagFriendRemoveAction, taggedFriendsRemovebyId },
    disaptch
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagButton);
