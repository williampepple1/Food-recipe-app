import React from 'react'
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import GoogleLogin from "react-google-login";

const Homepage = () => {
    const login = (response) => {
                console.log(response);
            }
    return (
        <div className="homepage">
        <div className="login_message">
        <SportsSoccerIcon />
        <h1>Soccer Crunch</h1>
        <p> The best sports coverage from around the world</p>
        <GoogleLogin 
                clientId=""
                render={(renderProps) => (
                    <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="login_button">
                    Login with Google
                    </button>
                )}
                onSuccess={login}
                onFailure={login}
                isSignedIn={true}
                cookiePolicy={'single_host_origin'}
        
                />
        </div>    
        </div>
    )
}

export default Homepage
