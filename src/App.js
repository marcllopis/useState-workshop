import React, { useState } from 'react';
import Header from './components/Header';
import Counter from './components/Counter'
import './App.css';


// useState
// click events
// conditional rendering ? : &&


// function App() {

//   const [name, setName] = useState('Marc')

//   const changeName = () => setName('Luke')

//   return (
//     <div>
//       <Header title='Cool title prop' />
//       <h3>This is in App.js</h3>
//       <h4>The name in my state is: {name}</h4>
//       <button onClick={changeName}>Change name</button>
//     </div>
//   );
// }



function App() {

  let [counter, setCounter] = useState(0)
  let [name] = useState('Marc')
  let [showPets, setPets] = useState(false)
  let [section, setSection] = useState('home')

  // const increase = () => setCounter(counter + 1)
  const decrease = () => {
    if (counter === 0) {
      setCounter(0)
    } else {
      setCounter(counter - 1)
    }
  }

  const togglePets = () => setPets(!showPets)

  const changeSections = () => {
    // do smth to change sections
  }



  return (
    <div>
      {
        section === 'home' &&
        <div>
          <h1>HOME</h1>
          <h1>Wild counter</h1>
          <Header title={name} />
          <button>Counter section</button>
          <button>Pets section</button>
        </div>
      }
      {
        section === 'counter' &&
        <div>
          <h1>Counter</h1>
          <Counter valueOfCounter={counter} />
          <button onClick={() => setCounter(counter + 1)}>+</button>
          <button onClick={decrease}>-</button>
          <br />
          <button>Home section</button>
          <button>Pets section</button>
        </div>
      }
      {
        section === 'pets' &&
        <div>
          <h1>Pets</h1>
          {
            showPets
              ?
              <div>
                <h3>My dog is named Luke</h3>
                <button onClick={togglePets}>Talk about your cat</button>
              </div>
              :
              <div>
                <h3>I don't have cats</h3>
                <button onClick={togglePets}>Talk about your dog</button>
              </div>
          }
          <button>Home section</button>
          <button>Counter section</button>
        </div>
      }
    </div>
  );
}



export default App;
