import React, { Component } from "react";
import "./Home.css";
class Drink extends Component {
    state = {
        order: 0
    }
    componentDidMount(){
        alert(`Silahkan dilihat menunya!`)
    }
    tambahOrder = () => {
        this.setState((state) => { return { order: state.order + 1 } })
    }
    kurangiOrder = () => {
        this.setState((state) => { return { order: state.order - 1 } })
    }
    componentWillUnmount(){
        alert('Yuk dipesan minumannya')
    }
    render() {
        return (
            <div className = "List">
                <p>1. Es Teh Manis = Rp. 3.000</p>
                <p>2. Lemon Tea = Rp. 7.000</p>
                <p>3. Juz Jeruk = Rp. 8.000</p>
                <h4>Anda memesan sebanyak {this.state.order} minuman</h4>
                <button className = "Button" onClick={this.tambahOrder}>Tambah</button>
                <button className = "Button" onClick={this.kurangiOrder}>Kurang</button>
                <br/>
                <p>{this.state.order}</p>
            </div>
        );
    }
}
export default Drink;
