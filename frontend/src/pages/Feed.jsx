import { useContext } from 'react';
import CommentsCard from '../components/CommentsCard';
import FormCard from '../components/FormCard';
import context from '../context/context';

function Feed() {
  const { comments } = useContext(context);
  return (
    <div className="feed-container">
      <FormCard />
      <div className="comments-container">
        {comments?.map((comment) => (
          <CommentsCard key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
