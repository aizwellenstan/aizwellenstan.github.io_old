

  

  
$(function(){

 $(".mCustomCont").mCustomScrollbar({
    scrollInertia: 250,                  
    mouseWheelPixels: 150,     
    autoHideScrollbar: false,    

    scrollButtons:{
      enable: false,                
      scrollType: "continuous",  
      scrollSpeed: 50,             
      scrollAmount: 50             
    },
    advanced: {
      updateOnContentResize: true, 
      autoScrollOnFocus: true       
    },
  });

});








$(document).ready(function(){
    $('.bxslider').bxSlider({
    slideWidth:856,
    auto:true,
    speed:1500,
    pause:5500,
    controls:false


    });
});




$(function(){
   
   $('a[href^=#]').click(function() {

      var speed = 1000; 
    
      var href= $(this).attr("href");
 
      var target = $(href == "#" || href == "" ? 'html' : href);

      var position = target.offset().top;

      $('body,html').animate({scrollTop:position}, speed, 'easeInOutQuart');
      return false;
   });
});




$(function() {
  
      $(window).scroll(function () {
     
        var TargetPos = 1000;
     
        var ScrollPos = $(window).scrollTop();
       
        if( ScrollPos >= TargetPos) {
       
          
          $(".btn_top_scrl").fadeIn();

        }
        else {
         
          $(".btn_top_scrl").fadeOut();
        }
      });
});





jQuery.event.add(window,"load",function() { 

  
  if($.cookie("access")){     
  }else{
    setTimeout(function(){
      
var r=parseInt(Math.random()*1);
if(r==0){$('.popMovie1').click() ;}
  },1000);
}
        $.cookie("access",$('body').addClass('access'));
});









jQuery.event.add(window,"load",function() { 

    



  
  /*$('.normalPop').magnificPopup({
    type: 'image',

  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  }

});*/

  /*$('.endcardPop').magnificPopup({
    type:'inline',

  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  }

});*/

  /*$('.iFramePop').magnificPopup({
     type: 'iframe',
iframe: {
        markup: '<div style="width:705px; height:300px;">'+
                '<div class="mfp-iframe-scaler" >'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" scrolling="no" frameborder="0" allowfullscreen></iframe>'+
                '</div></div>'
    },
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  }

});*/

});









// wow
jQuery.event.add(window,"load",function() { 
  new WOW().init();
});








