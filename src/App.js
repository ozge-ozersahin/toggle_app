import Card from './Card';
import './App.css';
import InputComponent from './InputComponent';
import Register from './Form';

const randNum = () => Math.floor(Math.random() *100 ) +1;

function App() {
  return (
    <div>
      <InputComponent/>
      <p>Register Form: </p>
      <Register/>
      <h1>Task: Add theree Card elements</h1>
      <Card num={randNum()}/>
      <Card num={randNum()}/>
      <Card num={randNum()}/>
    </div>
  );
}

export default App;
