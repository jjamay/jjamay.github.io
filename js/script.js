/**
 * Created by J-May on 2016-01-16.
 */
$(document).ready(function() {
     $('#portrait')
     .hover(
          function() {
               $(this).animate({
                    height: '-=30px'
               }, 200);
          },
          function() {
               $(this).animate({
                    height: '+=30px'
               }, 200);
          }
     )
     .click(function() {
          $('html, body').animate({
               scrollTop: $('#welcome').offset().top
          }, 1000)
     });

     $('.bottom-link i')
     .hover(
          function() {
               $(this).animate({
                    color: '#B31918'
               }, 200);
          },
          function() {
               $(this).animate({
                    color: 'white'
               }, 200);
          }
     );
     $('i.fa-envelope-square')
     .click(function() {
          $('.email').toggle();
     })
});
