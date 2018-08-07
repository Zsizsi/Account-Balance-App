import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <div className="form">
                <h1 id="text">Account Balance Tracker</h1>
                <h2 id="text2">Enter your account data:</h2>
                <input className="descr-input" type="text" placeholder="Description"
                    value={this.props.description}
                    onChange={this.props.handleChangeDescription}
                />
                <input className="amount-input" type="number" placeholder="Amount"
                    value={this.props.amount}
                    onChange={this.props.handleChangeAmount}
                />
                <select className="select"
                    value={this.props.accountType}
                    onChange={this.props.handleChangeSelect}
                >
                <option value='income'>Income</option>
                <option value='expense'>Expense</option>
                </select>
                <button id="addBtn"onClick={this.props.handleAddData}>Add</button>
            </div>
        );
    }
}

export default Header;