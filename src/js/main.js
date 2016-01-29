// add scripts
$(document).ready(function(){
  console.log("READY, PLAYER ONE?");
  
  var ipRequest = {
    "url": "http://jsonip.com/",
    "method": "GET"
  }
    
  $.ajax(ipRequest).done(function(ipResponse) {
    console.log(ipResponse);
    var ipAddress = ipResponse.ip;
    
    var locationRequest = {
    "url": "http://freegeoip.net/json/" + ipAddress,
    "method": "GET"
    }
    
    $('#ip').append(ipAddress); 
    
    $.ajax(locationRequest).done(function(locationResponse) {
    console.log(locationResponse);
    var latitude = locationResponse.latitude;
    var longitude = locationResponse.longitude;
    console.log("this is the latitude: " + latitude);

      var forecast = {
        "url": "https://api.forecast.io/forecast/1f20d4933aaab481a0b34eb3559b6d50/" + latitude + "," + longitude,
        "method": "GET",
        "dataType": "jsonp"
      }
      
      console.log(forecast.url);
      
      $.ajax(forecast).done(function (forecastResponse) {
        var currentWeather = forecastResponse.currently.summary
        var dailyWeather = forecastResponse.daily.summary

        $('#weather-now').append(currentWeather);
        $('#weather-summary').append(dailyWeather);
        
      });                    
    });  
  });
});
