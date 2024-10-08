// Simple fade-out effect when navigating to another page
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '0';
        setTimeout(function() {
            window.location.href = button.dataset.url; // Assuming button has a data-url attribute
        }, 500);
    });
});

window.onload = function() {
    // Show loading div
    const loadingDiv = document.getElementById('loading');
    const mainContent = document.getElementById('main-content');

    loadingDiv.classList.add('show');

    // Set a timer for 2 seconds
    setTimeout(() => {
        // Fade out the loading div
        loadingDiv.style.opacity = '0'; // Start fading out

        setTimeout(() => {
            loadingDiv.style.display = 'none'; // Completely hide the loading div
            mainContent.style.display = 'block'; // Show the main content
            mainContent.style.opacity = '0'; // Start with hidden content
            // Fade in the main content
            let opacity = 0;
            const fadeIn = setInterval(() => {
                if (opacity < 1) {
                    opacity += 0.1; // Increase opacity
                    mainContent.style.opacity = opacity;
                } else {
                    clearInterval(fadeIn); // Stop the fade-in effect
                }
            }, 50); // Adjust speed of the fade-in
        }, 500); // Match the transition duration in CSS
    }, 500); // 2000 milliseconds = 2 seconds
};

// Page transition animation
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '0';
        setTimeout(function() {
            window.location.href = button.dataset.url;
        }, 500);
    });
});