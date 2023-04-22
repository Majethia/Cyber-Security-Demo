import React from 'react'

const UserDets = ({details}) => {
  console.log(details)
  return (
    <div className="mb-4 justify-center items-center text-center">
      <br />
      <div className="mb-4 flex justify-center items-center">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
          <img className="mx-auto w-80 h-80" src={`http://localhost:8000/media/images/${details.Data.uid}.jpeg`} alt="avatar"/>
          <p className="text-muted m-2">User Id (uid): {details.Data.uid}</p>
          <p className="text-muted m-2">username: {details.Data.username}</p>
          <p className="text-muted m-2">is_superuser: {details.Data.is_superuser}</p>
          <p className="text-muted m-2">account_no: {details.Data.account_no}</p>
          <p className="text-muted m-2">sensetive_data: {details.Data.sensetive_data}</p>
        </div>
      </div>
    </div>
  )
}

export default UserDets
