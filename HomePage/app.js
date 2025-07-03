document.addEventListener("DOMContentLoaded", function () {
  const menuList = document.querySelector(".nav__links");
  const meunicon = document.querySelector(".menu_icon");
  const crossIcon = document.querySelector(".croos_icon");

  menuList.style.maxHeight = "0px";

  meunicon.addEventListener("click", function () {
    menuList.style.maxHeight = "500px";
    meunicon.style.display = "none";
    crossIcon.style.display = "block";
  });

  crossIcon.addEventListener("click", function () {
    menuList.style.maxHeight = "0px";
    crossIcon.style.display = "none";
    meunicon.style.display = "block";
  });
});
