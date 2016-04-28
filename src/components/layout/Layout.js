/**
 * Created by reharik on 3/11/16.
 */
import React from 'react'
import NavigationContainer from './../../containers/MenuContainer'
import Header from './../../containers/HeaderContainer';
import SignInContainer from './../../containers/SignInContainer';

const Layout = ({isAuthenticated, userName, children}) => {
    console.log(isAuthenticated);
    if (!isAuthenticated) {
        return (<div id="signin"><SignInContainer /></div>)
    }
    return (<div id='methodFitness'>
        <Header isLoggedIn={isAuthenticated} userName={userName}/>

        <div id="top-separator"></div>
        <div id="main-body">
            <div id="left-navigation" >
                <NavigationContainer />
            </div>
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