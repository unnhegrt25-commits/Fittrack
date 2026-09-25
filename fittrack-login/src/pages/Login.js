import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

const [message, setMessage] = React.useState('');

const onSubmit = async (data) => {
    try {
      const response = await fetch('https://fittrack-kntp.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
       setMessage('✅ Welcome back, ' + result.name + '! Redirecting...');
setTimeout(() => {
  window.location.href = 'https://fittrack-homepage.onrender.com/';
}, 1500);
      } else {
        setMessage('❌ ' + result.error);
      }
    } catch (err) {
      setMessage('❌ Could not reach server. Is it running?');
    }
};
  return (
    <div className="login-box">
      <h1>FitTrack Login</h1>
      {message && <p className={message.startsWith('✅') ? 'success' : 'error'}>{message}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>

        <label>Email</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <p className="error">Email is required</p>}

        <label>Password</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <p className="error">Password is required</p>}

        <button type="submit">Login</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}