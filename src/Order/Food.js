import React, { Component } from "react";
import "./Home.css";
class Food extends Component {
    state = {
        food: " "
    }
    componentDidMount(){
        alert(`Silahkan lihat menunya!`)
    }
    ChangeFood = () => {
        this.setState((state) => { 
            if (state.food === "Pedas") {
                return {food : "Tidak Pedas"}          
            } else {
                return {food: "Pedas"}                 
            }
        })
    }
    componentWillUnmount(){
        alert('Selamat memesan makanan')
    }
    render() {
        return (
            <div className = "List">                         
                <p>1. Nasi Goreng = Rp. 12.000</p>  
                <p>2. Mie Goreng = Rp. 10.000</p>
                <p>3. Nasi Gongso = Rp. 13.000</p>
                <p>4. Magelangan = Rp. 11.000</p>
                <p>5. Nasi Ayam Bali = Rp. 15.000</p>
                <p>6. Mie Dokdok = Rp. 10.000</p>            
                <button className = "Button" onClick={this.ChangeFood}>Pedes ngga</button>
                <br />
                <p>{this.state.food}</p>
            </div>
        );
    }
}
export default Food;
