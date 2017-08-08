$(document).ready(function() {
  $('.flashCard').click(function(e) {
    var kids = $(e.currentTarget).children();
    var x = $(e.currentTarget).toggleClass('color');
    kids.toggle(800);
  });
});
