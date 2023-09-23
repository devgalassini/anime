//body preloader
$(window).on('load', function () {
  $(".loader").fadeOut();
  $("#preloder").delay(200).fadeOut("slow");
});

//On Scroll Header fixed to top
$(window).scroll(function () {
  if ($(window).scrollTop() >= 500) {
    $('header').addClass('fixed-top smooth');
  }
  else {
    $('header').removeClass('fixed-top smooth');
  }
});

// user dashboard
$('.item-wrap .user-btn').on('click', function () {
  $('.user-content').toggleClass('active');
  $('.notify-box').removeClass('active');
});
$('.item-wrap .notify-btn').on('click', function () {
  $('.notify-box').toggleClass('active');
  $('.user-content').removeClass('active');
});

// Search model
$('.search-switch').on('click', function () {
  $('.search-model').fadeIn(400);
});

$('.search-close-switch').on('click', function () {
  $('.search-model').fadeOut(400, function () {
    $('#search-input').val('');
  });
});

// Navigation
$(".mobile-menu").slicknav({
  prependTo: '#mobile-menu-wrap',
});

// Background Set
$('.set-bg').each(function () {
  var bg = $(this).data('setbg');
  $(this).css('background-image', 'url(' + bg + ')');
});

// video frame open popup
jQuery(document).ready(function ($) {
  // Define App Namespace
  var popup = {
    // Initializer
    init: function () {
      popup.popupVideo();
    },
    popupVideo: function () {

      $('.video_model').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        gallery: {
          enabled: true
        }
      });

      //  Image Gallery Popup
      $('.gallery_container').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        gallery: {
          enabled: true
        }
      });
      //  Image Gallery Popup
      $('.gallery_container2').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        gallery: {
          enabled: true
        }
      });

    }


  };
  popup.init($);
});

// hero slider
$('#carousel-hero').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: true,
  navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
  nav: true,
  mouseDrag: false,
  animateOut: 'fadeOut',
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

// Hero Slider light version
var hero_s = $(".hero-light-slider");
hero_s.owlCarousel({
  loop: true,
  margin: 0,
  items: 1,
  dots: true,
  nav: true,
  navText: ["<span class='bi bi-chevron-left'></span>", "<span class='bi bi-chevron-right'></span>"],
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  smartSpeed: 1200,
  autoHeight: false,
  autoplay: true,
  mouseDrag: false
});

// hero boxed slider
$('#hero-boxed-slider').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: true,
  navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
  nav: true,
  mouseDrag: false,
  animateOut: 'fadeOut',
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

//popular anime slider
$('#carouselfeatures').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  navText: ["<i class='bi bi-arrow-left-short'></i>", "<i class='bi bi-arrow-right-short'></i>"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 5
    }
  }
});
// custom position owl nav
var owl2 = $("#carouselfeatures");
owl2.owlCarousel();
$(".next-btn-pop").click(function () {
  owl2.trigger("next.owl.carousel");
});
$(".prev-btn-pop").click(function () {
  owl2.trigger("prev.owl.carousel");
});

//popular anime slider
$('#carouselliveshow').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  navText: ["<i class='bi bi-arrow-left-short'></i>", "<i class='bi bi-arrow-right-short'></i>"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  },

});
// custom position owl nav
var owl = $("#carouselliveshow");
owl.owlCarousel();
$(".next-btn-live").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".prev-btn-live").click(function () {
  owl.trigger("prev.owl.carousel");
});

//  On Scroll back to top
$(window).on('scroll', function () {

  // Back Top Button
  if ($(window).scrollTop() > 500) {
    $('.scrollup').addClass('back-top');
  } else {
    $('.scrollup').removeClass('back-top');
  }
});
// On Click Section Switch
// used for back-top
$('[data-type="section-switch"]').on('click', function () {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    var target = $(this.hash);
    if (target.length > 0) {

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});


// FIlter
$('.filter-controls li').on('click', function () {
  $('.filter-controls li').removeClass('active');
  $(this).addClass('active');
});
if ($('.filter-gallery').length > 0) {
  var containerEl = document.querySelector('.filter-gallery');
  var mixer = mixitup(containerEl);
}

// Video Player
const player = new Plyr('#player', {
  controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'captions', 'settings', 'fullscreen'],
  seekTime: 25
});