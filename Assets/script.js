//iconURL for displaying weather icon
var iconURL = "http://openweathermap.org/img/wn/";
//list of variables that connect weather to Monarch card
var monarchCheckboxEl = document.querySelector("#checkboxMonarch");
var tempMonarchEl = document.querySelector("#monarchTemp");
var descMonarchEl = document.querySelector("#monarchDescription");
var windMonarchEl = document.querySelector("#monarchWind");
var monarchHeader = document.querySelector("#monarchHeader");
var monarchSnowDepth = document.querySelector("#monarchSnowDepth");

//list of variables that connect to Loveland card
var lovelandCheckboxEl = document.querySelector("#checkboxLoveland");
var tempLovelandEl = document.querySelector("#lovelandTemp");
var descLovelandEl = document.querySelector("#lovelandDescription");
var windLovelandEl = document.querySelector("#lovelandWind");
var lovelandHeader = document.querySelector("#lovelandHeader");
var lovelandSnowDepth = document.querySelector("#lovelandSnowDepth");

//list of variables that connect to Keystone card
var keystoneCheckboxEl = document.querySelector("#checkboxKeystone");
var tempKeystoneEl = document.querySelector("#keystoneTemp");
var descKeystoneEl = document.querySelector("#keystoneDescription");
var windKeystoneEl = document.querySelector("#keystoneWind");
var keystoneHeader = document.querySelector("#keystoneHeader");
var keystoneSnowDepth = document.querySelector("#keystoneSnowDepth");

//list of variables that connect to Breckenridge card
var breckenridgeCheckboxEl = document.querySelector("#checkboxBreckenridge");
var tempBreckenridgeEl = document.querySelector("#breckenridgeTemp");
var descBreckenridgeEl = document.querySelector("#breckenridgeDescription");
var windBreckenridgeEl = document.querySelector("#breckenridgeWind");
var breckenridgeHeader = document.querySelector("#breckenridgeHeader");
var breckenridgeSnowDepth = document.querySelector("#breckenridgeSnowDepth");

//list of variables that connect to Vail card
var vailCheckboxEl = document.querySelector("#checkboxVail");
var tempVailEl = document.querySelector("#vailTemp");
var descVailEl = document.querySelector("#vailDescription");
var windVailEl = document.querySelector("#vailWind");
var vailHeader = document.querySelector("#vailHeader");
var vailSnowDepth = document.querySelector("#vailSnowDepth");

// console.log(localStorage);

var lovelandDatafromStorage = localStorage.getItem("lovelandData");
// console.log(lovelandDatafromStorage);

var lovelandDataParse = JSON.parse(lovelandDatafromStorage);
// console.log(lovelandDataParse);

function popLovelandData(lovelandDataParse) {
  console.log(lovelandDataParse);
  tempLovelandEl.textContent = "Temp: " + lovelandDataParse[0].temp + "*F";
  descLovelandEl.textContent = lovelandDataParse[0].desc;
  windLovelandEl.textContent =
    "Wind Speed: " + lovelandDataParse[0].wind + " mph";
  lovelandIcon = document.createElement("img"); // create an img tag
  lovelandIcon.src = lovelandDataParse[0].img;
  descLovelandEl.appendChild(lovelandIcon);
  lovelandSnowDepth.textContent =
    "Snow: " + lovelandDataParse[0].snow + " inches ";
  lovelandHeader.textContent = "Loveland";
}
if (!lovelandDataParse == []) {
  popLovelandData(lovelandDataParse);
}

var monarchDatafromStorage = localStorage.getItem("monarchData");
// console.log(monarchDatafromStorage);

var monarchDataParse = JSON.parse(monarchDatafromStorage);
// console.log(monarchDataParse);

function popMonarchData(monarchDataParse) {
  console.log(monarchDataParse);
  tempMonarchEl.textContent = "Temp: " + monarchDataParse[0].temp + "*F";
  descMonarchEl.textContent = monarchDataParse[0].desc;
  windMonarchEl.textContent =
    "Wind Speed: " + monarchDataParse[0].wind + " mph";
  monarchIcon = document.createElement("img"); // create an img tag
  monarchIcon.src = monarchDataParse[0].img;
  descMonarchEl.appendChild(monarchIcon);
  monarchSnowDepth.textContent =
    "Snow: " + monarchDataParse[0].snow + " inches ";
  monarchHeader.textContent = "Monarch";
}
if (!monarchDataParse == []) {
  popMonarchData(monarchDataParse);
}

