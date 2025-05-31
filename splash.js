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
}); 