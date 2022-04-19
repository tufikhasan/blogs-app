import React from 'react';
import { Bloglist, SearchBar } from '../../components';
import { bloglist } from '../../demoData';

const Home = () => {
  return (
    <>
      <SearchBar />
      <Bloglist blogs={bloglist} />
    </>
  );
};

export default Home;
