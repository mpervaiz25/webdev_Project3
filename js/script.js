// Initialize the Google Map
function initMap() {
  const iitLocation = { lat: 41.8349, lng: -87.6270 }; // IIT Chicago coordinates
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: iitLocation,
  });
	 // Add custom marker
  const marker = new google.maps.Marker({
    position: iitLocation,
    map: map,
    title: "Illinois Tech",
  });
	// Info window on marker
  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Illinois Institute of Technology</h3><p>A Level 1 Arboretum Campus!</p>",
  });
  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
// Reset button functionality
  const resetButton = document.getElementById("resetMap");
  resetButton.addEventListener("click", () => {
    map.setCenter(iitLocation);
    map.setZoom(14);
  });
}
// Load the map unobtrusively
window.addEventListener("load", () => {
  if (typeof google !== "undefined") {
    initMap();
  } else {
    console.error("Google Maps API failed to load.");
  }
});
// Image slider logic
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".slider-image");
  let currentIndex = 0;

  const showImage = (index) => {
    images.forEach((img, i) => {
      img.classList.toggle("hidden", i !== index);
    });
  };

  document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
  });

  document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  showImage(currentIndex); // Show the first image initially
});