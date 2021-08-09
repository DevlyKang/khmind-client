import { createContext, useContext, useReducer, ReactNode } from 'react';

type Action = { type: '' };
type State = { count: number };
type Dispatch = (action: Action) => void;
type Props = { children: ReactNode };

const HomeContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

function reducer(state: State, action: Action) {
  switch (action.type) {
    case '':
      return { count: state.count + 1 };

    default:
      throw new Error('');
  }
}

function HomeProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  /** TODO memoize 필수 */
  const value = { state, dispatch };

  return (
    <HomeContext.Provider value={ value }>
      { children }
    </HomeContext.Provider>
  );
}

function useHome() {
  const context = useContext(HomeContext);

  if (context === undefined) {
    throw new Error('');
  }

  return context;
}

export { HomeProvider, useHome };
