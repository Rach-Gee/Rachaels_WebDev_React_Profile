import React, { useState } from 'react';
import Nav from './Navigation';
import AboutMe from './pages/AboutMe';
import Footer from './Footer';
import Header from "./Header"
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';
import '../componets/styles/styles.css'
import '../componets/styles/materialize.css'


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('aboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
     return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}
