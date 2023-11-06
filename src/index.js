import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(


<Auth0Provider
    domain="dev-ieecmv8kuzawtm0y.us.auth0.com"
    clientId="MW2PYHiH1j44YYPc5648J0TjYHtC2Lt1"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
>
    <App />
  </Auth0Provider>


);
