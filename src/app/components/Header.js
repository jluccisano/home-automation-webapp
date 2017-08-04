import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';

export class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    const handleToggleLeftNav = () => this.setState({open: !this.state.open});

    return (<header>
      <AppBar
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={handleToggleLeftNav}
        />
      <Drawer open={this.state.open} docked={false} onRequestChange={handleToggleLeftNav}>
        <Link to="/sprinkler"><MenuItem onTouchTap={handleToggleLeftNav}>Sprinkler</MenuItem></Link>
        <Link to="/alarm"><MenuItem onTouchTap={handleToggleLeftNav}>Alarm</MenuItem></Link>

      </Drawer>
    </header>);
  }

}

export default Header;
