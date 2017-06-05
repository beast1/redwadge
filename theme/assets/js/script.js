//================================================//
//statements
//var spy = document.querySelector("body");
//var conditionsLogin = true;
//
//if (spy.classList.contains("js-user--unknown")) {
//  conditionsLogin = false;
//}
//================================================//

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
    .sticky({
      topSpacing: 0
    });

  $(".index-target")
    .sticky({
      topSpacing: 60,
      zIndex: 10000
    });

//================================================//
//user

$("body").click(function(e) {
    $(".js-user-menu").removeClass("user__menu--visible");
});

$(".js-user-menu-open")
  .click(function(e) {
    e.preventDefault();
    $(".js-user-menu")
      .toggleClass("user__menu--visible");
});

$(".js-user-menu-open, .js-user-menu").click(function(e) {
    e.stopImmediatePropagation();
});
//================================================//

$("body").click(function(e) {
    $(".js-user-menu").removeClass("user__menu--visible");
});

$(".js-user-menu-open, .js-user-menu").click(function(e) {
    e.stopImmediatePropagation();
});

//sidebar
$(".sidebar-trigger")
  .click(function() {
    $(".sidebar")
      .toggleClass("sidebar--pushed");
  })
;

$("body").click(function(e) {
    $(".sidebar").removeClass("sidebar--pushed");
});

$(".sidebar, .sidebar-trigger").click(function(e) {
    e.stopImmediatePropagation();
});

//basket-sticky
$(".js-add-to-basket").click(function() {
  $(".sticky-btn--basket-link").addClass("sticky-btn--visible");
  setTimeout("$('.sticky-btn--basket-link').removeClass('sticky-btn--visible')", 1200);
});

////toTopBtn
$('.js-to-top').click(function() {
  $('html, body')
    .animate({scrollTop: 0},500)
  ;
  return false;
});

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled <= 800) {
    $(".sticky-btn--btn-to-top").fadeOut();
      //.removeClass("sticky-btn--visible");
    
  } else {
    $(".sticky-btn--btn-to-top").fadeIn();
      //.addClass("sticky-btn--visible");
  }  
}

//modals
function toggleModal(window, creator, killer) {
  creator.click(function(e) {
    e.preventDefault();
    window.fadeIn();
  });
  
  killer.click(function(e) {
    e.preventDefault();
    window.fadeOut();
  });
}

//login
var mdLogin = $(".js-md__login");
var loginOpen = $(".js-md__open-login");
var loginExit = $(".js-md__exit-login");

toggleModal(mdLogin, loginOpen, loginExit);

//check-in
var mdCheckIn = $(".js-md__check-in");
var checkInOpen = $(".js-md__open-check-in");
var checkInExit = $(".js-md__exit-check-in");

toggleModal(mdCheckIn, checkInOpen, checkInExit);

////preorder
//var preorderOpen = $(".js-md__open-preorder");
//var mdPreorder = $(".js-md__preorder");
//var preorderExit = $(".js-md__exit-preorder");
//
//var preorderForm = $(".js-md__preorder-form");
//
//preorderOpen.click(function() {
//  mdPreorder.fadeIn();
//});
//
//preorderExit.click(function() {
//  mdPreorder.fadeOut();
//});
//
//preorderForm.submit(function() {
//  mdPreorder.fadeOut();
//});



//preorder-list
var preorderSubmit = document.querySelector(".js-preorder-submit");
var preorderOptions = document.querySelectorAll(".js-preorder-option");
var preorderSend = document.querySelector(".js-preorder-send");
var preorderConfirm = document.querySelector(".js-preorder-confirm");
var preorderSubject = document.querySelector(".js-preorder-subject");

function createCounter() {
  var counter = document.createElement("div");
  var counterDown = document.createElement("button");
  var counterUp = document.createElement("button");
  var counterOutput =  document.createElement("input");
  
  counterOutput.value = 1;
  
  counter.classList.add("counter");
  counterDown.classList.add("counter__count-down");
  counterUp.classList.add("counter__count-up");
  counterOutput.classList.add("counter__output");
  
  counter.appendChild(counterDown);
  counter.appendChild(counterOutput);
  counter.appendChild(counterUp);
  
  function validateOutput() {
    if (counterOutput.value < 1) {
      counterOutput.value = 1;
    } else if (counterOutput.value > 999) {
      counterOutput.value = 1000;
    }
  }
  
  counterDown.addEventListener("click", function(e) {
    e.preventDefault();
    counterOutput.value = (+counterOutput.value - 1);
    validateOutput();
  });
  
  counterOutput.addEventListener("change", function(e) {
    e.preventDefault();
    validateOutput();
  });
  
  counterUp.addEventListener("click", function(e) {
    e.preventDefault();
    counterOutput.value = (+counterOutput.value + 1);
    validateOutput();
  });
  
  return counter;
}

