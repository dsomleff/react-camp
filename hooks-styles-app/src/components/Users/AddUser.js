import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from './AddUsers.module.css';

const AddUser = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState();

  const handleNameInput = e => {
    setName(e.target.value);
  };

  const handleEmailInput = e => {
    setEmail(e.target.value);
  };

  const handleError = () => {
    setError(null);
  }

  const addUser = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || email.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: ' Please enter your values'
      });
      return;
    }

    props.onAddUser(name, email);
    setName('');
    setEmail('');
  };

  return (
    <>
      <Card className={styles.input}>
        <form onSubmit={addUser}>
          <label htmlFor="username">User Name</label>
          <input value={name} onChange={handleNameInput} />
          <label htmlFor="email">Email User</label>
          <input value={email} onChange={handleEmailInput} />
          <Button type="submit">Add</Button>
        </form>
      </Card>

      {
        error &&
        (<ErrorModal
          title={error.title}
          message={error.message}
          handleError={handleError}
        />)
      }
    </>
  )
};

export default AddUser;
