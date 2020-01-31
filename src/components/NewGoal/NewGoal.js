import React ,{useState} from 'react';

import './NewGoal.css'

const NewGoal=props=>{

   // let enteredText ='';
   const [enteredText, setEnteredText] = useState('');

    const addGoalHandler =event=>{

       event.preventDefault(); // prevent sending request to backend

       const newGoal = 
{
            id: Math.random().toString(),
            text: enteredText
            
 } ;
 setEnteredText ('');

     props.onAddGoal(newGoal);  // props named in app.js
    };

    const textHandler =event=>{
        setEnteredText(event.target.value);
       
    };

    return (
    <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" value={enteredText} onChange={textHandler}/>
        <button type="submit">Add Goal</button>
    </form>
    )
}

 export default NewGoal;