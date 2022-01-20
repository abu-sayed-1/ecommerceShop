import React from "react";
import "./AboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { GitHub } from "@material-ui/icons";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/abu_sayed58/";
  };

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media-exp1.licdn.com/dms/image/C4D03AQG2xKp-vwPLzg/profile-displayphoto-shrink_800_800/0/1636307017488?e=1645660800&v=beta&t=SFEqn971NjPOfy3X4u_cAyGkZBAu7lR9eUN9BiGCh3k"
              alt="Founder"
            />
            <Typography>Abu Sayed</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>This is a sample wesbite made by @abusayed</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://twitter.com/abu_sayed69" target="blank">
              <TwitterIcon className="TwitterSvgIcon" />
            </a>
            <a href="https://www.linkedin.com/in/dev-abu-sayed" target="blank">
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>
            <a href="https://github.com/abu-sayed-1" target="blank">
              <GitHub className="githubSvgIcon" />
            </a>

            <a href="https://www.instagram.com/abu_sayed58/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
