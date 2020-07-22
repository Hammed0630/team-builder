import React from "react";

export default function Team(props) {
  const { details } = props;

  if (!details) {
    return <h3>Working fetching your teams details...</h3>;
  }

  return (
    <div className="team container">
      <p>Name: {details.name}</p>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  );
}