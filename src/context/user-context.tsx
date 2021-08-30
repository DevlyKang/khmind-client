import { createContext, useContext, useReducer, ReactNode } from 'react';

type Action = { type: '' };
type State = { isLogged: boolean };
type Dispatch = (action: Action) => void;
type Props = { children: ReactNode };

const UserStateContext = createContext<State | undefined>(undefined);
const UserDispatchContext = createContext<Dispatch | undefined>(undefined);

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

  return (
    <UserStateContext.Provider value={ state }>
      <UserDispatchContext.Provider value={ dispatch }>
        { children }
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  const context = useContext(UserStateContext);

  if (context === undefined) {
    throw new Error('');
  }

  return context;
}

function useUserDispatch() {
  const context = useContext(UserDispatchContext);

  if (context === undefined) {
    throw new Error('');
  }

  return context;
}

export { UserProvider, useUserState, useUserDispatch };
