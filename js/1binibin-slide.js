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
}




/*{
    effect: 'horizontal', 'vertical', 'fade'
    speed: 500,
    autoPlay: true
    autoPlaySpeed: 3000
} 
*/