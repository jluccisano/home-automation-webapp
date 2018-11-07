import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    const handleToggleLeftNav = () => this.setState({open: !this.state.open});

    return (<header>
      <AppBar
        onLeftIconButtonTouchTap={handleToggleLeftNav}
        />
      <Drawer open={this.state.open} docked={false} onRequestChange={handleToggleLeftNav}>
        <Link to="/chrono"><MenuItem onTouchTap={handleToggleLeftNav}>Chrono</MenuItem></Link>
      </Drawer>
    </header>);
  }
}

Header.propTypes = {
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Header);
