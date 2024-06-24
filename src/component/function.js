export const fetchData = async(url)=>{
    let data =await fetch(url)
    data = data.json()
    return data
}

export function daysUntilWeekend() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday
    const daysUntilSaturday = (6 - dayOfWeek) % 7; // days until next Saturday
    return daysUntilSaturday;
  }

  export function generateDateArray(days) {
    const daysOfWeek = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

    const result = [];
    const currentDate = new Date();

    for (let i = 0; i < days; i++) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + i);

        const year = date.getFullYear();
        const month = months[date.getMonth()];
        const day = date.getDate();
        const dayOfWeek = daysOfWeek[date.getDay()];

        const value = date.toISOString().split('T')[0];
        const label = `${dayOfWeek} ${day} ${month} ${year}`;

        result.push({ value, label });
    }

    return result;
}

// Example usage
const days = 5;
const dateArray = generateDateArray(days);
console.log(dateArray);

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
