import React from 'react';
import {NavLink as RRNavLink, Link } from 'react-router-dom';
import { Container, Row, Col, CardImg} from 'reactstrap';

const MyFooter = () => {
  return (
    <Container fluid={true} style={{height: '200px', width: '100%', padding: '50px', backgroundColor: '#232323', color: '#fff'}}>
      <Row style={{height: '50%', margin: '0'}}>
        <Col xs={{ size: '2', offset: 5 }} style={{padding: '0'}}>
          <Link  to='/'>
            <CardImg top width="100%" src="/images/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" alt="Card image cap" />
          </Link >
        </Col>
      </Row>
      <Row style={{height: '25%', margin: '0', marginTop: '50px'}}>
        <Col xs='3' style={{padding: '0'}}><p>Copyright ©2019 - Created by Miguel Garcia</p></Col>
      </Row>
    </Container>
  );
}

export default MyFooter;
