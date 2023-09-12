import { Academy } from "../../../api/interface/Academy";
import { addDevice } from "./addDevice";


describe("addDevice function tests", () => {
    let schools: { [key: number]: Academy };

    beforeEach(() => {
        // Initialize an empty schools 
        schools = {};
    });

    it("should add an UNHEALTHY device to an existing school record", () => {
        const academyId = 123;
        const serialNumber = "XYZ123";
        const type = 'UNHEALTHY';
        const usage = 10;

        // Add an initial school record 
        schools[academyId] = {
            academyId: academyId,
            malfunctioningDevices: [],
            unknownDevices: []
        };

        addDevice(schools, academyId, serialNumber, type, usage);

        // Check if the device was added to the UNHEALTHY devices list
        expect(schools[academyId].malfunctioningDevices.length).toBe(1);
        expect(schools[academyId].unknownDevices.length).toBe(0);

        // Check if the device details match
        expect(schools[academyId].malfunctioningDevices[0].serialNumber).toBe(serialNumber);
        expect(schools[academyId].malfunctioningDevices[0].usage).toBe(usage);
    });

    it("should add an UNKNOWN device to an existing school record", () => {
        const academyId = 456;
        const serialNumber = "ABC456";
        const type = 'UNKNOWN';
        const usage = 20;

        // Add an initial school record for testing
        schools[academyId] = {
            academyId: academyId,
            malfunctioningDevices: [],
            unknownDevices: []
        };

        addDevice(schools, academyId, serialNumber, type, usage);

        // Check if the device was added to the UNKNOWN devices list
        expect(schools[academyId].malfunctioningDevices.length).toBe(0);
        expect(schools[academyId].unknownDevices.length).toBe(1);

        // Check if the device details match
        expect(schools[academyId].unknownDevices[0].serialNumber).toBe(serialNumber);
        expect(schools[academyId].unknownDevices[0].usage).toBe(usage);
    });

    it("should create a new school record and add an UNHEALTHY device", () => {
        const academyId = 789;
        const serialNumber = "PQR789";
        const type = 'UNHEALTHY';
        const usage = 30;

        addDevice(schools, academyId, serialNumber, type, usage);

        // Check if a new school record was created
        expect(schools[academyId]).toBeDefined();

        // Check if the device was added to the UNHEALTHY devices list
        expect(schools[academyId].malfunctioningDevices.length).toBe(1);
        expect(schools[academyId].unknownDevices.length).toBe(0);

        // Check if the device details match
        expect(schools[academyId].malfunctioningDevices[0].serialNumber).toBe(serialNumber);
        expect(schools[academyId].malfunctioningDevices[0].usage).toBe(usage);
    });
});
