import React, { useEffect, useState } from 'react';
import './Blog.scss';
import { useParams, Link } from 'react-router-dom';
import { bloglist } from '../../demoData';
import { NotFound } from '../../components';

const Blogs = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    let blog = bloglist.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlogs(blog);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div>
        <Link to="/">
          <span>&#8592;</span> Go Back
        </Link>
      </div>
      {blogs ? (
        <div className="app__single-blog">
          <img src={blogs.imageUrl} alt={blogs.title} />
          <p className="sub_category">
            <span className="primary_button">{blogs.category}</span>
            {blogs.subCategory.map((subcat, index) => (
              <span className="primary_button" key={index}>
                {subcat}
              </span>
            ))}
          </p>
          <h3 className="bold-text">{blogs.title}</h3>
          <p className="published">
            published At: {new Date(blogs.publishedAt).toLocaleString()} . By{' '}
            <span>{blogs.authorName}</span>
          </p>
          <p className="p-text">{blogs.description}</p>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Blogs;
