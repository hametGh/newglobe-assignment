import { api } from "../../../api/utils/api.js";
import { PUBLIC_URL } from "../../../config/config.js";
export const batteryRecords = () => {
    return api(PUBLIC_URL + "/data/battery-data.json");
};
