// JavaScript
var menuRight = document.getElementById( 'cbp-spmenu-s1' ),
body = document.body;

showRight.onclick = function() {
classie.toggle( this, 'active' );
classie.toggle( menuRight, 'cbp-spmenu-open' );
disableOther( 'showRight' );
};

function disableOther( button ) {
if( button !== 'showRight' ) {
classie.toggle( showRight, 'disabled' );
}
}

// Jquery
$(document).ready(function () {

    // Plugin-1 Counter Up

    // $(selector).countMe(delay,speed)
    $(".count").countMe(5,10);
    $(".counter").countMe(5,15);
    $(".count2").countMe(5,20);

     // Plugin-1 Counter Up

    //  wow js
    new WOW().init();
    //  wow js


    // slick slider
    $('.wrapper').slick({
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    //   slick slider

    // aos animation
    AOS.init();
    // aos animation

    // mixitup plugin
    var mixer = mixitup('#mixme', {
      animation: {
          duration: 300
      }
  });


  $(function(){
    
      $('#demo').pwTooltip('Thanks for clicking',{
        position:'right'
      });
    
    });

$(function() {

//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
if(animating) return false;
animating = true;

current_fs = $(this).parent();
next_fs = $(this).parent().next();

//activate next step on progressbar using the index of next_fs
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

//show the next fieldset
next_fs.show(); 
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now, mx) {
//as the opacity of current_fs reduces to 0 - stored in "now"
//1. scale current_fs down to 80%
scale = 1 - (1 - now) * 0.2;
//2. bring next_fs from the right(50%)
left = (now * 50)+"%";
//3. increase opacity of next_fs to 1 as it moves in
opacity = 1 - now;
current_fs.css({'transform': 'scale('+scale+')'});
next_fs.css({'left': left, 'opacity': opacity});
}, 
duration: 800, 
complete: function(){
current_fs.hide();
animating = false;
}, 
//this comes from the custom easing plugin
easing: 'easeInOutBack'
});
});

$(".previous").click(function(){
if(animating) return false;
animating = true;

current_fs = $(this).parent();
previous_fs = $(this).parent().prev();

//de-activate current step on progressbar
$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

//show the previous fieldset
previous_fs.show(); 
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now, mx) {
//as the opacity of current_fs reduces to 0 - stored in "now"
//1. scale previous_fs from 80% to 100%
scale = 0.8 + (1 - now) * 0.2;
//2. take current_fs to the right(50%) - from 0%
left = ((1-now) * 50)+"%";
//3. increase opacity of previous_fs to 1 as it moves in
opacity = 1 - now;
current_fs.css({'left': left});
previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
}, 
duration: 800, 
complete: function(){
current_fs.hide();
animating = false;
}, 
//this comes from the custom easing plugin
easing: 'easeInOutBack'
});
});

$(".submit").click(function(){
return false;
})

});

$(".accordion-content").css("display","none");
$(".accordion-title").click(function () {
  $(".accordion-title").not(this).removeClass("open");
  $(".accordion-title").not(this).next().slideUp(300);
  $(this).toggleClass("open");
  $(this).next().slideToggle(300);
});
    


$('#jq').LineProgressbar({
  percentage: 90 // 90%
});
$('#jq').LineProgressbar({
  percentage: 90,
  ShowProgressCount: true
});
$('#jq').LineProgressbar({
  percentage: 90,
  duration: 1000
});
$('#jq').LineProgressbar({
  percentage: 90,
  fillBackgroundColor: '#ffffff',
  backgroundColor: '#000000',
  radius: '0px',
  height: '10px',
  width: '100%'
});


$("#search").on("search change keyup", function () {
  var text = this.value;
  $(".content").highlite({
      text: text
  });
});



jQuery.goup({
    goupSpeed:'fast'
  
  });
  














// $('.progress').LineProgressbar({
//   percentage: 70
// });
// $('.progress').LineProgressbar({
//   percentage: 70,
//   fillBackgroundColor: '#f0f0f0',
//   backgroundColor: '#ffffff',
//   borderRadius: '0px',
//   height: '10px',
//   width: '100%'
// });
// $('.progress').LineProgressbar({
//   percentage: 70,
//   ShowProgressCount: true
// });
// $('.progress').LineProgressbar({
//   percentage: 70,
//   duration: 2000
// });




})

