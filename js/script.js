//Mobile menu
$('.menu__btn').click(function() {
  $('.menu__wrap').slideDown();
});
$('.menu__close').click(function() {
  $('.menu__wrap').slideUp();
});

//Search hide/show
$('.search__show').click(function() {
  $('.search__form').toggleClass('search__form--show');
});
