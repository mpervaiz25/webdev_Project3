// Initialize the Google Map
function initMap() {
  const iitLocation = { lat: 41.8349, lng: -87.6270 }; // IIT Chicago coordinates
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: iitLocation,
  });