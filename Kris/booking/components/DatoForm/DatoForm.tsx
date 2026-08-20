"use client";

import { useState } from "react";
import WeekNumber from "@/utils/weekNumber";

const TIMES = ["11:00", "13:00"];
const DAY_NAMES = ["Man", "Tir", "Ons", "Tor", "Fre"];
const MAX_WEEK_PAIRS = 4;

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

  const thisMonday = getMonday(today);

  const [weekPair, setWeekPair] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const pairStart = addDays(thisMonday, weekPair * 14);

  const weeks = [
    Array.from({ length: 5 }, (_, i) => addDays(pairStart, i)),
    Array.from({ length: 5 }, (_, i) => addDays(pairStart, i + 7)),
  ];

  function pickDay(date: Date) {
    if (date < today) {
      return;
    } else {
      setSelectedDate(date)
      setSelectedTime(null)
    }
  }

  function changeWeek(direction: number) {
    const newWeekPair = weekPair + direction;

    if (newWeekPair < 0 || newWeekPair >= MAX_WEEK_PAIRS) return;

    setWeekPair(newWeekPair);
    setSelectedDate(null);
    setSelectedTime(null);
  }

  return (
    <div className="mx-auto max-w-md">

      <div className="flex justify-center">
        Velg dato
      </div>
      {/* Kalender-header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => changeWeek(-1)}
          disabled={weekPair === 0}
        >
          ←
        </button>

        <h2>Velg {WeekNumber()}</h2>

        <button
          onClick={() => changeWeek(1)}
          disabled={weekPair === MAX_WEEK_PAIRS - 1}
        >
          →
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

      {/* To uker */}
      {weeks.map((week, weekIndex) => (
        <div key={weekIndex} className="grid grid-cols-5">
          {week.map((date) => {
            const isPast = date < today;
            const isSelected =
              selectedDate && isSameDay(date, selectedDate);

            return (
              <button
                key={date.toISOString()}
                disabled={isPast}
                onClick={() => pickDay(date)}
                className={`
                  p-3
                  disabled:text-gray-300
                  ${isSelected ? "bg-blue-500 text-white" : ""}
                `}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
      ))}

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
          onClick={() => setConfirmed(true)}
          className="mt-6 w-full bg-blue-500 p-3 text-white"
        >
          Bekreft booking
        </button>
      )}

    </div>
  );
}