import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {
//   Error,
//   Landing,
//   Register,
//   ProtectedRoute
// } from "./pages"
import Error from './pages/Error';
import Landing from './pages/Landing';
import Register from './pages/Register';
import ProtectedRoute from './pages/ProtectedRoute';
// import { AddTransaction, AllTransactions, Profile, SharedLayout } from './pages/dashboard';
import AddTransaction from './pages/dashboard/AddTransaction';
import AllTransactions from './pages/dashboard/AllTransactions';
import Profile from './pages/dashboard/Profile';
import SharedLayout from './pages/dashboard/SharedLayout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>}>
          <Route index element={<AllTransactions />} />
          <Route path='add-transaction' element={<AddTransaction />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='landing' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  )
}

export default App
