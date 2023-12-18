(function() {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('#' + burger.dataset.target);

    burger.addEventListener('click', function() {
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
});
})();


document.addEventListener('DOMContentLoaded', function() {
  bulmaCarousel.attach('.carousel-item', {
    slidesToScroll: 1,
    slidesToShow: 1,
    navigationKeys: true,
    pagination: true,
    duration: 1000
  });
});

