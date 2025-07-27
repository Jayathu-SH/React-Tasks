import React from 'react';
import Counter from './counter-app/Counter';
import NameForm from './counter-app/NameForm';
import ToggleText from './counter-app/ToggleText';
import WelcomeMessage from './counter-app/WelcomeMessage';
import FruitList from './counter-app/FruitList';
import Greeting from './counter-app/Greeting';

function App() {
  return (
    <div className="App">
      
      {/* <Counter /> */}
      {/* <NameForm/> */}
      {/* <ToggleText/> */}
      {/* <WelcomeMessage/> */}
      {/* <FruitList/> */}
      <Greeting name="Jayathu"/>
    </div>
  );
}

export default App;
