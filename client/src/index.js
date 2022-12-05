import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from './components/UserContext';
import Background from './components/Background';


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Auth0Provider
    domain ="dev-dz4dh2wandx8v2vz.us.auth0.com"
    clientId ="jTTPI0tTlMO8g1SQvOqJjOZBTmlLtFgK"
    redirectUri = {window.location.origin}
    >
    <UserProvider>
    <App />
    </UserProvider>
    </Auth0Provider>
  // </React.StrictMode>
);

