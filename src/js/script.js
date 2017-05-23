//cart-link
//  var basketIconCount = $(".page-header__basket-counter");
//  var basketIconCountText = $(".page-header__basket-counter").textContent;
//  var basketCommonPrice = $(".page-header__basket-text");
//  var basketCommonPriceText = $(".page-header__basket-text").textContent;
//
//  if (+basketIconCountText != 0) {
//    basketIconCount
//      .addClass("page-header__basket-counter--filled")
//    ;
//    
//    basketCommonPrice
//      .addClass("page-header__basket-text--red")
//    ;
//  } else {
//    basketIconCount
//      .removeClass("page-header__basket-counter--filled")
//    ;
//    
//    basketCommonPrice
//      .removeClass("page-header__basket-text--red")
//    ;
//  }

//stiky
  //header
  $("#sticky-header")
    .sticky({topSpacing:0});

  //btnToTop
  $(".btn-to-top")
    .sticky({
      topSpacing:60, 
      bottomSpacing:525
    });

//modals
  //preorder
    var preorderOpen = $(".js-md__open-preorder");
    var mdPreorder = $(".js-md__preorder");
    var preorderExit = $(".js-md__exit-preorder");

    var preorderForm = $(".js-md__preorder-form");

    preorderOpen.click(function() {
      mdPreorder.fadeIn();
    });

    preorderExit.click(function() {
      mdPreorder.fadeOut();
    });

    preorderForm.submit(function() {
      mdPreorder.fadeOut();
    });

//    jQuery(function($) {
//      $.mask.definitions['~']='[+-]';
//      $('#preorder__phone').mask('(999) 999-9999');
//    });

  ////toTopBtn
    $('.js-to-top').click(function() {
      $('html, body')
        .animate({scrollTop: 0},500)
      ;
      return false;
    });

    