function createLi(fill, number) {
  var li = document.createElement("li");
  var remove = document.createElement("button");
//  createCounter();
  
  var id = ("product-" + number);
  li.textContent = fill;
  
  li.classList.add(id);
  li.classList.add("whole-preorder__confirm-item");
  remove.classList.add("remove-btn");
  
  li.appendChild(createCounter());
  li.appendChild(remove);
  
  remove.addEventListener("click", function() {
    liForRemove = document.querySelector(".product-" + number);
    preorderConfirm.removeChild(liForRemove);
    preorderOptions[number].classList.remove("selected");
  });
  
  preorderConfirm.appendChild(li);
}

function clearPreorder() {
  preorderOptions.forEach(function(item, i, arr) {
    arr[i].classList.remove("selected");
    preorderConfirm.innerHTML = "";
  });
}

preorderOptions.forEach(function(item, i, arr) {
  arr[i].addEventListener("click", function() {
    if (arr[i].classList.contains("selected")) {
      arr[i].classList.remove("selected");
      liForRemove = document.querySelector(".product-" + i);
      preorderConfirm.removeChild(liForRemove);
    } else {
      arr[i].classList.add("selected");
      text = arr[i].textContent;
      createLi(text, i);
    };
  });
});

function preorderCompile() {
  var totalCount = 0;
  
  preorderSend.value = null;
  
  lis = document.querySelectorAll(".js-preorder-confirm li");
  lisCount = document.querySelectorAll(".js-preorder-confirm li input");
  lis.forEach(function(item, i, arr) {
    text = lis[i].textContent;
    count = lisCount[i].value;
    preorderSend.value = (preorderSend.value + text + " * " + count + " | ");
    totalCount = (+totalCount + +count);
    preorderSubject.value = ("Предзаказ(wadge.ru): " + totalCount + " шт.");
  });
}
//endpreorder-list

//whole-preordeer
$(document).ready(function(){
  var modCallMeBack = $("#mod-fast-call");
  $("body").append($("div#opaco-mod-fast-call-link"),modCallMeBack);
  $("#mod-fast-call-link, #mod-fast-call-close").click(function(e){ 
    e.preventDefault(); 
    modCallMeBack.togglePopup(); 
  });

   $.fn.togglePopup = function(){
     var popup = $(this);
     if(!popup.is(':visible')) {
       $('#opaco-mod-fast-call-link')
         .height($(document).height())
         .show()
         .fadeTo('slow', 0.7)
         .click(function() {
           popup.togglePopup();
         })
       ;
       
       popup.show();
     } else {
       $('#opaco-mod-fast-call-link')
         .hide()
         .removeAttr('style')
         .unbind('click');
       popup.hide();
       clearPreorder();
     }
   };

    /* CallMeBack */
    $("#mod-fast-call_submit", modCallMeBack).bind("click",function(e){
        e.preventDefault();
        
        preorderCompile();  
      
        var is_error = false;
        var errors = $('#mod-fast-call .errors').html("");
        var arr = [];

        
        $("input.required, textarea.required", modCallMeBack).each( function(){
          if(this.value==this.defaultValue){
            is_error = true;
            arr.push(""+$(this).prev().text()+"");
          }
        });

        if(is_error == true) {
          modCallMeBackShowMessage(errors_to_arr(arr).join("<br />"),5000); return;
        }

        var form = $('#mod-fast-call_form',modCallMeBack);
        var fields = form.serialize();
        $.ajax({
            url:      form.attr('action') + '.json',
            type:     'post',
            data:     fields,
            dataType: 'json',
            beforeSend: function() { show_preloader(); },
            complete: function() { },
            success:  function(response) {
                if ( response.status == 'ok' ) {
                    $("textarea#mod-fast-call_content, #cb-message", modCallMeBack).val("");
                    modCallMeBack.togglePopup();
                    modCallMeBackShowMessage('', 3000);
                } else {
                    modCallMeBackShowMessage(errors_to_arr(response['errors']).join("<br />"),5000);
                }
            }
        });
    });
});

function modCallMeBackShowMessage(text, time){
    var delay = 1000;
    if (arguments.length > 1) { delay = time; }
    show_preloader();
    set_preloaders_message('<div id="add_product_notification">'+text.replace(" ","&nbsp;")+'</div>');
    changeCss(jQuery("#own_preloader"));
    window.setTimeout( hide_preloader, delay);
}

//preorder validate

var preorderName = document.querySelector(".whole-preorder #cb-name");
var preorderPhone = document.querySelector(".whole-preorder #cb-phone");
var preorderSubmit = document.querySelector(".whole-preorder #mod-fast-call_submit");

function preorderValidateBorder() {
  if (preorderName.value.length <= 3 || preorderPhone.value.length < 11) {
    preorderSubmit.style.filter = "grayscale(1)";
    preorderSubmit.setAttribute("disabled", "");
  } else {
    preorderSubmit.style.filter = "grayscale(0)";
    preorderSubmit.removeAttribute("disabled", "");
  }
}

function preorderValidate(input) {
  input.addEventListener("keyup", function() {
    preorderValidateBorder();
  });
};

preorderValidateBorder();
preorderValidate(preorderName);
preorderValidate(preorderPhone);

//end preorder validate