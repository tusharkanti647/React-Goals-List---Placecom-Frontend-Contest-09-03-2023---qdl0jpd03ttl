import React, { useState } from "react";

const GoalForm = (props) => {
  const { allGoals: allGoals, setAllGoals: setAllGoals } = props;
  //console.log(allGoals, setAllGoals);
  const [formData, setFormData] = useState({
    goal: "",
    by: ""
  });

  const submitHandel = (e) => {
    e.preventDefault();

    setAllGoals([...allGoals, formData]);
    setFormData({ ...formData, goal: "", by: "" });
  }

  return (
    <>
      <h1>My Goals</h1>
      <form onSubmit={submitHandel}>
        <input
          type="text"
          name='goal'
          placeholder='Goal...'
          onChange={(e) => { setFormData({ ...formData, goal: e.target.value }) }}
          value={formData.goal}
        />
        <input
          type="text"
          name="by"
          placeholder='By...'
          onChange={(e) => { setFormData({ ...formData, by: e.target.value }) }}
          value={formData.by}
        />
        <button>Add</button>
      </form>
    </>
  )
}

export default GoalForm;