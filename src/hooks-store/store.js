import { useEffect, useState } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifiers, payload) => {
    const newState = actions[actionIdentifiers](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) { 
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((listener) => listener !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};

export default useStore;
