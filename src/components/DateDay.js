import React from 'react';

var DateDay = React.createClass({
  render: function() {
    var date = new Date();
    var day = date.getDay();
    var number = date.getDate();
    var month = date.getMonth() + 1;

    var sDay, sMonth, nieme = "";

    switch (day) {
      case 1:
        sDay = "Monday";
        break;
      case 2:
        sDay = "Tuesday";
        break;
      case 3:
        sDay = "Wednesday";
        break;
      case 4:
        sDay = "Thursday";
        break;
      case 5:
        sDay = "Friday";
        break;
      case 6:
        sDay = "Saturday";
        break;
      case 0:
        sDay = "Sunday";
        break;
    }

    switch (month) {
      case 1:
        sMonth = "January";
        break;
      case 2:
        sMonth = "February";
        break;
      case 3:
        sMonth = "March";
        break;
      case 4:
        sMonth = "April";
        break;
      case 5:
        sMonth = "May";
        break;
      case 6:
        sMonth = "June";
        break;
      case 7:
        sMonth = "July";
        break;
      case 8:
        sMonth = "August";
        break;
      case 9:
        sMonth = "September";
        break;
      case 10:
        sMonth = "October";
        break;
      case 11:
        sMonth = "November";
        break;
      case 12:
        sMonth = "December";
        break;
    }

    if (number == 1 || number == 21 || number == 31) {
      nieme = "st";
    } else if (number == 2 || number == 22) {
      nieme = "nd";
    } else if (number == 3 || number == 23) {
      nieme = "rd";
    } else {
      nieme = "th";
    }

    return (
      <span>{sDay}, {sMonth} {number}<sup>{nieme}</sup></span>
    )
  }
});

export default DateDay;
