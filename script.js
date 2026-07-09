// JavaScript for toggling mobile menu
document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript is working!");
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Slideshow for About Us images
  const slides = document.querySelectorAll(".about-image .slide");
  console.log("Slides found:", slides.length);
  if (slides.length > 0) {
    let current = 0;
    setInterval(() => {
      console.log("Changing to slide:", current);
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 3000); // 3 seconds per slide
  }
});
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.about-image .slide');
    if (slides.length > 0) {
      let current = 0;
      setInterval(() => {
        slides[current].classList.remove('active'); // Hide current slide
        current = (current + 1) % slides.length;    // Move to next slide
        slides[current].classList.add('active');    // Show next slide
      }, 3000); // Change slide every 3 seconds
    }
  });
</script>