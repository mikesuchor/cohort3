import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function Account({accountName, accountBalance, accountId, handleInput, handleDelete, handleDepositAndWithdrawal}) {
    return(
        <li className="account">
            <FontAwesomeIcon icon={faTimesCircle} alt="Delete Account Icon" className="delete-icon" onClick={() => handleDelete(accountId)} />
            <h2 className="account-name">{accountName}</h2>
            <h2 className="account-balance">${accountBalance}</h2>
            <div className="amount-form">
                <input className="amount-input" name="withdrawDepositAmount" type="number" step="0.01" placeholder="AMOUNT TO DEPOSIT/WITHDRAW" onChange={handleInput}></input>
                <button className="account-button amount-button" onClick={() => handleDepositAndWithdrawal(accountId, "deposit")}>DEPOSIT</button>
                <button className="account-button amount-button" onClick={() => handleDepositAndWithdrawal(accountId, "withdrawal")}>WITHDRAW</button>
            </div>
        </li>
    )
}

export default Account;