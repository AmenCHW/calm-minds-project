import React from 'react';

function MonthSelect() {
  return (
    <div>
      <select
        className="form--dob-year border border-[#D1DBE3] py-4 px-3.5"
        name="year"
      >
        <option value="0">Month</option>
        <option>Jan</option>
        <option>Feb</option>
        <option>Mar</option>
        <option>Apr</option>
        <option>May</option>
        <option>Jun</option>
        <option>Jul</option>
        <option>Aug</option>
        <option>Sep</option>
        <option>Oct</option>
        <option>Nov</option>
        <option>Dec</option>
      </select>
    </div>
  );
}

export default MonthSelect;
