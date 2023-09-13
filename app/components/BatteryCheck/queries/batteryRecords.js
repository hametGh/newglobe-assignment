import { api } from "../../../api/utils/api";
import { PUBLIC_URL } from "../../../config/config";
export const batteryRecords = () => {
    return api(PUBLIC_URL + "/data/battery-data.json");
};
