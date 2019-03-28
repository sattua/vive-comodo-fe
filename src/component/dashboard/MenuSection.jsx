import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';


//check where is been render
class MenuSection extends Component {
    render() {
        return (
            <div className="MenuSection">
                <Menu
                    anchorEl={this.props.mobileMoreAnchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={this.props.isMobileMenuOpen}
                    onClose={this.props.handleMenuClose}
                >
                    <MenuItem onClick={this.props.handleMobileMenuClose}>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <p>Messages</p>
                    </MenuItem>
                    <MenuItem onClick={this.props.handleMobileMenuClose}>
                        <IconButton color="inherit">
                            <Badge badgeContent={11} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <p>Notifications</p>
                    </MenuItem>
                    <MenuItem onClick={this.props.handleProfileMenuOpen}>
                        <IconButton color="inherit">
                            <AccountCircle />
                        </IconButton>
                        <p>Profile</p>
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

export default MenuSection;
