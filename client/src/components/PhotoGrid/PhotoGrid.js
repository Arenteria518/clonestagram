import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import './PhotoGrid.css'

class PhotoGrid extends Component {
  renderCard() {
    return (
      <Col xs="12" md="6" lg="4" className='photo-grid__card my-3'>
        <Card>
          <Link to="/single">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                     alt="Card image cap"/>
          </Link>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's
              content.</CardText>
            <Link to='/single'><Button>Button</Button></Link>
          </CardBody>
        </Card>
      </Col>
    )
  }

  render() {
    return (
      <div>
        <Row>
          {this.renderCard()}
          {this.renderCard()}
          {this.renderCard()}
          {this.renderCard()}
          {this.renderCard()}
          {this.renderCard()}
        </Row>

      </div>
    )
  }
}

export default PhotoGrid;