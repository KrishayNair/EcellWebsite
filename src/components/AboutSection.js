import React from "react";
import home1 from "../img/homeNew.svg";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <Styledabout>
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>“The best way to predict the  <span>future</span></motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
            is to create it.”
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p className="paraMain" variants={fade}>
        Specifically aiming at creating a sustainable and a healthy start-up enviornment for students into Entrepreneurship. 
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} className="heroImgs" alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
    </Styledabout>
  );
};

//Styled Components
const Styledabout = styled.div`
@media (max-width: 768px) {
.heroImgs{
  width:30rem;
  height:25rem;
  position:relative;
  right:4rem
}
}
`
export default AboutSection;
