import './App.css';
import axios from "axios";
import User from './components/User.js';
import Followers from './components/Followers.js';

function App() {
  return (
    <div className="App">
      <h1>Github User Card</h1>
      <User />
      <Followers />
    </div>
  );
}

export default App;
