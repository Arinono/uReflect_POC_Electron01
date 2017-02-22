import React from 'react';

const nbCol = 12;
const nbRow = 6;

var Widget = React.createClass({
  render: function () {
    var xSize = $(window).width() / nbCol,
      ySize = $(window).height() / nbRow;

    var style = {
      width: "calc(100vw/" + nbCol + " * " + this.props.width + ")",
      height: "calc(100vh/" + nbRow + " * " + this.props.height + ")",
    }
    if (this.props.debug == "true") {
      style.background = "tomato";
    }
    var posX = this.props.posX * xSize - xSize,
    posY = this.props.posY * ySize - ySize,
    minX = xSize * this.props.width,
    minY = ySize * this.props.height;

    style.transform = "translate("+ posX +"px, "+ posY +"px)";

    return (
      <div className="widget" data-posx={posX} data-posy={posY} data-minx={minX} data-miny={minY} style={style}>
        {this.props.render}
      </div>
    );
  }
});

export default Widget;
