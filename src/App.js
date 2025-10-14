import Card from './Card';
import './App.css';

const randNum = () => Math.floor(Math.random() *100 ) +1;

function App() {
  return (
    <div>
      <h1>Task: Add theree Card elements</h1>
      <Card num={randNum()}/>
      <Card num={randNum()}/>
      <Card num={randNum()}/>
    </div>
  );
}

export default App;
