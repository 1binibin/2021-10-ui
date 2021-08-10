/*************** global init *****************/
var $slide = $('.wrapper1 .slide-wrap');
var $pager = $('.wrapper1 .pager');
var interval, n = 1,speed = 2000, aniSpeed = 500, cnt = $slide.find('.slide').lenght;

/*************** user function  *****************/
function chgPager(el, idx) {
    $(el).removeClass('active');
    $(el).eq(idx).addClass('active');
}

/*************** event callback *****************/
function onSet() {
    $slide.stop().animate({'left': -n * 100+'%'}, aniSpeed, function () {
        if(n === cnt -1) {
            $slide.css('left', 0);
            chgPager($pager, 0);
            n = 1;
        }
        else {
            chgPager($pager, n++);
        }
    });
}

function onEnter() {
    clearInterval(interval);
}

function onLeave() {
    interval = setInterval(onSet, speed);
}
/*************** event init *****************/
interval = setInterval(onSet, speed);
$slide.mouseenter(onEnter).mouseleave(onLeave)

/*************** start init *****************/

