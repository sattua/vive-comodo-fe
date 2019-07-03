import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import SvgIcon from '@material-ui/core/SvgIcon';

import MenuSection from '../../component/dashboard/MenuSection';
import styles from './dashboardStyles'; // TODO refactor to move it out
import Dashboard from '../dashboard/Container';
import AuthContainer from '../auth/AuthContainer';
import PublicationContainer from '../publication/PublicationContainer';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
};

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({ });

class MainMenu extends React.Component {
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
        isUserLoggedIn: false,
    };

    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    render() {
        const { anchorEl, mobileMoreAnchorEl, isUserLoggedIn } = this.state;
        const { classes } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
                isMobileMenuOpen={isMobileMenuOpen}
            >
                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            </Menu>
        );

        const renderMobileMenu = (<MenuSection
            mobileMoreAnchorEl={mobileMoreAnchorEl}
            handleMenuClose={this.handleMenuClose}
            handleMobileMenuClose={this.handleMobileMenuClose}

        />);

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                            <Link to="/"><HomeIcon className={classes.iconHover} color="error" style={{ fontSize: 30 }} /></Link>
                        </IconButton>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            Vive Comodo
                        </Typography>
                        <div className={classes.grow} />
                        {
                            isUserLoggedIn && <div className={classes.sectionDesktop}>
                                <IconButton color="inherit">
                                    <Badge badgeContent={4} color="secondary">
                                        <MailIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton color="inherit">
                                    <Badge badgeContent={17} color="secondary">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </div>
                        }
                        {
                            !isUserLoggedIn && <div className={classes.menuOption}><Link to="/login/">Log In</Link></div>
                        }
                        {
                            !isUserLoggedIn && <div className={classes.menuOption}><Link to="/auth/">Sign In</Link></div>
                        }
                        {
                            !isUserLoggedIn && <div className={classes.menuOption}><Link to="/publication/">Create Publication</Link></div>
                        }
                        <div className={classes.sectionMobile}>
                            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMenu}
                {renderMobileMenu}
                <Route path="/" exact component={Dashboard} />
                <Route path="/login/" component={AuthContainer} />
                <Route path="/auth/" component={AuthContainer} />
                <Route path="/publication/" component={PublicationContainer} />
            </div>
        );
    }
}

MainMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainMenu));
