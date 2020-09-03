import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">NearbySupplies</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Donations and Requests</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create_donation" className="nav-link">Create New Donation</Link>
          </li>
          <li className="navbar-item">
          <Link to="/edit_donation" className="nav-link">Edit Donation</Link>
          </li>
          <li className="navbar-item">
          <Link to="/edit_request" className="nav-link">Edit Request</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}