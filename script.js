// Function to toggle the visibility of the menu on mobile
function toggleMenu() {
    const menuList = document.getElementById('menulist');
    menuList.classList.toggle('active');  // Toggle visibility of the menu
  }
  



// Function to handle the smooth scroll effect
function smoothScroll() {
    // Select all the navigation links
    let links = document.querySelectorAll('nav ul li a');
  
    // Add event listener for click events on each link
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent default anchor behavior
  
        // Get the target section from the link's href
        let targetId = this.getAttribute('href').substring(1); // Remove the '#' symbol
        let targetSection = document.getElementById(targetId);
  
        // Scroll smoothly to the target section
        targetSection.scrollIntoView({
          behavior: 'smooth',  // Smooth scroll
          block: 'start'       // Align the section to the top of the screen
        });
      });
    });
  }
  
  // Call the smooth scroll function
  document.addEventListener('DOMContentLoaded', smoothScroll);
  
  // Toggle the navigation menu for smaller screens
  function toggleMenu() {
    const menuList = document.getElementById('menulist');
    menuList.classList.toggle('active');  // Toggle visibility of the menu
  }
  
