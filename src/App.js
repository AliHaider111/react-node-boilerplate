import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/static/layout/Layout';
import AppLayout from './components/app/layout/AppLayout';
import ProtectedRoute from './components/app/pages/protected/protectedRoute';
import TopBarProgress from 'react-topbar-progress-indicator';
import Login from './components/static/models/Login';
const Header = lazy(() => import('./components/static/layout/Header'));



function App() {
  return (
    <React.Suspense fallback={<TopBarProgress />}>
      <Routes>
        {/* Guest routes here */}
        <Route path='/' element={<Layout />} />
        <Route index element={<Header />} />

        {/* Protected routes here */}
        <Route path="/" element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
        <Route index element={<Header />} />
        <Route path='/login' element={<Login />} />
        {/* Add your protected routes here <Route path="example" element={<Component />} /> */}
</Route>
      </Routes>

    </React.Suspense>
  );
}

export default App;
