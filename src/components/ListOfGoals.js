import React from "react";

const ListOfGoals = ({ allGoals }) => {
  return (
    <ul>{
      allGoals.map((ele, ind) => (<li key={ind}>
        <p>My goal is to {ele.goal}, by {ele.by}.</p>
      </li>))
    }

    </ul>
  );
}

export default ListOfGoals;