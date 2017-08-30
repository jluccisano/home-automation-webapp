import {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';

class EnsureIsAuthenticatedContainer extends Component {
  componentDidMount() {
    const {isAuthenticated} = this.props;
    if (!isAuthenticated) {
      browserHistory.replace('/login');
    }
  }

  render() {
    const {isAuthenticated} = this.props;
    if (isAuthenticated) {
      return this.props.children;
    }
    return null;
  }
}

EnsureIsAuthenticatedContainer.propTypes = {
  isAuthenticated: PropTypes.bool,
  children: PropTypes.object
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(EnsureIsAuthenticatedContainer);
