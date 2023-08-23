import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default ChildComponent => {
  const RequireAuth = props=> {
    //console.log("from auth props are  "+JSON.stringify(props))
      switch (props.auth) {
        case false:
          return <Redirect to="/" />;
        case null:
          return <h1>Please Login .... </h1>;
        default:
          return <ChildComponent {...props} />;
      }
    
  }

  function mapStateToProps({ auth }) {
    return {auth};
  }

  return connect(mapStateToProps)(RequireAuth);
};
