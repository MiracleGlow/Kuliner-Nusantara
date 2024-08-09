function toggleMenu() {
    const nav = document.getElementById("navMenu");
    const hamburger = document.querySelector(".Menu-btn");
    nav.classList.toggle("nav-open");
    hamburger.classList.toggle("Menu-btn-open");
    
    // Add animation delay for each menu item
    const navItems = document.querySelectorAll(".nav-list li");
    navItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
  }