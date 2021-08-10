/*************** global init **************/
var $wrapper = $('.wrapper1');
var $slide = $wrapper.find('.slide-wrap');
var $pager = $wrapper.find('.wrapper .pager');
var $btPrev = $wrapper.find('bt-prev');
var $btNext = $wrapper.find('bt-next');
var interval, n = 0, speed = 2000, aniSpeed = 500, cnt = $slide.find('.slide').length;

/************** user function *************/
function chgPager(el, idx) {

}

function ani(slideEl, pagerEl, speed, idx) {
	$(pagerEl).removeClass('active');
	$(pagerEl).eq(idx).addClass('active');
	$(slideEl).stop().animate({'left': -idx * 100+'%'}, speed);
}

/************** event callback ************/
function onEnter() {
	clearInterval(interval);
}

function onLeave() {
	interval = setInterval(onAni, speed);
}

function onAni() {
    if(n === cnt - 1) {
        $slide.css('left', 0);
        n = 1;
    }
    else n++;
    ani($slide, $pager, aniSpeed, n);
}

function onPagerClick() {
	n = $(this).index();
    ani($slide, $pager, aniSpeed, n)
}

function onPrev() {
    n = (n === 0) ? cnt -2 : n - 1;
    ani($slide, $pager, aniSpeed, n)
}

function onNext() {
    n = (n === cnt -2) ? 0 : n + 1;
    ani($slide, $pager, aniSpeed, n)
}

/*************** event init ***************/
interval = setInterval(onAni, speed);
$wrapper.mouseenter(onEnter).mouseleave(onLeave);
$pager.click(onPagerClick);
$btPrev.click(onPrev);
$btNext.click(onNext);

/*************** start init ***************/

