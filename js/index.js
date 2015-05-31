$(function(){
  $(window).resize(function(){
    if($(this).width() >= 767){
      $.backstretch("images/bg.jpg", {speed: 150});
    }
  }).resize();//trigger resize on page load
});

