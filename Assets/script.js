//list of variables that connect weather to html cards
//1. connects to the weather section of Loveland card
//2. connects to the weather section of Monarch card
//3. connects to the weather section of Keyston card
//4. connects to the weather section of Breckenridge card
//5. connects to the weather section of Vail card

//1. var lovelandCheckboxEl = document.queryselector("#checkboxLoveland");
//2. var monarchCheckboxEl = document.queryselector("#checkboxMonarch");
//3. var keystoneCheckboxEl = document.queryselector("#checkboxKeystone");
//4. var breckenridgeCheckboxEl = document.queryselector("#checkboxBreckenridge");
//5. var vailCheckboxEl = document.queryselector("#checkboxVail");

//image icon beginning url

// var iconURL = "http://openweathermap.org/img/wn/";

// var dateToday = document.queryselector("#date); -date variable connects to the date in html

//connect to the traffic container - ul section
//

//user interactivity
// var lovelandCheckboxEl = document.queryselector("checkboxLoveland"); to choose Loveland
// var monarchCheckboxEl = document.queryselector("checkboxMonarch"); to choose Monarch
// var keystoneCheckboxEl = document.queryselector("checkboxKeystone"); to choose Keystone
// var breckenridgeCheckboxEl = document.queryselector("checkboxBreckenridge"); to choose Breckenridge
// var vailCheckboxEl = document.queryselector("checkboxVail"); to choose Vail

// when the page loads, user is presented with checkboxes to decide which location's weather they want to see
// and user is presented with current traffic alerts from CDOT
//and user is presented with today's date

//if checkbox is true then show weather information for specific resort; else leave hidden

//today's date from weather API

//we need to add in snow accumulations

//get the weather for Loveland
// function lovelandWeather() {
//   var requestLovelandURL =
//     "http://api.openweathermap.org/data/2.5/weather?q=dillon,co&units=imperial&exclude=minutely&appid=2a1cb33a158e817c9b2231f9a660bba7";
//   fetch(requestLovelandURL) //fetch the url
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data); //show us the data

//       var dateToday = new Date(data.dt * 1000); //pull the date from the data and adjust to recognizable
//       todaysDateEl.textContent = dateToday.toLocaleString(); //put the date in a more recognizable form and put it in location
//       var city = data.name; //pull the city name and put it in city variable
//       var desc = data.weather[0].description; //pull the weather desc and put it in the desc variable
//       var icon = data.weather[0].icon; //pull the weather icon and put it in the icon variable
//       cityNameEl.textContent = city + " - " + desc; // put the city name and weather description in this reference area
//       var todayImageIconEl = document.createElement("img"); // create an img tag
//       todayImageIconEl.src = iconURL + icon + ".png";
//       cityNameEl.appendChild(todayImageIconEl);

//       var todayTemp = data.main.temp;
//       tempTodayEl.textContent = "Temp: " + todayTemp + "* F";
//       var todayWind = data.wind.speed;
//       windTodayEl.textContent = "Wind Speeds: " + todayWind + " mph";
//     });
// }
// lovelandCheckboxEl.addeventListener("click", lovelandWeather()); // if this checkbox is true, pull the weather

// function monarchWeather() {
//   var requestMonarchURL =
//     "http://api.openweathermap.org/data/2.5/weather?q=salida,co&units=imperial&exclude=minutely&appid=2a1cb33a158e817c9b2231f9a660bba7";
//   fetch(requestMonarchURL) //fetch the url
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data); //show us the data

//       var dateToday = new Date(data.dt * 1000); //pull the date from the data and adjust to recognizable
//       todaysDateEl.textContent = dateToday.toLocaleString(); //put the date in a more recognizable form and put it in location
//       var city = data.name; //pull the city name and put it in city variable
//       var desc = data.weather[0].description; //pull the weather desc and put it in the desc variable
//       var icon = data.weather[0].icon; //pull the weather icon and put it in the icon variable
//       cityNameEl.textContent = city + " - " + desc; // put the city name and weather description in this reference area
//       var todayImageIconEl = document.createElement("img"); // create an img tag
//       todayImageIconEl.src = iconURL + icon + ".png";
//       cityNameEl.appendChild(todayImageIconEl);

//       var todayTemp = data.main.temp;
//       tempTodayEl.textContent = "Temp: " + todayTemp + "* F";
//       var todayWind = data.wind.speed;
//       windTodayEl.textContent = "Wind Speeds: " + todayWind + " mph";
//     });
// }
// monarchCheckboxEl.addeventListener("click", monarchWeather()); // if this checkbox is true, pull the weather

