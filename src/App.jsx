import React, { Component } from "react";

//componets
 import Navbar from "./components/Common/Navbar";
import Catlog from "./components/Catlog/CatlogPage";
//styles
import "./styles/App.scss";
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar/>
        <Catlog />
      </div>
    );
  }
}
export default App;
