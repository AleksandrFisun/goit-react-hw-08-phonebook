import { useState } from 'react';
import { Form, NavigateLink, Button } from './SignInForm.style';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import SignInInput from '../SignInInput/SignInInput';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmitFormSignIn = e => {
    e.preventDefault();
    dispatch(authOperations.userLogin({ email, password }));
    setEmail('');
    setPassword('');
  };

  const changeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
    }
  };
  return (
    <>
      <h2>Sign In</h2>
      <Form onSubmit={onSubmitFormSignIn}>
        <div>
          <SignInInput
            onChange={changeInput}
            email={email}
            password={password}
          />
        </div>
        <Button type="submit">Sign In</Button>
      </Form>
      <div>
        <span>New to Air Contact? Go to </span>
        <NavigateLink to="/registration">Registration</NavigateLink>
      </div>
    </>
  );
};
export default SignInForm;
