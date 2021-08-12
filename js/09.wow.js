/**
 * scroll(스크롤바), wheel(마우스휠), resize(창 크기)
 * 
 */

/*************** global init *****************/


/*************** user function  *****************/


/*************** event callback *****************/
function onScroll(e) {
    // console.log(e);
    // console.log(window.scrollY);        //js
    // console.log($(this).scrollTop());   //jQyery
    // $().offset() --> 문서의 시작점부터 내 위치를 절대값으로 나타냄(리턴값: 객체{'top','left'})
/*     console.log($('h1.title').eq(0).offset().top ); 0번의 top값
    console.log($('h1.title').eq(1).offset().top );
    console.log($('h1.title').eq(2).offset().top );
    console.log($('h1.title').eq(3).offset().top );
    console.log($('h1.title').eq(4).offset().top ); */
    var guideTop = $(this).scrollTop() + $(this).outerHeight();
    $('h1.title').each(function(v, i) {
        if(guideTop - 200 > $(this).offset().top) { $(this).addClass('active'); }
    });
    $('.box').each(function(v, i) {
        if(guideTop - 200 > $(this).offset().top) { $(this).addClass('active'); }
    })

}

function onWheel(e) {
    // console.log(e.deltaY);             // ie, chorme, firefox -> +(내리고) -(올리고), opera(부호 반대)
    console.log(e.originalEvent.deltaY);  // jQuery    
}

function onResize(e) {
    console.log(e);
    console.log(window.innerWidth);
    console.log($(this).width());
    console.log($(this).innerWidth());
    console.log($(this).outerWidth());
    console.log($(this).outerWidth(true));
}

/*************** event init *****************/
//window.addEventListener('scroll',onScroll);
$(window).scroll(onScroll).trigger('scroll');

// window.addEventListener('wheel', onWheel)
// $(window).on('wheel', onWheel);

// window.addEventListener('resize', onResize);
// $(window).resize(onResize);
/*************** start init *****************/

