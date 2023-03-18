import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
    domain="dev-8woiat3415dkx40i.us.auth0.com"
    clientId="3ATtOPXEd3RXsOeo1GOgt5RZ4wCe11SV"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
  </Auth0Provider>
);