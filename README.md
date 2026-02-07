# 💖 Valentine's Day Website

A cute and interactive Valentine's Day website created with love for someone special! 🥰

## 📱 Optimized For
- **iPad 11-inch (2024 M4)** - Primary target device
- Mobile devices
- Desktop browsers (also works!)

## ✨ Features

### 🎬 Interactive Screens
- **9 unique screens** with custom videos and animations
- **Smooth transitions** between screens
- **Floating heart animations** in the background
- **Navigation buttons** to go back and forth

### 💕 Special Features
- Cute emojis throughout 😍🥰💖
- Custom pink gradient background
- Video playback with sound (auto-stops when switching screens)
- **Camera integration** - Takes selfies directly on iPad!
- Multiple choice paths depending on answers
- Upload and display selfie feature

## 🎯 User Flow

```
Screen 1: Greeting
    ↓
Screen 2: "Will you be my Valentine?"
    ├─ Yes → Screen 3 (Celebration)
    └─ No  → Screen 7 (Persuasion)
         ├─ Yes → Screen 3
         └─ No  → Screen 8 (No choice - both buttons say Yes!)
                   └─ Screen 3

Screen 3: "I knew you would say yes!"
    ↓
Screen 4: Getting a rose 🌹
    ↓
Screen 5: Selfie request 📸
    ↓
Screen 6: Display selfie + happiness
    ↓
Screen 9: Thank you message 💖
```

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with animations
- **Vanilla JavaScript** - Interactivity and video control
- **Google Fonts** - Pacifico font for cute text
- **HTML5 Video API** - Video playback control
- **Camera API** - Direct camera access on mobile devices

## 📂 File Structure

```
valentine-website/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript for interactions
├── README.md           # This file
│
└── media/              # Media folder
    ├── cat1.mp4        # Screen 1 video
    ├── cat2.mp4        # Screen 2 video
    ├── cat3.mp4        # Screen 3 video
    ├── cat4.mp4        # Screen 4 video
    ├── cat5.mp4        # Screen 5 video
    ├── cat6.mp4        # Screen 6 video
    ├── cat7.mp4        # Screen 7 video
    ├── cat8.mp4        # Screen 8 video
    ├── cat9.mp4        # Screen 9 video
    └── sad.png         # Sad image for Screen 6
```

## 🎨 Customization Guide

### Adjusting Video Sizes
In `styles.css`, look for the commented sections:

```css
/* VIDEO SIZE CONTROLS */
.screen video {
    width: 50%;          /* Change percentage (40%-60%) */
    max-width: 400px;    /* Change max size in pixels */
}
```

### Changing Text Colors
```css
.screen h1 {
    font-size: 2.5rem;   /* Text size */
    color: #ff1493;      /* Text color (hot pink) */
}
```

### Modifying Transition Times
In `script.js`, the video control is handled in the `goToScreen()` function.

## 🚀 Deployment

### GitHub Pages
1. Push all files to your repository
2. Go to repository Settings
3. Navigate to Pages section
4. Select branch (usually `main`) and root folder
5. Click Save
6. Your site will be live at `https://yourusername.github.io/repository-name/`

### Local Testing
Simply open `index.html` in any modern web browser.

## 📝 Notes

- Videos need to be in the `media/` folder
- Camera feature works best on mobile devices (iPad, iPhone, Android)
- Some browsers may block autoplay with sound - videos will play muted as fallback
- All comments in code files explain functionality for easy customization

## 💝 Credits

Created with love for Pokkie 🥰

---

### 🎁 Special Notes
- The selfie feature uses the front camera for easy selfies
- Videos automatically stop when navigating to prevent overlapping sounds
- Background gradient creates a romantic Valentine's atmosphere
- Designed specifically for iPad viewing experience

## 📄 License

This is a personal project created for Valentine's Day 2025 💕

## ⚠️ Copyright Disclaimer

**Important Notice:**

The videos and images used in this project are sourced from TikTok and Google and are subject to their respective copyright holders. This project is created for:

- **Personal use only** - Not for commercial purposes
- **Educational purposes** - Learning web development
- **Private sharing** - Intended for one recipient

**Media Attribution:**
- Videos: Sourced from TikTok (copyright belongs to original creators)
- Images: Sourced from Google Images (copyright belongs to original creators)

**If you are a copyright holder and have concerns about the use of your content in this project, please contact me and I will promptly remove it.**

### For Others Using This Code:
If you fork or use this repository:
- **Replace all media files** with your own content or properly licensed media
- Do not redistribute the included videos/images
- The code itself (HTML, CSS, JS) can be used and modified freely
- Give credit if you use the code structure

---

**Made with ❤️ and lots of emojis!**
