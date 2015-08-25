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
      if (scrollLocation < 700) {
        $("html, body").animate({ scrollTop: $("#about-me").offset().top }, 1000);
      } else if (scrollLocation < 1400 && scrollLocation >= 700) {
        $("html, body").animate({ scrollTop: $("#portfolio-page").offset().top }, 1000);
      } else {
        $("html, body").animate({ scrollTop: $("#resume-page").offset().top }, 1000);
      }
    })
  },

// this is the button that pulls down the navigation bar if you have scrolled and it is hidden//
  navDropDown: function () {
    $('body').on('click','.nav-show-button button' ,function(event) {
      $('.navbar').removeClass('hide');
      $('.nav-show-button').addClass('hide');
      $('.nav-collapse-button').removeClass('hide')
    })
  },

// on window scroll the nav bar will disappear to give a full page view//
  navCollapse: function() {
    $(window).scroll(function() {
    $('.navbar').addClass('hide');
    $('.nav-show-button').removeClass('hide');
    $('.nav-collapse-button').addClass('hide');
    })
  },

// if you are at the top of the page, show the navigation bar//
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

// shows the scroll button based on #home position in window//
  showScroll: function() {
    $(window).scroll(function() {
      var homePos = $('#home').position()
      var width = $('body').width() // for responsive design
      console.log(homePos.top);
      if (homePos.top >= 3408 && width <= 600) { //homePos.top value changes when in responsive because hieights on elements change
        $('#scroll-button').addClass('hide');
        $('#top-button').removeClass('hide');
      } else if (homePos.top >= 2090 && width > 600) { //homePos.top value changes when in responsive because hieights on elements change
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
      $('html, body').animate({ scrollTop: $('#home-page').offset().top}, 2000);
    })
  },

// navbar links scroll to their location based on the links href
  scrollPage: function() {
    $('.nav-link').on('click',function(event) {
      event.preventDefault()
      $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000);
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
