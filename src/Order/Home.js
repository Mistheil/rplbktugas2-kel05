import { Component } from "react";
import React from "react";
import Food from "./Food";
import Drink from "./Drink";
import "./Home.css";
class Home extends Component {
  state = {
    komponen2: false,
    komponen3: false,
  };
  componentDidMount(){
    alert(`Selamat datang di Burjo Jaya Kusuma Winarno! Mari dipesan!`)
}
  ubahkomponen2 = () => {
    this.setState((state) => {
      return { komponen2: !this.state.komponen2};
    });
  };
  ubahkomponen3 = () => {
    this.setState((state) => {
      return { komponen3: !this.state.komponen3 };
    });
  };
  render() {
    return (
      <div className="Main">
        <div className = "Menu">
          <button className="Button" onClick={this.ubahkomponen2}>
            {this.state.komponen2 ? "HIDE" : "SHOW"} Menu Makanan
          </button>
          {this.state.komponen2 ? <Food /> : ""}
        </div>
        <div className = "Menu">
          <button className="Button" onClick={this.ubahkomponen3}>
            {this.state.komponen3 ? "HIDE" : "SHOW"} Menu Minuman
          </button>
          {this.state.komponen3 ? <Drink /> : ""}
        </div>
      </div>
    );
  }
}
export default Home;
