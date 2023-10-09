import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import AddLinks from './pages/AddLinks';
import ViewProfile from './pages/ViewProfile';
import EditProfile from './pages/EditProfile';
import AppLayout from './components/AppLayout';
import ProfileContextProvider from './context/profileContext';
import SharedProfile from './pages/SharedProfile';

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
          <Route path="/shared-profile/:token" element={<SharedProfile />} />
          <Route path="/page-not-found" element={<div> Page Not Found </div>} />
          <Route
            path="/"
            element={<Navigate to="/dabot/view-profile" replace={true} />}
          />
          <Route
            path="*"
            element={<Navigate to="/page-not-found" replace={true} />}
          />
        </Routes>
      </BrowserRouter>
    </ProfileContextProvider>
  );
}

export default App;
