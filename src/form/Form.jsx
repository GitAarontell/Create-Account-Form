import React from 'react';
import './styles.css';

class Form extends React.Component {

    render() {
        return (
            <form action='https://600a4de5778d1a0017793916.mockapi.io/submit' method='POST' class='structure'>
                <h1>Create Account</h1>
                <div className='placer flex'>
                    <input placeholder='Name' type='text' name='name' />
                </div>

                <div className='placer flex'>
                    <input placeholder='Email' type='text' name='email' />
                </div>

                <div className='placer flex'> 
                    <input placeholder='Phone Number' type='text' name='phone' />
                </div>

                <div className='placer flex'>
                    <input placeholder='Password' type='text' name='password' />
                </div>

                <div className='placer flex'>
                    <input className='button' type='submit'></input>
                </div>
            </form>

        );
    }
}

export default Form;