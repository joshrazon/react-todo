import React from "react";

export function Today() {
  const [dateTime] = React.useState(new Date());

  return (
    <div className="date">
      <h2>
        <span>{dateTime.toLocaleDateString('default', { weekday: 'long' })}</span>
      </h2>
      <p>{dateTime.toLocaleString('default', { month: 'long' })} {dateTime.toLocaleDateString('default', { day: 'numeric' })}</p>
    </div>
  );
}
