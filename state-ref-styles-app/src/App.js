import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import './App.css';

function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUser = (userName, userEmail) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        {
          name: userName,
          email: userEmail,
          id: Math.random().toString()
        }
      ];
    });
  };

  return (
    <div className="App">
      <h1>Join Us</h1>
      <AddUser onAddUser={onAddUser} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
