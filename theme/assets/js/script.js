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

//modals
  //preorder
    var preorderOpen = $(".js-md__open-preorder");
    var mdPreorder = $(".js-md__preorder");
    var preorderExit = $(".js-md__exit-preorder");

    var preorderForm = $(".js-md__preorder-form");

    preorderOpen.click(function() {
      mdPreorder.fadeToggle();
    });

    preorderExit.click(function() {
      mdPreorder.fadeToggle();
    });

    preorderForm.submit(function() {
      mdPreorder.fadeToggle();
    });

//    jQuery(function($) {
//      $.mask.definitions['~']='[+-]';
//      $('#preorder__phone').mask('(999) 999-9999');
//    });