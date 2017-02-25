import React from 'react';

const nbCol = 12;
const nbRow = 6;

function widgetStyle(width, height) {
  return ({
    width: "calc(100vw/" + nbCol + " * " + width + ")",
    height: "calc(100vh/" + nbRow + " * " + height + ")"
  });
}

function calcGridSize() {
  return ({
    x: $(window).width() / nbCol,
    y: $(window).height() / nbRow
  });
}

var Widget = React.createClass({
  render: function () {
    var colSize = calcGridSize(),
    posX = this.props.options.pos.x * colSize.x - colSize.x,
    posY = this.props.options.pos.y * colSize.y - colSize.y,
    minX = colSize.x * this.props.options.size.width,
    minY = colSize.y * this.props.options.size.height;

    var styleContainer = widgetStyle(this.props.options.size.width, this.props.options.size.height);
    if (this.props.options.behaviour.debug == true) {
      styleContainer.background = "tomato";
    }
    styleContainer.transform = "translate("+ posX +"px, "+ posY +"px)";

    return (
      <div className="widget"
        data-x={posX}
        data-y={posY}
        data-minx={minX}
        data-miny={minY}
        data-resizable={this.props.options.behaviour.resizable}
        data-draggable={this.props.options.behaviour.draggable}
        data-resizableHorizontaly={this.props.options.resizeOpt.horizontal}
        data-resizableVertcaly={this.props.options.resizeOpt.vertical}
        style={styleContainer}>
          <div className="overlay"></div>
          {this.props.render}
      </div>
    );
  }
});

export default Widget;
