import { useEffect, useState } from 'react';
import useGenericState from '../hooks/useGenericState';
import Context from './context';

function ContextProvider({ children }) {
  const INITIAL_STATE = {
    nameInput: '',
    commentInput: '',
  }

  const [ comments, setComments ] = useState([]);
  const [ hasNewComment, setHasNewComments ] = useState(1);
  // const [ willEdit, setWillEdit ] = useState(false);

  const [ genericState, setGenericState ] = useGenericState(INITIAL_STATE);

  const allValues = {
    genericState,
    setGenericState,
    comments,
    setHasNewComments,
    // willEdit,
    // setWillEdit,
    // userId,
    // setUserId
  };

  return (
    <Context.Provider value={allValues}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider;