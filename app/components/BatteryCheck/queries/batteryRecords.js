import { api } from "../../../api/utils/api.js";
export const batteryRecords = () => {
    return api("/data/battery-data.json");
};
