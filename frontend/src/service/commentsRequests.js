import { api } from './loginRequests';

export const getAllComments = async () => {
  const allComments = await api.get('/comments');
  return allComments;
};

export const postComment = async (content, userId) => {
  const insertedComment = await api.post('/comments', { content, userId });
  return insertedComment;
};

export const deleteCommentById = async (id) => {
  await api.delete(`/comments/${id}`);
};


export const updateCommentById = async (id, content) => {
  await api.put(`/comments/${id}`, { content });
};
