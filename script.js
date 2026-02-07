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

/* 
===========================================
NAVIGATION FUNCTION
===========================================
This function:
1. Stops ALL videos from playing
2. Hides all screens
3. Shows the selected screen
4. Plays ONLY the current screen's video
*/
function goToScreen(screenId) {
    // STEP 1: Stop all videos and reset them
    document.querySelectorAll('video').forEach(video => {
        video.pause();           // Stop the video
        video.currentTime = 0;   // Reset to beginning
        video.muted = true;      // Mute it
    });
    
    // STEP 2: Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // STEP 3: Show the selected screen
    const targetScreen = document.getElementById(screenId);
    targetScreen.classList.add('active');
    
    // STEP 4: Play ONLY the current screen's video with sound
    const video = targetScreen.querySelector('video');
    if (video) {
        video.currentTime = 0;    // Start from beginning
        video.muted = false;      // Unmute for sound
        
        // Try to play with sound
        video.play().catch(err => {
            // If browser blocks autoplay with sound, play muted
            console.log("Autoplay with sound blocked, playing muted");
            video.muted = true;
            video.play();
        });
    }
}

/* 
===========================================
PAGE LOAD - Start on Screen 1
===========================================
*/
window.addEventListener('load', () => {
    // Stop all videos first
    document.querySelectorAll('video').forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
    
    // Play only screen 1's video
    const video1 = document.querySelector('#screen1 video');
    if (video1) {
        video1.muted = false;  // Try with sound
        video1.play().catch(err => {
            // If autoplay with sound fails, play muted
            console.log("Autoplay with sound blocked, playing muted");
            video1.muted = true;
            video1.play();
        });
    }
});

/* 
===========================================
SCREEN 2 BUTTON FUNCTIONS
===========================================
*/
function screen2Yes() {
    goToScreen('screen3');  // Go to "Yayy" screen
}

function screen2No() {
    goToScreen('screen7');  // Go to "Oh no" screen
}

/* 
===========================================
SCREEN 7 BUTTON FUNCTIONS
===========================================
*/
function screen7Yes() {
    goToScreen('screen3');  // Go to "Yayy" screen
}

function screen7No() {
    goToScreen('screen8');  // Go to "No choice" screen
}

/* 
===========================================
SCREEN 8 BUTTON FUNCTION
===========================================
*/
function screen8Yes() {
    goToScreen('screen3');  // Both buttons go to "Yayy" screen
}

/* 
===========================================
SCREEN 5 - FILE UPLOAD HANDLER
===========================================
*/
function handleUpload() {
    const fileInput = document.getElementById('fileUpload');
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Set the uploaded image
            document.getElementById('uploadedImage').src = e.target.result;
            // Go to screen 6
            goToScreen('screen6');
        };
        reader.readAsDataURL(file);
    }
}