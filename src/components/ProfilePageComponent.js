import React from 'react'
import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ProfilePageComponent = () => {

const naviagte = useNavigate();
const handlePageChange = () => {
    naviagte('/');
}

  return (
    <div>
      <h1>This is the Profile Page</h1>
      <Button variant="success" onClick={handlePageChange}>Go Back to Homepage</Button>{' '}
    </div>
  )
}

export default ProfilePageComponent
