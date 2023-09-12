import { batteryRecords } from "./queries/batteryRecords.js";
import { calculateBatteryUsage } from "./utils/calculateConsumption.js";
import { displayResults } from './utils/displayResult.js';


export const BatteryCheck = async () => {
    let allBatteryRecord = await batteryRecords()
    let calculatedRecords = calculateBatteryUsage(allBatteryRecord)

    // Render result
    displayResults(calculatedRecords)
}

