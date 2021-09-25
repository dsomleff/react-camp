import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from './AddUsers.module.css';

const AddUser = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameInput = e => {
    setName(e.target.value);
  };

  const handleEmailInput = e => {
    setEmail(e.target.value);
  };

  const addUser = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || email.trim().length === 0) {
      return;
    }

    props.onAddUser(name, email);
    setName('');
    setEmail('');
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUser}>
        <label htmlFor="username">User Name</label>
        <input value={name} onChange={handleNameInput} />
        <label htmlFor="email">Email User</label>
        <input value={email} onChange={handleEmailInput} />
        <Button type="submit">Add</Button>
      </form>
    </Card>
  )
};

export default AddUser;
