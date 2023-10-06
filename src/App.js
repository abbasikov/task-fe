import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AddLinks from './pages/AddLinks';
import ViewProfile from './pages/ViewProfile';
import EditProfile from './pages/EditProfile';
import React from 'react';
import AppLayout from './components/AppLayout';
import ProfileContextProvider from './context/profileContext';

function App() {
  return (
    <ProfileContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dabot/*" element={<AppLayout />}>
            <Route path="add-links" element={<AddLinks />} />
            <Route path="view-profile" element={<ViewProfile />} />
            <Route path="edit-profile" element={<EditProfile />} />
          </Route>
          <Route
            path="/"
            element={<Navigate to="/dabot/view-profile" replace={true} />}
          />
        </Routes>
      </BrowserRouter>
    </ProfileContextProvider>
  );
}

export default App;
