/**
 * Base on the schedule of a doctor, find all the overlaped schedules across the whole week
 * const doctorSchedule = {}
 * find all the overlaped schedules
 * print the schedule ordered by day and time
 */

const doctorSchedule = {
  placeA: [
    { day: "monday", start: "55800000", end: "66600000" },
    { day: "tuesday", start: "37800000", end: "48600000" },
    { day: "wednesday", start: "48600000", end: "63000000" },
  ],
  placeB: [
    { day: "thursday", start: "34200000", end: "48600000" },
    { day: "monday", start: "63000000", end: "73800000" },
    { day: "wednesday", start: "48600000", end: "55800000" },
  ],
  placeC: [
    { day: "tuesday", start: "37800000", end: "45000000" },
    { day: "thursday", start: "37800000", end: "48600000" },
  ],
};
