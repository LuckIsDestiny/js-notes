// Function to calculate the cost of a travel package based on distance
function getPackageCost(distance) {
    if (distance < 1000) {
      return 500;
    } else if (distance < 2000) {
      return 1000;
    } else if (distance < 3000) {
      return 1500;
    } else {
      return 2000;
    }
  }
  
  // Example usage
  const startingPoint = {
    city: "New York",
    country: "USA",
    latitude: 40.730610,
    longitude: -73.935242,
  };
  
  const destination = {
    city: "Los Angeles",
    country: "USA",
    latitude: 34.052235,
    longitude: -118.243683,
  };
  
  // Calculate the distance between starting point and destination
  function calculateDistance(start, end) {
    const R = 6371; // Earth's radius in kilometers
    const φ1 = (start.latitude * Math.PI) / 180; // φ, λ in radians
    const φ2 = (end.latitude * Math.PI) / 180;
    const Δφ = ((end.latitude - start.latitude) * Math.PI) / 180;
    const Δλ = ((end.longitude - start.longitude) * Math.PI) / 180;
  
    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return R * c; // Distance in km
  }
  
  const distance = calculateDistance(startingPoint, destination);
  console.log(`Distance from ${startingPoint.city} to ${destination.city}: ${distance.toFixed(2)} km`);
  
  const packageCost = getPackageCost(distance);
  console.log(`Package cost for ${distance.toFixed(2)} km: $${packageCost}`);