setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤";

  // Random horizontal position
  heart.style.left = Math.random() * 100 + "vw";

  // Random vertical start position (FULL SCREEN)
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
