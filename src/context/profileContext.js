import React, { useState } from 'react';

export const ProfileContext = React.createContext({
  userId: null,
  firstName: '',
  lastName: '',
  email: '',
  links: [],
  setFirstName: (firstName) => {},
  setLastName: (lastName) => {},
  setEmail: (email) => {},
  setLinks: (links) => {},
  setUserId: (userId) => {}
});

const ProfileContextProvider = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState(null);
  const [links, setLinks] = useState({});

  return (
    <ProfileContext.Provider
      value={{
        firstName,
        lastName,
        email,
        links,
        userId,
        setLinks,
        setFirstName,
        setEmail,
        setLastName,
        setUserId
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
