import { BatteryDataEntry } from "../../../api/interface/BatteryDataEntry";

import { parseGroupKey, groupDataByAcademyAndSerial } from './groupAcademy'

describe("groupDataByAcademyAndSerial function tests", () => {
    it("should group battery data by academy and serial number", () => {
        const data: BatteryDataEntry[] = [
            {
                academyId: 123,
                batteryLevel: 0.9,
                employeeId: "E1",
                serialNumber: "S1",
                timestamp: "2023-09-10T08:00:00.000Z",
            },
            {
                academyId: 456,
                batteryLevel: 0.75,
                employeeId: "E2",
                serialNumber: "S2",
                timestamp: "2023-09-11T08:00:00.000Z",
            },
            {
                academyId: 123,
                batteryLevel: 0.8,
                employeeId: "E3",
                serialNumber: "S1",
                timestamp: "2023-09-12T08:00:00.000Z",
            },
        ];

        const result = groupDataByAcademyAndSerial(data);

        // Check if data is grouped correctly
        expect(Object.keys(result).length).toBe(2);
        expect(result["123/S1"].length).toBe(2);
        expect(result["456/S2"].length).toBe(1);
    });
});

describe("parseGroupKey function tests", () => {
    it("should parse a group key into academyId and serialNumber", () => {
        const groupKey = "123/S1";
        const result = parseGroupKey(groupKey);

        expect(result.academyId).toBe(123);
        expect(result.serialNumber).toBe("S1");
    });

});


