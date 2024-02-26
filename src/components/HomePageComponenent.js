// rafce react arrow function component export
import React, { useEffect, useState } from 'react';
import  Button  from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../Services/DataServices.js';

const HomePageComponenent = () => {

const [userInfo, setUserInfo] = useState({}); //userInfo is state Variable set to an empty object
const [newPerson, setNewPerson] = useState(true); //newPerson is a state variable set to a boolean value

const naviagte = useNavigate();  // Reacts-router-dom method for changing URL Locations 

const handlePageChange = () => {
    naviagte('/profile');
}

// Everytime the component is re-rendered or a state is changed the useEffect hook fires.
useEffect(() => {
    const getData = async () => {
        const fetchedData = await getUserData();
        console.log(fetchedData);
        setUserInfo(fetchedData);
    }

    getData();

},[newPerson]); // Dependancy Array, determinds when the useEffect fires

const handleNewPerson = () => {
    setNewPerson(!newPerson);
}

  return (
    <div>
         <h1>Hello this is our Home Page</h1>
         {/* If the left side expression is truthy then the right side is returned */}
         <h2>{userInfo.name && userInfo.name.title} {userInfo.name && userInfo.name.first} {userInfo.name && userInfo.name.last} </h2>
         <Button variant="secondary" onClick={handlePageChange} >Change to Profile Page</Button>{' '}
         <Button variant="warning" onClick={handleNewPerson} >Change to New Person</Button>{' '}
    </div>
  )
}

export default HomePageComponenent
