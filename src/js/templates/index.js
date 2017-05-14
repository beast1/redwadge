$('.carousel')
  .slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

$('.carousel > button:nth-of-type(1)')
  .removeClass('slick-prev slick-arrow')
  .addClass('carousel__controls carousel__controls--left');

$('.carousel > button:nth-of-type(2)')
  .removeClass('slick-next slick-arrow')
  .addClass('carousel__controls carousel__controls--right');