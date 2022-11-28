import React, { useState } from 'react';
import './App.css';

const Homepage = () => {
    const [bankName, setBankName] = useState('');
    const [accountNo, setAccountNo] = useState('');
    const [ifsc, setIfsc] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const handleSubmit = () =>{
        console.log(bankName, accountNo, ifsc, name, number)
        setBankName('')
        setAccountNo('')
        setIfsc('')
        setName('')
        setNumber('')
    }
    
  return (
    <div className='main-container'>
        <h3 className='bank-details'>Bank Details</h3>
        <h4 className='note'>Note: Can't change Employee's Bank details after 20th of every month</h4>
        <div className='grid-container'>
            <div className='grid-item'>
            <label className='label' htmlFor='bank-name' >Bank Name</label>
            <br />
            <input value={bankName} onChange={(e) => setBankName(e.target.value)} id='bank-name' placeholder='Enter bank name' type='text' required/>
            </div>
            <div className='grid-item'>
            <label className='label' htmlFor='account-number' >Account No.</label>
            <br />
            <input value={accountNo}  onChange={(e) => setAccountNo(e.target.value)} id='account-number' placeholder='Enter account number' type='text' required />
            </div>
            <div className='grid-item'>
            <label className='label' htmlFor='ifsc' >IFSC</label>
            <br />
            <input value={ifsc} onChange={(e) => setIfsc(e.target.value)} id='ifsc' placeholder='Enter ifsc code' type='text' required />
            </div>
            <div className='grid-item'>
            <label className='label' htmlFor='account-holder-name' >Account holder name</label>
            <br />
            <input value={name} onChange={(e) => setName(e.target.value)} id='account-holder-name' placeholder='Enter account holder name' type='text' required />
            </div>
            </div>
        <div className='grid-item phone-number'>
            <label htmlFor='account-holder-name' >Phone Number (Optional)</label>
            <br />
            <input value={number} onChange={(e) => setNumber(e.target.value)} id='account-holder-name' placeholder='Enter account holder name' type='text' />
        </div>
        
        <div><button onClick= {handleSubmit} className='btn'>Confirm</button></div>
    </div>
  )
}

export default Homepage
