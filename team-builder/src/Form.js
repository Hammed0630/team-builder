import React from "react";

import "./App.css";

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-team inputs">
        <label htmlFor="nameInput">
          Name:&nbsp;
          <input
            id="nameInput"
            name="name"
            type="text"
            placeholder="Enter name"
            maxLength="20"
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label htmlFor="emailInput">
          Email: &nbsp;
          <input
            id="emailInput"
            name="email"
            type="email"
            placeholder="Enter email"
            maxLength="20"
            value={values.email}
            onChange={onChange}
          />
        </label>

        <label>
          Role: &nbsp;
          <select name="role" value={values.role} onChange={onChange}>
            <option disabled value="">
              Select a role
            </option>
            <option value="tl">Team Lead</option>
            <option value="manager">Manager</option>
            <option value="intern">Intern</option>
          </select>
        </label>
        <div className="form-group submit">
          <button disabled={!values.name || !values.email || !values.role}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}