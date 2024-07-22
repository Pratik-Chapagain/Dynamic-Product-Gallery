$(document).ready(function() {
  $('.gallery img').on('click', function() {
      var src = $(this).attr('src');
      var pText = $(this).parent().find('p').text(); // get the text content of the <p> element
      $('.large-image img').attr('src', src);
      $('.large-image p').text(pText); // set the text content of the <p> element
      $('.large-image').fadeIn();
  });

  $('.close').on('click', function() {
      $('.large-image').fadeOut();
  });
});