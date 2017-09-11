/**
 * Created by J-May on 2016-01-16.
 */

$(function() {
  var options = {
    strings: ['Jordan May'],
    typeSpeed: 100,
    // showCursor: false,
    startDelay: 1000,
    onComplete: function(self) {
      $('.typed-cursor').css("visibility", "hidden")
      window.setTimeout(function() {
        $('.home').animate({
          height: "80vh"
        }, 1000)
      }, 1000)
    }
  }
  var typed = new Typed('.title', options)

  $.getScript("https://maps.googleapis.com/maps/api/js", function () {
    var mapDiv = document.getElementById('map')
    var prison = {lat: 43.4722854, lng: -80.5470463}
    var map = new google.maps.Map(mapDiv, {
      center: prison,
      zoom: 13
    })
    var marker = new google.maps.Marker({
      position: prison,
      map: map
    })
  })
})
