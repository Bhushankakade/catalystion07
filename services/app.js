const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector(".list");

menuIcon.addEventListener("click", () => {
  navList.classList.toggle("open"); // Toggle the 'open' class to trigger the slide effect
});
// Counting Animation
const counters = document.querySelectorAll(".stat-number");
const speed = 200; // Adjust the speed here

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = `${target}`;
    }
  };

  // Trigger counting when section comes into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCount();
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 1.0 }
  );

  observer.observe(counter);
});

// Select all benefit items
const benefitItems = document.querySelectorAll(".benefit-item");

// Function to add the animation class
const animateOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target); // Stop observing once animation is done
    }
  });
};

// Create a new intersection observer
const observer = new IntersectionObserver(animateOnScroll, {
  threshold: 0.2, // Trigger when 20% of the element is visible
});

// Observe each benefit item
benefitItems.forEach((item) => observer.observe(item));

// Select all step items
const stepItems = document.querySelectorAll(".step-item");

// Function to add the animation class
const animateSteps = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target); // Stop observing after animating
    }
  });
};

// Create a new Intersection Observer
const stepObserver = new IntersectionObserver(animateSteps, {
  threshold: 0.1, // Trigger when 10% of element is visible
});

// Observe each step item
stepItems.forEach((item) => stepObserver.observe(item));

// Select all feature items
const featureItems = document.querySelectorAll(".feature-item");

// Function to add the animation class
const animateFeatures = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target); // Stop observing after animating
    }
  });
};

// Create a new Intersection Observer
const featureObserver = new IntersectionObserver(animateFeatures, {
  threshold: 0.2, // Trigger when 20% of element is visible
});

// Observe each feature item
featureItems.forEach((item) => featureObserver.observe(item));

let currentIndex = 0;
const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const totalTestimonials = testimonialCards.length;

function updateTestimonials() {
  const offset = -(currentIndex * (testimonialCards[0].offsetWidth + 20)); // Adjust for margin between cards
  testimonialsContainer.style.transform = `translateX(${offset}px)`;
}

document.querySelector(".prev-btn").addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? totalTestimonials - 1 : currentIndex - 1;
  updateTestimonials();
});

document.querySelector(".next-btn").addEventListener("click", () => {
  currentIndex = currentIndex === totalTestimonials - 1 ? 0 : currentIndex + 1;
  updateTestimonials();
});

// Initialize the testimonials view
updateTestimonials();

// Trigger the button animation when it comes into view
const joinBtn = document.querySelector(".join-btn");

window.addEventListener("scroll", () => {
  if (joinBtn.getBoundingClientRect().top <= window.innerHeight) {
    joinBtn.classList.add("animate-btn");
  }
});

// footer
// Trigger fadeIn animation when footer comes into view
// back to top
// Get the button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Function to show the button when user scrolls down 200 pixels
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 1300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

// Function to scroll back to the top when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
