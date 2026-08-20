import { getISOWeek } from "date-fns";

export default function WeekNumber(date: Date) {
    const weekNumber = getISOWeek(date)
     return weekNumber
}