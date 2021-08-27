import React, { Component } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Routes from '../components/Routes';
import Footer from '../components/Footer';
import Messages from '../components/Messages';

class Wallet extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
        <Routes />
        <Footer />
        <Messages />
      </div>
    );
  }
}

export default Wallet;
