import { Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Account from './components/Account';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <h1 className="text-center text-3x1 font-bold">
        App
      </h1>
      <Routes>
        <Route exact path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/account' element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
