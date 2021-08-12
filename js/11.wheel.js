/**
 *  Event(JS) Bubbling
 *  event.preventDefault();     event 막기 / wheel에 적용시:사용 X 막아놈 --> jQuery안됨 JS 사용!
 *  event.stopPropagation();    적용된것만 나옴
 */

/*************** global init *****************/



/*************** user function  *****************/


/*************** event callback *****************/
function onWheel(e) {
    e.preventDefault();
}

function onWrapperClick(e) {
    console.log('wrapper');
}

function onContentWrapClick(e) {
    e.stopPropagation();
    console.log('content-wrap');
}

function onBoxClick(e) {
    // e.preventDefault();
    e.stopPropagation();
    console.log('box');
}

/*************** event init *****************/
window.addEventListener('wheel', onWheel, {passive: false});

$('.wrapper').click(onWrapperClick);
$('.wrapper .content-wrap').click(onContentWrapClick);
$('.wrapper .box').click(onBoxClick);


/*************** start init *****************/

