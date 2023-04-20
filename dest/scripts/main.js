$(document).ready(function() {
    //
    // Header and mobile menu
    //

    const $header = $(".header"),
    $headerBurger = $(".header__burger"),
    $headerCloseMenu = $(".header__btn-close-menu"),
    $mobileMenuCover = $(".mobile-menu-cover"),
    $headerBtnSearch = $(".header__btn-search"),
    $headerSearch = $(".search"),
    $headerSearchBtnClose = $(".search__close"),
    $headerSearchInput = $(".search__form-input"),
    $headerNav = $(".header__nav"),
    $headerNavList = $(".header__nav-list"),
    $headerNavLinksList = $(".header__nav-item"),
    $headerMobileMenuBack = $(".mobile-menu-back"),
    $headerNavSubmenu = $(".header__nav-submenu"),
    $headerNavSubmenuList = $(".header__nav-submenu-list"),
    $headerNavChildItemList = $(".header__nav-child-item--arrow");

    function openMobileMenu() {
        $header.addClass("header--mobile-menu");
        $("body").addClass("overflow-hidden");
        $mobileMenuCover.fadeToggle(280);
        headerSliderInit();
    }

    function closeMobileMenu() {
        $header.removeClass("header--mobile-menu");
        hideMobileDropMenu();
        $("body").removeClass("overflow-hidden");
        $('.header__slider').slick('unslick');
    }

    function toggleHeaderSearch(e) {
        $("body").toggleClass("overflow-hidden");
        $(".wrapper").toggleClass("wrap-transform");
        e.preventDefault();
        $headerSearch.fadeToggle(180);
        $headerSearchInput.focus();
    }

    function showMobileDropMenu() {
        $headerMobileMenuBack.addClass("show");
        $headerNav.addClass("opened-child-menu");
        $(".header__nav-child", this).addClass("show");
    }
    
    function hideMobileDropMenu() {
        $headerMobileMenuBack.removeClass("show");
        $headerNav.removeClass("opened-child-menu");
        $(".header__nav-child").removeClass("show");
        hideMobileSubMenu();
    }

    function showMobileSubMenu(e) {
        e.preventDefault();
        $(".header__nav-child-item").removeClass("is-active");
        $(this).parents('.header__nav-child-item--arrow').addClass("is-active");
    }

    function hideMobileSubMenu() {
        $(".header__nav-child-item").removeClass("is-active");
    }

    function headerSliderInit() {
        $('.header__slider').each(function() {
            $(this).slick({
                dots: true,
                arrows: false,
                infinite: true,
                autoplaySpeed: 8000,
                autoplay: true,
                pauseOnHover: false,
                adaptiveHeight: true,
                pauseOnFocus: false,
                focusOnSelect: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,    
                appendDots: $(this).siblings('.slider-dots-line')
            });
        });
    }
    
    $headerBtnSearch.on("click", toggleHeaderSearch);
    $headerSearchBtnClose.on("click", toggleHeaderSearch);

    if (window.matchMedia('(min-width: 991px)').matches) {
        $('.header__nav').on('mouseenter', '.header__nav-item', function() {
                $('.header__nav-item').removeClass("is-hover");
                $(this).addClass("is-hover");
        });

        $('.header__nav').on({
            mouseenter: function () {
                $(".header__carousel").addClass("is-active");
                headerSliderInit();
            },

            mouseleave: function () {
                $(".header__carousel").removeClass("is-active");
                $('.header__nav-item').removeClass("is-hover");
                $('.header__slider').slick('unslick');
            }
        });

        $('.header__nav-child-close').on('click', function() {
            $('.header__nav-item').removeClass("is-hover");
            $(".header__carousel").removeClass("is-active");
            $('.header__slider').slick('unslick');
        });

    } else {
        $headerBurger.on("click", openMobileMenu);
        $headerCloseMenu.on("click", closeMobileMenu);
        $headerMobileMenuBack.on("click", hideMobileDropMenu);
        $headerNavLinksList.on("click", showMobileDropMenu);
        $headerNavChildItemList.on("click", '.header__nav-child-link', showMobileSubMenu);
    }

    //
    // Slider Slick
    //

    $('.intro__slider').each(function() {
        $(this).slick({
            dots: true,
            arrows: false,
            infinite: true,
            autoplaySpeed: 8000,
            autoplay: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            focusOnSelect: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            appendDots: $(this).siblings('.slider-dots-line')
        });
    });

    $('.partners__slider').slick({
        infinite: true,
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        speed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        focusOnSelect: false
    });

    $('.article__preview-slider').slick({
        dots: true,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: '.slider-dots-count',
        fade: true,

        responsive: [
            {
              breakpoint: 767,
              settings: {
                arrows: false,
                dots: true,
              }
            }
        ]
    });

    $('.software-gallery__slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        appendDots: '.slider-dots-count',

        responsive: [
            {
              breakpoint: 767,
              settings: {
                arrows: false,
                dots: true
              }
            }
        ]
    });

    $('.career-events__slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    });

    $('.jobs__slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,

        responsive: [
            {
              breakpoint: 566,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
                arrows: false
              }
            }
        ]
    });

    $('.career-ecosystem__slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        speed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        focusOnSelect: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true
    });

    $('.news--carousel-mobile .news__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: false,
        variableWidth: true,
        mobileFirst: true, 
        responsive: [
            {
              breakpoint: 566,
              settings: "unslick"
            }
        ]
    });

    $('.partners--carousel-mobile .partners__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: false,
        variableWidth: true,
        mobileFirst: true, 
        responsive: [
            {
              breakpoint: 566,
              settings: "unslick"
            }
        ]
    });

    $('.catalog--slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        variableWidth: true, 
        responsive: [
            {
              breakpoint: 992,
              settings: "unslick"
            }
        ]
    });

    function osComposSlider() {
        $('.os-compos__slider').each(function() {
            $(this).slick({
                dots: true,
                arrows: true,
                infinite: false,
                autoplaySpeed: 8000,
                autoplay: true,
                pauseOnHover: false,
                adaptiveHeight: true,
                pauseOnFocus: false,
                focusOnSelect: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,   
                appendDots: $(this).siblings('.slider-dots-line'),

                responsive: [
                    {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: false,
                        dots: true,
                        arrows: false,
                        adaptiveHeight: true,
                    }
                    }
                ]
            });
        });
    }

    osComposSlider();

    function osHeroSlider() {
        $('.os-hero__slider').each(function() {
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                infinite: true,
                variableWidth: false,
                adaptiveHeight: true,
                appendDots: $(this).siblings('.slider-dots-line'),

                autoplaySpeed: 8000,
                autoplay: true,
                pauseOnHover: false,
                adaptiveHeight: true,
                pauseOnFocus: false,
                focusOnSelect: false,
                fade: true
            });
        });
    }

    osHeroSlider();

    function promoBannerSlider() {
        $('.promo-banner__slider').each(function() {
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                infinite: false,
                variableWidth: false,
                adaptiveHeight: true,
                appendDots: $(this).siblings('.slider-dots-line'),

                autoplaySpeed: 8000,
                autoplay: true,
                pauseOnHover: false,
                adaptiveHeight: true,
                pauseOnFocus: false,
                focusOnSelect: false,
                fade: true
            });
        });
    }

    promoBannerSlider()

    //
    // Modals
    //

    function openModal() {
        var $openModal = $(".modal--open");
        $openModal.removeClass("modal--fadeIn");
        $openModal.removeClass("modal--open");
        $("body").css("overflow", "");

        var modalId = $(this).data("modal");
        $("#" + modalId).addClass("modal--open");

        $("body").css("overflow", "hidden");

        setTimeout(function () {
            $("#" + modalId).addClass("modal--fadeIn");
        }, 50);
    }

    function closeModal() {
        var $openModal = $(".modal--open");
        $openModal.removeClass("modal--fadeIn");

        setTimeout(function () {
            $openModal.removeClass("modal--open");
            $("body").css("overflow", "");
        }, 200);
    }

    $("[data-modal]").on("click", openModal);
    $(".modal").on("click", closeModal);
    $("[data-close-modal]").on("click", closeModal);

    $(".modal > *").on("click", function () {
        event.stopPropagation();
    });

    //
    // Tabs
    //

    let tabTriggerBtns = document.querySelectorAll('[data-active-tab]');

    tabTriggerBtns.forEach(function(tabTriggerBtn, index){
        tabTriggerBtn.addEventListener('click', function(){
            let currentTabData = document.querySelector('[data-tab="' + this.dataset.activeTab + '"]');

            document.querySelector('.tabs__nav-item--active').classList.remove('tabs__nav-item--active');
            document.querySelector('.tabs__content--open').classList.remove('tabs__content--open');

            currentTabData.classList.add('tabs__content--open');
            this.classList.add('tabs__nav-item--active');
        });
    });

    //
    // Filter aside mobile
    //

    function mobileFilterCareer() {
        $("body").toggleClass("overflow-hidden");
        $(".aside-filter-block").toggleClass("is-show");
    }

    $(".js-open-filter").on("click", mobileFilterCareer);
    $(".js-close-filter").on("click", mobileFilterCareer);

    //
    // Btn more about pages
    //

    $('.js-show-more').on('click', function() {
        let btnDataText = $(this).attr('data-text');
        let btnText = $(this).text();

        $(this).parents('.btn--block').siblings('.hidden-content').toggleClass('hidden-content--show');
        $(this).toggleClass('is-active');

        $(this).text(btnText == btnDataText ? $(this).attr('data-toggle-text') : btnDataText);
    });

    $('.js-open-more').on('click', function() {
        let btnDataText = $(this).attr('data-text');
        let btnText = $(this).text();

        $(this).parents('.section').find('.hidden-content').toggleClass('hidden-content--show');
        $(this).toggleClass('is-active');

        $(this).text(btnText == btnDataText ? $(this).attr('data-toggle-text') : btnDataText);
    });

    $('.input__file').each(function() {
        let input = $(this),
            label = input.next('.input__file-label'),
            labelVal = label.html();
        
       input.on('change', function(element) {
          let fileName = '';
          if (element.target.value) fileName = element.target.value.split('\\').pop();
          fileName ? label.addClass('has-file').find('.input__file-label-title').html(fileName) : label.removeClass('has-file').html(labelVal);
       });
    });

    //
    // Input file box
    //

    if (document.querySelector('.input__filedrag-label')) {
        function $id(id) {
            return document.getElementById(id);
        }
        
        function Output(msg) {
            var m       = $id("messages");
            m.innerHTML = msg + m.innerHTML;
        }

        if (window.File && window.FileList && window.FileReader){
            Init();
        }
        
        function Init(){

            var fileselect   = $id("fileselect"),
                filedrag     = $id("filedrag");

            fileselect.addEventListener("change", FileSelectHandler, false);

            var xhr = new XMLHttpRequest();
            if (xhr.upload){
                filedrag.addEventListener("dragover", FileDragHover, false);
                filedrag.addEventListener("dragleave", FileDragHover, false);
                filedrag.addEventListener("drop", FileSelectHandler, false);
                filedrag.style.display = "flex";
            }

        }

        function FileDragHover(e){
            e.stopPropagation();
            e.preventDefault();
            e.target.classList.addName = (e.type == "dragover" ? "hover" : "");
        }

        function FileSelectHandler(e){
            FileDragHover(e);

            var files = e.target.files || e.dataTransfer.files;

            for (var i = 0, f; f = files[i]; i++){
                ParseFile(f);
            }
        }

        function ParseFile(file) {
            Output(
                "<p><i class='icons icons--doc-gray'></i>" + file.name + "</p>"
            );
        }
    }

    //
    // Vacancies tags
    //

    let jobsCards = document.querySelectorAll('.jobs__card-tags-body');

    for (let i = 0; i < jobsCards.length; ++i) {
        if (jobsCards[i].children.length - 1 > 3) {
            jobsCards[i].classList.add('jobs__card-tags--abbr');
        } 

        jobsCards[i].getElementsByClassName('jobs__card-tags-add')[0].addEventListener('click', () => jobsCards[i].classList.add('jobs__card-tags--show'));
    }

    //
    // Form tabs
    //

    if (document.querySelector('.feedback--test')) {
        var currentTab = 0;
        showTab(currentTab);

        function showTab(n) {
            var x = document.getElementsByClassName("feedback__form-tab");
            x[n].style.display = "block";

            if (n == 0) {
                document.getElementById("feedback__btn-prev").style.display = "none";
            } else {
                document.getElementById("feedback__btn-prev").style.display = "inline-flex";
            }

            if (n == (x.length - 2)) {
                document.getElementById("form-steps-footer").style.display = "flex";
                document.getElementById("feedback__btn-next").innerHTML = "Отправить запрос";

                document.getElementById("feedback__btn-next").classList.replace('btn--arrow-right-after', 'btn--email-after');

                document.getElementById("form-steps-headline").style.display = "block";
                
            } else if (n == (x.length - 1)) {
                document.getElementById("form-steps-footer").style.display = "none";

            } else {
                document.getElementById("form-steps-footer").style.display = "flex";
                document.getElementById("feedback__btn-next").classList.replace('btn--email-after', 'btn--arrow-right-after');
                document.getElementById("feedback__btn-next").innerHTML = "Далее";
            }

            fixStepIndicator(n)
        }

        function nextPrev(n) {
            var x = document.getElementsByClassName("feedback__form-tab");
            if (n == 1 && !validateForm()) return false;
            x[currentTab].style.display = "none";
            currentTab = currentTab + n;

            if (currentTab >= x.length) {
                //document.getElementById("form-steps").submit();
                
                return false;
            }

            showTab(currentTab);
        }

        function validateForm() {
            var x, y, i, valid = true;
            x = document.getElementsByClassName("feedback__form-tab");
            y = x[currentTab].getElementsByTagName("input");

            for (i = 0; i < y.length; i++) {
                if (y[i].value == "") {

                y[i].className += " invalid";

                valid = false;
                }
            }

            if (valid) {
                document.getElementsByClassName("feedback__form-steps-item")[currentTab].className += " is-finish";
            }

            return valid;
        }

        function fixStepIndicator(n) {
            var i, x = document.getElementsByClassName("feedback__form-steps-item");
            for (i = 0; i < x.length; i++) {
                x[i].className = x[i].className.replace(" is-active", "");
            }

            x[n].className += " is-active";
        }
    }

    //
    // Anchors
    //

    if (document.querySelector('.anchors')) {
        let headerHeight;

        const mq = window.matchMedia('(max-width: 992px)');

        if (mq.matches) {
            headerHeight = document.querySelector('.header').clientHeight + document.querySelector('.anchors').clientHeight; 
        } else {
            headerHeight = document.querySelector('.anchors').clientHeight; 
        }

        function activeAnchor () {
            let sectionAnchor = document.querySelectorAll('.section-anchor');

            for (let i = 0; i < sectionAnchor.length; i++) { 
                document.querySelector('.anchors__nav-link[href="#' + sectionAnchor[i].id + '"]').className=((1 >= sectionAnchor[i].getBoundingClientRect().top - (headerHeight + 24) && sectionAnchor[i].getBoundingClientRect().top - (headerHeight + 24) >= 1-sectionAnchor[i].offsetHeight) ? 'anchors__nav-link is-current' : 'anchors__nav-link');
            }
        }

        window.addEventListener('scroll', activeAnchor, false);
        window.addEventListener('load', activeAnchor, false);

        let anchorsElem = document.querySelectorAll('.anchors__nav-link');
        
        for (let anchor of anchorsElem) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                let scrollDistance = window.scrollY;
                
                const element = document.querySelector(this.getAttribute('href'));
                
                window.scrollTo({
                    top: element.offsetTop - headerHeight - 24,
                    behavior: "smooth"
                });
            })
        }
    }

    //
    // Проверка на количество материалов
    //

    let listMaterials = document.querySelectorAll('.materials__list');

    for (let i = 0; i < listMaterials.length; ++i) {
        if (listMaterials[i].children.length > 6) {
            let DOMmore = document.createElement('div');
            DOMmore.className = 'btn--block materials__more';
            DOMmore.innerHTML = '<button class=" btn btn--reset btn--more js-show-more" aria-label="Load more" data-text="Развернуть" data-toggle-text="Скрыть">Развернуть</button>';
            listMaterials[i].parentElement.append(DOMmore);

            listMaterials[i].classList.add('hidden-content')
        }
    }

    //
    // Widget scripts
    //

    $('.widget__table--arrow > .widget__table-item .widget__table-title').on('click', function(){
        $(this).parents('.widget__table--arrow').toggleClass('is-show')
    });

});