// function keystoneWeather() {
//   var requestKeystoneURL =
//     "http://api.openweathermap.org/data/2.5/weather?q=keystone,co&units=imperial&exclude=minutely&appid=2a1cb33a158e817c9b2231f9a660bba7";
//   fetch(requestKeystoneURL) //fetch the url
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data); //show us the data

//       var dateToday = new Date(data.dt * 1000); //pull the date from the data and adjust to recognizable
//       todaysDateEl.textContent = dateToday.toLocaleString(); //put the date in a more recognizable form and put it in location
//       var city = data.name; //pull the city name and put it in city variable
//       var desc = data.weather[0].description; //pull the weather desc and put it in the desc variable
//       var icon = data.weather[0].icon; //pull the weather icon and put it in the icon variable
//       cityNameEl.textContent = city + " - " + desc; // put the city name and weather description in this reference area
//       var todayImageIconEl = document.createElement("img"); // create an img tag
//       todayImageIconEl.src = iconURL + icon + ".png";
//       cityNameEl.appendChild(todayImageIconEl);

//       var todayTemp = data.main.temp;
//       tempTodayEl.textContent = "Temp: " + todayTemp + "* F";
//       var todayWind = data.wind.speed;
//       windTodayEl.textContent = "Wind Speeds: " + todayWind + " mph";
//     });
// }
// keystoneCheckboxEl.addeventListener("click", keystoneWeather()); // if this checkbox is true, pull the weather

// function breckenridgeWeather() {
//   var requestBreckenridgeURL =
//     "http://api.openweathermap.org/data/2.5/weather?q=breckenridge,co&units=imperial&exclude=minutely&appid=2a1cb33a158e817c9b2231f9a660bba7";
//   fetch(requestBreckenridgeURL) //fetch the url
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data); //show us the data

//       var dateToday = new Date(data.dt * 1000); //pull the date from the data and adjust to recognizable
//       todaysDateEl.textContent = dateToday.toLocaleString(); //put the date in a more recognizable form and put it in location
//       var city = data.name; //pull the city name and put it in city variable
//       var desc = data.weather[0].description; //pull the weather desc and put it in the desc variable
//       var icon = data.weather[0].icon; //pull the weather icon and put it in the icon variable
//       cityNameEl.textContent = city + " - " + desc; // put the city name and weather description in this reference area
//       var todayImageIconEl = document.createElement("img"); // create an img tag
//       todayImageIconEl.src = iconURL + icon + ".png";
//       cityNameEl.appendChild(todayImageIconEl);

//       var todayTemp = data.main.temp;
//       tempTodayEl.textContent = "Temp: " + todayTemp + "* F";
//       var todayWind = data.wind.speed;
//       windTodayEl.textContent = "Wind Speeds: " + todayWind + " mph";
//     });
// }
// breckenridgeCheckboxEl.addeventListener("click", breckenridgeWeather()); // if this checkbox is true, pull the weather

// function vailWeather() {
//   var requestVailURL =
//     "http://api.openweathermap.org/data/2.5/weather?q=vail,co&units=imperial&exclude=minutely&appid=2a1cb33a158e817c9b2231f9a660bba7";
//   fetch(requestVailURL) //fetch the url
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data); //show us the data

//       var dateToday = new Date(data.dt * 1000); //pull the date from the data and adjust to recognizable
//       todaysDateEl.textContent = dateToday.toLocaleString(); //put the date in a more recognizable form and put it in location
//       var city = data.name; //pull the city name and put it in city variable
//       var desc = data.weather[0].description; //pull the weather desc and put it in the desc variable
//       var icon = data.weather[0].icon; //pull the weather icon and put it in the icon variable
//       cityNameEl.textContent = city + " - " + desc; // put the city name and weather description in this reference area
//       var todayImageIconEl = document.createElement("img"); // create an img tag
//       todayImageIconEl.src = iconURL + icon + ".png";
//       cityNameEl.appendChild(todayImageIconEl);

//       var todayTemp = data.main.temp;
//       tempTodayEl.textContent = "Temp: " + todayTemp + "* F";
//       var todayWind = data.wind.speed;
//       windTodayEl.textContent = "Wind Speeds: " + todayWind + " mph";
//     });
// }
// vailCheckboxEl.addeventListener("click", monarchWeather()); // if this checkbox is true, pull the weather

//insert the traffic api here. this will push all of the CDOT alerts here

//insert the mapping api here

// function CDOTapi() {
//   var requestCDOTurl =
//     "https://data.cotrip.org/api/v1/roadConditions?apiKey=P0B2XP0-QJZ4W5S-GNZKM3X-9RVZTWW&skipGeometry=true";
//   fetch(requestCDOTurl)
//     .then(function (response) {
//       return response.json();
//       console.log();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }
// CDOTapi();
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