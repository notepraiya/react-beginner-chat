import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router basename="https://notepraiya.github.io/react-beginner-chat" >
      <Header user={{ displayName: "Tester1", photoURL: "https://avatars.dicebear.com/api/gridy/Tester1.svg" }} />
      <div className="app_body">
        <Sidebar />

        <Switch>
          <Route path="/room/:roomId">
            <h1>Chat roomId</h1>
          </Route>
          <Route path="/">
            <h1>Welcome</h1>
          </Route>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
