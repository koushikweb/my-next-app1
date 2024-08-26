
import React from "react";
import AddUserButton from "../components/add-user-button";


type User = {
  id: number;
  name: string;
  email: string;
};

async function getUsers(): Promise<User[]> {
  // Call the external API using fetch
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  // Handle errors if the API call fails
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  // Convert the response to JSON
  return res.json();
}

export default async function UserList () {
  const users = await getUsers();
  return (
    <div>
    <h1>Users List</h1>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
    <AddUserButton />
  </div>
       )
}
 