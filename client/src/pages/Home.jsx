import React from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';

const Home = ({ parentCallback }) => {
    const cookies = new Cookies();
    const navigate = useNavigate(); 

    const handleStart = () => {
        var now = new Date().getTime();
        if (cookies.get('count_down_time') === undefined) {
            cookies.set('count_down_time', now + 60*60*1000, { path: '/' });
            parentCallback(now + 60*60*1000)
        }
        navigate('/login');
    }

    return (
        <div className="mb-4 relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className='m-4 w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl'>
            <h1 className='m-4 text-2xl'>Rules for Grand Finale</h1>
            <p className='m-4'>
            Total 7 users 2 super users and 5 normal users.<br/>
            you are one of the 5 normal users.<br/>
            <br/>
            Username: attacking_user<br/>
            Password: attacking_password<br/>
            <br/>
            Your goal is to get unauthorized access to other users data.<br/>
            <br/>
            Tasks:<br/>
            Task 1: Get sensetive data of user with user id: 556533124<br/>
            Task 2: Get password of the user with user id: 556533124<br/>
            Task 3: Get access to any users profile except the above user<br/>
            Task 4: Get Access to a user with super user privilages<br/>
            Task 5: Get Access to the 2nd super user profile<br/>
            <br/>
            Bonus Task: Reset the countdown clock on the website (this task is just for points, you dont get any extra time)<br/>
            <br/>
            To complete these tasks you need to know about 3 things:<br/>
            1. URL Manipulation<br/>
            2. SQL Injection<br/>
            3. Checking Website Cookies for valuable information<br/>
            <br/>
            You are free to use the Internet to solve these tasks<br/>
            You have 1 hour<br/>
            Best of luck<br/>
            </p>
            <button onClick={handleStart} className="mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Start</button>
            </div>
        </div>
    )
}

export default Home
