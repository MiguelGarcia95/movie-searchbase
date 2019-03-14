import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import './css/MyFooter.css';

const MyFooter = () => {
  return (
    <footer className="footer">
      <section className="footer_content">
        <section className="footer_nav">
          <a className="nav_icon" href="/theme/"><i className="fa fa-2x fa-home"></i> Home</a>
          <a className="nav_icon" href="/theme/account.hmtl"><i className="far fa-2x fa-user-circle"></i> Account</a>
          <a className="nav_icon" href="/theme/account.html"><i className="far fa-2x fa-user-circle"></i> Account</a>
          <input className='navbar_search' type='text' placeholder="Search" />
        </section>
        <img src="http://localhost:3000/images/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" alt="" />
      </section>
      <section className="footer_meta">
        <a className="nav_icon" id='meta_left' href="mailto:miguel@miguelgarcia.app"><i className="fas fa-envelope-open"></i> miguel@miguelgarcia.app</a> 
        <p id='meta_center'>Copyright ©2019 - Created by Miguel Garcia</p> 
        <a className="nav_icon" id='meta_right' href="https://www.miguelgarcia.app"><i className="far fa-window-maximize"></i> miguelgarcia.app</a>
      </section>
    </footer>
  );
}

export default MyFooter;
