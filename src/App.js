import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header user={{ displayName: "Tester1", photoURL: "" }} />
      <div className="app_body">
        <Sidebar />
        <h2>Chat screen</h2>
      </div>

    </div>
  );
}

export default App;
