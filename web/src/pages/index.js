import React from 'react';
import AboutUs from '../components/homePage/AboutUs'
import FeaturedBlogs from '../components/homePage/FeaturedBlogs';
import HeroSection from '../components/homePage/HeroSection';
import TopCategories from '../components/homePage/TopCategories';
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO />
    <HeroSection />
    <div className="container">
      <FeaturedBlogs />
      <TopCategories />
      <AboutUs />
    </div>
  </>
);

export default IndexPage;
