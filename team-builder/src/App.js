import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import Team from "./Team";

const initialTeamList = 
  {
    name: " ",
    email: " ",
    role: "Team Lead",
  }


// const fakeAxiosGet = () => {
//   return Promise.resolve({ status: 200, success: true, data: initialTeamList });
// };

const fakeAxiosPost = ({ name, email, role }) => {
  const newTeamList = { name, email, role };

  return Promise.resolve({ status: 200, success: true, data: newTeamList });
};

function App() {
  const [teams, setTeams] = useState([]);

  const [formValues, setFormValues] = useState(initialTeamList);
console.log(formValues)
  const updateList = (inputName, inputValue) => {
    const updatedList = { ...formValues, [inputName]: inputValue };
    setFormValues(updatedList);
  };

  const submitForm = () => {
    const newTeamList = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    // if (!newTeamList.name || !newTeamList.email || !newTeamList.role) return;

    // fakeAxiosPost("fakeapi.com", newTeamList).then((res) => {
      const teamFromAPI = newTeamList;
      setTeams([teamFromAPI, ...teams]);
      
      setFormValues(initialTeamList);
    // });
  };
  // useEffect(() => {
  //   fakeAxiosGet("fakeapi.com").then((res) => setTeams(res.data));
  // }, []);
  console.log(teams)
  return (
    <div className="App">
      <h1>Add A Team Member </h1>
      <Form values={formValues} update={updateList} submit={submitForm} />
      {teams.map((team) => {
        return <Team key={teams.id} details={team} />;
      })}
    </div>
  );
}

export default App;