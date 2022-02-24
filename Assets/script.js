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
var lovelandSnowDepth = document.querySelector("#lovelandSnowDepth");

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
  tempLovelandEl.textContent = "Temp " + lovelandDataParse[0].temp;
  descLovelandEl.textContent = lovelandDataParse[0].desc;
  windLovelandEl.textContent = lovelandDataParse[0].wind + " mph";
  lovelandIcon = document.createElement("img"); // create an img tag
  lovelandIcon.src = lovelandDataParse[0].img;
  descLovelandEl.appendChild(lovelandIcon);
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
  tempMonarchEl.textContent = "Temp " + monarchDataParse[0].temp;
  descMonarchEl.textContent = monarchDataParse[0].desc;
  windMonarchEl.textContent = monarchDataParse[0].wind + " mph";
  monarchIcon = document.createElement("img"); // create an img tag
  monarchIcon.src = monarchDataParse[0].img;
  descMonarchEl.appendChild(monarchIcon);
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
  tempKeystoneEl.textContent = "Temp " + keystoneDataParse[0].temp;
  descKeystoneEl.textContent = keystoneDataParse[0].desc;
  windKeystoneEl.textContent = keystoneDataParse[0].wind + " mph";
  keystoneIcon = document.createElement("img"); // create an img tag
  keystoneIcon.src = keystoneDataParse[0].img;
  descKeystoneEl.appendChild(keystoneIcon);
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
  tempBreckenridgeEl.textContent = "Temp " + breckenridgeDataParse[0].temp;
  descBreckenridgeEl.textContent = breckenridgeDataParse[0].desc;
  windBreckenridgeEl.textContent = breckenridgeDataParse[0].wind + " mph";
  breckenridgeIcon = document.createElement("img"); // create an img tag
  breckenridgeIcon.src = breckenridgeDataParse[0].img;
  descBreckenridgeEl.appendChild(breckenridgeIcon);
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
  tempVailEl.textContent = "Temp " + vailDataParse[0].temp;
  descVailEl.textContent = vailDataParse[0].desc;
  windVailEl.textContent = vailDataParse[0].wind + " mph";
  vailIcon = document.createElement("img"); // create an img tag
  vailIcon.src = vailDataParse[0].img;
  descVailEl.appendChild(vailIcon);
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
        lovelandObject.snow = snowFallLoveland();
        console.log(
          snowFallLoveland().then(function (data) {
            return data;
          })
        );
      })
      // .then(snowFallLoveland)

      .then(saveLovelandData);
  }
  //get the snowfall for Loveland
  async function snowFallLoveland() {
    var requestSFurl =
      "https://api.aerisapi.com/winter/snowdepth/loveland,co?client_id=bz37Z5NoJ9ov0YNNQIaHC&client_secret=y8QHN9b2pa8zVbghFjWBBlLCJ7I3LbjsMjReV8gm";
    var response = await fetch(requestSFurl);
    // .then(function (response) {
    var snowData = await response.json();
    console.log(snowData);
    // })
    // .then(function (data) {
    // console.log(data);
    var snowDepthL = snowData.response.periods[0].snowDepthIN;
    console.log(snowDepthL + " inches in Loveland");
    lovelandSnowDepth.textContent = "Snow: " + snowDepthL + " inches ";
    return await snowDepthL;
    // lovelandObject.snow = "" + snowDepthL;
    // console.log({ lovelandObject });
    // });
  }

  function saveLovelandData() {
    console.log({ lovelandObject });
    var storeLovelandData =
      JSON.parse(localStorage.getItem("lovelandData")) || [];

    storeLovelandData.push(lovelandObject);
    console.log(storeLovelandData);
    var stringifyData = JSON.stringify(storeLovelandData, replacer);
    console.log(stringifyData);
    localStorage.setItem("lovelandData", stringifyData);
  }

  function replacer(key, value) {
    console.log({ key, value });
    if (key === "snowDepthL") {
      console.log(value);
      return value;
    }
    return value;
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
      })
      .then(snowFallMonarch)
      .then(saveMonarchData);
  }
  //get the snowfall for Monarch
  function snowFallMonarch() {
    var requestSFurl =
      "https://api.aerisapi.com/winter/snowdepth/gunnison,co?client_id=bz37Z5NoJ9ov0YNNQIaHC&client_secret=y8QHN9b2pa8zVbghFjWBBlLCJ7I3LbjsMjReV8gm";
    fetch(requestSFurl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var snowDepthM = data.response.periods[0].snowDepthIN;
        console.log(snowDepthM + " inches in Monarch");
        monarchSnowDepth.textContent = "Snow: " + snowDepthM + " inches";
        monarchObject.snowDepthM = snowDepthM;
      });
  }
  function saveMonarchData() {
    console.log({ monarchObject });
    var storeMonarchData =
      JSON.parse(localStorage.getItem("monarchData")) || [];

    storeMonarchData.push(monarchObject);
    console.log(storeMonarchData);
    localStorage.setItem("monarchData", JSON.stringify(storeMonarchData));
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
      })
      .then(snowFallKeystone)
      .then(saveKeystoneData);
  }

  //pull the snowfall totals for Keystone
  function snowFallKeystone() {
    var requestSFurl =
      "https://api.aerisapi.com/winter/snowdepth/keystone,co?client_id=bz37Z5NoJ9ov0YNNQIaHC&client_secret=y8QHN9b2pa8zVbghFjWBBlLCJ7I3LbjsMjReV8gm";
    fetch(requestSFurl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var snowDepthK = data.response.periods[0].snowDepthIN;
        console.log(snowDepthK + " inches in Keystone");
        keystoneSnowDepth.textContent = snowDepthK + " inches";
        keystoneObject.snowDepthK = snowDepthK;
      });
  }
  function saveKeystoneData() {
    console.log({ keystoneObject });
    var storeKeystoneData =
      JSON.parse(localStorage.getItem("keystoneData")) || [];

    storeKeystoneData.push(keystoneObject);
    console.log(storeKeystoneData);
    localStorage.setItem("keystoneData", JSON.stringify(storeKeystoneData));
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
      })
      .then(snowFallBreckenridge)
      .then(saveBreckenridgeData);
  }

  //pull the snow totals for Breckenridge
  function snowFallBreckenridge() {
    var requestSFurl =
      "https://api.aerisapi.com/winter/snowdepth/breckenridge,co?client_id=bz37Z5NoJ9ov0YNNQIaHC&client_secret=y8QHN9b2pa8zVbghFjWBBlLCJ7I3LbjsMjReV8gm";
    fetch(requestSFurl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var snowDepthbr = data.response.periods[0].snowDepthIN;
        console.log(snowDepthbr + " inches in Breckenridge");
        breckenridgeSnowDepth.textContent = snowDepthbr + " inches";
        breckenridgeObject.snowDepthbr = snowDepthbr;
      });
  }
  function saveBreckenridgeData() {
    console.log({ breckenridgeObject });
    var storeBreckenridgeData =
      JSON.parse(localStorage.getItem("breckenridgeData")) || [];

    storeBreckenridgeData.push(breckenridgeObject);
    console.log(storeBreckenridgeData);
    localStorage.setItem(
      "breckenridgeData",
      JSON.stringify(storeBreckenridgeData)
    );
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
      })
      .then(snowFallVail)
      .then(saveVailData);
  }

  function snowFallVail() {
    var requestSFurl =
      "https://api.aerisapi.com/winter/snowdepth/vail,co?client_id=bz37Z5NoJ9ov0YNNQIaHC&client_secret=y8QHN9b2pa8zVbghFjWBBlLCJ7I3LbjsMjReV8gm";
    fetch(requestSFurl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var snowDepthV = data.response.periods[0].snowDepthIN;
        console.log(snowDepthV + " inches in Vail");
        vailSnowDepth.textContent = snowDepthV + " inches";
        vailObject.snowDepthV = snowDepthV;
      });
  }
  function saveVailData() {
    console.log({ vailObject });
    var storeVailData = JSON.parse(localStorage.getItem("vailData")) || [];

    storeVailData.push(vailObject);
    console.log(storeVailData);
    localStorage.setItem("vailData", JSON.stringify(storeVailData));
  }
  vailWeather();
}
// if this button is clicked, pull the weather and snowfall for Vail
vailCheckboxEl.addEventListener("click", function () {
  vailData();
});
