$('.carousel')
  .slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

//$('.slick-slide')
//  .css({
//  "height": "auto"
//});

$('.carousel > button:nth-of-type(1)')
  .removeClass('slick-prev slick-arrow')
  .addClass('carousel__controls carousel__controls--left');

$('.carousel > button:nth-of-type(2)')
  .removeClass('slick-next slick-arrow')
  .addClass('carousel__controls carousel__controls--right');

//$('.carousel > button.slick-disabled')
//  .css('display', 'none');
$(".sp-button").click(function() {
  console.log('1');
  $(".page-footer__subscribe-title--slim").hide();
  console.log('2');
});