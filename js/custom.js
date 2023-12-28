
$(document).ready(function() {
// Show the first tab by default
$('.tabs-stage1 .tabcontent1').hide();
$('.tabs-stage1 .tabcontent1:first').show();
$('.tabs-nav1 li:first').addClass('tab-active1');

// Change tab class and display content
$('.tabs-nav1 a').on('click', function(event){
event.preventDefault();
$('.tabs-nav1 li').removeClass('tab-active1');
$(this).parent().addClass('tab-active1');
$('.tabs-stage1 .tabcontent1').hide();
$($(this).attr('href')).show();
});
});


$(document).ready(function(e) {
  // Show the first tab by default
  $('.tabs-stage .tabcontent').hide();
  $('.tabs-stage .tabcontent:first').show();
  $('.tabs-nav li:first').addClass('tab-active');
  
  // Change tab class and display content
  $('.tabs-nav a').on('click', function(event){
    event.preventDefault();
    $('.tabs-nav li').removeClass('tab-active');
    $(this).parent().addClass('tab-active');
    $('.tabs-stage .tabcontent').hide();
    $($(this).attr('href')).show();
  });
});




$(document).ready(function () {
$(window).scroll(function () {
// Get the distance from the top of the page to the progress container
var distance = $('#progress-container').offset().top - $(window).scrollTop();

// Calculate the percentage based on the distance
var percentage = Math.max(0, 100 - (distance / $('#progress-container').height()) * 100);

// Update the progress bar and text
$('#progress-bar .progress-fill').css('width', percentage + '%');
$('#progress-text').text(Math.round(percentage) + '%');
});
});



// sidebar-close

$(document).ready(function() {
$('.nav-btn').on('click', function() {
$('.body-wrapper').toggleClass('menu-sec-closed');

});
});
