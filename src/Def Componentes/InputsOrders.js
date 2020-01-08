import React, { Component } from "react"


class Inputs extends Component {
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Nombre Cliente"
                    value={this.props.clientName}
                    onChange={this.props.changeValueName}
                />
                <input
                    type="number"
                    placeholder="Nº de mesa"
                    value={this.props.clientTable}
                    onChange={this.props.changeValueNumber}
                />
            </div>
        )
    }
}

export default Inputs;