const deliveryMan = document.getElementById("delivery-man");
const deliveryManImg = deliveryMan.querySelector("img");

let currentPosition = 0;

function animateDeliveryMan() {
  currentPosition += 2;
  deliveryManImg.style.left = currentPosition + "px";

  if (currentPosition >= +200) {
    currentPosition = 0;
  }

  window.requestAnimationFrame(animateDeliveryMan);
}

animateDeliveryMan();
