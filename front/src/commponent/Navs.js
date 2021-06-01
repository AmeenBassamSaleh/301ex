import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'

export class Navs extends Component {
  render() {
    return (
      <div>
        <Nav defaultActiveKey="/" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/" eventKey="/">home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/blog" eventKey="/blog">blog</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    )
  }
}

export default Navs
