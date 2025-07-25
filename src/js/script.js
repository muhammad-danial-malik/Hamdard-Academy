// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle mobile menu
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInsideNav =
      navMenu.contains(event.target) || hamburger.contains(event.target);

    if (!isClickInsideNav && navMenu.classList.contains("active")) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });

  // Testimonial Slider Functionality
  const slider = document.querySelector(".testimonial-slider");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (slider && prevBtn && nextBtn) {
    const scrollAmount = 320; // Amount to scroll per click

    // Function to update button states
    function updateButtonStates() {
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      // Disable prev button at start
      prevBtn.disabled = slider.scrollLeft <= 0;

      // Disable next button at end
      nextBtn.disabled = slider.scrollLeft >= maxScroll - 1;
    }

    // Initial button state
    updateButtonStates();

    // Previous button click
    prevBtn.addEventListener("click", function () {
      slider.scrollLeft -= scrollAmount;
      setTimeout(updateButtonStates, 100); // Small delay for smooth scroll
    });

    // Next button click
    nextBtn.addEventListener("click", function () {
      slider.scrollLeft += scrollAmount;
      setTimeout(updateButtonStates, 100); // Small delay for smooth scroll
    });

    // Update button states on scroll
    slider.addEventListener("scroll", updateButtonStates);

    // Center the first card on load
    setTimeout(() => {
      const firstCard = slider.querySelector(".testimonial-card");
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const containerWidth = slider.clientWidth;
        const centerOffset = (containerWidth - cardWidth) / 2;
        slider.scrollLeft = Math.max(0, -centerOffset);
        updateButtonStates();
      }
    }, 100);

    // Handle window resize
    window.addEventListener("resize", function () {
      updateButtonStates();
    });
  }
});
