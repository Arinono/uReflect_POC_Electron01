var $ = require('jquery');

var gridX = 12, gridY = 6, x = 0, y = 0;



interact('.widget')
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
      restriction: 'parent',
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
      restriction: 'parent',
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
      endOnly: true
    }
  })
  .on('dragmove', function (event) {
    x = (parseFloat(event.target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(event.target.getAttribute('data-y')) || 0) + event.dy;

    event.target.style.webkitTransform =
    event.target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    event.target.setAttribute('data-x', x);
    event.target.setAttribute('data-y', y);
  })
  .on('resizemove', function (event) {

    event.target.style.width  = event.rect.width + 'px';
    event.target.style.height = event.rect.height + 'px';

    x = (parseFloat(event.target.getAttribute('data-x')) || 0) + event.deltaRect.left;
    y = (parseFloat(event.target.getAttribute('data-y')) || 0) + event.deltaRect.top;

    event.target.style.webkitTransform =
    event.target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

    event.target.setAttribute('data-x', x);
    event.target.setAttribute('data-y', y);
  });
