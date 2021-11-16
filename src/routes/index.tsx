import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';

const MyRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
  </Routes>
);

export default MyRoutes;
