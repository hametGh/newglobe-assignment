import { BatteryDataEntry } from "../../../api/interface/BatteryDataEntry"
import { api } from "../../../api/utils/api"
import { PUBLIC_URL } from "../../../config/config"


export const batteryRecords = () => {
    return api<BatteryDataEntry[]>(PUBLIC_URL + "/data/battery-data.json")
}