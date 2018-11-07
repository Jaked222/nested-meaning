import { connect } from 'react-redux';
import { fetchDefinition } from './redux/actions/dictionary.A';

import MainForm from './MainForm';

const mapStateToProps = state => {
  return {
    dictionary: state.dictionary,
  };
};

const mapDispatchToProps = {
  fetchDefinition,
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainForm);

export default App;
