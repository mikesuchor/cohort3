import React from 'react';
import CreateAccountWidget from './CreateAccountWidget';
import MyAccountsWidget from './MyAccountsWidget';
import ChartWidget from './ChartWidget';

import { AccountController } from './Functions';

class AccountsMain extends React.Component {
    constructor() {
        super();
        this.state = {
            accountName: "",
            accountBalance: "",
            withdrawDepositAmount: 0,
            accounts: []
        };
        this.accountController = new AccountController();
    }

    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleAddAccount = (event) => {
        event.preventDefault();
        if(!this.state.accountName) {
            this.props.displayMessage("No account name entered, please try again.");
        } else if(!this.checkDuplicates(this.state.accountName)) {
            this.accountController.addAccount(this.state.accountName, this.state.accountBalance, this.state.accountName);
            this.setState((prevState) => ({
                accountName: "",
                accountBalance: "",
                accounts: prevState.accounts.concat({accountName: this.state.accountName, accountBalance: Number(this.state.accountBalance), accountId: this.state.accountName})
            }));
            this.props.displayMessage("");
        } else {
            this.props.displayMessage("Duplicate account name entered, please try again.");
        }
        event.target.value = '';
    }

    handleDelete = (id) => {
        this.accountController.removeAccount(this.state.accountName);
        const accounts = this.state.accounts.filter((account) => {
            return id !== account.accountId;
        })
        this.setState({accounts: accounts});
    }
 
    handleDepositAndWithdrawal = (id, type) => {
        this.props.displayMessage("");
        if(this.state.withdrawDepositAmount > 0) {
            const accounts = this.state.accounts.map((account) => {
                if(id === account.accountId) {
                    if(type === "deposit") account.accountBalance += Number(this.state.withdrawDepositAmount);
                    if(type === "withdrawal") account.accountBalance -= Number(this.state.withdrawDepositAmount);
                }
                return account;
            })
            this.setState({
                accounts: accounts,
                withdrawDepositAmount: 0
            });
        } else {
            this.props.displayMessage("Please enter a positive number.");
        }
    }

    checkDuplicates = (accountName) => {
        let duplicate = false;
        this.state.accounts.forEach((account) => {
            if(accountName === account.accountName) {
                duplicate = true;
            }
        })
        return duplicate;
    }

    render() {
        return(
            <div id="accounts-main">
                <div id="accounts-column">
                    <CreateAccountWidget
                        handleInput={this.handleInput}
                        handleAddAccount={this.handleAddAccount}
                        accountBalance={this.state.accountBalance}
                        accountName={this.state.accountName} />
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