import React, { useState } from "react";
import classNames from "classnames";
import { Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";
import useWidth from "../../shared/functions/useWidth";
import axios from "axios";
import { useTranslation } from '../../shared/i18n/i18n'

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

  const [plans, setPlans] = useState([]);

  if (plans.length === 0) {
    axios.get(`${process.env.REACT_APP_API}/pricing`)
      .then((response) => {
        setPlans(response.data.data);
      });
  }

  return (
    <div id="pricing" className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        {t('titles.Pricing')}
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width, theme)}
          className={classes.gridContainer}
        >
          {plans.map((plan) => (
            <Grid
              item
              xs={12}
              sm={12}
              lg={3}
              className={classes.cardWrapper}
              data-aos="zoom-in-up"
              key={plan.id}
            >
              <PriceCard
                title={plan.name}
                pricing={
                  <span>
                    ${plan.price}
                    <Typography display="inline"> / {t('common.monthText')}</Typography>
                  </span>
                }
                features={plan.features.map((feature) => (
                  (feature.quantity || '') + ' ' + t(`common.${feature.item}`)
                ))}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

PricingSection.propTypes = {};

export default withStyles(styles, { withTheme: true })(PricingSection);
