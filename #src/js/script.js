var playing = false
var audio = new Audio('https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3')
audio.preload = "auto";
var title = document.getElementsByTagName("title")[0].innerHTML
let played = 0
let progressBar = $('.main-card-teresa-header-player-playBar-line')

const PlayerWidthChange = function(){
    if(playing && title == 'Carolina Voyance'){
        played = (audio.currentTime / audio.duration)*96
        document.getElementsByClassName('main-card-teresa-header-player-playBar-line')[0].style.width = played + "%"
    }
    else if(playing && (title == 'Teresa Voyance' || title == 'Voyance')){
        played = (audio.currentTime / audio.duration)*100
        document.getElementsByClassName('teresaVoyanceMain-card-player-time')[0].style.width = played + "%"
    }
    else if (title == 'Teresa Voyance' || title == 'Voyance'){
        document.getElementsByClassName('requestSended-inner')[0].style.top = window.pageYOffset  + "px"
    }
}

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

$('.hero-filters-dropdown-option').on('click', function(){
    console.log(this.getElementsByTagName('input')[0].checked)
    this.getElementsByTagName('input')[0].checked = true
    let span = this.parentNode.previousElementSibling.childNodes[1]
    console.log(this)
    console.log(this.classList.contains('hero-filters-dropdown-skills-li'))
    if(this.classList.contains('hero-filters-dropdown-skills-li')){
        console.log(this)
        span.innerHTML = this.childNodes[2].innerHTML
    }
    else
        {
            span.innerHTML = this.lastChild.innerHTML
        }
    }
)

$('.hero-filters-dropdown').on('click', function(){
    if($(this).hasClass('hero-filters-dropdown-InAudiotel'))
        $('.hero-filters-dropdown-option-wrapper-inAudiotel').toggleClass('hero-filters-dropdown-option-wrapper-inAudiotel-active')
        $(this).toggleClass('hero-filters-dropdown_active')
    if($(this).hasClass('hero-filters-dropdown-skills'))
        $('.hero-filters-dropdown-option-wrapper-skills').toggleClass('hero-filters-dropdown-option-wrapper-skills-active')
        $(this).toggleClass('hero-filters-dropdown_active')
    if($(this).hasClass('hero-filters-dropdown-sortBy'))
        $('.hero-filters-dropdown-option-wrapper-sortBy').toggleClass('hero-filters-dropdown-option-wrapper-sortBy-active')
        $(this).toggleClass('hero-filters-dropdown_active')
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

audio.addEventListener('ended', function(){
    $('main-card-teresa-header-playButton').removeClass('main-card-header-playButton_active');
    $('main-card-teresa-header-playButton').next().toggleClass('main-card-teresa-header-player-playBar_active')
    $('main-card-teresa-header-playButton').next().next('a').toggleClass('main-card-header-title_hidden')
    playing = false;
})



$('.main-card-teresa-header-playButton').on('click', function(){
    $(this).next().toggleClass('main-card-teresa-header-player-playBar_active')
    $(this).next().next('a').toggleClass('main-card-header-title_hidden')
    $(this).toggleClass('main-card-teresa-header-playButton_active')
    if(playing){
        audio.pause();
        playing = false
    } else{
        audio.play()
        playing = true
    }
    playing != playing
})

$('.teresaVoyanceMain-card-player-play').on('click', function(){
    $(this).toggleClass('teresaVoyanceMain-card-player-play_active')
    if(playing){
        audio.pause();
        playing = false
    } else{
        audio.play()
        playing = true
    }
    playing != playing
})

$('.recrument-form-apply').on("click", function(){
    $('.requestSended-inner').removeClass('dn')
    $("body").css("overflowY", "hidden")
})

$('.teresaVoyanceMain-form-apply').on("click", function(){
    $('.requestSended-inner').removeClass('dn')
    console.log(window.pageYOffset)
    document.getElementsByClassName('requestSended-inner')[0].style.top = window.pageYOffset  + "px"
    $("body").css("overflowY", "hidden")
})

$('.requestSended-message-link').on("click", function(){
    $('.requestSended-inner').addClass('dn')
    $("body").css("overflowY", "scroll")
})



// function testWebP(callback) {

//     var webP = new Image();
//     webP.onload = webP.onerror = function () {
//         callback(webP.height == 2);
//     };
//     webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }

// testWebP(function (support) {

//     if (support == true) {
//         document.querySelector('body').classList.add('webp');
//     } else {
//         document.querySelector('body').classList.add('no-webp');
//     }
// });

setInterval(PlayerWidthChange, 125)


