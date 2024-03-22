 import React from "react"
 import './Header.css'


 function Header({ title, links, isLoggedIn, onLoginClick }) {
    return (
      <header>
        <h1>{title}</h1>
        <nav>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button onClick={onLoginClick}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </header>
    );
}
export default Header;
// <div className="conatiner">
        //     <ul className="items">
        //         <li ><a href="#">Home</a></li>
        //         <li><a href="#">View All</a></li>
        //         <li><a href="#">Add Blog</a></li>
        //         <li><a href="#">About</a></li>
        //     </ul>
        // </div>