import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return(
      <div className="main-nav">

         <Link to="/">
            Home
         </Link>
         <Link className="nav-link" to="/new">
            New Post
         </Link>
      </div>
   );
};

export default Header;