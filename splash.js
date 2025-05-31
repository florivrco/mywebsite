document.addEventListener('DOMContentLoaded', function() {
    console.log('Splash JS loaded');
    var splash = document.querySelector('.splash-container');
    function restoreBody() {
        document.body.style.overflow = '';
        document.body.style.pointerEvents = '';
        document.documentElement.style.overflow = '';
        document.documentElement.style.pointerEvents = '';
    }
    function hideSplash() {
        console.log('Hiding splash...');
        splash.classList.add('hide');
        setTimeout(function() {
            if (splash.parentNode) splash.parentNode.removeChild(splash);
            restoreBody();
        }, 700);
    }
    setTimeout(hideSplash, 2000);

    // Get the button and the details section
    const sudanDetailsBtn = document.getElementById('sudan-more-details-btn');
    const sudanDetailsSection = document.getElementById('sudan-details');

    // Add a click event listener to the button
    if (sudanDetailsBtn && sudanDetailsSection) {
        sudanDetailsBtn.addEventListener('click', function() {
            // Toggle the 'hidden' class on the details section
            sudanDetailsSection.classList.toggle('hidden');

            // Optional: Change button text based on visibility
            if (sudanDetailsSection.classList.contains('hidden')) {
                sudanDetailsBtn.textContent = 'More Details';
            } else {
                sudanDetailsBtn.textContent = 'Hide Details';
            }
        });
    }

    document.getElementById('jptp-more-details-btn').addEventListener('click', function() {
        const detailsSection = document.getElementById('jptp-details');
        detailsSection.classList.toggle('hidden');
        this.textContent = detailsSection.classList.contains('hidden') ? 'More Details' : 'Hide Details';
    });

    document.getElementById('hospital-more-details-btn').addEventListener('click', function() {
        const detailsSection = document.getElementById('hospital-details');
        detailsSection.classList.toggle('hidden');
        this.textContent = detailsSection.classList.contains('hidden') ? 'More Details' : 'Hide Details';
    });

    document.getElementById('ai-more-details-btn').addEventListener('click', function() {
        const detailsSection = document.getElementById('ai-details');
        detailsSection.classList.toggle('hidden');
        this.textContent = detailsSection.classList.contains('hidden') ? 'More Details' : 'Hide Details';
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.burger input[type="checkbox"]');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('change', function() {
            if (this.checked) {
                mobileMenu.classList.add('active');
            } else {
                mobileMenu.classList.remove('active');
            }
        });

        // Optional: Close menu when clicking outside (consider adding a backdrop)
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target) || menuToggle.parentElement.contains(event.target);
            if (!isClickInsideMenu && !isClickOnToggle && mobileMenu.classList.contains('active')) {
                menuToggle.checked = false;
                mobileMenu.classList.remove('active');
            }
        });

         // Close menu when a menu link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.checked = false;
                mobileMenu.classList.remove('active');
            });
        });
    }

    // Dropdown menu toggle
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener('click', function() {
            dropdownMenu.classList.toggle('active');
        });

        // Close the dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideDropdown = dropdownMenu.contains(event.target);
            const isClickOnButton = dropdownButton.contains(event.target);
            if (!isClickInsideDropdown && !isClickOnButton && dropdownMenu.classList.contains('active')) {
                dropdownMenu.classList.remove('active');
            }
        });

        // Close the dropdown and scroll to section when a menu link is clicked
        dropdownMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default link behavior
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for fixed header if necessary
                        behavior: 'smooth'
                    });
                }
                dropdownMenu.classList.remove('active'); // Close the menu
            });
        });
    }
}); 