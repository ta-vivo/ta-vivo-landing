import React from "react";
import classNames from "classnames";
import { Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import calculateSpacing from "./calculateSpacing";
import useWidth from "../../shared/functions/useWidth";
import { useTranslation } from '../../shared/i18n/i18n'
import customers from '../../customers.json';
import '../../styles/main.css'

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down("lg")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360,
    },
  },
});

function PricingSection(props) {
  const { classes, theme } = props;
  const width = useWidth();
  const { t } = useTranslation();

  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography style={{ marginBottom: 50 }} variant="h3" align="center">
        {t('common.trustedByTeamsWorldwide')}
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width, theme)}
          className={classes.gridContainer}
          style={{ textAlign: 'center' }}
        >
          {customers.map((element) => (
            <Grid
              item
              xs={6}
              sm={3}
              md={3}
              lg={3}
              data-aos="zoom-in-up"
              key={element.name}
            >
              <div className="shine" style={{ 'justifyContent': 'center' }}>
                <img className="customerlogo" style={{ maxWidth: 80, height: '100%' }} src={element.logo} alt={element.name} />
                <p style={{ 'fontWeight': 'lighter' }}>{element.name}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div >
  );
}

PricingSection.propTypes = {};

export default withStyles(styles, { withTheme: true })(PricingSection);
