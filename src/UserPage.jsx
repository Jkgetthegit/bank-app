import React, { useState } from 'react'
import './UserPage.css'

function UserPage() {
    //state for managing input boxes
    const [inputAccNo, setInputAccNo] = useState('');
    const [inputTransactionType, setInputTransactionType] = useState('Credit'); // Default to credit
    const [inputamount, setInputAmount] = useState(0);

    //state for changing in title card
    const [accNo, setAccNo] = useState('');
    const [transactionType, setTransactionType] = useState('Credit/Debit'); 
    const [amount, setAmount] = useState(0);
    const [balance, setBalance] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Calculate new balance based on transaction type
        let newBalance;
        if (inputTransactionType === 'Credit') {
            newBalance = balance + inputamount;
        } else {
            newBalance = balance - inputamount;
        }
    
        // Update states
        setAccNo(inputAccNo);
        setTransactionType(inputTransactionType);
        setAmount(inputamount);
        setBalance(newBalance);
    
        // Reset input fields
        setInputAccNo('');
        setInputTransactionType('credit');
        setInputAmount(0);
        
        console.log('Account Number:', inputAccNo);
        console.log('Transaction Type:', inputTransactionType);
        console.log('Amount:', inputamount);
        console.log('New Balance:', newBalance);
    };
    


    return (
        <div>

            {/* navbar */}
            <div className="nav-bar">
                <div className="bank-logo">
                    <h1 className='name'>JKVIN</h1>
                    <h4 className='name2'>Bank</h4>
                </div>
                <button className='logout-btn'>Logout</button>
            </div>

            {/* upper containers */}
            <div className="upper-container">

                {/* Userpanel */}
                <div className="user-info-panel">
                    <div className="userinfo">
                        <h3 className='hi'>HI👋</h3>
                        <h1 className='user-name'>Jayakumar</h1>
                        <p className=''><span className="acc">Account Number :-</span><span className="acc-no">1001</span></p>
                    </div>
                </div>

                {/* Last update */}
                <div className="last-update-panel">
                    <h1 className="last-update-title">Last update</h1>
                    <div className='last-update-detail'>
                        <p className="last-update-name">{transactionType}</p>
                        <p className="last-update-amt">₹{amount}</p>
                    </div>
                </div>

                {/* balance panel */}
                <div className="balance-panel">
                    <h1 className="balance-panel-name">Your balance</h1>
                    <p className="balance-amt">₹{balance}</p>
                </div>
            </div>
            <div className="lower-container">
                <form className='transaction-form' onSubmit={handleSubmit}>
                    <div>
                        <label className='label' htmlFor="accountNumber">Account Number:</label>
                        <input
                            type="text"
                            className='input-tag'
                            id="accountNumber"
                            value={inputAccNo}
                            onChange={(e) => setInputAccNo(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className='label' htmlFor="transactionType">Transaction Type:</label>
                        <select
                            id="transactionType"
                            className='select-tag'
                            value={inputTransactionType}
                            onChange={(e) => setInputTransactionType(e.target.value)}
                            required
                        >
                            <option className='option' value="Credit">Credit</option>
                            <option className='option' value="Debit">Debit</option>
                        </select>
                    </div>
                    <div>
                        <label className='label' htmlFor="amount">Amount:</label>
                        <input
                            type="number"
                            id="amount"
                            className='input-tag'
                            value={inputamount}
                            onChange={(e) => setInputAmount(parseInt(e.target.value))}
                            required
                        />
                    </div>
                    <button className='btn' type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UserPage