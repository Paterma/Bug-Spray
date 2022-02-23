//iconURL for displaying weather icon
var iconURL = "http://openweathermap.org/img/wn/";
//list of variables that connect weather to Monarch card
var monarchCheckboxEl = document.querySelector("#checkboxMonarch");
var tempMonarchEl = document.querySelector("#monarchTemp");
var descMonarchEl = document.querySelector("#monarchDescription");
var windMonarchEl = document.querySelector("#monarchWind");

//list of variables that connect to Loveland card
var lovelandCheckboxEl = document.querySelector("#checkboxLoveland");
var tempLovelandEl = document.querySelector("#lovelandTemp");
var descLovelandEl = document.querySelector("#lovelandDescription");
var windLovelandEl = document.querySelector("#lovelandWind");

//list of variables that connect to Keystone card
var keystoneCheckboxEl = document.querySelector("#checkboxKeystone");
var tempKeystoneEl = document.querySelector("#keystoneTemp");
var descKeystoneEl = document.querySelector("#keystoneDescription");
var windKeystoneEl = document.querySelector("#keystoneWind");

//list of variables that connect to Breckenridge card
var breckenridgeCheckboxEl = document.querySelector("#checkboxBreckenridge");
var tempBreckenridgeEl = document.querySelector("#breckenridgeTemp");
var descBreckenridgeEl = document.querySelector("#breckenridgeDescription");
var windBreckenridgeEl = document.querySelector("#breckenridgeWind");

//list of variables that connect to Vail card
var vailCheckboxEl = document.querySelector("#checkboxVail");
var tempVailEl = document.querySelector("#vailTemp");
var descVailEl = document.querySelector("#vailDescription");
var windVailEl = document.querySelector("#vailWind");

// var dateToday = document.queryselector("#date); -date variable connects to the date in html

//get the weather for Loveland
function lovelandWeather() {
  var dillonLat = "39.6303";
  var dillonLong = "-106.0434";
  var requestLovelandURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    dillonLat +
    "&lon=" +
    dillonLong +
    "&units=imperial&exclude=minutely&appid=2a1cb33a158e817c9b2231f9a660bba7";

  fetch(requestLovelandURL) //fetch the url
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data); //show us the data

      // var dateToday = new Date(data.current[1] * 1000); //pull the date from the data and adjust to recognizable
      // todaysDateEl.textContent = dateToday.toLocaleString(); //put the date in a more recognizable form and put it in location
      // var city = data.name; //pull the city name and put it in city variable
      var desc = data.current.weather[0].description; //pull the weather desc and put it in the desc variable
      var icon = data.current.weather[0].icon; //pull the weather icon and put it in the icon variable
      descLovelandEl.textContent = desc; // put the city name and weather description in this reference area
      var todayImageIconEl = document.createElement("img"); // create an img tag
      todayImageIconEl.src = iconURL + icon + ".png";
      descLovelandEl.appendChild(todayImageIconEl);

      var todayTemp = data.current.temp;
      tempLovelandEl.textContent = "Temp: " + todayTemp + "* F";
      var todayWind = data.current.wind_speed;
      windLovelandEl.textContent = "Wind Speeds: " + todayWind + " mph";
    });
}
lovelandCheckboxEl.addEventListener("click", lovelandWeather()); // if this button is clicked, pull the weather

function monarchWeather() {
  var monarchLat = "38.5458";
  var monarchLong = "-106.9253";
  var requestMonarchURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    monarchLat +
    "&lon=" +
    monarchLong +
    "&units=imperial&exclude=minutely&appid=2a1cb33a158e817c9b2231f9a660bba7";

  fetch(requestMonarchURL) //fetch the url
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data); //show us the data

      // var dateToday = new Date(data.current[1] * 1000); //pull the date from the data and adjust to recognizable
      // todaysDateEl.textContent = dateToday.toLocaleString(); //put the date in a more recognizable form and put it in location
      // var city = data.name; //pull the city name and put it in city variable
      var desc = data.current.weather[0].description; //pull the weather desc and put it in the desc variable
      var icon = data.current.weather[0].icon; //pull the weather icon and put it in the icon variable
      descMonarchEl.textContent = desc; // put the city name and weather description in this reference area
      var todayImageIconEl = document.createElement("img"); // create an img tag
      todayImageIconEl.src = iconURL + icon + ".png";
      descMonarchEl.appendChild(todayImageIconEl);

      var todayTemp = data.current.temp;
      tempMonarchEl.textContent = "Temp: " + todayTemp + "* F";
      var todayWind = data.current.wind_speed;
      windMonarchEl.textContent = "Wind Speeds: " + todayWind + " mph";
    });
}
monarchCheckboxEl.addEventListener("click", monarchWeather()); // if this button is clicked, pull the weather

