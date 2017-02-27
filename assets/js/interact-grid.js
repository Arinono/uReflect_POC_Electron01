var $ = require('jquery');

var gridX = 12, gridY = 6, xd = 0, yd = 0;

$(document).ready(function() {
  $('#widget_container').append("<div id=\"widget_preview\"></div>");
});

function pythagoreTmtc(pt1, pt2) {
  dX = pt2.posx - pt1.posx;
  dY = pt2.posy - pt1.posy;

  return Math.pow(dX, 2) + Math.pow(dY, 2);
}

function calcNearestPt(ptList, point) {
  var curDist = 0;
  var minDist = pythagoreTmtc(point, ptList[0]);
  var idx = 0;

  for (i = 1; i < ptList.length; ++i) {
      curDist = pythagoreTmtc(point, ptList[i]);

      if (minDist > curDist) {
        minDist = curDist;
        idx = i;
      }
  }

  return idx;
}

interact('.editable')
  .draggable({
    snap: {
      targets: [
        interact.createSnapGrid({ x: $(document).width() / gridX , y: $(document).height() / gridY })
      ],
      range: Infinity,
      relativePoints: [ { x: 0, y: 0 } ],
      endOnly: true
    },
    inertia: true,
    restrict: {
      restriction: '#widget_container',
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
      endOnly: true
    }
  })
  .resizable({
    edges: { top   : true, left  : true, bottom: true, right : true },
    snap: {
      targets: [
        interact.createSnapGrid({ x: $(document).width() / gridX , y: $(document).height() / gridY })
      ],
      range: Infinity,
      relativePoints: [ { x: 0, y: 0 } ],
      endOnly: true
    },
    inertia: true,
    restrict: {
      restriction: '#widget_container',
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
      endOnly: true
    }
  })
  .on('dragmove', function (event) {
    var positions = [], posx = 0, posy = 0;

    for (y = 0; y < 6; ++y) {
      for (x = 0; x < 12; ++x) {
          positions.push({
            'posx': posx,
            'posy': posy
          });
          posx += $(document).width() / 12;
      }
      posx = 0;
      posy += $(document).height() / 6;
    }

    x = (parseFloat(event.target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(event.target.getAttribute('data-y')) || 0) + event.dy;

    var idx = calcNearestPt(positions, {'posx': x, 'posy': y});

    $('#widget_preview').css('width', event.target.offsetWidth - 1);
    $('#widget_preview').css('height', event.target.offsetHeight - 1);
    $('#widget_preview').css('top', positions[idx].posy);
    $('#widget_preview').css('left', positions[idx].posx);
    $('#widget_preview').css('display', 'block');

    event.target.style.webkitTransform =
    event.target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    event.target.setAttribute('data-x', x);
    event.target.setAttribute('data-y', y);
  })
  .on('resizemove', function (event) {

    var isTooSmall = false;

    event.target.style.width  = event.rect.width >= parseFloat(event.target.getAttribute('data-minx')) ? event.rect.width + 'px' : event.target.style.width;
    event.target.style.height = event.rect.height >= parseFloat(event.target.getAttribute('data-miny')) ? event.rect.height + 'px' : event.target.style.height;

    x = (parseFloat(event.target.getAttribute('data-x')) || 0);
    y = (parseFloat(event.target.getAttribute('data-y')) || 0);

    x += event.rect.width >= parseFloat(event.target.getAttribute('data-minx')) ? event.deltaRect.left : 0;
    y += event.rect.height >= parseFloat(event.target.getAttribute('data-miny')) ? event.deltaRect.top : 0;

    event.target.style.webkitTransform =
    event.target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

    event.target.setAttribute('data-x', x);
    event.target.setAttribute('data-y', y);
  })
  .on('dragend', function(event) {
    $('#widget_preview').css('display', 'none');
  });
