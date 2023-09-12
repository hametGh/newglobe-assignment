// Function to group battery data by academy and serial number
export const groupDataByAcademyAndSerial = (data) => {
    // Initialize an empty object to store grouped data
    return data.reduce((groups, item) => {
        // Create a unique group key using academyId and serialNumber
        const groupKey = `${item.academyId}/${item.serialNumber}`;
        // If the group doesn't exist, create an empty array for it
        if (!groups[groupKey]) {
            groups[groupKey] = [];
        }
        // Push the current data entry into the corresponding group
        groups[groupKey].push(item);
        return groups;
    }, {});
};
// Function to parse a group key into academyId and serialNumber
export const parseGroupKey = (group) => {
    // Split the group key by '/' to extract academyId and serialNumber
    const [academyId, serialNumber] = group.split('/');
    return { academyId: +academyId, serialNumber };
};
