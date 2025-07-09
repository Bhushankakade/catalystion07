const counters = document.querySelectorAll(".stat-number");
const speed = 200;

const updateCount = (counter) => {
  const target = +counter.getAttribute("data-target");
  const count = +counter.innerText;
  const increment = target / speed;

  if (count < target) {
    counter.innerText = Math.ceil(count + increment);
    setTimeout(() => updateCount(counter), 20);
  } else {
    counter.innerText = `${target}`;
  }
};

// Use ONE observer for the whole stats section
const statsSection = document.querySelector(".statistics-section");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counters.forEach((counter) => updateCount(counter));
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 } // 30% in view triggers the count
);

observer.observe(statsSection);
