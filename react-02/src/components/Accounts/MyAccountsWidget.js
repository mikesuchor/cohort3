import React from 'react';
import Account from './Account';

function MyAccountsWidget({accounts, handleInput, handleDelete, handleDepositAndWithdrawal}) {
    const createAccountsList = () => {
        return accounts.map((account) => {
            return <Account
                        key={account.accountName}
                        accountId={account.accountId}
                        accountName={account.accountName}
                        accountBalance={account.accountBalance}
                        handleInput={handleInput}
                        handleDelete={handleDelete}
                        handleDepositAndWithdrawal={handleDepositAndWithdrawal}
                   />
        })
    }

    return(
        <div id="my-accounts-widget" className="widget">
            <h1 className="widget-title">MY ACCOUNTS</h1>
                <div className="widget-body">
                <ul className="account-list">
                    {createAccountsList()}
                </ul>
            </div>
        </div>
    )
}

export default MyAccountsWidget;