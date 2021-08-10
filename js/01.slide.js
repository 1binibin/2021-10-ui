/*************** global init *****************/
var $slide01 = $('.wrapper1 .slide-wrap');
var interval01, n01 = 1;

/*************** user function  *****************/


/*************** event callback *****************/
function onSet01() {
    $slide01.stop().animate({'left': -(n01*100)+'%'}, 1000, function () {
        n01++;
    });
}

/*************** event init *****************/
interval01 = setInterval(onSet01, 3000);

/*************** start init *****************/

