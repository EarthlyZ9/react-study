import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import React, { useState } from "react";

const DUMMY_USER = [];

const App = () => {
    const [usersArray, setUsersArray] = useState(DUMMY_USER);
    const addUserHandler = (username, age) => {
        setUsersArray(prevState => {
            return [...prevState, { name: username, age, id: Math.random().toString() }];
        });
    };
    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={usersArray} />
        </div>
    );
};

export default App;
