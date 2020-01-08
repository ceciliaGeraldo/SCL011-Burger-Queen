import React, {Component} from "react"
import db from "../firebaseConfig.js"


class Inputs extends Component{

        state = {
            orders:[],
            inputName:"",
            inputNumber:"",
        }

    componentDidMount(){
        db.collection("customersAndOrders").onSnapshot((snapShots)=>{
            this.setState({
                orders: snapShots.docs.map(doc =>{
                    return {id:doc.id, data:doc.data()}
                })
            })
        })
    }

    changeValueName = (e) =>{
        this.setState({
            inputName:e.target.value,
        })
    }

    changeValueNumber = (e) =>{
        this.setState({
            inputNumber:e.target.value,
        })
    }

    action = () =>{
        const{inputName, inputNumber} = this.state;
        db.collection("customersAndOrders").add({
            orders:{inputName, inputNumber}
        }).then(()=>{
            console.log("agregado");
        }).catch(()=>{
            console.log("error");
        })
    }
 


    render(){

        const{orders, inputName, inputNumber} =this.state;

        return(
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











// import React, {Component} from "react";

// class Inputs extends Component{
//     constructor(){
//         super();
//     }

//     addInput(){
//         this.props.add(this.inputName.value)
//         this.props.add(this.inputNumber.value)
//         this.inputName.value ="";
//         this.inputName.focus();
//     }


//     render(){
//         return(
//             <div>
//             <input 
//             type="text" 
//             placeholder="Nombre Cliente"
//             ref={input =>{this.inputName = input}}/>
//             <input 
//             type="number" 
//             placeholder="Nº de Mesa"
//             ref={input =>{this.inputNumber = input}} />
//             </div>
//         )
//     }
// }

// export default Inputs;



// import React, {Component} from 'react';
// import './SidebarBlue.css';
// import dataBase from "../firebaseConfig.js"

// class Test extends Component{

//     state= {
//         items:[]
//     }

//     componentDidMount(){
//         dataBase.collection("customersAndOrders").get().then((snapShots) => {
//             this.setState({
//                 items: snapShots.docs.map(doc => {
//                     console.log(doc.data());
                    
//                 })
//             })
//         })
//     }

//     render(){
//         return <div>
            
//         </div>
//     }

// }

// // class BlueSidebar extends Component {

// //        state={
// //         orders:[],
// //         inputName:"",
// //         inputNumber:"",
// //     }

// //     componentDidMount(){
// //         dataBase.collection("customersAndOrders").get()
// //         .then((snapShots) => {
// //             this.setState({
// //                 orders:snapShots.docs.map(doc => {
// //                     return {id:doc.id, data:doc.data()}
// //                 })
// //             })
// //         }), error => {console.log(error)}
// //     }

// //     changeValue = (e) =>{
// //         this.setState({
// //             inputName: e.target.value
// //         })
// //     }

// //     action = ()=>{
// //         const {inputValue} = this.state;
// //         dataBase.collection("customersAndOrders").add({
// //             Order:inputValue
// //         }).then(()=>{
// //             console.log("Agregado");
// //         }).catch(() => {
// //             console.log("error");
// //         })
// //     }

// //     render(){
// //         return(
// //         <div className="sidebarBlue">
// //             <input 
// //             type="text" 
// //             placeholder="Nombre Cliente"/>
// //             <input 
// //             type="number" 
// //             placeholder="Nº de Mesa" />
// //             <h1 className="orderNumber">Pedido Nº</h1>
// //             <button className="btnKitchen">Enviar a Cocina</button>
// //         </div>
// //         )
// //     }
// // }

// export default Test;