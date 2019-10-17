import React from 'react';

const Menu = () => (<div id="menu">
  <div className="pure-menu">
    <a className="pure-menu-heading" href="">Setting</a>
    <ul className="pure-menu-list">
      <li className="pure-menu-item">
        <a href="#" className="pure-menu-link">Home</a>
      </li>
      <li className="pure-menu-item">
        <a href="#" className="pure-menu-link">About</a>
      </li>
      <li className="pure-menu-item menu-item-divided pure-menu-selected">
        <a href="#" className="pure-menu-link">Contents</a>
      </li>
      <li className="pure-menu-item">
        <a href="#" className="pure-menu-link">Post</a>
      </li>
      <li className="pure-menu-item">
        <a href="#" className="pure-menu-link">Page</a>
      </li>
    </ul>
  </div>
  <style jsx>{`
    #layout, #menu, .menu-link {
      -webkit-transition: all 0.2s ease-out;
      -moz-transition: all 0.2s ease-out;
      -ms-transition: all 0.2s ease-out;
      -o-transition: all 0.2s ease-out;
      transition: all 0.2s ease-out;
    }

    #layout.active #menu {
      left: 150px;
      width: 150px;
    }

    #layout.active .menu-link {
      left: 150px;
    }

    #menu {
      width: 150px;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: 1000; /* so the menu or its navicon stays above all content */
      background: #191818;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }

    #menu a {
      color: #999;
      border: none;
      padding: 0.6em 0 0.6em 0.6em;
    }

    #menu .pure-menu,
    #menu .pure-menu ul {
      border: none;
      background: transparent;
    }

    #menu .pure-menu ul,
    #menu .pure-menu .menu-item-divided {
      border-top: 1px solid #333;
    }

    #menu .pure-menu li a:hover,
    #menu .pure-menu li a:focus {
      background: #333;
    }


    #menu .pure-menu-selected,
    #menu .pure-menu-heading {
      background: #1f8dd6;
    }
    #menu .pure-menu-selected a {
      color: #fff;
    }

    #menu .pure-menu-heading {
      font-size: 110%;
      color: #fff;
      margin: 0;
    }

    .menu-link {
      position: fixed;
      display: block; /* show this only on small screens */
      top: 0;
      left: 0; /* "#menu width" */
      background: #000;
      background: rgba(0,0,0,0.7);
      font-size: 10px; /* change this value to increase/decrease button size */
      z-index: 10;
      width: 2em;
      height: auto;
      padding: 2.1em 1.6em;
    }

    .menu-link:hover,
    .menu-link:focus {
      background: #000;
    }

    .menu-link span {
      position: relative;
      display: block;
    }

    .menu-link span,
    .menu-link span:before,
    .menu-link span:after {
      background-color: #fff;
      width: 100%;
      height: 0.2em;
    }

    .menu-link span:before,
    .menu-link span:after {
      position: absolute;
      margin-top: -0.6em;
      content: " ";
    }

    .menu-link span:after {
      margin-top: 0.6em;
    }

  `}</style>
</div>)

export default Menu;

