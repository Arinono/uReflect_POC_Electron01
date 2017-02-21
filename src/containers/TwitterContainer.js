import React from 'react';
import Tweets from '../components/Tweets';
import ReactScrollableList from 'react-scrollable-list';

var TwitterContainer = React.createClass({

  render: function() {

    let listItems = [];
    for (let i = 0; i < 100; i++) {
      listItems.push({ id: i, content: i });
    }

    return (<div className="widget twitter">
    <Tweets />
    </div>);
  },

});

export default TwitterContainer;
