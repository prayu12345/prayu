document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("startBtn");
  const image = document.getElementById("image");
  let currentImageIndex = 0;
  const imagePaths = [
    "C:\\Users\\akhil\\OneDrive\\Desktop\\photo\\th (12).jpeg",
    "C:\Users\akhil\OneDrive\Desktop\photo\th (6).jpeg",
    "C:\\Users\\akhil\\OneDrive\\Desktop\\photo\\th (14).jpeg",
    // Add more image paths here
  ]; 

  startBtn.addEventListener("click", changeImage);

  function changeImage() {
    // Increment the index
    currentImageIndex++;
    // If index exceeds the length of the array, reset it to 0
    if (currentImageIndex >= imagePaths.length) {
      currentImageIndex = 0;
    }
    // Set the image src to the current index
    image.src = imagePaths[currentImageIndex];
  }
});
