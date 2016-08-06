import React from 'react';
import NavigationContainer from './../../containers/MenuContainer'
import Header from './../../containers/HeaderContainer';
import SignInContainer from './../../containers/SignInContainer';

const Layout = ({isAuthenticated, userName, children}) => {
  if (!isAuthenticated) {
    return (<SignInContainer />);
  }
  return (<div className='app'>
      <Header isLoggedIn={isAuthenticated} userName={userName}/>
      <div className="mainBody">
          <NavigationContainer />
          <div id="main-content">
              <div className="content-outer">
                  <div id="messageContainer"></div>
                  <div id="contentInner">
                      {children}
                  </div>
                  <div className="content-footer"></div>
              </div>
          </div>
      </div>
  </div>)
};

export default Layout;
