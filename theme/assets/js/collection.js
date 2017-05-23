//view
var btnViewTuggle = $(".catalog__view-btn");
var btnTile       = $(".catalog__view-btn--tile");
var btnList       = $(".catalog__view-btn--list");

var catalog       = $(".catalog__list");
var card          = $(".card");
var cardPreview   = $(".card__preview");
var cardName      = $(".card__name");
var cardDescr     = $(".card__descr");
var cardContent   = $(".card__content");
var cardStatus    = $(".card__status");
var cardMobPrices = $(".card__mob-prices");
var cardControls  = $(".card__controls");
var cardTarget    = $(".card__target");

function turnTile(elem) {
  elem
    .removeClass("view-list")
    .addClass("view-tile")
  ;
};

function turnList(elem) {
  elem
    .removeClass("view-tile")
    .addClass("view-list")
  ;
};

var vievListeners = [catalog, card, cardPreview, cardName, cardDescr, cardContent, cardStatus, cardMobPrices, cardControls, cardTarget];

btnTile.click(function(e) {
  e.preventDefault();
  vievListeners.forEach(function(item) {
    turnTile(item);
  });
  btnViewTuggle
    .removeClass("catalog__view-btn--current")
  ;
  btnTile
    .addClass("catalog__view-btn--current")
  ;
});

btnList.click(function(e) {
  e.preventDefault();
  vievListeners.forEach(function(item) {
    turnList(item);
  });
  btnViewTuggle
    .removeClass("catalog__view-btn--current")
  ;
  btnList
    .addClass("catalog__view-btn--current")
  ;
});