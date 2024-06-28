document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.main-nav a');

  // Function to toggle content visibility
  function toggleContent(event) {
    const targetSection = document.querySelector(event.target.getAttribute('href'));
    if (targetSection) {
      targetSection.classList.toggle('hidden');
    }
  }

  // Attach event listener to each navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      toggleContent(event);
    });
  });
});
