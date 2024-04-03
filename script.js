// Handle click events on elements with the class "smooth-scroll"
$('.page-scroll').on('click', function(e) {
          e.preventDefault(); // Prevent default link behavior (jumping)
      
          // Get the target element's ID (assuming links have unique IDs)
          var target = $(this).attr('href');
      
          // Get the target element's position relative to the document's top
          var targetPosition = $(target)
      
          // Animate the scroll to the target element with smooth easing
          $('html, body').animate({
            scrollTop: targetPosition.offset().top - 50
          }, 1000, 'swing'); // Adjust animation duration (ms) and easing function as desired
        });