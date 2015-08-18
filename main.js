$(document).ready(function() {
  page.init();
}),

page = {

 init: function() {

   page.initStyling();
   page.initEvents();

 },

initStyling: function() {

},

initEvents: function() {
page.scrollDown();
page.portfolio();
page.about();
page.resume();
page.topPage();
page.navCollapse();
page.navShow();
page.navDropDown();
page.navSlideUp();
page.scrollToTop();
page.showScrollToTop();
},

  scrollDown: function () {
    $('body').on('click','.scroll-button' ,function(event) {
      event.preventDefault()
      var scrollLocation = window.pageYOffset;
      if (scrollLocation < 700) {
        $("html, body").animate({ scrollTop: $("#about-me").offset().top }, 1000);
      } else if (scrollLocation < 1400 && scrollLocation >= 700) {
        $("html, body").animate({ scrollTop: $("#portfolio-page").offset().top }, 1000);
      } else {
        $("html, body").animate({ scrollTop: $("#resume-page").offset().top }, 1000);
      }
    })
  },

  navDropDown: function () {
    $('body').on('click','.nav-show-button button' ,function(event) {
      $('.navbar').removeClass('hide');
      $('.nav-show-button').addClass('hide');
      $('.nav-collapse-button').removeClass('hide')
    })
  },

  navSlideUp: function () {
    $('body').on('click','.nav-collapse-button' ,function(event) {
      $('.navbar').addClass('hide');
      $('.nav-show-button').removeClass('hide');
      $('.nav-collapse-button').addClass('hide');
    })
  },

  navCollapse: function() {
    $(window).scroll(function() {
    $('.navbar').addClass('hide');
    $('.nav-show-button').removeClass('hide');
    $('.nav-collapse-button').addClass('hide');
    })
  },

  navShow: function() {
    $(window).scroll(function() {
      var homePos = $('#home').position()
      if (homePos.top <= -5) {
        $('.navbar').removeClass('hide');
        $('.nav-show-button').addClass('hide');
        $('.nav-collapse-button').removeClass('hide');
      }
    })
  },

  showScrollToTop: function() {
    $(window).scroll(function() {
      var homePos = $('#home').position()
      var width = $('body').width()
      console.log(homePos.top);
      if (homePos.top >= 3419 && width <= 600) {
        $('#scroll-button').addClass('hide');
        $('#top-button').removeClass('hide');
      } else if (homePos.top >= 2090 && width > 600) {
        $('#scroll-button').addClass('hide');
        $('#top-button').removeClass('hide');
      } else {
        $('#scroll-button').removeClass('hide');
        $('#top-button').addClass('hide');
      }
    })
  },

  scrollToTop: function() {
    $('body').on('click', '#top-button', function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0}, 2500);
    })
  },

  topPage: function() {
    $('body').on('click','#home' ,function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0}, 1000);
    })
  },

  about: function() {
    $('body').on('click','#about' ,function(event) {
      event.preventDefault()
      $("html, body").animate({ scrollTop: $("#about-me").offset().top}, 1000);
    })
  },

  portfolio: function() {
    $('body').on('click','#portfolio' ,function(event) {
      event.preventDefault()
      $("html, body").animate({ scrollTop: $("#portfolio-page").offset().top }, 1000);
    })
  },

  resume: function() {
    $('body').on('click','#resume' ,function(event) {
      event.preventDefault()
      $("html, body").animate({ scrollTop: $("#resume-page").offset().top }, 1000);
    })
  },
};
