import React from 'react';

function YearSelect() {
  const generateYearOptions = () => {
    const arr = [];

    const startYear = 1900;
    const endYear = new Date().getFullYear();

    for (let i = endYear; i >= startYear; i -= 1) {
      arr.push(<option value={i}>{i}</option>);
    }

    return arr;
  };
  return (
    <div>
      <select
        className="form--dob-year border border-[#D1DBE3] py-4 px-3.5"
        name="year"
      >
        <option value="0">Year</option>
        {generateYearOptions()}
      </select>
    </div>
  );
}

export default YearSelect;
