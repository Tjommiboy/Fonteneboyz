import { getISOWeek } from "date-fns";

export default function WeekNumber() {
    const today = new Date()
    const weekNumber = getISOWeek(today)
     return weekNumber
}