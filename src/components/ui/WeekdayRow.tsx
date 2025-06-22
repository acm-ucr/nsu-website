import React from "react";

function WeekdayRow() {
  // Define your array of full weekday names here, or use a date formatting utility
  const fullWeekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Alternatively, for localization, use Intl.DateTimeFormat (more robust):
  // const weekdays = Array.from({ length: 7 }, (_, i) => {
  //   const date = new Date(2025, 0, i + 5); // Example: Jan 5, 2025 was a Sunday
  //   return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
  // });

  return (
    <thead>
      <tr>
        {fullWeekdays.map((dayName, index) => (
          <th key={index}>{dayName}</th>
        ))}
      </tr>
    </thead>
  );
}

export default WeekdayRow;
