/**
 * Created by reharik on 3/11/16.
 */
import {Jumbotron, Nav,Grid, Row, Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import React from 'react'
import NavigationContainer from './../containers/NavigationContainer'
import Header from './Header';
var Layout = (isLoggedIn, userName, children) => (
        <div className="container">
            <Grid>
            <Row>
                <Col md={12}>
                    <Header isLoggedIn={isLoggedIn} userName={userName} />
                </Col>
            </Row>
            {!isLoggedIn ? <Row>
                        <Jumbotron>
                            <div className="container">
                                {children}
                            </div>
                        </Jumbotron>
                    </Row>
                    : <Row>
                        <Col md={2}>
                            <NavigationContainer />
                        </Col>
                        <Col md={10} className="well">
                        </Col>
                    </Row>}
            </Grid>
        </div>
    );

export default Layout;