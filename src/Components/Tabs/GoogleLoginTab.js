import React from 'react'
import  {GoogleLogin}  from 'react-google-login';
import  {GoogleLogout}  from 'react-google-login';

const GoogleLoginTab = () => {
    const handleSuccess = (onSuccess) => {
        console.log("Logged In!");
    }
    const handleFailure = (onFailure) => {
        console.log("Logged Out");
    }
    const handleLogout = (onLogoutSuccess) => {
        console.log("Logged Out");
    }
    //ON HOLD RIGHT NOW
    return (
        <div>
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
            />
            <GoogleLogout
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={handleLogout}
            >
            </GoogleLogout>
        </div>

    );
}

export default GoogleLoginTab
