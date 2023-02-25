import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Button,
  Hidden,
  IconButton,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import NavigationDrawer from "../../shared/components/NavigationDrawer";
import ZoomImage from "../../shared/components/ZoomImage";

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});

function NavBar(props) {
  const handleOnClickInternalLink = (link) => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }


  const {
    classes,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab,
  } = props;
  const menuItems = [
    {
      link: "#home",
      name: "Home",
      icon: <HomeIcon className="text-white" />,
    },
    {
      link: "#features",
      name: "Features",
      icon: <HomeIcon className="text-white" />,
    },
    {
      link: "#pricing",
      name: "Pricing",
      icon: <HomeIcon className="text-white" />,
    },
    {
      link: "https://tavivo.do/auth/register",
      name: "Register for FREE",
      icon: <MonitorHeartIcon className="text-white" />,
      isExternal: true,
      isButton: true
    }
  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <ZoomImage
              src={`${process.env.PUBLIC_URL}/images/main-logo.png`}
              className={classes.image}
              alt="header example"
              width="50px"
            />
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
                size="large"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden mdDown>
              {menuItems.map((element, index) => {
                if (element.link) {
                  return (
                    <span key={index}>
                      {element.isExternal ?
                        <Button
                          key={index}
                          color="secondary"
                          size="large"
                          variant={element.isButton ? "contained" : "text"}
                          classes={{ text: classes.menuButtonText }}
                          style={{ textTransform: 'initial' }}
                          href={element.isExternal ? element.link : null}
                        >
                          {element.name}
                        </Button>
                        :
                        <Button
                          onClick={()=>handleOnClickInternalLink(element.link)}
                          color="secondary"
                          size="large"
                          variant={element.isButton ? "contained" : "text"}
                          classes={{ text: classes.menuButtonText }}
                          style={{ textTransform: 'initial' }}
                          href={element.isExternal ? element.link : null}
                        >
                          {element.name}
                        </Button>
                      }
                    </span>
                  );
                }
                return (
                  <Button
                    color="secondary"
                    size="large"
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
