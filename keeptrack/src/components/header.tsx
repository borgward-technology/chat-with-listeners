import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  // const navigate = useNavigate();
    const isUserLogin = localStorage.getItem('isUserLogin');
    return (
     
        <div style={styles.header}> 

          <div style={styles.leftSide}>
            <h3 style={({ fontSize:'20px', color:"white"})}>Chat With Listener</h3>
          </div>
          {/* <div style={styles.rightSide}>
            <h4 style={({marginRight: '20px'})}>Home</h4>
            <h4 style={({marginRight: '20px'})}>About</h4>
          {isUserLogin === 'true' 
          ? <button onClick={  ()=>{
             navigate('/login');
            window.location.reload()
            // localStorage.setItem('isUserLogin', false);
            } } style={styles.button}>Logout</button> 
          : <button onClick={  ()=>{
            navigate('/login');
            } } style={styles.button}>Login</button>}
          </div> */}


    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px' }}>
        <div style={{ marginRight: '20px', color:"white" }}>Home</div>
        <div style={{ marginRight: '20px', color:"white" }}>About</div>
        <button style={({paddingLeft:"20px", paddingRight:"20px", paddingTop:"10px", paddingBottom:"10px"})}>Login</button>
        </div>
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
        flex: 1,
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