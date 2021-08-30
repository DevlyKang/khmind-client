import React from 'react';

import { UserProvider, useUserState, useUserDispatch } from '@khl/context/user-context';

function UserPages() {
  const { isLogged } = useUserState();
  const userDispatch = useUserDispatch();

  return (
    <UserProvider>
      <>
      </>
    </UserProvider>
  );
}

export default UserPages;
