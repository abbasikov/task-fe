import React, { useState } from 'react';

export const ProfileContext = React.createContext({
  firstName: '',
  lastName: '',
  email: '',
  links: [],
  setFirstName: (firstName) => {},
  setLastName: (lastName) => {},
  setEmail: (email) => {},
  setLinks: (links) => {}
});

const ProfileContextProvider = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [links, setLinks] = useState([]);

  return (
    <ProfileContext.Provider
      value={{
        firstName,
        lastName,
        email,
        links,
        setLinks,
        setFirstName,
        setEmail,
        setLastName
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
