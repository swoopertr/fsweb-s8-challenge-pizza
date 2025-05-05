import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import './Success/index.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home';
import Order from './Order/index.jsx';
import Success from './Success/index.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
    </>
  )
}

export default App