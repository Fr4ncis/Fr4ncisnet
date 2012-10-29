function loadContainerWithURL(file) {
  $('#content').html('<img class="loadimage" src="285.gif" />')
  $('#content').load(file, function() {
    // FIXME Content Fading $('#content').css("opacity", 0);
    // $('#content').css("filter", "alpha(opacity=0)");
    // $('#content').fadeTo(3000, 1.0);
  });
}

function loadPortfolio() {
  $('#content').html('<img class="loadimage" src="285.gif" />')
  $('#content').load('portfolio.html', function() {
    $('.flexslider').flexslider();
  });
}

$(function() {
  $('#content').load('about_me.html');
});