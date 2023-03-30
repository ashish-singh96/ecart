import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import { Route } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const[user,setUser]=useState('');
  useEffect(() => {
    setUser(localStorage.getItem('userName')?localStorage.getItem('userName'):'');
  },[]);

  return (
    <>
    {user ? <Navbar name={user} setUser={setUser}/>:<></>}
      <Switch>
        <Route exact path={'/'}>
          {user?<Home/>:<Login setUser={setUser}/>}
        </Route>
        <Route path={'/login'}>
           <Login setUser={setUser}/>
        </Route>
        <Route path={'/signup'}>
          <SignUp />
        </Route>
        <Route path={'/contact'}>
         {user ?<Contact/>:<Login setUser={setUser}/>}
        </Route>

        <Route path={'/about'}>
        {user ?<About/>:<Login setUser={setUser}/>}
        </Route>

      </Switch>
    </>
  );
}

export default App;