var keystoneDatafromStorage = localStorage.getItem("keystoneData");
// console.log(keystoneDatafromStorage);

var keystoneDataParse = JSON.parse(keystoneDatafromStorage);
// console.log(keystoneDataParse);

function popKeystoneData(keystoneDataParse) {
  console.log(keystoneDataParse);
  tempKeystoneEl.textContent = "Temp: " + keystoneDataParse[0].temp + "*F";
  descKeystoneEl.textContent = keystoneDataParse[0].desc;
  windKeystoneEl.textContent =
    "Wind Speed: " + keystoneDataParse[0].wind + " mph";
  keystoneIcon = document.createElement("img"); // create an img tag
  keystoneIcon.src = keystoneDataParse[0].img;
  descKeystoneEl.appendChild(keystoneIcon);
  keystoneSnowDepth.textContent =
    "Snow: " + keystoneDataParse[0].snow + " inches ";
  keystoneHeader.textContent = "Keystone";
}
if (!keystoneDataParse == []) {
  popKeystoneData(keystoneDataParse);
}

var breckenridgeDatafromStorage = localStorage.getItem("breckenridgeData");
// console.log(breckenridgeDatafromStorage);

var breckenridgeDataParse = JSON.parse(breckenridgeDatafromStorage);
// console.log(breckenridgeDataParse);

function popBreckenridgeData(breckenridgeDataParse) {
  console.log(breckenridgeDataParse);
  tempBreckenridgeEl.textContent =
    "Temp: " + breckenridgeDataParse[0].temp + "*F";
  descBreckenridgeEl.textContent = breckenridgeDataParse[0].desc;
  windBreckenridgeEl.textContent =
    "Wind Speed: " + breckenridgeDataParse[0].wind + " mph";
  breckenridgeIcon = document.createElement("img"); // create an img tag
  breckenridgeIcon.src = breckenridgeDataParse[0].img;
  descBreckenridgeEl.appendChild(breckenridgeIcon);
  breckenridgeSnowDepth.textContent =
    "Snow: " + breckenridgeDataParse[0].snow + " inches ";
  breckenridgeHeader.textContent = "Breckenridge";
}
if (!breckenridgeDataParse == []) {
  popBreckenridgeData(breckenridgeDataParse);
}

var vailDatafromStorage = localStorage.getItem("vailData");
// console.log(vailDatafromStorage);

var vailDataParse = JSON.parse(vailDatafromStorage);
// console.log(vailDataParse);

function popVailData(vailDataParse) {
  console.log(vailDataParse);
  tempVailEl.textContent = "Temp: " + vailDataParse[0].temp + "*F";
  descVailEl.textContent = vailDataParse[0].desc;
  windVailEl.textContent = "Wind Speed: " + vailDataParse[0].wind + " mph";
  vailIcon = document.createElement("img"); // create an img tag
  vailIcon.src = vailDataParse[0].img;
  descVailEl.appendChild(vailIcon);
  vailSnowDepth.textContent = "Snow: " + vailDataParse[0].snow + " inches ";
  vailHeader.textContent = "Vail";
}
if (!vailDataParse == []) {
  popVailData(vailDataParse);
}

