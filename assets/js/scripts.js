(function ($) {
  $(document).ready(function () {

    // 
    $(".slider-element-maps").owlCarousel({
      loop: true,
      nav: false,
      items: 1,
      dots: true,
      mouseDrag: false, // Disable mouse drag
      touchDrag: false, // Disable touch drag
      autoHeight:true,
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
          autoHeight:false,
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

    $('#playPauseButton').click(function () {
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

  });
})(jQuery);