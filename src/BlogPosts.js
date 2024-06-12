// BlogPosts.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Data fetching failed');
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => {
        setError(error.message);
        console.error('Error fetching data:', error.message);
        navigate('/error');
      });
  }, [navigate]);

  return (
    <div>
      <h1>Posts</h1>
      {error ? null : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default BlogPosts;