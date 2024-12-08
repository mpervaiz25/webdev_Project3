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