function keystoneWeather() {
  var keystoneLat = "39.6064";
  var keystoneLong = "-105.971";
  var requestKeystoneURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    keystoneLat +
    "&lon=" +
    keystoneLong +
    "&units=imperial&exclude=minutely&appid=2a1cb33a158e817c9b2231f9a660bba7";

  fetch(requestKeystoneURL) //fetch the url
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data); //show us the data

      // var dateToday = new Date(data.current[1] * 1000); //pull the date from the data and adjust to recognizable
      // todaysDateEl.textContent = dateToday.toLocaleString(); //put the date in a more recognizable form and put it in location
      // var city = data.name; //pull the city name and put it in city variable
      var desc = data.current.weather[0].description; //pull the weather desc and put it in the desc variable
      var icon = data.current.weather[0].icon; //pull the weather icon and put it in the icon variable
      descKeystoneEl.textContent = desc; // put the city name and weather description in this reference area
      var todayImageIconEl = document.createElement("img"); // create an img tag
      todayImageIconEl.src = iconURL + icon + ".png";
      descKeystoneEl.appendChild(todayImageIconEl);

      var todayTemp = data.current.temp;
      tempKeystoneEl.textContent = "Temp: " + todayTemp + "* F";
      var todayWind = data.current.wind_speed;
      windKeystoneEl.textContent = "Wind Speeds: " + todayWind + " mph";
    });
}
keystoneCheckboxEl.addEventListener("click", keystoneWeather()); // if this button is clicked, pull the weather

function breckenridgeWeather() {
  var breckenridgeLat = "39.4817";
  var breckenridgeLong = "-106.0384";
  var requestBreckenridgeURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    breckenridgeLat +
    "&lon=" +
    breckenridgeLong +
    "&units=imperial&exclude=minutely&appid=2a1cb33a158e817c9b2231f9a660bba7";

  fetch(requestBreckenridgeURL) //fetch the url
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data); //show us the data

      // var dateToday = new Date(data.current[1] * 1000); //pull the date from the data and adjust to recognizable
      // todaysDateEl.textContent = dateToday.toLocaleString(); //put the date in a more recognizable form and put it in location
      // var city = data.name; //pull the city name and put it in city variable
      var desc = data.current.weather[0].description; //pull the weather desc and put it in the desc variable
      var icon = data.current.weather[0].icon; //pull the weather icon and put it in the icon variable
      descBreckenridgeEl.textContent = desc; // put the city name and weather description in this reference area
      var todayImageIconEl = document.createElement("img"); // create an img tag
      todayImageIconEl.src = iconURL + icon + ".png";
      descBreckenridgeEl.appendChild(todayImageIconEl);

      var todayTemp = data.current.temp;
      tempBreckenridgeEl.textContent = "Temp: " + todayTemp + "* F";
      var todayWind = data.current.wind_speed;
      windBreckenridgeEl.textContent = "Wind Speeds: " + todayWind + " mph";
    });
}
breckenridgeCheckboxEl.addEventListener("click", breckenridgeWeather()); // if this button is clicked, pull the weather

function vailWeather() {
  var vailLat = "39.6064";
  var vailLong = "-105.971";
  var requestVailURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    vailLat +
    "&lon=" +
    vailLong +
    "&units=imperial&exclude=minutely&appid=2a1cb33a158e817c9b2231f9a660bba7";

  fetch(requestVailURL) //fetch the url
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data); //show us the data

      // var dateToday = new Date(data.current[1] * 1000); //pull the date from the data and adjust to recognizable
      // todaysDateEl.textContent = dateToday.toLocaleString(); //put the date in a more recognizable form and put it in location
      // var city = data.name; //pull the city name and put it in city variable
      var desc = data.current.weather[0].description; //pull the weather desc and put it in the desc variable
      var icon = data.current.weather[0].icon; //pull the weather icon and put it in the icon variable
      descVailEl.textContent = desc; // put the city name and weather description in this reference area
      var todayImageIconEl = document.createElement("img"); // create an img tag
      todayImageIconEl.src = iconURL + icon + ".png";
      descVailEl.appendChild(todayImageIconEl);

      var todayTemp = data.current.temp;
      tempVailEl.textContent = "Temp: " + todayTemp + "* F";
      var todayWind = data.current.wind_speed;
      windVailEl.textContent = "Wind Speeds: " + todayWind + " mph";
    });
}
vailCheckboxEl.addEventListener("click", vailWeather()); // if this button is clicked, pull the weather
//insert the traffic api here. this will push all of the CDOT alerts here

