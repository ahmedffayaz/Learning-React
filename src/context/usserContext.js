import React from "react";
// user context is used to store the user information and pass it to the components that need it without having to pass it through props. 
// It is also used to store the user token and pass it to the components that need it without having to pass it through props.
// user context is a provider that is used to wrap the components that need the user information and pass it to them through the value prop.
// We also need to create provider and consumer for the user context to be able to use it in the components that need it.

// I have created userContextProvider.jsx file to create the provider for the user context and wrap the components that need the user 
// information with it.
const UserContext = React.createContext();
export default UserContext;
