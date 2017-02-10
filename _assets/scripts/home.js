//Write JS logic here
if( $('#nav-mobile').css('display')=='none') {
        console.log('true');
        is_mobile=True
    }

    // now i can use is_mobile to run javascript conditionally

    /*if (is_mobile == true) {
       //$('header').css('display')='none';
    }
*/

 var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
 console.log(width);
if(width < 600) {
  $("#nav-mobile").css('display', 'flex');
  $('#nav-desktop').css('display','none');
}
else{
  $('#nav-mobile').css('display','none');
  $('#nav-desktop').css('display','flex');
}

var lastWidth = $(window).width();

$(window).resize(function(){
   if($(window).width()!=lastWidth){
      //execute code here.
    if(width < 600) {
      $("#nav-mobile").css('display', 'flex');
      $('#nav-desktop').css('display','none');
    }
    else{
      $('#nav-mobile').css('display','none');
      $('#nav-desktop').css('display','flex');
    }
    lastWidth = $(window).width();
   }
})

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});
