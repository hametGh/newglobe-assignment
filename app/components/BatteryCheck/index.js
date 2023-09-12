var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { batteryRecords } from "./queries/batteryRecords.js";
import { calculateBatteryUsage } from "./utils/calculateConsumption.js";
import { displayResults } from './utils/displayResult.js';
export const BatteryCheck = () => __awaiter(void 0, void 0, void 0, function* () {
    let allBatteryRecord = yield batteryRecords();
    let calculatedRecords = calculateBatteryUsage(allBatteryRecord);
    // Render result
    displayResults(calculatedRecords);
});
