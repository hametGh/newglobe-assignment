import { BatteryDataEntry } from "../../../api/interface/BatteryDataEntry"
import { api } from "../../../api/utils/api.js"

export const batteryRecords = () => {
    return api<BatteryDataEntry[]>("/data/battery-data.json")
}