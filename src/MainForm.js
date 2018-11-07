import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import styled from "styled-components";

import { Card } from "./reusable-styles";

class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = { entry: "" };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleClick() {
		console.error(this.state.entry);
		this.props.fetchDefinition(this.state.entry);
		console.error(this.props);
  }

  render() {
    return (
      <div className="MainForm">
        <Box>
          <TextField
            id="outlined-name"
            label="Enter some words"
            value={this.state.entry}
            onChange={this.handleChange("entry")}
            margin="normal"
            variant="outlined"
          />
        <Button variant="outlined" color="primary" onClick={this.handleClick.bind(this)}>Submit</Button>
        </Box>
      </div>
    );
  }
}

export default MainForm;

const Box = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.colorProp};
  color: #fff;
`;
