import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
import Cookies from 'universal-cookie';


function Login() {
  const [isVisible, setVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  
  
  const toggle = () => {
    setVisible(!isVisible);
  };

  const showToastError = (message) => {
    toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get(`http://localhost:8000/api/login/?username=${username}&password=${password}`)
    .then(response => {
      console.log(response.data)
      if (response.data.Message === "Login Failed"){
        console.log(response.data.Message)
        showToastError(response.data.Message)
      } else {
        const cookies = new Cookies();
        cookies.set('username', response.data.username, { path: '/' });
        cookies.set('password', response.data.password, { path: '/' });
        navigate(`/users/${response.data.uid}`)
      }
    })
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase decoration-wavy">
          Log In
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label htmlFor="username" className="block text-sm font-semibold text-gray-800">
              Username
            </label>
            <input type="text" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange={e => setUsername(e.target.value)}/>
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input type={!isVisible ? "password" : "text"} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange={e => setPassword(e.target.value)}/>
            <span className="icon" onClick={toggle}>
              {isVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>
          <div className="mt-6">
            <button onClick={handleSubmit} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Login
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
