export interface Academy {
    academyId: number;
    malfunctioningDevices: { serialNumber: string, usage: number }[];
    unknownDevices: { serialNumber: string, usage: number }[]
}