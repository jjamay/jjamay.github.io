/**
 * Created by J-May on 2016-01-16.
 */

$(document).ready(function() {

     $.getScript("https://maps.googleapis.com/maps/api/js", function () {
         var mapDiv = document.getElementById('map');
         var prison = {lat: 43.4722854, lng: -80.5470463};
         var map = new google.maps.Map(mapDiv, {
              center: prison,
              zoom: 13
         });
         var marker = new google.maps.Marker({
              position: prison,
              map: map
         })
     });

     $('#portrait')
     .click(function() {
          $('html, body').animate({
               scrollTop: $('#welcome').offset().top
          }, 1000)
     });

     $('.fa-envelope-square')
     .hover(
          function() {
               $('.email').fadeIn(200);
          },
          function() {
               $('.email').fadeOut(200);
          }
     );

     $('#resume-pic')
     .on('hide.bs.collapse', function() {
          $('#resume-btn').text('Show Resume');
     })
     .on('show.bs.collapse', function() {
          $('#resume-btn').text('Hide Resume');
     })
});
