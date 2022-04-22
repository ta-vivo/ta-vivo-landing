import React from "react";
import { Grid, Typography } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import FeatureCard from "./FeatureCard";
import useWidth from "../../../shared/functions/useWidth";

const iconSize = 30;

const features = [
  {
    color: "#00C853",
    headline: "Easy Setup",
    text: "Put your web app link and it's all!",
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
    img: `${process.env.PUBLIC_URL}/images/demo/easy-setup.png`,
  },
  {
    color: "#6200EA",
    headline: "Link multiple notifiactions methods",
    text: "Email, Slack, Telegram and more…",
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
    img: `${process.env.PUBLIC_URL}/images/demo/integrations.png`,
  },
  {
    color: "#0091EA",
    headline: "Insights of your app deployments.",
    text: "Create 'checks' that keep monitoring the status of your application/service, keep the status history and get notifications if any eventuality happens.",
    icon: <BarChartIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
    img: `${process.env.PUBLIC_URL}/images/demo/recent-logs.png`,
  }
];

function FeatureSection(props) {
  const { theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Features
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width, theme)}>
            {features.map((element) => (
              <Grid
                item
                xs={12}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={isWidthUpMd ? element.mdDelay : element.smDelay}
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
                <img style={{ borderRadius: 10, maxWidth: 300, marginTop: 20 }} src={element.img} alt="feature demo" />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {};

export default withTheme(FeatureSection);
