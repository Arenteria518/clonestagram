import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';


import PhotoGrid from '../PhotoGrid/PhotoGrid';
import Single from '../Single/Single';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Container>

        <div className="App">
          <h1>
            <a href="/">{this.state.response}</a>
          </h1>
          <Router>
            <div>
              <Route exact={true} path="/" component={PhotoGrid}/>
              <Route path="/single" component={Single}/>
            </div>
          </Router>
        </div>

      </Container>
    );
  }
}

export default App;
