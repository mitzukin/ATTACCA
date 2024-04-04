
// Tailwind Config

tailwind.config = {
    theme: {
      extend: {
        colors: {
          main: '#E5E5E5',
          primary: '#FFFFFF', //WHITE
          secondary: '#000000', //BLACK
        }
      }
    }
  }



  document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
  
    // Check if the menu state is stored in localStorage
    const isMenuVisible = localStorage.getItem('mobileMenuVisible') === 'true';
    
    // Set initial state of the menu based on the stored value
    if (isMenuVisible) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }

    mobileMenuToggle.addEventListener('click', () => {
        // Toggle the visibility of the menu
        mobileMenu.classList.toggle('hidden');
        
        // Store the current state of the menu in localStorage
        const menuIsVisible = !mobileMenu.classList.contains('hidden');
        localStorage.setItem('mobileMenuVisible', menuIsVisible);
    });
});
