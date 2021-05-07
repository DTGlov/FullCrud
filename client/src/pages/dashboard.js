import React from 'react'
import Main from '../components/Main/Main';
import Navbar from '../components/Navbar/Navbar';

function dashboard() {
    return (
      <div className="max-w-4xl mx-auto">
        <Navbar />
        <Main />
      </div>
    );
}

export default dashboard
