$( document ).ready(function() {
  $('#product_slide').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  responsive: [
    {
      breakpoint:750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    }
  ]
});

});

var mapOptions = {
  center: new naver.maps.LatLng(37.3595704, 127.105399),
  zoom: 10
};

var map = new naver.maps.Map('map', mapOptions);