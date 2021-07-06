$('.header-burger').on('click', function(burgerEvent){
    burgerEvent.preventDefault;
    $(this).toggleClass('header-burger-active')
    $(this).toggleClass('header-burger-nonActive')
    $('.header-mobile-menu-wrapper').toggleClass('header-mobile-menu-wrapper_active')

});

$('.header-burger-white').on('click', function(burgerEvent){
    burgerEvent.preventDefault;
    $(this).toggleClass('header-burger-white-active')
    $(this).toggleClass('header-burger-white-nonActive')
    $('.header-mobile-menu-wrapper').toggleClass('header-mobile-menu-wrapper_active')

});

$('.hero-mobile-filter-search').on('click', function(d){
    $(this).toggleClass('hero-mobile-filter-search_active')
    $('.hero-mobile-filter-settings').toggleClass('hero-mobile-filter-settings_unactive')
    &('hero-mobile-filter').toggleClass('hero-mobile-filter_unactive')
})

$('.hero-mobile-filter-settings').on('click', function(e){
    $('.hero-filters-dropdown').toggleClass('hero-filters-dropdown-active')
    $(this).toggleClass('hero-mobile-filter-settings_active')
    $('.hero-mobile-filter-settings-inner').toggleClass('hero-mobile-filter-settings-inner_active')
})

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});


