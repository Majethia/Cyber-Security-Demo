import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserDets from './UserDets' 

const Users = () => {
    const { id } = useParams();

    const [userDetails, setUserDetails] = useState('')

    const fetchuserdetails = () => {
        return axios.get(`http://localhost:8000/api/get_data/?uid=${id}`)
        .then(res => res.data)
    }

    useEffect(() => {
        let mounted = true;
        fetchuserdetails()
          .then(data => {
            if(mounted) {
              setUserDetails(data)
            }
          })
        return () => mounted = false;
      }, [])

    return (
        <div>
            {userDetails === '' ?  <p>Loading</p>:<UserDets details={userDetails}/>}
        </div>
  )
}

export default Users;
