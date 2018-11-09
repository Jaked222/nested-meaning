import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";

import { Card } from "./reusable-styles";

class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = { entry: "", wordList: [], submitClicked: false };
  }

  componentDidUpdate(prevProps) {
    const dictionaryState = this.props.dictionary[0];
    const previousDictionaryState = prevProps.dictionary[0];

    if (
      (dictionaryState &&
        previousDictionaryState &&
        dictionaryState.shortdef[0] !==
        previousDictionaryState.shortdef[0]) ||
      (dictionaryState && !previousDictionaryState)
    ) {
      const definition = this.props.dictionary[0].shortdef[0];
      let wordsInDefinition = definition.split(" ");
      const filteredWordsInDefinition = wordsInDefinition.filter(word => {
        return !this.state.wordList.includes(word);
      });

      console.error("recieved definition:", definition);
      console.error("wordsInDefinition:", wordsInDefinition);
      console.error("filteredWordsInDefinition:", filteredWordsInDefinition);
      console.error("new wordlist:", this.state.wordList.concat(filteredWordsInDefinition));
      this.setState({ wordList: this.state.wordList.concat(filteredWordsInDefinition) });
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleClick() {
    if (this.state.entry) {
      this.setState({ submitClicked: true, wordList: [this.state.entry] });
      this.props.fetchDefinition(this.state.entry);
    }
  }

  render() {
    const showLoadBar =
      this.state.wordList.length > 0 && this.state.submitClicked;

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
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleClick.bind(this)}
          >
            Submit
          </Button>
          {showLoadBar ? (
            <div style={{ color: "black" }}>{`Complexity: ${
              this.state.wordList.length
            }`}</div>
          ) : (
            <LinearProgress />
          )}
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
