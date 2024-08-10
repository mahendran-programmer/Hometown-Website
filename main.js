const apiKey = "e9bdb007cd35fbaa74ffe37a0299ace8";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

async function checkWeather(city) {
  let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  if (data.cod == 200) {
    // document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".weather-report").innerHTML = data.weather[0].main;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + " °C";
    document.querySelector(".wind").innerHTML = data.wind.speed + " KM/H";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";

    let icon = document.getElementById("weather-icon");
    switch (data.weather[0].main) {
      case "Clouds":
        icon.src = "./images/assets/clouds.png";
        break;
      case "Clear":
        icon.src = "./images/assets/clear.png";
        break;
      case "Drizzle":
        icon.src = "./images/assets/drizzle.png";
        break;
      case "Haze":
        icon.src = "./images/assets/mist.png";
        break;
      case "Rain":
        icon.src = "./images/assets/rain.png";
        break;
      case "Snow":
        icon.src = "./images/assets/snow.png";
        break;
      default:
        icon.src = "./images/assets/clear.png";
        break;
    }
  } else {
    console.error("Invalid city name or API response.");
  }
}

// Automatically fetch and display weather for Kalugumalai on page load
window.onload = function () {
  checkWeather("Kalugumalai");
};

// Optionally, you can set an interval to update the weather automatically every hour
setInterval(() => checkWeather("Kalugumalai"), 3000); // 3600000 ms = 1 hour

document.addEventListener("scroll", function () {
  const menu = document.querySelector(".menu");
  if (window.scrollY > 50) {
    // You can adjust the value '50' to control when the change occurs
    menu.classList.add("scrolled");
    menuicon.classList.add("menu-hide");
    menuicon.classList.remove("menu-show");
  } else {
    menu.classList.remove("scrolled");
    menuicon.classList.remove("menu-hide");
    menuicon.classList.add("menu-show");
  }
});

//Menu Icon click handling
let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuicon.addEventListener("click", () => {
  menuicon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});
let navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuicon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

//Gallery View Handling

let fullImgBox = document.querySelector(".full-img");
var fullImgBox1 = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");


function OpenFullImg(pic) {
  fullImg.src = pic;
  fullImgBox.classList.add("showimg");
}

function CloseFullImg(){
    fullImgBox.classList.remove("showimg");
}
