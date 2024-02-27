import React, { useContext, useEffect } from 'react'
import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import UserContext from '../Context/UserContext';

const ProfilePageComponent = () => {

const naviagte = useNavigate();
const handlePageChange = () => {
    naviagte('/');
}

let data = useContext(UserContext);

  return (
    <div>
      <h1>This is the Profile Page</h1>
      <Button variant="success" onClick={handlePageChange}>Go Back to Homepage</Button>{' '}
      <h2>{data.user.name.title} {data.user.name.first} {data.user.name.last}</h2>
    </div>
  )
}

export default ProfilePageComponent
