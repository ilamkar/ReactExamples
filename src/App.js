import React, {useState}  from 'react';
import logo from './logo.svg';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

/*class App extends React.Component{
  render(){
    return <h1>Hello</h1>
  }
}
*/

const App = () =>{

  const [courseGoals,setCourseGoals]= useState([
    {id:'g1', text:'Goal 1'},
    {id:'g2', text:'Goal 2'},
    {id:'g3', text:'Goal 3'}

  ]);


const addNewGoalHandler= newGoal =>{
//  setCourseGoals(courseGoals.concat(newGoal));
setCourseGoals((prevCourseGoals) =>{
 return prevCourseGoals.concat(newGoal);
});


};
  return  (
    <div>
      <h1>Hello JSX code</h1>
      <NewGoal onAddGoal={addNewGoalHandler}/>
    <GoalList goals={courseGoals}/>
     </div>
  );
};

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;