//we need to add in snow accumulations

//insert the mapping api here

var breckenridgeCheckboxEl = document.querySelector("#checkboxBreckenridge");
function snowFallBreckenridge(){
  var requestSFurl = "https://api.aerisapi.com/winter/snowdepth/breckenridge,co?client_id=bz37Z5NoJ9ov0YNNQIaHC&client_secret=y8QHN9b2pa8zVbghFjWBBlLCJ7I3LbjsMjReV8gm"
  fetch(requestSFurl)
  .then(function (response){
    return response.json();
  }) .then(function(data) {
    console.log(data);
    var snowDepthbr = data.response.periods[0].snowDepthIN;
    console.log(snowDepthbr + " inches in Breckenridge");
  })
}
breckenridgeCheckboxEl.addEventListener("click", snowFallBreckenridge());

var monarchCheckboxEl = document.querySelector("#checkboxMonarch");
function snowFallMonarch(){
  var requestSFurl = "https://api.aerisapi.com/winter/snowdepth/gunnison,co?client_id=bz37Z5NoJ9ov0YNNQIaHC&client_secret=y8QHN9b2pa8zVbghFjWBBlLCJ7I3LbjsMjReV8gm"
  fetch(requestSFurl)
  .then(function (response){
    return response.json();
  }) .then(function(data) {
    console.log(data);
    var snowDepthM = data.response.periods[0].snowDepthIN;
    console.log(snowDepthM + " inches in Monarch");
  })
}
monarchCheckboxEl.addEventListener("click", snowFallMonarch());

var vailCheckboxEl = document.querySelector("#checkboxVail");
function snowFallVail(){
  var requestSFurl = "https://api.aerisapi.com/winter/snowdepth/vail,co?client_id=bz37Z5NoJ9ov0YNNQIaHC&client_secret=y8QHN9b2pa8zVbghFjWBBlLCJ7I3LbjsMjReV8gm"
  fetch(requestSFurl)
  .then(function (response){
    return response.json();
  }) .then(function(data) {
    console.log(data);
    var snowDepthV = data.response.periods[0].snowDepthIN;
    console.log(snowDepthV + " inches in Vail");
  })
}
vailCheckboxEl.addEventListener("click", snowFallVail());

var keystoneCheckboxEl = document.querySelector("#checkboxKeystone");
function snowFallKeystone(){
  var requestSFurl = "https://api.aerisapi.com/winter/snowdepth/keystone,co?client_id=bz37Z5NoJ9ov0YNNQIaHC&client_secret=y8QHN9b2pa8zVbghFjWBBlLCJ7I3LbjsMjReV8gm"
  fetch(requestSFurl)
  .then(function (response){
    return response.json();
  }) .then(function(data) {
    console.log(data);
    var snowDepthK = data.response.periods[0].snowDepthIN;
    console.log(snowDepthK + " inches in Keystone");
  })
}
keystoneCheckboxEl.addEventListener("click", snowFallKeystone());

var lovelandCheckboxEl = document.querySelector("#checkboxLoveland");
function snowFallLoveland(){
  var requestSFurl = "https://api.aerisapi.com/winter/snowdepth/loveland,co?client_id=bz37Z5NoJ9ov0YNNQIaHC&client_secret=y8QHN9b2pa8zVbghFjWBBlLCJ7I3LbjsMjReV8gm"
  fetch(requestSFurl)
  .then(function (response){
    return response.json();
  }) .then(function(data) {
    console.log(data);
    var snowDepthL = data.response.periods[0].snowDepthIN;
    console.log(snowDepthL + " inches in Loveland");
  })
}
lovelandCheckboxEl.addEventListener("click", snowFallLoveland());

//https://api.aerisapi.com/conditions/breckenridge, co?format=json&plimit=1&filter=1min&client_id=[CLIENT_ID]&client_secret=[CLIENT_SECRET]

//apikey for google-AIzaSyCjQWepgxl2VNsTlqHs-VfxsYseo41dEXM
=======
function CDOTapi() {
  var requestCDOTurl =
    "https://cors-anywhere.herokuapp.com/https://data.cotrip.org/api/v1/roadConditions?apiKey=P0B2XP0-QJZ4W5S-GNZKM3X-9RVZTWW&skipGeometry=true";
  fetch(requestCDOTurl)
    .then(function (response) {
      return response.json();
      console.log();
    })
    .then(function (data) {
      console.log(data);
    });
}

// https://username:password@data.cotrip.org/xml/cameras.xml
