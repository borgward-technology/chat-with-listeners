// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const GoogleLoginButton: React.FC = () => {

//     const navigate = useNavigate();
//   // useEffect(() => {
//   //   // Load Google API script
//   //   const script = document.createElement('script');
//   //   script.src = 'https://apis.google.com/js/platform.js';
//   //   script.onload = () => {
//   //     initializeGoogleSignIn();
//   //   };
//   //   document.body.appendChild(script);

//   //   return () => {
//   //     document.body.removeChild(script);
//   //   };
//   // }, []);

//   // const initializeGoogleSignIn = () => {
//   //   // Initialize Google Sign-In
//   //   // Replace 'YOUR_CLIENT_ID' with your actual Google OAuth client ID
//   //   (window as any).gapi.load('auth2', () => {
//   //       (window as any).gapi.auth2.init({
//   //       client_id: '766514279324-0145si2vt29o5kdqgd2fig6lfdud8ue7.apps.googleusercontent.com',
//   //     });
//   //   });
//   // };

//   // const handleGoogleSignIn = () => {
//   //   console.log('Logged in :   ----------   ');

//   //   // Trigger Google Sign-In
//   //   const auth2 = (window as any).gapi.auth2.getAuthInstance();
//   //   auth2.signIn().then((googleUser: any) => {
//   //     console.log('Logged in :   ----------   ');

//   //     const profile = googleUser.getBasicProfile();
//   //     console.log('Logged in as:', profile.getName());
//   //     console.log('User ID:', profile.getId());
//   //     console.log('User email:', profile.getEmail());

//   //     navigate('/');
//   //     // You can handle the user data as per your application's requirements
//   //   });
//   // };

//   return (
//     <div>
//       <div style={({width:"12px"})}></div>
//       <div style={({padding:"10px 20px", border:"1px solid black", borderRadius:"4px", margin:"20px",  cursor:"pointer"})} id="google-signin-button" onClick={handleGoogleSignIn}>Sign in with google</div>
//     </div>
//   );
// };

// export default GoogleLoginButton;
