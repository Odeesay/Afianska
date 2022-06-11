let click = 0;

$('#menu').click(function(){
    $(".nav_it").animate({width:'toggle'},350);
    if (click === 0){
        $('#menu').animate(
            { deg: 90 },
            {
              duration: 350,
              step: function(now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
              }
            }
          );
          click = 1;
    }else {
        $('#menu').animate(
            { deg: 0 },
            {
              duration: 350,
              step: function(now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
              }
            }
          );
          click = 0;
    }
});


