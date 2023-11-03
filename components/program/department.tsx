"use client";

import React, { useState } from "react";
import ProgramCard from "./program-card";

const Department = ({ department }) => {
  const [selected, setSelected] = useState(0);

  const sortedDepartment = department?.sort(
    (a, b) => a.fields.id - b.fields.id
  );

  return (
    <div className=" mb-10 w-full gap-5">
      <ul className="tab-head">
        {sortedDepartment?.map((program, index) => (
          <li
            key={index}
            onClick={() => setSelected(index)}
            className={`${selected === index ? "tab-active" : ""}`}
          >
            {program.fields.name}
          </li>
        ))}
      </ul>

      {/* ========== programs ========== */}
      <ProgramCard programs={sortedDepartment} selected={selected} />
    </div>
  );
};

export default Department;