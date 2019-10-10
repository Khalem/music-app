import React, {Component} from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Music App</h1>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Search for an artist"/>
            <InputGroup.Append>
              <Button><i class="fas fa-search"></i></Button>
            </InputGroup.Append>
          </InputGroup>
        </FormGroup>
        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">
          Gallery
        </div>
      </div>
    )
  }
}

export default App;
