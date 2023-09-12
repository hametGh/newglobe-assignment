// Function to display the results in the HTML document
export const displayResults = (calculatedRecords) => {
    // Get the result container element by ID
    const resultContainer = document.getElementById("result");
    // Check if there are no records to display
    if (calculatedRecords.length === 0) {
        resultContainer.innerHTML = "<p>No schools with battery issues found.</p>";
        return;
    }
    // Loop through each academy record
    calculatedRecords.forEach((item) => {
        // Create a details element for each academy
        const academyItem = document.createElement("details");
        academyItem.className = 'm-2';
        academyItem.innerHTML = `
        <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
            <h2 class="font-medium flex-grow">Academy: ${item.academyId}</h2>
            <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">${item.unknownDevices.length}</span>
            <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">${item.malfunctioningDevices.length}</span>
        </summary>`;
        // Create a paragraph for malfunctioning devices
        const malfunctioningDevices = document.createElement("p");
        malfunctioningDevices.innerHTML = `<p class="m-2">Malfunctioning Devices:<p>`;
        // Loop through each malfunctioning device
        item.malfunctioningDevices.forEach((device) => {
            // Create a span element for each device
            const deviceItem = document.createElement("span");
            deviceItem.className = 'inline-flex m-1 items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10';
            // Display device information
            deviceItem.innerHTML = `${device.serialNumber} - Usage: ${Math.round(device.usage * 100)}%`;
            malfunctioningDevices.appendChild(deviceItem);
        });
        // Create a paragraph for unknown devices
        const unknownDevices = document.createElement("p");
        unknownDevices.innerHTML = `<p class="m-2">Unknown Devices:<p>`;
        // Loop through each unknown device
        item.unknownDevices.forEach((device) => {
            // Create a span element for each device
            const deviceItem = document.createElement("span");
            deviceItem.className = 'inline-flex m-1 items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10';
            // Display device information
            deviceItem.innerHTML = `${device.serialNumber}`;
            unknownDevices.appendChild(deviceItem);
        });
        // Check if there are unknown devices and append them to the academy item
        if (item.unknownDevices.length > 0) {
            academyItem.appendChild(unknownDevices);
        }
        // Append malfunctioning devices to the academy item
        academyItem.appendChild(malfunctioningDevices);
        // Append the academy item to the result container
        resultContainer.appendChild(academyItem);
    });
};
