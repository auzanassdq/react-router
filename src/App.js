import {Switch, Route, Link, useParams, useHistory} from 'react-router-dom'

import Digimon from "./Digimon"
import LifeCycle from "./LifeCycle"


import './App.css';

function App() {
  return (
    <div>
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/digimon">Digimon</Link></li>
        <li><Link to="/lifecycle">Life Cycle</Link></li>
      </ul>

      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/user/:name">
          <User/>
        </Route>
        <Route path="/digimon">
          <Digimon/>
        </Route>
        <Route path="/lifecycle">
          <LifeCycle/>
        </Route>
      </Switch>
    </div>
  );
}

function Home () {
  return <h1>Home</h1>
}

function About () {
  let history = useHistory()
  console.log(history)

  const goHome = () => {
    history.push("/")
  }

  return (
    <div>
      <h1>About</h1>
      <button onClick={goHome}>Go Home</button>
    </div>
  )
}

function User () {
  let {name} = useParams()

  return <h1>User {name}</h1>
}

export default App;
