console.log("ENTER APP");
import React from 'react';
import { Grid, Col } from 'react-bootstrap';

import GridFull from '../components/GridFull';
import ProfileContainer from './ProfileContainer';
import ChildProfile from '../profiles/ChildProfile';
import FatherProfile from '../profiles/FatherProfile';
import MotherProfile from '../profiles/MotherProfile';

var App = React.createClass({

  render: function() {

    return (
      <div className="widgetContainer" id="widget_container">
        <GridFull />
        <FatherProfile state={this.state.stateFather} />
        <MotherProfile state={this.state.stateMother}/>
        <ChildProfile state={this.state.stateChild}/>
        <ProfileContainer father={this.father} mother={this.mother} child={this.child} actual={this.state.profile}/>
      </div>
    );
  },

  getInitialState: function() {
    console.log("INITAPP");
    return {
        stateFather: 'visible',
        stateMother: 'hidden',
        stateChild: 'hidden',
        profile: 'father'
    };
  },

  father: function() {
    this.setState({
      stateFather: 'visible',
      stateMother: 'hidden',
      stateChild: 'hidden',
      profile: 'father'
   });
  },

  mother: function() {
    this.setState({
      stateFather: 'hidden',
      stateMother: 'visible',
      stateChild: 'hidden',
      profile: 'mother'
   });
  },

  child: function() {
    this.setState({
      stateFather: 'hidden',
      stateMother: 'hidden',
      stateChild: 'visible',
      profile: 'child'
   });
  }

});

export default App;
