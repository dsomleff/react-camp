import React from 'react';
import FormInput from '../../components/form-input/FormInput';
import './styles/sign-in.scss';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: ''});
  }

  handleChange = event => {
    const {value, name} = event.target;

    this.setState({ [name]: value,  })

  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have account</h2>
        <span>Sign in with your password</span>

        <form onSubmit="handleSubmit">
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default SignIn;
