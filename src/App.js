import Card from "./Card";
import "./App.css";
import InputComponent from "./InputComponent";
import Register from "./Form";
import Counter from "./Counter";
import Main from "./Propsdrilling";
import Fruits from "./LiftingStateUp/Fruits";
import FruitsCounter from "./LiftingStateUp/FruitsCounter";
import React from "react";
import Guest from "./LiftingStateUp/Guest";
import GuestCounter from "./LiftingStateUp/GuestCounter";
import Number from "./Number";
import User from "./User";
import Cart from "./Basket";
import Product from "./Product";




const randNum = () => Math.floor(Math.random() * 100) + 1;

export default function App() {
  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
]);

 const [guest] = React.useState([
  {id: 1, guestName: "Ozge", people: 3},
  {id: 2, guestName: "Firat", people: 1},
  {id: 3, guestName: "Ahmet", people: 6},
  {id: 4, guestName: "Mehmet", people: 5},
 ]);

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
      <section>
        <h2> Task: Working on Javascript Arrays</h2>
        <Number/>
        <User/>
        <Cart/>
        <Product/>
      </section>
      {/* State management- Lifting State Up */}
      <section>
        <h1>Where should the state go?</h1>
        <Fruits fruits={fruits}/>
        <FruitsCounter fruits={fruits}/>
      </section>
      <section>
        <Guest guest={guest}/>
        <GuestCounter guest={guest}/>
      </section>

      {/* Counter at the bottom */}
      <section>
        <Counter />
      </section>
    </div>
  );
}