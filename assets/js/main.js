// fab and carousel
$(document).ready(function () {
  $('.nav .nav_list li a').click(function () {
    // applying smooth scroll again on menu items click
    $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $('.nav_toggle').click(function () {
    $('.nav .nav_list').toggleClass("active");
    $('.nav_toggle i').toggleClass("active");
  });

  $('.nav_link').click(function () {
    $('.nav .nav_list').toggleClass("active");
    $('.nav_toggle i').toggleClass("active");
  });

  $('.nav_link #home').click(function () {
    $('html').animate({
      scrollTop: 0
    });
  });

  $(window).scroll(function () {

    // fab show/hide script
    if (this.scrollY > 100) {
      $('.fab_button').removeClass("fade");
    } else {
      $('.fab_button').addClass("fade");
    }
  });

  // go up script
  $('.fab_button').click(function () {
    $('html').animate({
      scrollTop: 0
    });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
    window.location = "#";
  });

  // carousel
  $(".owl-carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true, //FALSE
    autoplayTimeout: 2000,
    autoplayHoverPause: true, //FALSE
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
  
  // show/hide - need fix!
  // .mobile
  $('.mobile').click(function () {
    $('.pitem_m').removeClass("hide");
    $('.pitem_w').addClass("hide");
  });

  // .desktop
  $('.desktop').click(function () {
    $('.pitem_w').removeClass("hide");
    $('.pitem_m').addClass("hide");
  });

  // .all
  $('.all').click(function () {
    $('.pitem_w').removeClass("hide");
    $('.pitem_m').removeClass("hide");
  });

  // active selection 
  $('li').click(function () {
    if (!$(this).hasClass("selected")) {
      $("li.selected").removeClass("selected");
      $(this).addClass("selected");
    }
  });
});