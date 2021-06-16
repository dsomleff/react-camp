/*
 *  The Higher Order Component (HOC)
 *  A component (HOC) that renders another (regular) component(s).
 *  Main purpose - Reuse Code.
 *  Main feature - Render hijacking, Prop manipulation, Abstract state.
 */
import { divide } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

// Regular Component
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: { props.info }</p>
  </div>
);

// HOC
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info!!!</p> }
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login yourself</p>
      )}
    </div>
  );
};

// HOC Usage
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={ true } info="This is a detail" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={ false } info="This is a detail" />, document.getElementById('app'));
