import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const { user, logout } = UserAuth();
  let navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2x1 font-bold py-4'>Account</h1>
      <p>User e-mail: {user && user.email}</p>

      <button onClick={handleLogout} className='border px-6 py-2 my-4'>Logout</button>
    </div>
  );
};

export default Account;