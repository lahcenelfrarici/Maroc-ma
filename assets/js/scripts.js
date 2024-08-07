(function ($) {
  $(document).ready(function () {

    // 
    $("#slider-element-maps").owlCarousel({
      loop: true,
      nav: false,
      items: 1,
      dots: true,
      mouseDrag: false, // Disable mouse drag
      touchDrag: false, // Disable touch drag
      // navText: [
      //   "<i class='fa-solid fa-angle-left'></i>",
      //   "<i class='fa-solid fa-angle-right'></i>"
      // ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,

        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
          dragEndSpeed: 0,
        }
      }
    });
    // 
    // Initially show the first element and the first detail
    $('.element-sc').first().addClass('active');
    $('.element-sc').first().find('.information--detail').first().addClass('active');
    $('.tabs--item button').first().addClass('active'); // Add active class to the first tab
    $('.element-sc.active .detail-item button').first().addClass('active'); // Add active class to the first detail button

    // Handle tab clicks
    $('.tabs--item button').click(function () {
      var index = $(this).index(); // Get the index of the clicked tab

      // Remove active class from all tabs, elements, and details
      $('.tabs--item button').removeClass('active');
      $('.element-sc').removeClass('active');
      $('.information--detail').removeClass('active');
      $('.detail-item button').removeClass('active'); // Remove active class from all detail buttons

      // Add fade-out class to the currently active element and details
      $('.element-sc.active').addClass('fade-out');
      $('.information--detail.active').addClass('fade-out');

      // After fade-out transition ends, remove fade-out class and hide the elements
      setTimeout(function () {
        $('.element-sc.fade-out').removeClass('fade-out');
        $('.information--detail.fade-out').removeClass('fade-out');
      }, 500); // Match the duration of your fade-out transition

      // Show the new element
      var $newElement = $('.element-sc').eq(index);
      var $newTab = $('.tabs--item button').eq(index);

      $newElement.addClass('active');
      $newElement.find('.information--detail').first().addClass('active');
      $newTab.addClass('active'); // Add active class to the selected tab

      // Add active class to the first button in the new element
      $newElement.find('.detail-item button').first().addClass('active');
    });

    // Handle detail button clicks
    $('.detail-item button').click(function () {
      var $currentElement = $(this).closest('.element-sc'); // Get the current element-sc
      var detailIndex = $(this).index(); // Get the index of the clicked detail button

      // Remove active class from all buttons in the current element
      $currentElement.find('.detail-item button').removeClass('active');

      // Add active class to the clicked button
      $(this).addClass('active');

      // Remove active class from all details in the current element
      $currentElement.find('.information--detail').removeClass('active');

      // Add fade-out class to the currently active detail
      $currentElement.find('.information--detail.active').addClass('fade-out');

      // After fade-out transition ends, remove fade-out class and hide the detail
      setTimeout(function () {
        $currentElement.find('.information--detail.fade-out').removeClass('fade-out');
      }, 500); // Match the duration of your fade-out transition

      // Show the new detail
      $currentElement.find('.information--detail').eq(detailIndex).addClass('active');
    });

    // Handle detail button clicks
    $('.detail-item button').click(function () {
      var detailIndex = $(this).index(); // Get the index of the clicked detail button
      var $currentElement = $(this).closest('.element-sc'); // Get the current element-sc

      // Remove active class from all details in the current element
      $currentElement.find('.information--detail').removeClass('active');

      // Add fade-out class to the currently active detail
      $currentElement.find('.information--detail.active').addClass('fade-out');

      // After fade-out transition ends, remove fade-out class and hide the detail
      setTimeout(function () {
        $currentElement.find('.information--detail.fade-out').removeClass('fade-out');
      }, 500); // Match the duration of your fade-out transition

      // Show the new detail
      $currentElement.find('.information--detail').eq(detailIndex).addClass('active');
    });
// Mp3

  $('#playPauseButton').click(function() {
    var audioPlayer = $('#audioPlayer')[0];
    var playPauseIcon = $('#playPauseIcon');

    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseIcon.removeClass('fa-circle-play').addClass('fa-circle-pause');
    } else {
      audioPlayer.pause();
      playPauseIcon.removeClass('fa-circle-pause').addClass('fa-circle-play');
    }
  });


    // Tab click event


    // let faqs = $(".faq_details");
    // $(".faq_title").click(function () {
    //   var id_parent = $(this).parent().attr("id");
    //   faqs.slideUp();
    //   faqs.prev().removeClass("active");
    //   $(this).next().slideDown();
    //   $(this).addClass("active");
    //   $('.item--scroll').removeClass('active-tab');
    //   $("[data-section=" + id_parent + "]").addClass("active-tab");
    //   return false;
    // });

    //
    //
    $(".item--all-box--file[data-click='tabs1']").show().css("display", "flex");
    $(".item--scroll[data-click='tabs1']").addClass("active-tab");

    // Tab click event
    $(".click--tabs .item--scroll").click(function () {
      var tab = $(this).data('click');

      // Hide all content and remove active class with animation
      $(".item--all-box--file").fadeOut(300);
      $(".item--scroll").removeClass("active-tab");

      // Show content for the clicked tab with animation and add active class
      $(".item--all-box--file[data-click='" + tab + "']").fadeIn(300, function () {
        // After fadeIn animation is complete, set display to "flex"
        $(this).css("display", "flex");
      });
      $(this).addClass("active-tab");
    });


    var headerHeight = $('.header-transparent').outerHeight();

    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var $mainMenu = $('.main-menu');

      if (scrollTop > 0) {
        $mainMenu.addClass('is-sticky').css({
          'position': 'fixed',
          'width': '100%', // Adjust width as needed
          'left': '0',
          'top': '0'
        });
      } else {
        $mainMenu.removeClass('is-sticky').removeAttr('style');
      }
    });

    $(".slider-center").owlCarousel({
      loop: true,
      margin: 10,
      center: true, // Enable center mode
      nav: true,
      items: 3,
      dots: false,
      mouseDrag: false, // Disable mouse drag
      touchDrag: false, // Disable touch drag
      navText: [
        "<i class='fa-solid fa-angle-left'></i>",
        "<i class='fa-solid fa-angle-right'></i>"
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          center: false // Disable center mode on smaller screens
        },
        600: {
          items: 3,
          center: true // Enable center mode on medium screens
        },
        1000: {
          items: 3,
          center: true,
          dragEndSpeed: 0,
        }
      }
    });

    // Remove the height style from owl-stage-outer
    $(".owl-stage-outer").css("height", "auto");

    window.playVideo = function (button) {
      var videoSrc = $(button).closest('.video-item').data('video-src');
      $('#videoIframe').attr('src', videoSrc);
      $('#videoModal').modal('show');
    };

    $('#videoModal').on('hidden.bs.modal', function () {
      $('#videoIframe').attr('src', '');
    });

    // HEADER SEARCH
    $("header .search-btn").on("click", function () {
      $("header .search--bar").slideToggle();
      $(".search--bar input").focus();
    });

    $("header .search--bar button").on("click", function (e) {
      e.preventDefault();
      $("header .search--bar").slideToggle();
    });







    //
    AOS.init();
    //
    // Menu
    $("#navbarNavDropdown .nav-item").hover(
      function () {
        $(this).addClass("hover-stable-line");
      },
      function () {
        $(this).removeClass("hover-stable-line");
      }
    );
    //
    $('.menu-subs-inner').each(function () {
      var menuCols = $(this).find('.menu-subs-col').length;

      switch (menuCols) {
        case 1:
          $(this).addClass("class-list-title");
          break;
          // case 6:
          //   $(this).addClass("class-for-6");
          //   break;
          // case 7:
          //   $(this).addClass("class-for-7");
          //   break;
        default:
          // Handle other cases if needed
          break;
      }
    });
    //
    $('.main-menu .navbar-toggler').click(function () {
      $('#navbarNavDropdown').toggleClass('show--menu');
    });
    $('.burger-menu').click(function () {
      $('#navbarNavDropdown').removeClass('show--menu');
    });

    $("#menu-second-main-mobile > li > .list-product-cat").each(
      function () {
        $(this).on("click", function () {
          // $('.list-product-cat').removeClass("hover-color-mobile");
          // $(this).addClass('hover-color-mobile');
          if ($(this).hasClass("hover-color-mobile")) {
            $(this).removeClass("hover-color-mobile");
          } else {
            $(
              "#menu-second-main-mobile  > li > a .glyphicon"
            ).removeClass("glyphicon-menu-up");
            $(".list-product-cat").removeClass("hover-color-mobile");
            $(this).addClass("hover-color-mobile");
          }
        });
      }
    );

    $("#menu-second-main-mobile  > li > .list-product-cat").click(function (e) {
      var $this = $(this);
      var href = $this.attr("href");

      if (href !== "#") {
        return; // Don't prevent default behavior
      }

      $(
        "#menu-second-main-mobile > li .list-product-subnav"
      ).slideUp();
      if (!$this.next().is(":visible")) {
        $this.next().slideDown();
      }
      e.stopPropagation();

      var spann = $this.find(".glyphicon");
      spann.toggleClass("glyphicon-menu-up");
    });


    $(".list-product-subnav .menu-item-has-children .list-product-subnav")
      .parent()
      .addClass("li_with_arrow");

    function removeinverse(indexElment) {
      $(".list-product-subnav .menu-item-has-children a").each(function () {
        if (indexElment !== $(this).parent().index()) {
          $(this).removeClass("inverse_arrow");
          $(this).next().removeClass("showmostdropdown");
        }
      });
    }
    $(".list-product-subnav .menu-item-has-children a").on("click", function () {
      removeinverse($(this).parent().index());
      $(this).toggleClass("inverse_arrow");
    });
    var inner_hs = $(
        ".show_all_menu .list-product-subnav .list-product-subnav"
      )
      .parent()
      .children("a");
    inner_hs.on("click", function (e) {
      e.preventDefault();
      $(this).next().toggleClass("showmostdropdown");
    });
    // Metire
    $(".nos-metire-li").each(function () {
      $(this).on("click", function () {
        if ($(this).hasClass("niveau--3")) {
          $(this).removeClass("niveau--3");
        } else {
          $(".nos-metire-li").removeClass("niveau--3");
          $(this).addClass("niveau--3");
        }
      });
    });
    //
    $('.append--search').append($('.search--bar').clone());
  });
})(jQuery);