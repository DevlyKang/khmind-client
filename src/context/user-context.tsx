import { createContext, useContext, useReducer, ReactNode } from 'react';

type Action = { type: '' };
type State = { isLogged: boolean };
type Dispatch = (action: Action) => void;
type Props = { children: ReactNode };

const UserContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

function reducer(state: State, action: Action) {
  switch (action.type) {
    case '':
      return { isLogged: true };

    default:
      throw new Error('');
  }
}

function UserProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, { isLogged: false });

  /** TODO memoize 필수 */
  const value = { state, dispatch };

  return (
    <UserContext.Provider value={ value }>
      { children }
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('');
  }

  return context;
}

export { UserProvider, useUser };
