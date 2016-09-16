import React from 'react';
import NavigationContainer from './../../containers/MenuContainer'
import Header from './../../containers/HeaderContainer';
import SignInContainer from '../../containers/forms/SignInContainer';
import {Notifs} from 'redux-notifications';

const Layout = ({isAuthenticated, userName, children}) => {
  if (!isAuthenticated) {
    return (<SignInContainer />);
  }
  return (<div className='app'>
    <Header isLoggedIn={isAuthenticated} userName={userName}/>
    <div className="mainBody">
      <NavigationContainer />
      <div className="mainContent">
        <Notifs />
        <div className="mainContent__contentInner">
          {children}
        </div>
        <div className="mainContent__contentFooter"></div>
      </div>
    </div>
  </div>)
};

export default Layout;
