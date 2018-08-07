import React from 'react';

class Expense extends React.Component {
    render() {
        return(
            <div className="expenseContainer">
                <h2>Expense</h2>
                    <ul>
                        {this.props.expense.map((exp, index) => <li key={index}>
                        <span>{exp.description}</span>
                        <span>{exp.amount}</span>
                        <span>{exp.date}</span></li>)}
                    </ul>
            </div>
        );
    }
}

export default Expense;