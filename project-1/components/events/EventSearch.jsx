import { useState } from "react";
import Button from "../ui/button";
import classes from "./EventsSearch.module.css";

function EventsSearch({ onSearch }) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const [selectedMonth, setSelectedMonth] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();
    const SearchselectedYear = selectedYear;
    const SearchselectedMonth = selectedMonth;
    onSearch(SearchselectedYear, SearchselectedMonth);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select
            name="year"
            id="year"
            onChange={(event) => setSelectedYear(event.target.value)}
          >
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select
            name="month"
            id="month"
            onChange={(event) => setSelectedMonth(event.target.value)}
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
