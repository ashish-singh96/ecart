import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import { Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>
        <Route path={'/login'}>
          <Login />
        </Route>
        <Route path={'/signup'}>
          <SignUp />
        </Route>
        <Route path={'/contact'}>
          <Contact />
        </Route>

        <Route path={'about'}>
          <About />
        </Route>

      </Switch>
    </>
  );
}

export default App;
