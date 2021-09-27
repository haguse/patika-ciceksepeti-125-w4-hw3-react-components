import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CardList from "./components/CardList";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <CardList />
        <Footer />
      </>
    );
  }
}

export default App;
