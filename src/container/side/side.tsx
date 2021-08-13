import React from 'react';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

type State = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const useStore = create<State>((set, get) => ({
  count: 1,
  increment: () => set(({ count }) => ({ count: count + 1 })),
  decrement: () => set(({ count }) => ({ count: count - 1 })),
}));

function SideContainer() {
  const { count, increment, decrement } = useStore(state => state);

  return (
    <aside>
      { count }
      <button onClick={ increment }>+</button>
      <button onClick={ decrement }>-</button>
    </aside>
  );
}

export default SideContainer;
