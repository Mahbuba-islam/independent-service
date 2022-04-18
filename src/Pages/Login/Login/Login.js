import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
 
  

const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth)

const resetPassword = async () =>{
  const email = emailRef.current.value;
  await sendPasswordResetEmail(email);
  alert('Sent email');
}

    const [
        signInWithEmailAndPassword,
        user,
        
       
    ] = useSignInWithEmailAndPassword(auth);

  
    const navigate = useNavigate('')
 
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
 
    const emailRef = useRef('');
  const passwordRef = useRef('');

  if(user){
      navigate(from, { replace: true });
  }
    
  const handleSubmit = event =>{
   event.preventDefault();
   const email = emailRef.current.value;
   const password = passwordRef.current.value;
   signInWithEmailAndPassword(email,password)
      
   }

 const navigateRegister = () =>{
     navigate('/register')
 }
   return (
        <div>
            <h2 className='text-center text-primary mt-5 fw-500'>Please Login</h2>
  <Form onSubmit={handleSubmit} className='container w-50 mx-auto mt-4'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <p>new to here? <span onClick={navigateRegister} className='text-primary'>please register first</span></p>
  
  <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <SocialLogin></SocialLogin>
</Form>

        </div>
    );
};

export default Login;