import React from 'react';
import CreateAccountWidget from './CreateAccountWidget';
import MyAccountsWidget from './MyAccountsWidget';
import ChartWidget from './ChartWidget';

class AccountsMain extends React.Component {
    constructor() {
        super();
        this.state = {
            accountName: "",
            accountBalance: 0,
            amount: 0,
            accounts: []
        };
    }

    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleAddAccount = (event) => {
        event.preventDefault();
        if(!this.checkDuplicates(this.state.accountName)) {
            this.setState((prevState) => ({
                accounts: prevState.accounts.concat({name: this.state.accountName, balance: Number(this.state.accountBalance), id: this.state.accountName})
            }));
            this.props.displayMessage("");
        } else {
            this.props.displayMessage("Duplicate account name detected, please try again.");
        }
    }

    handleDelete = (id) => {
        const accounts = this.state.accounts.filter((account) => {
            return id !== account.id;
        })
        this.setState({accounts: accounts});
    }
 
    handleDepositAndWithdrawal = (id, type) => {
        this.props.displayMessage("");
        if(this.state.amount > 0) {
            const accounts = this.state.accounts.map((account) => {
                if(id === account.id) {
                    if(type === "deposit") account.balance += Number(this.state.amount);
                    if(type === "withdrawal") account.balance -= Number(this.state.amount);
                }
                return account;
            })
            this.setState({
                accounts: accounts,
                amount: 0
            });
        } else {
            this.props.displayMessage("Please enter a positive number.");
        }
    }

    checkDuplicates = (accountName) => {
        let duplicate = false;
        this.state.accounts.forEach((account) => {
            if(accountName === account.name) {
                duplicate = true;
            }
        })
        return duplicate;
    }

    render() {
        return(
            <div id="accounts-main">
                <div id="accounts-column">
                    <CreateAccountWidget handleInput={this.handleInput} handleAddAccount={this.handleAddAccount} />
                    {this.state.accounts.length > 0
                        ? <MyAccountsWidget
                            accounts={this.state.accounts}
                            handleInput={this.handleInput}
                            handleDelete={this.handleDelete}
                            handleDepositAndWithdrawal={this.handleDepositAndWithdrawal}
                        />
                        : null}
                </div>
                <div id="charts-column">
                    {this.state.accounts.length > 0 ? <ChartWidget accounts={this.state.accounts} /> : null}
                </div>
            </div>
        );
    }

}
    
export default AccountsMain;