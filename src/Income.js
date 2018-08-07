import React from 'react';

class Income extends React.Component {
    render() {
        return(
            <div className="incomeContainer">
                <h2>Income</h2>
                    <ul>
                        {this.props.income.map((income, index) => <li key={index}>
                        <span>{income.description}</span>
                        <span>{income.amount}</span>
                        <span>{income.date}</span></li>)}
                    </ul>
            </div>
        );
    }
}

export default Income;