// Sample water scarcity data
const waterScarcityData = [
    { pincode: "560001", area: "Majestic", scarcityLevel: "High" },
    { pincode: "560002", area: "Bangalore City", scarcityLevel: "Medium" },
    { pincode: "560003", area: "Malleswaram", scarcityLevel: "Low" },
    { pincode: "560004", area: "Basavanagudi", scarcityLevel: "High" },
    { pincode: "560005", area: "Rajajinagar", scarcityLevel: "Medium" },
    { pincode: "560006", area: "Vijayanagar", scarcityLevel: "Low" },
    { pincode: "560007", area: "Sadashivanagar", scarcityLevel: "High" },
    { pincode: "560008", area: "Chamarajpet", scarcityLevel: "Medium" },
    { pincode: "560009", area: "Gandhinagar", scarcityLevel: "Low" },
    { pincode: "560010", area: "Shivajinagar", scarcityLevel: "High" },
    { pincode: "560011", area: "Cubbon Park", scarcityLevel: "Medium" },
    { pincode: "560012", area: "Indiranagar", scarcityLevel: "Low" },
    { pincode: "560013", area: "Domlur", scarcityLevel: "High" },
    { pincode: "560014", area: "Ulsoor", scarcityLevel: "Medium" },
    { pincode: "560015", area: "Viveknagar", scarcityLevel: "Low" },
    { pincode: "560016", area: "Koramangala", scarcityLevel: "High" },
    { pincode: "560017", area: "HSR Layout", scarcityLevel: "Medium" },
    { pincode: "560018", area: "BTM Layout", scarcityLevel: "Low" },
    { pincode: "560019", area: "Bannerghatta Road", scarcityLevel: "High" },
    { pincode: "560020", area: "Jayanagar", scarcityLevel: "Medium" },
    { pincode: "560021", area: "JP Nagar", scarcityLevel: "Low" },
    // Continue adding more areas with unique pin codes
];


// Function to search for water scarcity data by area name
function searchArea() {
    const areaName = document.getElementById('areaName').value.trim();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    const filteredData = waterScarcityData.filter(item => item.area.toLowerCase() === areaName.toLowerCase());
    if (filteredData.length === 0) {
        resultDiv.innerText = 'No data found for the provided area name.';
    } else {
        const table = document.createElement('table');
        const headerRow = table.insertRow();
        for (const key in filteredData[0]) {
            const headerCell = document.createElement('th');
            headerCell.textContent = key.toUpperCase();
            headerRow.appendChild(headerCell);
        }
        table.appendChild(headerRow);

        filteredData.forEach(item => {
            const row = table.insertRow();
            for (const key in item) {
                const cell = row.insertCell();
                cell.textContent = item[key];
            }
        });

        resultDiv.appendChild(table);
    }
}

