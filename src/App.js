import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import Components for Routes
import Navbar from "./components/navbar.component"
import DonationsAndRequestsList from "./components/donations-and-requests-list.component";
// import EditDonation from "./components/edit-donation.component";
// import EditRequest from "./components/edit-request.component";
import CreateDonation from "./components/create-donation.component";
import CreateRequest from "./components/create-request.component";

// import components
function App() {
  return (
      <Router>
        <div className="container">
          <Navbar />
          <br/>
          <Route path="/" exact component={DonationsAndRequestsList} />
          {/* <Route path="/edit_request/:id" component={EditRequest} />
          <Route path="/edit_donation/:id" component={EditDonation} /> */}
          <Route path="/create_request" component={CreateRequest} />
          <Route path="/create_donation" component={CreateDonation} />
        </div>
      </Router>
  );
}

export default App;
