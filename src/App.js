import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import AllDepartments from './components/AllDepartments';

function App() {
  const name = 'Santa Claus';

  function sayHello(name){
    if(name){
      return <h1>{name} says ho ho ho !</h1>
    }
    else{
      return <h1>Intruder!!</h1>
    }
  }

  return (
    <div className="App">
      <Welcome name="Santa" />
      <AllDepartments/>
    </div>
  );
}

export default App;
