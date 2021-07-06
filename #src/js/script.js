$('.hero-mobile-filter-search').on('click', function(d){
    d.preventDefault;
    $(this).toggleClass('hero-mobile-filter-search_active')
    $('.hero-mobile-filter-settings').toggleClass('hero-mobile-filter-settings_unactive')
    &('hero-mobile-filter').toggleClass('hero-mobile-filter_unactive')
})

$('.hero-mobile-filter-settings').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('hero-mobile-filter-search_active')
    $('.hero-mobile-filter-settings').toggleClass('hero-mobile-filter-settings_unactive')
    &('hero-mobile-filter').toggleClass('hero-mobile-filter_unactive')
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


