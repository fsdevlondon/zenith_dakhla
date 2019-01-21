import $ from 'jquery';

const bindDragScroll = ($container, $scroller) => {
   var $window = $(window);
   var x = 0;
   var y = 0;
   var x2 = 0;
   var y2 = 0;
   var t = 0;

   $container.on("mousedown", down);
   $container.on("touchstart", down);
   $container.on("click", preventDefault);
   $scroller.on("mousewheel", horizontalMouseWheel); // prevent macbook trigger prev/next page while scrolling

  function down(evt) {
    if (evt.button === 0) {
      t = Date.now();
      x = x2 = evt.pageX;
      y = y2 = evt.pageY;

      $container.addClass("down");
      $window.on("mousemove", move);
      $window.on("mouseup", up);

      evt.preventDefault();

    } else if (evt.originalEvent.touches[0].identifier == 0) {
      t = Date.now();
      x = x2 = evt.originalEvent.touches[0].pageX;
      y = y2 = evt.originalEvent.touches[0].pageY;

      $container.addClass("down");
      $window.on("touchmove", move);
      $window.on("touchend", up);
    }
  }

   function move(evt) {
     if ($container.hasClass("down")) {
       if (evt.button === 0) {
         var _x = evt.pageX;
         var _y = evt.pageY;
       } else if (evt.originalEvent.touches[0].identifier == 0) {
         var _x = evt.originalEvent.touches[0].pageX;
         var _y = evt.originalEvent.touches[0].pageY;
       }
       var deltaX = _x - x;
       var deltaY = _y - y;

       $scroller[0].scrollTop -= deltaY;
       $scroller[0].scrollLeft -= deltaX;

       x = _x;
       y = _y;
     }

   }

   function up(evt) {
     $window.off("mousemove", move);
     $window.on("touchmove", move);
     $window.off("mouseup", up);

     var deltaT = 100;
     try{
       if (evt.button === 0) {
         var deltaX = evt.pageX - x2;
         var deltaY = evt.pageY - y2;
       } else if (evt.originalEvent.touches[0].identifier == 0) {
         var deltaX = evt.originalEvent.touches[0].pageX - x2;
         var deltaY = evt.originalEvent.touches[0].pageY - y2;
       }
     } catch(e) {
        var deltaX = x - x2;
        var deltaY = y - y2;
     }
     if (deltaT <= 300) {
       $scroller.stop().animate({
         scrollTop: "-=" + (deltaY / 2) * (deltaT * 5 / 100),
         scrollLeft: "-=" + (deltaX / 2) * (deltaT * 5 / 100)
       }, (1000), 'easeOutQuad');
     } else {
       $scroller.stop().animate({
         scrollTop: "-=" + (deltaY / 2) * (deltaT * 10 / 100),
         scrollLeft: "-=" + (deltaX / 2) * (deltaT * 10 / 100)
       }, (1000), 'easeOutQuad');
     }
     t = 0;
     $container.removeClass("down");
   }

   function preventDefault(evt) {
     if (x2 !== evt.pageX || y2 !== evt.pageY) {
       evt.preventDefault();
       return false;
     } else if (x2 !== evt.originalEvent.touches[0].pageX || y2 !== evt.originalEvent.touches[0].pageY) {
       evt.preventDefault();
     }
   }

   function horizontalMouseWheel(evt) {
     evt = evt.originalEvent;
     var x = $scroller.scrollLeft();
     var max = $scroller[0].scrollWidth - $scroller[0].offsetWidth;
     var dir = (evt.deltaX || evt.wheelDeltaX);
     var stop = dir > 0 ? x >= max : x <= 0;
     if (stop && dir) {
         evt.preventDefault();
     }
   }
};

export default bindDragScroll;
