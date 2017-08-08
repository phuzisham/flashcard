$(document).ready(function() {
  $('.flashCard').click(function(e) {
    var kids = $(e.currentTarget).children();
    kids.toggle(800);
  });
});
