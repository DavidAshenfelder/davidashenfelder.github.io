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
page.scrollPage();
page.navCollapse();
page.navShow();
page.navDropDown();
page.navSlideUp();
page.scrollToTop();
page.showScrollToTop();
page.disableLinks();
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
    $('body').on('click', '#top-button', function() {
      $('body').animate({ scrollTop: $('#home-page').offset().top}, 2000);
    })
  },

  scrollPage: function() {
    $('.nav-link').on('click',function(event) {
      event.preventDefault()
      $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000);
    })
  },

  disableLinks: function () {
    $('.lock-frame').contents().find('a').click(function(event) {
        alert('Select full-screen to access this link')
        event.preventDefault();
    });
  }
};
