import React, { Suspense } from 'react';
import Loading from './loading';

// Simulate a component that fetches data
async function UsersList() {
  // Simulate a delay for demonstration purposes
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <ul>
      {users.map((user: { id: number; name: string; email: string }) => (
        <li key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
}

export default function UserSuspense() {
  return (
    <div>
      <h1>Users List</h1>
      {/* Wrap the component in Suspense and use the loading component */}
      <Suspense fallback={<Loading />}>
        <UsersList />
      </Suspense>
    </div>
  );
}