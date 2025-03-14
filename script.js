let lastScrollTop = 0;  // Keeps track of the last scroll position
const header = document.querySelector('.header');  // The header element
const menuBar = document.querySelector('.menu');  // The menu bar element

// Listen for scroll events
window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Check if scrolling down
  if (currentScroll > lastScrollTop) {
    // Scrolling down, hide both header and menu
    header.classList.add('hidden');
    menuBar.classList.add('hidden');
  } else {
    // Scrolling up, show both header and menu
    header.classList.remove('hidden');
    menuBar.classList.remove('hidden');
  }

  // Update last scroll position to current
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
});


