import './App.css';
import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import { useState } from 'react';
import { useStateValue } from './StateProvider';

function App() {
  //const [user, setUser] = useState('');
  //const [state, dispatch] = useStateValue();
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <BrowserRouter basename="/react-beginner-chat" >
        <Header  />
        <div className="app_body">
          <Sidebar />
  
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>Welcome</h1>
            </Route>
          </Switch>
        </div>
        </BrowserRouter>
      )}

    </div>
  );
}

export default App;
