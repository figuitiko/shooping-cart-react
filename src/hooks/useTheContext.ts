import { StateContext } from './../Context/context';

import {useContext} from 'react'

const useTheContext = () => {
  const context = useContext(StateContext);
  if(!context) throw new Error('useTheContext must be used within a provider');
  return context;
}

export default useTheContext