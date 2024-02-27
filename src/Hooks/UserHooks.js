import React from 'react'
import { useState } from 'react';


// We're calling a function that returns our useState values
const UserHooks = () => {

    // Declaring user as a state Variable and setUser as the setter function with the initial value of Object
    const [user, setUser] = useState({});

    // returning our state variable 
    return { user, setUser }

}

export default UserHooks
