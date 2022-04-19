import React from 'react';
import { Bloglist, SearchBar } from '../../components';
import { bloglist } from '../../demoData';

const Home = () => {
  return (
    <>
      <h1 className="head-text">
        All <span> New </span>Blogs
      </h1>
      <p className="p-text" style={{ textAlign: 'center' }}>
        awesome place to make onself <br />
        productive and entertained through daily updates
      </p>
      <SearchBar />
      <Bloglist blogs={bloglist} />
    </>
  );
};

export default Home;
