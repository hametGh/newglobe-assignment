import { addDevice } from "./addDevice";
import { groupDataByAcademyAndSerial, parseGroupKey } from "./groupAcademy";
// Maximum valid battery usage percentage
const MAX_VALID_USAGE = 0.3;
// Function to calculate battery usage for each academy
export const calculateBatteryUsage = (data) => {
    // Group battery data by academy and serial number
    const groupedData = groupDataByAcademyAndSerial(data);
    // Initialize an object to store school records
    const schools = {};
    // Iterate through grouped data
    Object.entries(groupedData).forEach(([group, items]) => {
        // Sort items by timestamp
        items.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
        // Calculate total battery usage and count of data entries
        const { totalBatteryUsage, count } = calculateUsage(items);
        const { academyId, serialNumber } = parseGroupKey(group);
        // Calculate average battery usage
        const averageUsage = totalBatteryUsage / count;
        // Check if average usage exceeds the maximum valid usage
        if (count >= 1 && averageUsage > MAX_VALID_USAGE) {
            addDevice(schools, +academyId, serialNumber, 'UNHEALTHY', averageUsage);
        }
        // Check if there are no data entries and total battery usage is zero
        if (count === 0 && totalBatteryUsage === 0) {
            addDevice(schools, +academyId, serialNumber, 'UNKNOWN', 0);
        }
    });
    // Convert school records to an array and sort it by the number of malfunctioning devices
    const schoolArray = Object.values(schools);
    schoolArray.sort((a, b) => b.malfunctioningDevices.length - a.malfunctioningDevices.length);
    return schoolArray;
};
// Function to calculate battery usage and count of data entries
const calculateUsage = (items) => {
    let totalBatteryUsage = 0;
    let count = 0;
    for (let x = 1; x < items.length; x++) {
        const previousItem = items[x - 1], currentItem = items[x];
        // Check if battery level increased, if yes, skip (as mentioned in the assignment)
        if (currentItem.batteryLevel > previousItem.batteryLevel)
            continue;
        count++;
        // Calculate time difference in hours and battery level difference
        const timeDifferenceHours = Math.abs(new Date(currentItem.timestamp).getTime() - new Date(previousItem.timestamp).getTime()) / 3600000;
        const batteryLevelDifference = previousItem.batteryLevel - currentItem.batteryLevel;
        // Calculate battery usage and add to total
        totalBatteryUsage += (batteryLevelDifference / timeDifferenceHours) * 24;
    }
    return { totalBatteryUsage, count };
};
