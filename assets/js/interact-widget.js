var $ = require('jquery');

var holdingWidget = false;

interact('.widget')
  .on('down', function (event) {
    holdingWidget = true;
  })
  .on('up', function (event) {
    holdingWidget = false;
  });

interact('#widget_container').on('hold', function (event) {
    console.log("YOYO");
    if (holdingWidget === false) {
      if (!$('.widget').hasClass('editable')) {
        $('.widget').addClass('editable');
        $('.show-grid').fadeIn();
      }
    }
})
.on('down', function (event) {
  if (holdingWidget === false) {
    if ($('.widget').hasClass('editable')) {
      $('.widget').removeClass('editable');
      $('.show-grid').fadeOut();
    }
  }
});