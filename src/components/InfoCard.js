import React from "react";

function InfoCard({ title, info }) {
  return (
    <div className="w-60 px-4 border-l border-gray-700">
      <h1 className="text-gray-500 text-base py-1">{title}</h1>
      <p className="text-xs py-2">{info}</p>
    </div>
  );
}

export default InfoCard;
