import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import * as SprinklerActions from '../actions/sprinklerActions';
import {connect} from 'react-redux';

class App extends Component {

  componentWillMount() {
    // Needed for onTouchTap
    // http://stackoverflow.com/a/34015469/988941
    injectTapEventPlugin();
  }

  componentDidMount() {
    this.props.startSprinklerPolling();
    this.props.startWebSocket();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header/>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
  startSprinklerPolling: PropTypes.func,
  startWebSocket: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return {
    startSprinklerPolling: () => dispatch(SprinklerActions.startPolling()),
    startWebSocket: () => dispatch({type: 'CONNECT'})
  };
};

export default connect(null, mapDispatchToProps)(App);

