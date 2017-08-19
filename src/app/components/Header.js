import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';

export class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    const handleToggleLeftNav = () => this.setState({open: !this.state.open});
    const {isAuthenticated} = this.props.auth;
    const Login = props => (
      <FlatButton {...props} label="Login"/>
    );
    const Logged = props => (
      <IconMenu
        {...props}
        iconButtonElement={
          <IconButton><MoreVertIcon/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
        <MenuItem primaryText="Sign out"/>
      </IconMenu>
    );

    return (<header>
      <AppBar
        onLeftIconButtonTouchTap={handleToggleLeftNav}
        iconElementRight={isAuthenticated ? <Logged/> : <Login/>}
        />
      <Drawer open={this.state.open} docked={false} onRequestChange={handleToggleLeftNav}>
        <Link to="/sprinkler"><MenuItem onTouchTap={handleToggleLeftNav}>Sprinkler</MenuItem></Link>
        <Link to="/alarm"><MenuItem onTouchTap={handleToggleLeftNav}>Alarm</MenuItem></Link>
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