function lovelandData() {
  var lovelandObject = {};
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
        return consolidateData(data);
      })
      .then(function () {
        saveLovelandData();
      });
  }

  //pull the data from the api and put it in it's proper place
  const consolidateData = async (data) => {
    var desc = data.current.weather[0].description; //pull the weather desc and put it in the desc variable
    var icon = data.current.weather[0].icon; //pull the weather icon and put it in the icon variable
    descLovelandEl.textContent = desc; // put the weather description in this reference area
    var todayImageIconEl = document.createElement("img"); // create an img tag
    todayImageIconEl.src = iconURL + icon + ".png";
    descLovelandEl.appendChild(todayImageIconEl);

    var todayTemp = data.current.temp;
    tempLovelandEl.textContent = "Temp: " + todayTemp + "* F";
    var todayWind = data.current.wind_speed;
    windLovelandEl.textContent = "Wind Speeds: " + todayWind + " mph";
    lovelandHeader.textContent = "Loveland";
    lovelandObject.desc = desc;
    lovelandObject.img = iconURL + icon + ".png";
    lovelandObject.temp = todayTemp;
    lovelandObject.wind = todayWind;
    lovelandObject.snow = await snowFallLoveland();
    console.log(lovelandObject.snow);
  };

  //get the snowfall for Loveland
  async function snowFallLoveland() {
    var requestSFurl =
      "https://api.aerisapi.com/winter/snowdepth/loveland,co?client_id=bz37Z5NoJ9ov0YNNQIaHC&client_secret=y8QHN9b2pa8zVbghFjWBBlLCJ7I3LbjsMjReV8gm";
    var response = await fetch(requestSFurl);
    // .then(function (response) {
    var snowData = await response.json();
    console.log(snowData);

    var snowDepthL = snowData.response.periods[0].snowDepthIN;
    console.log(snowDepthL + " inches in Loveland");
    lovelandSnowDepth.textContent = "Snow: " + snowDepthL + " inches ";
    // return await snowDepthL;
    console.log({ lovelandObject });
    return `${snowDepthL}`;
  }

  function saveLovelandData() {
    console.log({ lovelandObject });
    var storeLovelandData =
      JSON.parse(localStorage.getItem("lovelandData")) || [];

    storeLovelandData.push(lovelandObject);
    console.log(storeLovelandData);
    var stringifyData = JSON.stringify(storeLovelandData);
    console.log(stringifyData);
    localStorage.setItem("lovelandData", stringifyData);
  }

  lovelandWeather();
}
// when this button is clicked, pull the weather and snow total apis
lovelandCheckboxEl.addEventListener("click", function () {
  lovelandData();
});

function monarchData() {
  var monarchObject = {};
  //get the weather for Monarch
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
        return consolidateData(data);
      })
      .then(function () {
        saveMonarchData();
      });
  }

  //pull the data from the api and put it in it's proper place
  const consolidateData = async (data) => {
    var desc = data.current.weather[0].description; //pull the weather desc and put it in the desc variable
    var icon = data.current.weather[0].icon; //pull the weather icon and put it in the icon variable
    descMonarchEl.textContent = desc; // put the weather description in this reference area
    var todayImageIconEl = document.createElement("img"); // create an img tag
    todayImageIconEl.src = iconURL + icon + ".png";
    descMonarchEl.appendChild(todayImageIconEl);

    var todayTemp = data.current.temp;
    tempMonarchEl.textContent = "Temp: " + todayTemp + "* F";
    var todayWind = data.current.wind_speed;
    windMonarchEl.textContent = "Wind Speeds: " + todayWind + " mph";
    monarchHeader.textContent = "Monarch";
    monarchObject.desc = desc;
    monarchObject.img = iconURL + icon + ".png";
    monarchObject.temp = todayTemp;
    monarchObject.wind = todayWind;
    monarchObject.snow = await snowFallMonarch();
    console.log(monarchObject.snow);
  };

  //get the snowfall for Monarch
  async function snowFallMonarch() {
    var requestSFurl =
      "https://api.aerisapi.com/winter/snowdepth/gunnison,co?client_id=bz37Z5NoJ9ov0YNNQIaHC&client_secret=y8QHN9b2pa8zVbghFjWBBlLCJ7I3LbjsMjReV8gm";
    var response = await fetch(requestSFurl);
    // .then(function (response) {
    var snowData = await response.json();
    console.log(snowData);

    var snowDepthM = snowData.response.periods[0].snowDepthIN;
    console.log(snowDepthM + " inches in Monarch");
    monarchSnowDepth.textContent = "Snow: " + snowDepthM + " inches";
    //return await snowDepthM;
    console.log({ monarchObject });
    return `${snowDepthM}`;
  }

  function saveMonarchData() {
    console.log({ monarchObject });
    var storeMonarchData =
      JSON.parse(localStorage.getItem("monarchData")) || [];

    storeMonarchData.push(monarchObject);
    console.log(storeMonarchData);
    var stringifyData = JSON.stringify(storeMonarchData);
    console.log(stringifyData);
    localStorage.setItem("monarchData", stringifyData);
  }
  monarchWeather();
}
// when this button is clicked, pull the weather and snowfall apis for Monarch
monarchCheckboxEl.addEventListener("click", function () {
  monarchData();
});

