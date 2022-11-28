import { useEffect, useState } from 'react';
import useGenericState from '../hooks/useGenericState';
import { getAllComments } from '../services/commentsRequests';
import Context from './context';

function ContextProvider({ children }) {
  const INITIAL_STATE = {
    comment: '',
    loginEmail: '',
    loginPassword: '',
    signUpName: '',
  };

  const [comments, setComments] = useState([]);

  // when posting a new comment, the useEffect will make another fetch, for getting this new comment
  const [hasNewComment, setHasNewComments] = useState(1);

  // login and signUp function
  const [userDoesNotExist, setUserDoesNotExist] = useState(false);
  const [doesUserExist, setDoesUserExist] = useState(false);

  // login function
  const [wrongPassword, setWrongPassword] = useState(false);

  // all pages that needs a loading can use it
  const [loading, setLoading] = useState(false);

  const [genericState, setGenericState] = useGenericState(INITIAL_STATE);

  const [username, setUsername] = useState('');

  const [willEdit, setWillEdit] = useState(false);

  const [commentId, setCommentId] = useState(0);

  useEffect(() => {
    const getComments = async () => {
      const { data } = await getAllComments();

      // .reverse for the newest comments be at the page top
      setComments(data.reverse());
    };
    getComments();
  }, [hasNewComment]);

  const allValues = {
    genericState,
    setGenericState,
    comments,
    setHasNewComments,
    userDoesNotExist,
    setUserDoesNotExist,
    doesUserExist,
    setDoesUserExist,
    wrongPassword,
    setWrongPassword,
    loading,
    setLoading,
    setUsername,
    username,
    willEdit,
    setWillEdit,
    setCommentId,
    commentId,
  };

  return <Context.Provider value={allValues}>{children}</Context.Provider>;
}

export default ContextProvider;
