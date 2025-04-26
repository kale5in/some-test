//  Just for fun :)
function showTemporaryImage(imagePath: string) {
  const randomLeft = Math.floor(Math.random() * 9 + 1) * 10;
  const styles = `
      .temp-image-container {
        position: fixed;
        bottom: -200px;
        left: ${randomLeft}%;
        transform: translateX(-50%);
        width: 200px;
        height: 200px;
        background-size: cover;
        background-position: center;
        border-radius: 10px;
        transition: transform 0.3s ease-in-out;
        z-index: 1000;
      }
  
      .temp-image-container.active {
        transform: translate(-50%, -200px);
      }
    `;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("temp-image-container");
  imageContainer.style.backgroundImage = `url(${imagePath})`;
  document.body.appendChild(imageContainer);

  requestAnimationFrame(() => {
    imageContainer.classList.add("active");
  });

  const ANIMATION_DURATION = 500;
  const DISPLAY_TIME = 500;

  setTimeout(() => {
    imageContainer.classList.remove("active");

    setTimeout(() => {
      imageContainer.remove();
      styleSheet.remove();
    }, ANIMATION_DURATION);
  }, DISPLAY_TIME);
}

export { showTemporaryImage };