function keystoneData() {
  var keystoneObject = {};
  //pull the weather for Keystone
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
        return consolidateData(data);
      })
      .then(function () {
        saveKeystoneData();
      });
  }

  //pull the data from the api and put it in it's proper place
  const consolidateData = async (data) => {
    var desc = data.current.weather[0].description; //pull the weather desc and put it in the desc variable
    var icon = data.current.weather[0].icon; //pull the weather icon and put it in the icon variable
    descKeystoneEl.textContent = desc; // put the weather description in this reference area
    var todayImageIconEl = document.createElement("img"); // create an img tag
    todayImageIconEl.src = iconURL + icon + ".png";
    descKeystoneEl.appendChild(todayImageIconEl);

    var todayTemp = data.current.temp;
    tempKeystoneEl.textContent = "Temp: " + todayTemp + "* F";
    var todayWind = data.current.wind_speed;
    windKeystoneEl.textContent = "Wind Speeds: " + todayWind + " mph";
    keystoneHeader.textContent = "Keystone";
    keystoneObject.desc = desc;
    keystoneObject.img = iconURL + icon + ".png";
    keystoneObject.temp = todayTemp;
    keystoneObject.wind = todayWind;
    keystoneObject.snow = await snowFallKeystone();
    console.log(keystoneObject.snow);
  };

  //pull the snowfall totals for Keystone
  async function snowFallKeystone() {
    var requestSFurl =
      "https://api.aerisapi.com/winter/snowdepth/keystone,co?client_id=bz37Z5NoJ9ov0YNNQIaHC&client_secret=y8QHN9b2pa8zVbghFjWBBlLCJ7I3LbjsMjReV8gm";
    var response = await fetch(requestSFurl);
    // .then(function (response) {
    var snowData = await response.json();
    console.log(snowData);

    var snowDepthK = snowData.response.periods[0].snowDepthIN;
    console.log(snowDepthK + " inches in Keystone");
    keystoneSnowDepth.textContent = "Snow" + snowDepthK + " inches";
    console.log({ keystoneObject });
    return `${snowDepthK}`;
  }

  function saveKeystoneData() {
    console.log({ keystoneObject });
    var storeKeystoneData =
      JSON.parse(localStorage.getItem("keystoneData")) || [];

    storeKeystoneData.push(keystoneObject);
    console.log(storeKeystoneData);
    var stringifyData = JSON.stringify(storeKeystoneData);
    console.log(stringifyData);
    localStorage.setItem("keystoneData", stringifyData);
  }

  keystoneWeather();
}
// when this button is clicked, pull the weather and snowfall apis
keystoneCheckboxEl.addEventListener("click", function () {
  keystoneData();
});

