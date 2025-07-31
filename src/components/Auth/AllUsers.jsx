import { Outlet } from "react-router";
// import link to be able to link to another location
import { Link } from "react-router-dom";
// import useEffect and useState
// useEffect allows fetching data, setting up timers and listnening to events, allows access to the outside world
// useState let's you create state variables, allows React to remember data changes
import { useEffect, useState } from "react";


function AllUsers() {
    // create users variable TODO: create the loading variable
    const [users, setUsers] = useState([]);
    // create a variable that will store the endpoint url
    const API_URL = 'https://jsonplaceholder.typicode.com/users';
    
    // local array to fetch from
    const usernames = [
        {id:1, name: "John Henry"},
        {id:2, name: "Johhny Cage"},
        {id:3, name: "John Candy"},
    ];

    // fetch the json data for users using useEffect
    useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // TODO: if statement for loading can go here



    return(
        <div className="main-section">
            <h2>All users names are here</h2>
            {/* create a UL with template literal to display the data, iterate over the array using map method */}
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <span className="user-style">{user.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
  }
  
  export default AllUsers;