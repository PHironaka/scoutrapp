// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require underscore
//= require md_simple_editor
//= require gmaps/google
//= require_tree .


function initialize() {
    var mapOptions = {
        zoom: 9,
        center: new google.maps.LatLng(28.9285745, 77.09149350000007),
        mapTypeId: google.maps.MapTypeId.TERRAIN
     };

     var map = new google.maps.Map(document.getElementById('location-canvas'),
mapOptions);

    var marker = new google.maps.Marker({
        map: map,
        draggable: false,
        position: new google.maps.LatLng(28.9285745, 77.09149350000007)
    });
}

google.maps.event.addDomListener(window, 'resize', initialize);
google.maps.event.addDomListener(window, 'load', initialize)
