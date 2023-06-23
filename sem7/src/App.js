import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(response => response.json())
      .then(data => setUsers(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>users list</h1>
      <table>
        <thead>
          <tr>
            <th>nro</th>
            <th>photo</th>
            <th>full name</th>
            <th>email</th>
            <th>gender</th>
            <th>phone</th>
            <th>country</th>
            <th>city</th>
            <th>street</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img src={user.picture.thumbnail} alt="User" />
              </td>
              <td>
                {user.name.first} {user.name.last}
              </td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.cell}</td>
              <td>{user.location.country}</td>
              <td>{user.location.city}</td>
              <td>
                {user.location.street.name} {user.location.street.number}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;