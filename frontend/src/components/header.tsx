// import React, { CSSProperties } from 'react';
// import { useNavigate } from 'react-router-dom';

import { CSSProperties, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();

  const location = useLocation();

  // State to track the current page
  const [currentPage, setCurrentPage] = useState<string>('');

  useEffect(() => {
    // Extract the current page from the URL
    const path = location.pathname;
    setCurrentPage(path.substring(1));
  }, [location]);

  // Function to toggle between login and signup pages
  const togglePage = () => {
    setCurrentPage(currentPage === 'login' ? 'signup' : 'login');
  };


  const [email, setEmail] = useState("");

  useEffect(()=> {
    const localStorageEmail = localStorage.getItem('email')!;
    console.log("localStorageEmail  header   =-----     "+localStorageEmail);
    setEmail(localStorageEmail);
  })
    
    // const isUserLogin = localStorage.getItem('isUserLogin');
    return (

   
     
        <div style={styles.header}> 
          <div style={styles.leftSide}>
            <h3 onClick={()=>navigate('/')} style={({ fontSize:'20px', color:"white"})}>Chat With Listener</h3>
          </div>
    {email === "" ? 
          <div style={styles.rightSide}>
          {currentPage === 'login'  && (
            <button style={({paddingLeft:"20px", paddingRight:"20px", paddingTop:"10px", paddingBottom:"10px"})} onClick={()=> {
              togglePage()
              navigate("/signup");
            }}> Signup</button>
          )}
          {(currentPage === 'signup' || currentPage === '') && (
            <button style={({paddingLeft:"20px", paddingRight:"20px", paddingTop:"10px", paddingBottom:"10px"})} onClick={()=> {
              togglePage()
              navigate("/login");
            }}>Login</button>
          )}
          </div>   :   ( currentPage === 'login' || currentPage === 'signup' ? <div></div> : <div style={({color:"white"})}>{email}</div>)
          } 
        </div>
      )  
}; 


    const styles : Record<string, CSSProperties> = {
      header: {
        background:'#171717',
        height:'50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#171717',
        padding: '5px',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
 
      },
      leftSide: {
        cursor:"pointer",
        // flex: 1,
        marginLeft:'20px'
      },
      rightSide: {
        display: 'flex',
        flex: 0,
        textAlign: 'right',
      },
      button: {
        padding:'20px', 
        marginRight:'30px',  
        marginLeft:'30px',
      },
    };

// const styles =  {
//     header: {
//         paddingLeft: '20px',
//         justifyContent : 'space-between',
//         display:'flex',
//         background: '#333',
//         color: '#fff',
//         padding: '2px',
//         position: 'fixed', // Stick to the top of the viewport
//         width: '100%', // Full width
//         top: 0, // Position at the top of the viewport
//         left: 0, // Align to the left edge
//       },
//     leftSide: {
//       flex: 1,
//     },
//     rightSide: {
//       display: 'flex',
//       alignItems: 'center',
//     },
//     h4: {
//       marginRight: '0 10px',
//     },
//     button: {
//       padding: '10px 10px',
//       backgroundColor: 'blue',
//       color: '#fff',
//       borderRadius: '5px',
//       cursor: 'pointer',
//     },
//   };

export default Header;

// {/* <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px' }}>
// {/* <div style={{ marginRight: '20px', color:"white" }}>Home</div>
// <div style={{ marginRight: '20px', color:"white" }}>About</div> */}
// <button  className={currentPage === 'signup' ? 'active' : ''} onClick={()=>navigate("/signup")} style={({paddingLeft:"20px", paddingRight:"20px", paddingTop:"10px", paddingBottom:"10px"})}>Signup</button>
// </div> */}