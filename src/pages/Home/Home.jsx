import React, { useState } from 'react';
import { Bloglist, SearchBar } from '../../components';
import { bloglist } from '../../demoData';

const Home = () => {
  const [blogs, setBlogs] = useState(bloglist);
  const [searchKey, setSearchKey] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();
    handleSearchResults();
  };
  //search for blogs by category
  const handleSearchResults = (e) => {
    const allBlogs = bloglist;
    const filterBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filterBlogs);
  };
  const clearSearch = () => {
    setBlogs(bloglist);
    setSearchKey('');
  };
  return (
    <>
      <h1 className="head-text">
        All <span> New </span>Blogs
      </h1>
      <p className="p-text" style={{ textAlign: 'center' }}>
        awesome place to make onself <br />
        productive and entertained through daily updates
      </p>
      <SearchBar
        value={searchKey}
        formSubmit={formSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
        clearSearch={clearSearch}
      />
      <Bloglist blogs={blogs} />
    </>
  );
};

export default Home;
