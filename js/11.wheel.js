/**
 * Event Bubbling
 * event.preventDefault();      //JS객체, 이벤트를 막아라! wheel에 적용은 :59
 * html에 onclick 으로 event를 주면 막힘. 브라우저에서 막아놓음           사용하려면 61번 참조 
 * 
 * event.stopPropagation();     //
 * scrolltop : ????
 */

/*************** global init **************/
var isWheel = true;

/************** user function *************/


/************** event callback ************/
function onWheel(e) {
    if(isWheel){
        isWheel = false;
        e.preventDefault(); // wheel을 하면 스크롤 되는 기본 기능 막기
        var d = e.deltaY; 	// + 스크롤 내리기, - 스크롤 올리기
        var y = e.pageY; 		// 이벤트가 발생한 지점
        var page = $('section.page');   // .page
        var last = page.length - 1;     // .page의 마지막 idx
        var top = [];	// .page들의 offset().top
        var idx = last; 	// 가야될 페이지 idx
        page.each(function(i){ top[i] = $(this).offset().top });
        for(var i=last; i>-1; i--) if(y > top[i]) break; // 어느 페이지에서 휠 했느냐
        if(d > 0) { // 휠을 내리면
            if(i < last) idx = i + 1;
            else idx = last;
        }
        if(d < 0) { // 휠을 올리면
            if(i > 0) idx = i - 1;
            else idx = 0;
        }
        $('html, body').stop().animate({'scrollTop': top[idx]}, 500, function(){
            isWheel = true;
        });
}
}
//34 ~ 35을 이하 내용과 같이 변경 가능(맥 사용시 끊김현상 제거) -->toggle
//$('html, body').stop().animate({'scrollTop': top[idx]}, 500);
//setTimeout(function(){ isWheel= true }, 1000) + isWheel = false --> if문 밖으로.
function onWrapperClick(e) {
	console.log('wrapper');
	console.log(e.pageX, e.pageY);
}

function onContentWrapClick(e) {
	e.stopPropagation();
	console.log('content-wrap');
}

function onBoxClick(e) {
	e.stopPropagation();
	console.log('box');
}


/*************** event init ***************/
window.addEventListener('wheel', onWheel, { passive: false });
 // wheel:JS로만 가능 passive: false; 기본기능막기

$('.wrapper').click(onWrapperClick);
$('.wrapper .content-wrap').click(onContentWrapClick);
$('.wrapper .box').click(onBoxClick);

/*************** start init ***************/

