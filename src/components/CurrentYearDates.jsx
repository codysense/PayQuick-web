import React, { useState, useEffect } from "react";

const CurrentYearDates = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const currentYear = today.getFullYear();

    // Set the minimum date to January 1st of the current year
    const startOfYear = new Date(currentYear, 0, 1);
    // Set the maximum date to December 31st of the current year
    const endOfYear = new Date(currentYear, 11, 31);

    // Format the dates as yyyy-mm-dd
    setMinDate(startOfYear.toISOString().split("T")[0]);
    setMaxDate(endOfYear.toISOString().split("T")[0]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected Date: ${selectedDate}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="dateInput">Select a Date:</label>
        <input
          type="date"
          id="dateInput"
          value={selectedDate}
          min={minDate}
          max={maxDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CurrentYearDates;
