
// testimonial script //
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll('.testimonial');
  let index = 0;

  setInterval(() => {
    testimonials[index].classList.remove('active');
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add('active');
  }, 4000); // change every 4 seconds
});


// fade function //
  const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -20px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = (window.scrollY > 200) ? "block" : "none";
});

// smooth scroll//
window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, 0);
});


// testimonial slide script //
const testimonials = document.querySelectorAll(".testimonial");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");
  let index = 0;

  function showTestimonial(i) {
    testimonials.forEach((t, idx) => {
      t.classList.remove("active");
      if (idx === i) {
        t.classList.add("active");
      }
    });
  }

  next.addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
  });

  // Show the first testimonial by default
  showTestimonial(index);

