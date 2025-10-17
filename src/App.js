import Card from "./Card";
import "./App.css";
import InputComponent from "./InputComponent";
import Register from "./Form";
import Counter from "./Counter";
import Main from "./Propsdrilling";

const randNum = () => Math.floor(Math.random() * 100) + 1;

export default function App() {
  return (
    <div className="app">
      <h1>My Mini React Use State Projects</h1>

      {/* Top widgets / tools */}
      <section>
        <InputComponent />
      </section>
      
      <section>
        <Main msg="I passed through the Header and the Wrapper and I reached the Button component" />
      </section>
      
      <section>
        <p><strong>Register Form:</strong></p>
        <Register />
      </section>

      {/* Cards task */}
      <section>
        <h2>Task: Add three Card elements</h2>
        <div className="cards">
          <Card num={randNum()} />
          <Card num={randNum()} />
          <Card num={randNum()} />
        </div>
      </section>

      {/* Counter at the bottom */}
      <section>
        <Counter />
      </section>
    </div>
  );
}