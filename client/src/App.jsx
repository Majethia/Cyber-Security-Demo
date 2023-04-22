import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Users from './pages/Users';
import Login from './pages/Login';
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

function App() {
  const cookies = new Cookies();

  const [countDownDate, setCountDownDate] = useState(cookies.get('count_down_time'))
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  // const [timeUp, setTimeUp] = useState(false)

  const callback = (value) => {
    setCountDownDate(value)
  }

  useEffect(() => {
    const interval = setInterval(() => {

      var now = new Date().getTime();
      if (countDownDate !== undefined){
        var distance = countDownDate - now;
        
        if (distance < 0) {
          // setTimeUp(true)
          cookies.remove('count_down_time')
          setHours(0)
          setMinutes(0)
          setSeconds(0)
        } else{
          setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
          setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
          setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);

  return (
    <>
    <p className='z-20 fixed m-4 text-6xl'>{hours}:{minutes}:{seconds}</p>
    <Routes>
      <Route path= '/' element={<Home parentCallback={callback}/>}/>
      <Route path= '/login' element={<Login />}/>
      <Route path= '/users/:id' element={<Users />}/>
    </Routes>
    </>
    );
  }

export default App;
