// Clock animation
const rotationSpeed = 5;

function rotateImage() {
  const image = document.getElementById("watchImage");
  let rotation = 0;

  setInterval(() => {
    rotation += rotationSpeed;
    image.style.transform = `rotate(${rotation}deg)`;
  }, 200);
}
rotateImage();

// Delivery man animation
const deliveryMan = document.getElementById("delivery-man");
const deliveryManImg = deliveryMan.querySelector("img");

let currentPosition = 0;

function animateDeliveryMan() {
  currentPosition += 1;
  deliveryManImg.style.left = currentPosition + "px";

  if (currentPosition >= +100) {
    currentPosition = 0;
  }

  window.requestAnimationFrame(animateDeliveryMan);
}

animateDeliveryMan();
