import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        description: "",
        amount: "",
        accountType: "income",
        income: [],
        expense: []
    };

    /*---------handle change in constructor--------------------------------- */
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.displayTimeOfData = this.displayTimeOfData.bind(this);
    this.handleAddData = this.handleAddData.bind(this);
}

/*-------handle change functions-------------------------------------- */

handleChangeAmount(event) {
  this.setState({amount: event.target.value});
}
handleChangeDescription(event) {
  this.setState({description: event.target.value});
}
handleChangeSelect(event) {
  this.setState({accountType: event.target.value});
}
/*------------display data time-------------------------------------- */
displayTimeOfData() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if(hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let dateMonthYear = date + "." + month + "." +  year;
  let time = hours +  "." + minutes;
  let fullTime = dateMonthYear + "" + time;
  return fullTime;

}

/*-------------handle add data------------------------------- */
handleAddData(){
  let array1 = [...this.state.income];
  let array2 = [...this.state.expense]

  if(this.state.accountType === "income") {
    array1.push({description: this.state.description, amount: this.state.amount});
    this.setState({income:array1});
  }else if(this.state.accountType === "expense") {
    array2.push({description: this.state.description, amount: this.state.amount});
    this.setState({expense: array2});
  }
}

/*---------render----------------------------------------------------- */
render() {

  const sum1 = this.state.income.reduce(function(accumulator, myObj) {
    return accumulator + Number( myObj.amount);}, 0);

  const sum2 = this.state.expense.reduce(function(accumulator, myObj) {
    return accumulator + Number( myObj.amount); }, 0);

    const bal = sum1 - sum2;
    
    return(
        <div className="App">
          <Header
            amount={this.state.amount}
            handleChangeAmount={this.handleChangeAmount}

            description={this.state.description}
            handleChangeDescription={this.handleChangeDescription}

            accountType={this.state.accountType}
            handleChangeSelect={this.handleChangeSelect}

            handleAddData={this.handleAddData}
          />
          <Main 
            income = {this.state.income}
            expense = {this.state.expense}
            bal = {bal}
          />
        </div>
    );
}
}

export default App;
