import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import calculateSpacing from "./calculateSpacing";
import useWidth from "../../../shared/functions/useWidth";
import axios from "axios";
import { useTranslation } from '../../../shared/i18n/i18n'

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

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get(`https://ta-vivo-customers.netlify.app/customers.json`)
      .then((response) => {
        setCustomers(response.data);
      });
  }, []);

  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h3" align="center" style={{paddingBottom: '30px'}}>
        {t('titles.customers')}
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width, theme)}
          className={classes.gridContainer}
          style={{textAlign: 'center'}}
        >
          {customers.map((element) => (
            <Grid
              item
              xs={6}
              sm={2}
              md={2}
              lg={2}
              data-aos="zoom-in-up"
              key={element.name}
            >
              <div>
                <img style={{ width: 80 }} src={element.logo} alt={element.name} />
                <span style={{ display: 'block', color: 'rgb(161 161 161)'}} > { element.name }</span>
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
