// import "./import/modules";

$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<button class="arrow-prev arrow-prev--main-nav"><span class="icon-prev"></span></button>',
        nextArrow: '<button class="arrow-next arrow-next--main-nav"><span class="icon-next"></span></button>',
        asNavFor: '.pagination'
    });

    $('.pagination').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.slider',
    });

    $('.surf__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="arrow-prev arrow-prev--surf"><span class="icon-prev"></span></button>',
        nextArrow: '<button class="arrow-next arrow-next--surf"><span class="icon-next"></span></button>',
        asNavFor: '.surf__map-slider',
    });

    $('.surf__map-slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf__slider',
        focusOnSelect: true,
    });

    $('<div class="quantity__nav"><div class="quantity__button quantity__down"></div><div class="quantity__button quantity__up"></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        let spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity__up'),
            btnDown = spinner.find('.quantity__down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            let oldValue = parseFloat(input.val());
            let newVal;
            if (oldValue >= max) {
                newVal = oldValue;
            } else {
                newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            let oldValue = parseFloat(input.val());
            let newVal;
            if (oldValue <= min) {
                newVal = oldValue;
            } else {
                newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

    $('.quantity__button').on('click', function () {
        let summ = $('.night').val() * $('.summ').data('night') + ($('.guest').val() - 1) * $('.summ').data('guest');
        $('.summ').html('$' + summ);
    });

    let summ = $('.night').val() * $('.summ').data('night') + ($('.guest').val() - 1) * $('.summ').data('guest');
    $('.summ').html('$' + summ);

    $('.features__slider--travel').slick({
        infinite: true,
        fade: true,
        prevArrow: '<button class="arrow-prev arrow-prev--travel"><span class="icon-prev"></span></button>',
        nextArrow: '<button class="arrow-next arrow-next--travel"><span class="icon-next"></span></button>'
    });

    $('.features__slider--sleep').slick({
        infinite: true,
        fade: true,
        prevArrow: '<button class="arrow-prev arrow-prev--sleep"><span class="icon-prev"></span></button>',
        nextArrow: '<button class="arrow-next arrow-next--sleep"><span class="icon-next"></span></button>',
    });

    $('.shop__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<button class="arrow-prev arrow-prev--shop"><span class="icon-prev"></span></button>',
        nextArrow: '<button class="arrow-next arrow-next--shop"><span class="icon-next"></span></button>',
    });

    $('.shop__img-features-btn').click(function () {
        if ($(this).hasClass( 'plus' )) {
            $(this).removeClass( 'plus' ).addClass( 'minus' );
        } else {
            $(this).addClass( 'plus' ).removeClass( 'minus' );
        }   
    });

    new WOW().init();
});