import React from 'react';
import './styles.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            phone: null,
            password: null,
            successfulSubmit: 'notShow'
        }
        this.handleChange = this.handleChange.bind(this);
        this.getData = this.getData.bind(this);

    }

    async getData(event) {
        event.preventDefault();
        let data = new FormData();
        data.append("json", JSON.stringify(this.state));

        const response = await fetch("https://600a4de5778d1a0017793916.mockapi.io/submit",
            {
                method: "POST",
                body: data
            });
        const newdata = await response.json();
        console.log(newdata);
        this.setState({ successfulSubmit: 'show' });
    };


    handleChange(event) {
        if (event.target.name === 'name') {
            this.setState({ name: event.target.value })
        } else if (event.target.name === 'email') {
            this.setState({ email: event.target.value })
        } else if (event.target.name === 'phone') {
            this.setState({ phone: event.target.value })
        } else {
            this.setState({ password: event.target.value })
        }
    };
    //{[this.state.key, 'resize'].join(' ')}
    render() {
        return (
            <div className='top'>
                {this.state.successfulSubmit === 'notShow' ?


                    <form className='structure' onSubmit={this.getData}>

                        <h1>Create Account</h1>
                        <div className='placer flex'>
                            <label htmlFor='name' />
                            <input onChange={this.handleChange} placeholder='Name' type='text' name='name' required />
                        </div>

                        <div className='placer flex'>
                            <label htmlFor='email' />
                            <input onChange={this.handleChange} placeholder='Email' type='text' name='email' required />
                        </div>

                        <div className='placer flex'>
                            <label htmlFor='phoneNumber' />
                            <input onChange={this.handleChange} placeholder='Phone Number' type='text' name='phone' required />
                        </div>

                        <div className='placer flex'>
                            <label htmlFor='password' />
                            <input onChange={this.handleChange} placeholder='Password' type='text' name='password' required />
                        </div>

                        <div className='placer flex'>
                            <label htmlFor='submit' />
                            <input className='button' type='submit'></input>
                        </div>


                    </form>
                    :
                    <div className={[this.state.successfulSubmit, 'submitBox'].join(' ')}>
                        <p>Submit Successful!</p>
                    </div>

                }
            </div>
        );
    }
}

export default Form;