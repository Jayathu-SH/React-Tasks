import React from 'react';
import Counter from './counter-app/Counter';
import NameForm from './counter-app/NameForm';
import ToggleText from './counter-app/ToggleText';
import WelcomeMessage from './counter-app/WelcomeMessage';
import FruitList from './counter-app/FruitList';
import Greeting from './counter-app/Greeting';
import UserList from './counter-app/UserList';

function App() {
  return (
    <div className="App">
      
      {/* <Counter /> */}
      {/* <NameForm/> */}
      {/* <ToggleText/> */}
      {/* <WelcomeMessage isLoggedIn={true}/> */}
      {/* <FruitList/> */}
      {/* <Greeting name="Jayathu"/> */}
      <UserList/>
    </div>
  );
}

export default App;
