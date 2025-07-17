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

  // Scroll animation functionality
  const animateElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // Reset animation when out of view
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the element is visible
      rootMargin: "0px 0px -50px 0px", // Trigger slightly before fully in view
    }
  );

  animateElements.forEach((element) => {
    observer.observe(element);
  });
});
