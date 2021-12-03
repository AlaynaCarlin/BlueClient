import logo from './logo.svg';
import './App.css';
import LogIn from './Components/login';
import SignUp from './Components/signup';
import LogFood from './Components/logs/CreateLog';

function App() {
  return (
    <div className="App">
      <SignUp />
     <LogIn />
     <LogFood />
    </div>
  );
}

export default App;
