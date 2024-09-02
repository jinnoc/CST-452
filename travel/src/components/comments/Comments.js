import React, { useState, useEffect } from 'react';
import './Comments.css';

const Comments = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch existing comments from localStorage
    const storedComments = JSON.parse(localStorage.getItem(`comments-${blogId}`)) || [];
    setComments(storedComments);
  }, [blogId]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const updatedComments = [...comments, { text: newComment, date: new Date().toLocaleString() }];
      setComments(updatedComments);
      setNewComment('');
      localStorage.setItem(`comments-${blogId}`, JSON.stringify(updatedComments));
    }
  };

  return (
    <div className='comments-section'>
      <h2>Comments</h2>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder='Write a comment...'
          required
        />
        <button type='submit'>Submit</button>
      </form>
      <div className='comments-list'>
        {comments.map((comment, index) => (
          <div key={index} className='comment'>
            <p>{comment.text}</p>
            <small>{comment.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
