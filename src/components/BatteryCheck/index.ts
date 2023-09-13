import { batteryRecords } from "./queries/batteryRecords";
import { calculateBatteryUsage } from "./utils/calculateConsumption";
import { displayResults } from './utils/displayResult';


export const BatteryCheck = async () => {
    let allBatteryRecord = await batteryRecords()
    let calculatedRecords = calculateBatteryUsage(allBatteryRecord)

    // Render result
    displayResults(calculatedRecords)
}

