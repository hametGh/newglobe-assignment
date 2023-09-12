// Function to add a device to a school's record
export const addDevice = (schools, academyId, serialNumber, type, usage) => {
    // Check if the school record for the given academyId exists
    if (!schools[academyId]) {
        // If not, create a new school record
        schools[academyId] = {
            academyId: academyId,
            malfunctioningDevices: [],
            unknownDevices: []
        };
    }
    // Check the type of device (UNHEALTHY or UNKNOWN)
    if (type === 'UNHEALTHY') {
        // Add the device to the malfunctioning devices list
        schools[academyId].malfunctioningDevices.push({ serialNumber, usage });
    }
    else {
        // Add the device to the unknown devices list
        schools[academyId].unknownDevices.push({ serialNumber, usage });
    }
};
