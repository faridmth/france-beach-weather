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