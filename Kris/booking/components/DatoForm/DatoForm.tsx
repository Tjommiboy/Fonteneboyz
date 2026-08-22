"use client";

import { useState } from "react";
import { getISODay, getISOWeek, format} from "date-fns";
import { nb } from "date-fns/locale";
import { useRouter } from "next/navigation";
import { useBooking } from "@/components/BookingContext/BookingContext";

const TIMES = ["11:00", "13:00"];
const DAY_NAMES = ["Man", "Tir", "Ons", "Tor", "Fre"];
const MAX_WEEK = 8;

function getMonday(date: Date) {
  const monday = new Date(date);
  monday.setHours(0, 0, 0, 0);

  const day = monday.getDay();
  const difference = day === 0 ? -6 : 1 - day;

  monday.setDate(monday.getDate() + difference);

  return monday;
}

function addDays(date: Date, days: number) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);

  return newDate;
}

function isSameDay(a: Date, b: Date) {
  return a.toDateString() === b.toDateString();
}

function formatMåndeÅr(d: Date){
  return d.toLocaleDateString('nb-NO', {month: 'long', year: 'numeric'})
}

function formatDate(date: Date) {
  return date.toLocaleDateString("nb-NO", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export default function DatoForm() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const day = getISODay(today)
  const startWeek = day >= 5 ? 1 : 0

  const thisMonday = getMonday(today);
  const router = useRouter()
  const [weekPair, setWeekPair] = useState(startWeek);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const {setBooking} = useBooking();

  const pairStart = addDays(thisMonday, weekPair * 7);
  const month = format(pairStart, 'MMMM yyyy', {locale: nb})
  const weekNumber = getISOWeek(pairStart)
  
  const week = Array.from({ length: 5 }, (_, i) => addDays(pairStart, i));

  const firstDay = week[0]
  const lastDay = week[4]
  const måndeLabel = firstDay.getMonth() === lastDay.getMonth() ? formatMåndeÅr(firstDay) : `${firstDay.toLocaleDateString('nb-NO', {month: 'long'})} - ${formatMåndeÅr(lastDay)}`

  function pickDay(date: Date) {
    if (date < today) {
      return;
    } else if (selectedDate && isSameDay(date, selectedDate)) {
      setSelectedDate(null);
      setSelectedTime(null);
    } else {
      setSelectedDate(date);
      setSelectedTime(null);
    }
  }

  function changeWeek(direction: number) {
    const newWeekPair = weekPair + direction;

    if (newWeekPair < startWeek || newWeekPair >= MAX_WEEK) return;

    setWeekPair(newWeekPair);
    setSelectedDate(null);
    setSelectedTime(null);
  }

  function bekreft(){
    if (!selectedDate || !selectedTime) return;

    setBooking((prev) => ({
      ...prev,
      valgtDato: selectedDate.getTime(),
      valgtTid: selectedTime
    }))

      router.push('/booking_tid/booking_kontakt');
  }

  return (
    <div className="mx-auto max-w-md border rounded-xl border-gray-300 mt-5">
      {/* Kalender-header */}
      <div className="flex items-center justify-around m">
        <button
          className="w-8 h-8 rounded-md border cursor-pointer disabled:cursor-not-allowed disabled:text-gray-300"
          onClick={() => changeWeek(-1)}
          disabled={weekPair === startWeek}
        >
          {'<'}
        </button>

        <h2>{måndeLabel}</h2>

        <button
          className="cursor-pointer border rounded-md h-8 w-8 disabled:cursor-not-allowed disabled:text-gray-300"
          onClick={() => changeWeek(1)}
          disabled={weekPair === MAX_WEEK - 1}
        >
          {'>'}
        </button>
      </div>

      {/* Dagnavn */}
      <div className="grid grid-cols-5">
        {DAY_NAMES.map((day) => (
          <p key={day} className="text-center">
            {day}
          </p>
        ))}
      </div>

      {/* En uke */}
        <div className="grid grid-cols-5">
          {week.map((date) => {
            const isPast = date <= today;
            const isSelected =
              selectedDate && isSameDay(date, selectedDate);

            return (
              <button
                key={date.toISOString()}
                disabled={isPast}
                onClick={() => pickDay(date)}
                className={`
                  cursor-pointer
                  p-3
                  disabled:text-gray-300
                  disabled:cursor-not-allowed
                  ${isSelected ? "bg-blue-500 text-white" : ""}
                `}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>      

      {/* Valgt dato */}
      {selectedDate && (
        <div className="mt-6">
          <p>{formatDate(selectedDate)}</p>

          {/* Tid */}
          <div className="mt-3 flex gap-3">
            {TIMES.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`
                  cursor-pointer
                  border p-3
                  ${selectedTime === time ? "bg-blue-500 text-white" : ""}
                `}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bekreft */}
      {selectedDate && selectedTime && (
        <button
          onClick={bekreft}
          className="mt-6 w-full bg-blue-500 p-3 text-white cursor-pointer"
        >
          Neste
        </button>
      )}

    </div>
  );
}