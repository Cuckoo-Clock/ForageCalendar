



// https://www.weather.gov/documentation/services-web-api

// User-Agent: (myweatherapp.com, contact@myweatherapp.com)


// https://api.weather.gov/points/{latitude},{longitude}
// https://api.weather.gov/points/39.7456,-97.0892

// https://api.weather.gov/gridpoints/{office}/{grid X},{grid Y}/forecast
// https://api.weather.gov/gridpoints/TOP/31,80/forecast


// https://openweathermap.org/api/one-call-api


// geolocation api
// Geolocation.getCurrentPosition()


// openstreetmap.org

// from mdn https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
function geoFindMe() {

    // const status = document.querySelector('#status');
    // const mapLink = document.querySelector('#map-link');
  
    // mapLink.href = '';
    // mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;

      fetch('https://api.weather.gov/points/'+latitude+','+longitude)
      .then(function(resp) { return resp.json() }) // Convert data to json
      .then(function(data) {
        console.log(data);}).catch(function(){});
        return
      }

    function error() {
      console.log('Unable to retrieve your location');
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
}






$(document).ready(
  function(){
    $('#findMe').click(function(){
      console.log('menace');
      geoFindMe();
    });
  

  }
);




// only run weaether once?

// do while?
  function once(fn, context) { 
	var result;

	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}

// Usage
var canOnlyFireOnce = once(function() {
	console.log('Fired!');
});

canOnlyFireOnce(); // "Fired!"
canOnlyFireOnce(); // nada


// JSON PARSING ZONE
// make a function to return values?

// var myJSON = '{"name":"John", "age":31, "city":"New York"}';
// var myObj = JSON.parse(myJSON);
// document.getElementById("demo").innerHTML = myObj.name;

/////////////
// guidePage

function guidePage(){


}