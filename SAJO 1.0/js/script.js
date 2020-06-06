$(document).ready(function(){
    $('.header__slider').slick({
        arrows:true,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        
    });
});

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__top-menu').toggleClass('active');
    });
});

(function($) {
$(function() {
  
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
  
});
})(jQuery);

$(document).ready(function() {
    $('.open-sub').click(function(event) {
        $('.open-sub, .sub-menu-block').toggleClass('active');
    });
});
