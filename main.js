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
},

  scrollDown: function () {
    $('body').on('click','.scroll-button' ,function(event) {
      event.preventDefault()
      var scrollLocation = window.pageYOffset;
      if (scrollLocation < 700) {
        $("html, body").animate({ scrollTop: 700 }, 2000);
      } else if (scrollLocation < 1400 && scrollLocation >= 700) {
        $("html, body").animate({ scrollTop: 1400 }, 2000);
      } else {
        $("html, body").animate({ scrollTop: 2100 }, 2000);

      }
    })
  },
  topPage: function() {
    $('body').on('click','#home' ,function(event) {
      event.preventDefault()
      $("html, body").animate({ scrollTop: 0 }, 2000);
    })
  },
  about: function() {
    $('body').on('click','#about' ,function(event) {
      event.preventDefault()
      $("html, body").animate({ scrollTop: 700 }, 2000);
    })
  },
  portfolio: function() {
    $('body').on('click','#portfolio' ,function(event) {
      event.preventDefault()
      $("html, body").animate({ scrollTop: 1400 }, 2000);
    })
  },
  resume: function() {
    $('body').on('click','#resume' ,function(event) {
      event.preventDefault()
      $("html, body").animate({ scrollTop: 2100 }, 2000);
    })
  },
};
