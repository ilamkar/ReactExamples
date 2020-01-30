import React from 'react';

import './NewGoal.css'

const b=()=>{

    const addGoalHandler =event=>{

       event.preventDefault(); // prevent sending request to backend

       const newGoal={
            id: Math.random().toString(),
            text: 'My New Goal'
       };
       console.log(newGoal);
    };

    return (
    <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text"/>
        <button type="submit">Add Goal</button>
    </form>
    )
}

 export default b;