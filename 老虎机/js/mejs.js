$(function () {
    var prizeList = [
        {"prizeid": "2001", "prizename": "3G流量兑换券"},
        {"prizeid": "2002", "prizename": "1元话费兑换券"},
        {"prizeid": "2003", "prizename": "3G流量兑换券"},
        {"prizeid": "2004", "prizename": "1G流量兑换券"},
        {"prizeid": "2005","prizename": "1G流量兑换券"},
        {"prizeid": "2006", "prizename": "2元话费满赠券"},
        {"prizeid": "2007", "prizename": "1元话费兑换券"},
        {"prizeid": "2008", "prizename": "0.5元话费兑换券"},
        {"prizeid": "2009", "prizename": "2元话费满赠券"},
        {"prizeid": "2010", "prizename": "1元话费兑换券"},
        {"prizeid": "2011", "prizename": "2元话费满赠券"}];
    var the_hei = parseInt($('.rotate_btn').css('height'));
    var rotateDd = $('.rotate_box dd');
    var ddHei = rotateDd.height();
    rotateDd.css('backgroundSize', '100% ' + prizeList.length * ddHei + 'px');
    $('.rotate_btn').click(function () {
        var _this = $(this);
        if (!_this.hasClass('act')) {
            !_this.addClass('act');
            methods.star_animate.call(this);
            $('.rotate_box dd').rotate(methods.getRandom(3))
        }
    })
    $.fn.extend({
        rotate: function (num, callback) {
            var zjNum = num;
            console.log(zjNum);
            $(this).each(function (index) {
                var f = $(this);
                setTimeout(function () {
                    f.animate({backgroundPositionY: -(ddHei * prizeList.length * 5 + zjNum[index] * ddHei)}, {
                        duration: 6000 + index * 1000, easing: 'easeInOutCirc', complete: function () {
                            if (index === 2) {
                                $('.rotate_btn').removeClass('act');
                                if (callback) {
                                    setTimeout(function () {
                                        callback();
                                    }, 1000)
                                }
                            }
                            f.css('backgroundPositionY', -(zjNum[index] * ddHei))
                        }
                    })
                }, index * 1000)
            })
        }
    })
    var methods = {
        star_animate: function () {
            var _this = $(this);
            _this.animate({height: the_hei / 2}, 100, 'linear');
            _this.animate({height: the_hei}, 1000, 'easeOutBounce');
        }, getRandom: function (num) {
            var arr = [], _num = num;
            do {
                var val = Math.floor(Math.random() * num);
                if (arr.indexOf(val) < 0) {
                    arr.push(val);
                    _num--
                }
            }
            while (_num > 0);
            return arr
        }
    }
})