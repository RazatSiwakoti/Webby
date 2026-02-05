// Floating hearts animation
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";

    // Random horizontal position
    heart.style.left = Math.random() * 100 + "vw";

    // Random vertical start position
    heart.style.top = Math.random() * 100 + "vh";

    // Random size
    heart.style.fontSize = (16 + Math.random() * 24) + "px";

    // Random speed
    heart.style.animationDuration = (6 + Math.random() * 6) + "s";

    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}, 300);

// Developer function to jump to any screen (Remove before deployment)
function jumpToScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    const targetScreen = document.getElementById(screenId);
    targetScreen.classList.add('active');
    
    // Play video if exists
    const video = targetScreen.querySelector('video');
    if (video) {
        video.currentTime = 0;
        video.play();
    }
    
    // Update dev nav button states
    updateDevNavButtons(screenId);
}

// Helper function to update dev navigation button states
function updateDevNavButtons(activeScreenId) {
    // Remove active class from all buttons
    document.querySelectorAll('#dev-nav button').forEach(btn => {
        btn.classList.remove('active-screen');
    });
    
    // Add active class to current screen button
    const activeButton = document.querySelector(`#dev-nav button[data-screen="${activeScreenId}"]`);
    if (activeButton) {
        activeButton.classList.add('active-screen');
    }
}

// Helper function to transition between screens
function transitionTo(nextScreenId, delay = 500) {
    // Hide current screen
    document.querySelector('.screen.active').classList.remove('active');
    
    // Show next screen after delay
    setTimeout(() => {
        const nextScreen = document.getElementById(nextScreenId);
        nextScreen.classList.add('active');
        
        // Play video if exists
        const video = nextScreen.querySelector('video');
        if (video) {
            video.currentTime = 0; // Reset video to start
            video.play();
        }
        
        // Update dev nav button states
        updateDevNavButtons(nextScreenId);
    }, delay);
}

// Start: Screen 1 loads and plays video
window.addEventListener('load', () => {
    const video1 = document.querySelector('#screen1 video');
    if (video1) {
        video1.play();
    }
    
    // Set initial button state
    updateDevNavButtons('screen1');
    
    // Auto-transition from screen 1 to screen 2 after 3 seconds
    setTimeout(() => {
        transitionTo('screen2', 500);
    }, 3000);
});

// Screen 2: Will you be my valentine
function screen2Yes() {
    transitionTo('screen3', 500);
    
    // Auto-transition from screen 3 to screen 4 after 3 seconds
    setTimeout(() => {
        transitionTo('screen4', 500);
    }, 3500);
    
    // Auto-transition from screen 4 to screen 5 after 6 seconds total
    setTimeout(() => {
        transitionTo('screen5', 500);
    }, 6500);
}

function screen2No() {
    transitionTo('screen7', 500);
}

// Screen 7: Oh no, Be my valentine
function screen7Yes() {
    transitionTo('screen3', 500);
    
    // Auto-transition from screen 3 to screen 4 after 3 seconds
    setTimeout(() => {
        transitionTo('screen4', 500);
    }, 3500);
    
    // Auto-transition from screen 4 to screen 5 after 6 seconds total
    setTimeout(() => {
        transitionTo('screen5', 500);
    }, 6500);
}

function screen7No() {
    transitionTo('screen8', 500);
}

// Screen 8: No choice (both buttons say Y)
function screen8Yes() {
    transitionTo('screen3', 500);
    
    // Auto-transition from screen 3 to screen 4 after 3 seconds
    setTimeout(() => {
        transitionTo('screen4', 500);
    }, 3500);
    
    // Auto-transition from screen 4 to screen 5 after 6 seconds total
    setTimeout(() => {
        transitionTo('screen5', 500);
    }, 6500);
}

// Screen 5: Handle file upload
function handleUpload() {
    const fileInput = document.getElementById('fileUpload');
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Set the uploaded image
            document.getElementById('uploadedImage').src = e.target.result;
            // Transition to screen 6
            transitionTo('screen6', 500);
            
            // Auto-transition from screen 6 to screen 9 (Thank you) after 5 seconds
            setTimeout(() => {
                transitionTo('screen9', 500);
            }, 5500);
        };
        reader.readAsDataURL(file);
    }
}