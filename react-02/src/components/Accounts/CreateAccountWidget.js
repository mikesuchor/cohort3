import React from 'react';

function CreateAccountWidget({handleInput, handleAddAccount, accountName, accountBalance}) {
    return(
        <div id="create-account-widget" className="widget">
            <h1 className="widget-title">CREATE ACCOUNT</h1>
            <div className="widget-body">
                <form className="add-account-form" onSubmit={handleAddAccount}>
                    <label htmlFor="name">Name:</label>
                    <input
                        className="account-input account-name-input"
                        name="accountName"
                        type="text"
                        onChange={handleInput}
                        value={accountName}
                    />
                    <label htmlFor="balance">Balance:</label>
                    <input
                        className="account-input account-balance-input"
                        name="accountBalance"
                        type="number"
                        step="0.01"
                        onChange={handleInput}
                        value={accountBalance}
                    />
                    <button className="account-button">ADD ACCOUNT</button>
                </form>
            </div>
        </div>
    )
}

export default CreateAccountWidget;