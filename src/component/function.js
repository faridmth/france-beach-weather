export const fetchData = async(url)=>{
    let data =await fetch(url)
    data = data.json()
    return data
}

export function formatDateToFrench(dateString) {
    // Split the date string into components
    const [year, month, day] = dateString.split('-');

    // Array of French month names
    const monthNames = [
        "janvier", "février", "mars", "avril", "mai", "juin",
        "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];

    // Convert month from string to integer and map to French month name
    const monthName = monthNames[parseInt(month) - 1];

    // Format the date as "DD MMMM YYYY"
    return `${day} ${monthName} ${year}`;
}
export function daysUntilWeekend() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday
    const daysUntilSaturday = (6 - dayOfWeek) % 7; // days until next Saturday
    return daysUntilSaturday;
  }

  // uv index color 
  
  const UV_INDEX_COLORS = {
    // Define colors based on UV index ranges
    low: '#1de103', // Green - Low risk
    moderate: '#ebd80d', // Yellow - Moderate risk
    high: '#FFA500', // Orange - High risk
    veryHigh: '#FF0000', // Red - Very high risk
    extreme: '#8B00FF', // Violet - Extreme risk
  };
  export const getUvColor = (uvIndex) => {
    // Handle cases outside the defined range
    if (uvIndex < 1) {
      return UV_INDEX_COLORS.low;
    } else if (uvIndex > 11) {
      return UV_INDEX_COLORS.extreme;
    }

    // Map UV index to color based on ranges (adjust ranges as needed)
    if (uvIndex <= 2) {
      return UV_INDEX_COLORS.low;
    } else if (uvIndex <= 5) {
      return UV_INDEX_COLORS.moderate;
    } else if (uvIndex <= 7) {
      return UV_INDEX_COLORS.high;
    } else if (uvIndex <= 10) {
      return UV_INDEX_COLORS.veryHigh;
    } else {
      return UV_INDEX_COLORS.extreme;
    }
  };
