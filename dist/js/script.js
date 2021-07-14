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
    let span = this.parentNode.previousElementSibling.childNodes[1]
    if(this.classList.contains('hero-filters-dropdown-skills-li')){
        if(this.getElementsByTagName('input')[0].checked == true){
            this.getElementsByTagName('input')[0].checked = false
            span.innerHTML = span.innerHTML.replace(this.childNodes[2].innerHTML, '')
        }
        else{
            span = this.parentNode.previousElementSibling.childNodes[1]
            console.log(span.innerHTML)

            this.getElementsByTagName('input')[0].checked = true
            let spanInnerHTML = span.innerHTML
            if(spanInnerHTML.includes(this.childNodes[2].innerHTML)){
                return
            }
            else{
                span.innerHTML +=  ' ' + this.childNodes[2].innerHTML
                console.log(span.innerHTML)
            }
            
        }
    }
    else
        {
            span.innerHTML = this.lastChild.innerHTML
        }
    }
    
)

$('.hero-filters-dropdown-option').mouseenter(function(){
    if($(this).hasClass('hero-filters-dropdown-inAudiotel-li'))
        $(this).addClass('hero-filters-dropdown-option-hovered')
    else if($(this).hasClass('hero-filters-dropdown-option-skills'))
        $(this).addClass('hero-filters-dropdown-option-skills-hovered')
    else
        return
})

$('.hero-filters-dropdown-option').mouseleave(function(){
    if($(this).hasClass('hero-filters-dropdown-inAudiotel-li'))
        $(this).removeClass('hero-filters-dropdown-option-hovered')
    else if($(this).hasClass('hero-filters-dropdown-option-skills'))
        $(this).removeClass('hero-filters-dropdown-option-skills-hovered')
    else
        return
})


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

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory((root.syncscroll = {}));
    }
}(this,function (exports) {
    var Width = 'Width';
    var Height = 'Height';
    var Top = 'Top';
    var Left = 'Left';
    var scroll = 'scroll';
    var client = 'client';
    var EventListener = 'EventListener';
    var addEventListener = 'add' + EventListener;
    var length = 'length';
    var Math_round = Math.round;

    var names = {};

    var reset = function() {
        var elems = document.getElementsByClassName('sync'+scroll);

        // clearing existing listeners
        var i, j, el, found, name;
        for (name in names) {
            if (names.hasOwnProperty(name)) {
                for (i = 0; i < names[name][length]; i++) {
                    names[name][i]['remove'+EventListener](
                        scroll, names[name][i].syn, 0
                    );
                }
            }
        }

        // setting-up the new listeners
        for (i = 0; i < elems[length];) {
            found = j = 0;
            el = elems[i++];
            if (!(name = el.getAttribute('name'))) {
                // name attribute is not set
                continue;
            }

            el = el[scroll+'er']||el;  // needed for intence

            // searching for existing entry in array of names;
            // searching for the element in that entry
            for (;j < (names[name] = names[name]||[])[length];) {
                found |= names[name][j++] == el;
            }

            if (!found) {
                names[name].push(el);
            }

            el.eX = el.eY = 0;

            (function(el, name) {
                el[addEventListener](
                    scroll,
                    el.syn = function() {
                        var elems = names[name];

                        var scrollX = el[scroll+Left];
                        var scrollY = el[scroll+Top];

                        var xRate =
                            scrollX /
                            (el[scroll+Width] - el[client+Width]);
                        var yRate =
                            scrollY /
                            (el[scroll+Height] - el[client+Height]);

                        var updateX = scrollX != el.eX;
                        var updateY = scrollY != el.eY;

                        var otherEl, i = 0;

                        el.eX = scrollX;
                        el.eY = scrollY;

                        for (;i < elems[length];) {
                            otherEl = elems[i++];
                            if (otherEl != el) {
                                if (updateX &&
                                    Math_round(
                                        otherEl[scroll+Left] -
                                        (scrollX = otherEl.eX =
                                         Math_round(xRate *
                                             (otherEl[scroll+Width] -
                                              otherEl[client+Width]))
                                        )
                                    )
                                ) {
                                    otherEl[scroll+Left] = scrollX;
                                }
                                
                                if (updateY &&
                                    Math_round(
                                        otherEl[scroll+Top] -
                                        (scrollY = otherEl.eY =
                                         Math_round(yRate *
                                             (otherEl[scroll+Height] -
                                              otherEl[client+Height]))
                                        )
                                    )
                                ) {
                                    otherEl[scroll+Top] = scrollY;
                                }
                            }
                        }
                    }, 0
                );
            })(el, name);
        }
    }
    
       
    if (document.readyState == "complete") {
        reset();
    } else {
        window[addEventListener]("load", reset, 0);
    }

    exports.reset = reset;
}));
