import React from 'react';
import BlogItem from '../BlogItem/BlogItem';
import './Bloglist.scss';

const Blogs = ({ blogs }) => {
  return (
    <div className="app__blogs">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default Blogs;