function breckenridgeData() {
  var breckenridgeObject = {};
  //pull the weather for Breckenridge
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
        return consolidateData(data);
      })
      .then(function () {
        saveBreckenridgeData();
      });
  }

  //pull the data from the api and put it in it's proper place
  const consolidateData = async (data) => {
    var desc = data.current.weather[0].description; //pull the weather desc and put it in the desc variable
    var icon = data.current.weather[0].icon; //pull the weather icon and put it in the icon variable
    descBreckenridgeEl.textContent = desc; // put the weather description in this reference area
    var todayImageIconEl = document.createElement("img"); // create an img tag
    todayImageIconEl.src = iconURL + icon + ".png";
    descBreckenridgeEl.appendChild(todayImageIconEl);

    var todayTemp = data.current.temp;
    tempBreckenridgeEl.textContent = "Temp: " + todayTemp + "* F";
    var todayWind = data.current.wind_speed;
    windBreckenridgeEl.textContent = "Wind Speeds: " + todayWind + " mph";
    breckenridgeHeader.textContent = "Breckenridge";
    breckenridgeObject.desc = desc;
    breckenridgeObject.img = iconURL + icon + ".png";
    breckenridgeObject.temp = todayTemp;
    breckenridgeObject.wind = todayWind;
    breckenridgeObject.snow = await snowFallBreckenridge();
    console.log(breckenridgeObject.snow);
  };

  //pull the snow totals for Breckenridge
  async function snowFallBreckenridge() {
    var requestSFurl =
      "https://api.aerisapi.com/winter/snowdepth/breckenridge,co?client_id=bz37Z5NoJ9ov0YNNQIaHC&client_secret=y8QHN9b2pa8zVbghFjWBBlLCJ7I3LbjsMjReV8gm";
    var response = await fetch(requestSFurl);
    // .then(function (response) {
    var snowData = await response.json();
    console.log(snowData);

    var snowDepthbr = snowData.response.periods[0].snowDepthIN;
    console.log(snowDepthbr + " inches in Breckenridge");
    breckenridgeSnowDepth.textContent = "Snow: " + snowDepthbr + " inches";
    console.log({ breckenridgeObject });
    return `${snowDepthbr}`;
  }

  function saveBreckenridgeData() {
    console.log({ breckenridgeObject });
    var storeBreckenridgeData =
      JSON.parse(localStorage.getItem("breckenridgeData")) || [];

    storeBreckenridgeData.push(breckenridgeObject);
    console.log(storeBreckenridgeData);
    var stringifyData = JSON.stringify(storeBreckenridgeData);
    console.log(stringifyData);
    localStorage.setItem("breckenridgeData", stringifyData);
  }
  breckenridgeWeather();
}
// if this button is clicked, pull the weather and snowtotals for Breck
breckenridgeCheckboxEl.addEventListener("click", function () {
  breckenridgeData();
});

function vailData() {
  var vailObject = {};
  //pull the weather for Vail
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
        return consolidateData(data);
      })
      .then(function () {
        saveVailData();
      });
  }

  //pull the data from the api and put it in it's proper place
  const consolidateData = async (data) => {
    var desc = data.current.weather[0].description; //pull the weather desc and put it in the desc variable
    var icon = data.current.weather[0].icon; //pull the weather icon and put it in the icon variable
    descVailEl.textContent = desc; // put the weather description in this reference area
    var todayImageIconEl = document.createElement("img"); // create an img tag
    todayImageIconEl.src = iconURL + icon + ".png";
    descVailEl.appendChild(todayImageIconEl);

    var todayTemp = data.current.temp;
    tempVailEl.textContent = "Temp: " + todayTemp + "* F";
    var todayWind = data.current.wind_speed;
    windVailEl.textContent = "Wind Speeds: " + todayWind + " mph";
    vailHeader.textContent = "Vail";
    vailObject.desc = desc;
    vailObject.img = iconURL + icon + ".png";
    vailObject.temp = todayTemp;
    vailObject.wind = todayWind;
    vailObject.snow = await snowFallVail();
    console.log(vailObject.snow);
  };

  //get the snowfall for Vail
  async function snowFallVail() {
    var requestSFurl =
      "https://api.aerisapi.com/winter/snowdepth/vail,co?client_id=bz37Z5NoJ9ov0YNNQIaHC&client_secret=y8QHN9b2pa8zVbghFjWBBlLCJ7I3LbjsMjReV8gm";
    var response = await fetch(requestSFurl);
    // .then(function (response) {
    var snowData = await response.json();
    console.log(snowData);

    var snowDepthV = snowData.response.periods[0].snowDepthIN;
    console.log(snowDepthV + " inches in Vail");
    vailSnowDepth.textContent = "Snow: " + snowDepthV + " inches";
    console.log({ vailObject });
    return `${snowDepthV}`;
  }

  function saveVailData() {
    console.log({ vailObject });
    var storeVailData = JSON.parse(localStorage.getItem("vailData")) || [];

    storeVailData.push(vailObject);
    console.log(storeVailData);
    var stringifyData = JSON.stringify(storeVailData);
    console.log(stringifyData);
    localStorage.setItem("vailData", stringifyData);
  }
  vailWeather();
}
// if this button is clicked, pull the weather and snowfall for Vail
vailCheckboxEl.addEventListener("click", function () {
  vailData();
});
