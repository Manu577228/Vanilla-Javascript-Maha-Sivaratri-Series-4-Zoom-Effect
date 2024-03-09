const zoomImage = document.getElementById("zoomImage");
const zoomContainer = document.querySelector(".zoom-container");

zoomContainer.addEventListener("mousemove", handleMouseMove);
zoomContainer.addEventListener("mouseleave", resetZoom);

function handleMouseMove(event) {
  const { offsetX, offsetY } = event;
  const { offsetWidth, offsetHeight } = zoomContainer;

  const xPercentage = (offsetX / offsetWidth) * 100;
  const yPercentage = (offsetY / offsetHeight) * 100;

  zoomImage.style.transformOrigin = `${xPercentage}% ${yPercentage}%`;
}

function resetZoom() {
  zoomImage.style.transformOrigin = "center center";
}
