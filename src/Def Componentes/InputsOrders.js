import React, { Component } from "react"
import db from "../firebaseConfig.js"


class Inputs extends Component {
    constructor() {
        super()
        this.state = {
            orders: [],
            inputName: "",
            inputNumber: "",
        }
    }

    componentDidMount() {
        db.collection("customersAndOrders").onSnapshot((snapShots) => {
            this.setState({
                orders: snapShots.docs.map(doc => {
                    return { id: doc.id, data: doc.data() }
                })
            })
        })
    }

    changeValueName = (e) => {
        this.setState({
            inputName: e.target.value,
        })
    }

    changeValueNumber = (e) => {
        this.setState({
            inputNumber: e.target.value,
        })
    }

    action = () => {
        const { inputName, inputNumber } = this.state;
        db.collection("customersAndOrders").add({
            orders: { inputName, inputNumber }
        }).then(() => {
            console.log("agregado");
        }).catch(() => {
            console.log("error");
        })
    }

    render() {

        const { inputName, inputNumber } = this.state;

        return (
            <div>
                <input
                    type="text"
                    placeholder="Nombre Cliente"
                    value={inputName}
                    onChange={this.changeValueName}
                />
                <input
                    type="number"
                    placeholder="Nº de mesa"
                    value={inputNumber}
                    onChange={this.changeValueNumber}
                />
                <button onClick={this.action}>Enviar a Cocina</button>
            </div>
        )
    }
}

export default Inputs;