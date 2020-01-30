import React from 'react';

import './NewGoal.css'

const b=props=>{

    const addGoalHandler =event=>{

       event.preventDefault(); // prevent sending request to backend

       const newGoal = 
{
            id: Math.random().toString(),
            text: 'My New Goal'
 } ;
     props.onAddGoal(newGoal);  // props named in app.js
    };

    return (
    <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text"/>
        <button type="submit">Add Goal</button>
    </form>
    )
}

 export default b;