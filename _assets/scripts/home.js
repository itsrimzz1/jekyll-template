//Write JS logic here
"use strict";
if ( $('#nav-mobile').css('display') === 'none') {
        isMobile=True
    }

    // now i can use isMobile to run javascript conditionally

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (width < 600) {
  $("#nav-mobile").css('display', 'flex');
  $('#nav-desktop').css('display', 'none');
} else {
  $('#nav-mobile').css('display', 'none');
  $('#nav-desktop').css('display', 'flex');
}

var lastWidth = $(window).width();

$(window).resize(function (){
    if ($(window).width() !== lastWidth){
        if (width < 600) {
          $("#nav-mobile").css('display', 'flex');
          $('#nav-desktop').css('display', 'none');
        } else {
          $('#nav-mobile').css('display', 'none');
          $('#nav-desktop').css('display', 'flex');
        }
        lastWidth = $(window).width();
    }
});

$(".cross").hide();
$(".menu").hide();
$(".hamburger").click(function () {
$(".menu").slideToggle("slow", function () {
$(".hamburger").hide();
$(".cross").show();
});
});

$(".cross").click(function () {
    $(".menu").slideToggle("slow", function () {
      $(".cross").hide();
      $(".hamburger").show();
    });
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){


        window.location.hash = hash;
      });
    }
  });
});
