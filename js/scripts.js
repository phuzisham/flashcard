$(document).ready(function() {
  $(document).ready(function() {
    $('.flashCard').click(function(e) {
      var kids = $(e.currentTarget).children();
      //var x = $(e.currentTarget);
      kids.toggle(800);
      //x.toggleClass('.color');
    });
  });
});
