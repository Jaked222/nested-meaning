import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
  });
  }

  render() {
    return (
      <div className="App">
      hey

              <TextField
              id="outlined-name"
              label="Name"
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
            />
                  </div>
    );
  }
}

export default App;
