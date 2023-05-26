import { createContext } from 'react';

const ApiContext = createContext({
  response: null,
  error: null,
  setResponse: () => {},
  setError: () => {},
});

export default ApiContext;
