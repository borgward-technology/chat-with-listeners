import { useState } from 'react';
import './signup.css';

const SignUpPage = () =>{

    const [fullName, setFullName] = useState('');
    const [email, setEmailName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [city, setCityName] = useState('');
    const [state, setStateName] = useState('');
    const [country, setCountryName] = useState('');

    const handleSignUp = () => {
            console.log('Full Name:', fullName);
            console.log('Email:', email);
            console.log('Mobile:', mobileNumber);
            console.log('City:', city);
            console.log('State:', state);
            console.log('Country:', country);
    }


    return (
        <div className="signup-container">
        <h2>SignUp</h2>
        <form className="signup-form">
            <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />
        </div>
            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmailName(e.target.value)}
            />
            </div>
            <div className="form-group">
            <label htmlFor="mobile">Mobile:</label>
            <input
                type="tel"
                id="mobile"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
            />
            </div>
            <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCityName(e.target.value)}
            />
            </div>
            <div className="form-group">
            <label htmlFor="state">State:</label>
            <input
                type="text"
                id="state"
                value={state}
                onChange={(e) => setStateName(e.target.value)}
            />
            </div>
            <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountryName(e.target.value)}
            />
            </div>
            <button className='signup-button' type="button" onClick={handleSignUp}>Signup</button>
        </form>
        </div>
    )
}

export  default SignUpPage;