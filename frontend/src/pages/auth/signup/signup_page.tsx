import { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../components/firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';

const SignUpPage = () =>{

    const navigate =  useNavigate();


    const [fullName, setFullName] = useState('');
    const [email, setEmailName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [city, setCityName] = useState('');
    const [state, setStateName] = useState('');
    const [country, setCountryName] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);


    const signUp = async (event:any) => {
        setLoading(true);
        event.preventDefault();

        console.log("email   ----     "+email);
        console.log("password   ----     "+password);

        console.log('Full Name:', fullName);
        console.log('Mobile:', mobileNumber);
        console.log('City:', city);
        console.log('State:', state);
        console.log('Country:', country);
        
        try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log("user   ------     "+user.user.email);
        if(user.user.email != null) {
            navigate("/");
        }   
        setLoading(false);
        } catch (err){
          console.error(err);
          setLoading(false);
        // }
      };
    }

      const [showPassword, setShowPassword] = useState(false);

      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

    return (
        <div className="signup-container">
        <h2>SignUp</h2>
        <div className="form-container">
        <div className="form-scrollable">
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
            <div className="form-group">
            <label htmlFor="password">Password:</label>
        
            <div className="password-input-container">
            <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="password-input"
               
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="toggle-password-button"
            >
                {showPassword ? "Hide" : "Show"}
            </button>
            </div>
            </div>
            {/* <button className='signup-button' type="button" onClick={handleSignUp}>Signup</button> */}
            
        </form>
        </div>
        </div>
        <button className="signup-button" type="button" onClick={signUp} disabled={loading}> {loading ? 'Signing Up...' : 'Sign Up'} </button>
        </div>
    )
}

export  default SignUpPage;

