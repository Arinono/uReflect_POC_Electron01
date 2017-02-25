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
    if (holdingWidget === false) {
      if (!$('.widget').hasClass('editable')) {
        $('.widget').addClass('editable');
        $('.show-grid').fadeIn();
        // $('.overlay').css('display', 'initial');
      }
    }
})
.on('down', function (event) {
  if (holdingWidget === false) {
    if ($('.widget').hasClass('editable')) {
      // $('.overlay').css('display', 'none');
      $('.widget').removeClass('editable');
      $('.show-grid').fadeOut();
    }
  }
})
.on('up', function (event) {
  holdingWidget = false;
});
