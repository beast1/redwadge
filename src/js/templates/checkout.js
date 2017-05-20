//hide not needed
$("#registered_client").detach();
$("#contacts").detach();
$(".checkout__fieldset h3").detach();
$(".checkout__fieldset h4").detach();
$(".checkout__fieldset .small").detach();
$(".checkout__fieldset .warning").detach();
$(".delivery_variants .co-input-wrapper label:last-child").detach();
//$(".payment_variants .co-input-wrapper label:last-child").detach();
//  temporary
//  $(".delivery_variants").detach();
//  $(".payment_variants").detach();
//  $(".checkout__fieldset .error").detach();

//error
$(".checkout__fieldset--generate .error")
  .addClass("error-message")
;

$(".checkout__fieldset--generate .error br:first-of-type")
  .detach()
;

$(".checkout__fieldset--generate .error-message a")
  .addClass("link")
  .css({
    "text-align": "center"
  })
;

//form
$(".checkout__fieldset--generate label")
  .unwrap()
  .addClass("form__label")
;

$(".checkout__fieldset--generate input")
  .unwrap()
  .addClass("form__input")
;

$(".checkout__fieldset--generate .field.fc")
  .addClass("form__item")
  .removeClass("field fc")
  .unwrap()
;

$(".checkout__fieldset--generate textarea")
  .addClass("form__input  form__input--textarea")
  .unwrap()
  .css("width", "100%")
;

$(".checkout__fieldset--generate .field-label")
  .css({
    "width": "100%",
    "margin-bottom": "8px"
  })
;

$(".checkout__fieldset--generate select")
  .addClass("form__input")
  .unwrap()
;

$(".checkout__fieldset--generate input[type='submit']")
  .removeClass("button big form__input")
  .addClass("form__submit")
  .css("margin", "30px 0 0 0")
;

$("label[for='client_name'], label[for='client_surname'], label[for='client_phone'], label[for='shipping_address_country'], label[for='shipping_address_city'], label[for='shipping_address_zip'], label[for='shipping_address_adress']")
  .addClass("form__label--require")
;

$(".set-block .form__item:nth-of-type(2)")
  .wrap("<div class='form__column  form__column--first'></div>")
;

$(".set-block .form__item:nth-of-type(7)")
  .wrap("<div class='form__column  form__column--second'></div>")
;

$(".set-block .form__item:nth-of-type(8), .set-block .form__item:nth-of-type(9), .set-block .form__item:nth-of-type(10)")
  .appendTo(".form__column--second")
;

$(".set-block > .form__item:nth-of-type(3), .set-block > .form__item:nth-of-type(4), .set-block > .form__item:nth-of-type(5)")
  .appendTo(".form__column--first")
;

//delivery

$(".delivery_variants br:nth-of-type(2n)")
  .detach()
;

$(".delivery_variants label")
  .addClass("form__label--delivery")
;

$(".delivery_variants p")
  .addClass("checkout__delivery-descr")
;

//payment

$(".payment_variants br:nth-of-type(2n)")
  .detach()
;

$(".payment_variants label")
  .addClass("form__label--delivery")
;

$(".payment_variants p")
  .detach()
;

//delivery and payment

$(".variants .not_available label")
  .addClass("form__label--disabled")
;

//second page
  //hide variants and #create-order
  //add btn
  //hide .set-block > *
  //show variants and #create-order
  //add back-btn