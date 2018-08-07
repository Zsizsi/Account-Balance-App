import React from 'react';
import Income from './Income';
import Expense from './Expense';

class Main extends React.Component {
    
    render() {
        return(
            <React.Fragment>
                <Income income = {this.props.income} />
                <Expense expense = {this.props.expense}/>
                <div className = "balance">
                    <h3>Balance</h3>
                        <hr />
                    <h3>Net: {this.props.bal}€ </h3> 
                </div>
            </React.Fragment>
           
        );
    }
}

export default Main;