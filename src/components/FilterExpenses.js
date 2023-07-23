import { useState } from "react";

const FilterExpenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("");

  const handleYearFormSubmit = (e) => {
    e.preventDefault();

    setSelectedYear(e.target.value);

    props.onGetYear(e.target.value);
  };
  return (
    <div>
      <label htmlFor="year-select">Expenses by year:</label>
      <select
        name="years"
        id="year-select"
        form="year-form"
        value={selectedYear}
        onChange={handleYearFormSubmit}
      >
        <option value="">Please choose a year</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  );
};

export default FilterExpenses;
