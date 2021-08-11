function Slide(_parent, _opt) {
    var opt = _opt || {};
    this.wrapper = $(_parent);
    this.wrap = this.wrapper.find('.slide-wrap')
    this.slide = this.wrap.find('.slide')
    this.effect = opt.effect || 'horizontal';
    this.speed = Number(opt.speed) || 500;
    this.autoPlay = opt.autoPlay === false ? false : true;
    this.autoPlayGap = Number(opt.autoPlaySpeed) || 3000;

    if(
        this.effect.toLowerCase() !== 'horizontal' && this.effect.toLowerCase() !== 'vertical' && this.effect.toLowerCase() !== 'fade') 
        {
            this.effect = 'horizontal'
        }
    this.effect += 'Type';
    this.init();
}

Slide.prototype.init = function() {
    this.wrap.addClass(this.effect);
    if(this.effect === 'fadeType'){
        this.slide.eq(0).clone().appendTo(this.wrap).removeClass('slide'); // Dummy 생성(높이 생성)
    }
    if(this.effect === 'horizontalType'){
        this.slide.eq(0).clone().appendTo(this.wrap);
        this.slide = this.wrap.find('.slide');
        this.wrap.css('width', this.slide.lenght*100+'%');
        this.slide.css('width', 100/this.slide.lenght.toFixed(4) + '%');
    }

    if(this.effect === 'verticalType'){
        this.slide.eq(0).clone().appendTo(this.wrapper).removeClass('slide');
        this.slide = this.wrap.find('.slide');
    }
}




/*{
    effect: 'horizontal', 'vertical', 'fade'
    speed: 500,
    autoPlay: true
    autoPlaySpeed: 3000
} 
*/