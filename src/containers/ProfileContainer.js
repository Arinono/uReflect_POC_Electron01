import React from 'react';
import Widget from './Widget';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import {grey50, grey700} from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
    width:100,
//    backgroundColor: "#616161"
  },
};

var ProfileContainer = React.createClass({

  render: function() {
    var render = <div>
    <Chip
    backgroundColor={this.props.actual == 'father' ? grey50 : grey700}
    onClick={this.props.father}
    style={styles.chip}>
      <Avatar src="assets/images/father.svg" />
      Father
    </Chip>
    <Chip
    backgroundColor={this.props.actual == 'mother' ? grey50 : grey700}
    onClick={this.props.mother}
    style={styles.chip}>
      <Avatar src="assets/images/mother.svg" />
      Mother
    </Chip>
    <Chip
    backgroundColor={this.props.actual == 'child' ? grey50 : grey700}
    onClick={this.props.child}
    style={styles.chip}>
      <Avatar src="assets/images/child.svg" />
      Child
    </Chip>
    </div>;

    var options = {
      size: {
        width: 1,
        height: 1
      },
      pos: {
        x: 12,
        y: 6
      },
      behaviour: {
        resizable: false,
        draggable: false,
        debug: false
      },
      resizeOpt: {
        horizontal: false,
        vertical: false
      }
    }

    return (
      <Widget options={options} render={render} />

    );
  },
});

export default ProfileContainer;
