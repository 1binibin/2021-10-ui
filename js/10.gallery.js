/*************** global init *****************/


/*************** user function  *****************/


/*************** event callback *****************/
function onClick() {
    console.log( this.dataset['img'] );     //js
    console.log( $(this).data('img') );     //jQuery
    $('.img-wrap img').attr('src', $(this).data('img') );
    $('.img-wrap name').html( $(this).data('name') );

    this.dataset['flag'] = 'ABCD';
    $(this).data('flag2', 'ABCDE');
    
    console.log(this.dataset['flag']);
    console.log($(this).data('flag2'));
}

/*************** event init *****************/
$('.thumb img').click(onClick);

/*************** start init *****************/

/**
 * Data-set
 * 
 * html에 data-??='??' 후에 접근 가능
 * 값을 가져올때
 *  console.log( this.dataset['img'] );     //js
    console.log( $(this).data('img') );     //jQuery
 *  값을 줄때
    this.dataset['flag'] = 'ABCD';
    $(this).data('flag2', 'ABCDE');
 */