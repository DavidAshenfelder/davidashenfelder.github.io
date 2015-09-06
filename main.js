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
page.scrollToTop();
page.showScroll();
page.disableLinks();
},

// Button at bottom of page that scrolls to different sections based on #id//

  scrollDown: function () {
    $('body').on('click','.scroll-button' ,function(event) {
      event.preventDefault()
      var scrollLocation = window.pageYOffset;
      var windowHeight = window.innerHeight;
      var aboutMePic = windowHeight;
      var aboutMeInfo = windowHeight * 2;
      var portfolioPic = windowHeight * 3;
      var portfolioInfo = windowHeight * 4;
      var resumePic = windowHeight * 5;
      var resumeInfo = windowHeight * 6;
      if (scrollLocation < windowHeight) {
        $("html, body").animate({ scrollTop: $("#about-me").offset().top }, 1000);
      } else if (scrollLocation >= aboutMePic && scrollLocation < aboutMeInfo) {
        $("html, body").animate({ scrollTop: $("#about-me-info").offset().top }, 1000);
      } else if (scrollLocation >= aboutMeInfo && scrollLocation < portfolioPic) {
        $("html, body").animate({ scrollTop: $("#portfolio-page").offset().top }, 1000);
      } else if (scrollLocation >= portfolioPic && scrollLocation < portfolioInfo) {
        $("html, body").animate({ scrollTop: $("#portfolio-info").offset().top }, 1000);
      } else if (scrollLocation >= portfolioInfo && scrollLocation < resumePic) {
        $("html, body").animate({ scrollTop: $("#resume-page").offset().top }, 1000);
      } else {
        $("html, body").animate({ scrollTop: $("#resume-info").offset().top }, 1000);
      }
    })
  },

// this is the button that pulls down the navigation bar if you have scrolled and it is hidden//
  navDropDown: function () {
    $('body').on('click','.nav-show-button button' ,function(event) {
      $('.navbar').removeClass('slideOutUp');
      $('.navbar').addClass('slideInDown');
      $('.nav-show-button').addClass('hide');
      $('.nav-collapse-button').removeClass('hide')
    })
  },

// on window scroll the nav bar will disappear to give a full page view//
  navCollapse: function() {
    $(window).scroll(function() {
    $('.navbar').addClass('slideOutUp');
    $('.navbar').removeClass('slideInDown');
    $('.nav-show-button').removeClass('hide');
    $('.nav-collapse-button').addClass('hide');
    })
  },

// if you are at the top of the page, show the navigation bar//
  navShow: function() {
    $(window).scroll(function() {
      var scrollLocation = window.pageYOffset;
      if (scrollLocation <= 0) {
        $('.navbar').removeClass('slideOutUp');
        $('.navbar').addClass('slideInDown');
        $('.nav-show-button').addClass('hide');
        $('.nav-collapse-button').removeClass('hide');
      }
    })
  },

// shows the scroll button based on #home position in window//
  showScroll: function() {
    $(window).scroll(function() {
      var bottomPage = window.innerHeight * 5;

      var scrollLocation = window.pageYOffset;
      var width = $('body').width()
      if (scrollLocation >= bottomPage + 300) {
        $('#scroll-button').addClass('hide');
        $('#top-button').removeClass('hide');
      } else { // this shows the go to top button if you are at bottom of page.
        $('#scroll-button').removeClass('hide');
        $('#top-button').addClass('hide');
      }
    })

  },

// Scrolls to top of page based on #home-page
  scrollToTop: function() {
    $('html, body').on('click', '#top-button', function() {
      $('html, body').animate({ scrollTop: $('#home-page').offset().top}, 3000);
    })
  },

// navbar links scroll to their location based on the links href
  scrollPage: function() {
    $('.nav-link').on('click',function(event) {
      event.preventDefault()
      $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 2000);
    })
  },

// disabling links on i-frame resume
  disableLinks: function () {
    $('.lock-frame').contents().find('a').click(function(event) {
        alert('Select full-screen to access this link')
        event.preventDefault();
    });
  }
};
