import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { createUser } = UserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/account');
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2x1 font-bold py-2'>
          Sign up to your free account
        </h1>

        {error && <p className='text-red-500'>{error}</p>}

        <p className='py-2'>
          Already have an account? <Link to='/' className='underline'>Sign in</Link>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>E-mail address</label>
          <input onChange={(e) => setEmail(e.target.value)} type='email' className='border p-3' />
        </div>

        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type='password' className='border p-3' />
        </div>

        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;