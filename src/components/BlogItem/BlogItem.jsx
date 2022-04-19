import React from 'react';
import './BlogItem.scss';
import { Link } from 'react-router-dom';

const BlogItem = ({
  blog: {
    id,
    title,
    description,
    category,
    imageUrl,
    publishedAt,
    authorName,
    authorImg,
  },
}) => {
  return (
    <div className="app__blogitem">
      <Link to={`/blogs/${id}`}>
        <img src={imageUrl} alt={title} />
      </Link>
      <span>{category}</span>
      <Link to={`/blogs/${id}`}>
        <h3 className="bold-text">{`${
          title.length > 50 ? title.slice(0, 50) + ' ....' : title
        }`}</h3>
      </Link>
      <p className="p-text">
        {`${
          description.length > 180
            ? description.slice(0, 180) + ' .... '
            : description
        }`}
        {description.length > 180 ? (
          <Link to={`/blogs/${id}`}>Read more</Link>
        ) : (
          ''
        )}
      </p>
      <div className="app__blogitem-author">
        <img src={authorImg} alt={authorName} />
        <div>
          <h6 className="bold-text">{authorName}</h6>
          <p>By {new Date(publishedAt).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
