
import React from "react";
import "./App.css";
import Home from "./Order/Home";

class App extends React.Component {
  state = {
    komponen1 : false,
  };

  ubahkomponen1 = () => {
    this.setState((state) => {
      return { komponen1: !this.state.komponen1};
    });
  };
  
  render() {
    return (
      <div className="App">
        <div>
          <h1>Burjo Jaya Kusuma Winarno</h1>
          <h4>[Kelompok 5]</h4>

          <button className="Button" onClick={this.ubahkomponen1}>
            {this.state.komponen1 ? "Sembunyikan Menu" : "Lihat Menu"}
          </button>
          <div style={{ border: "4px solid black" }}>
            {this.state.komponen1 ? <Home /> : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default App;


