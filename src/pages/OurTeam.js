import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import "./OurTeam.css"
import Wave from "../components/Wave";
import team1 from "../img/team1.jpg"
import team2 from "../img/image2.jpg"
import team3 from "../img/image3.jpg"
import team4 from "../img/image4.jpg"
import team5 from "../img/image5.jpg"
import team6 from "../img/image6.jpg"
import team7 from "../img/image7.jpg"
import team8 from "../img/image8.jpg"
import team9 from "../img/image9.jpg"
import team10 from "../img/image10.jpg"
import team11 from "../img/image11.jpg"
import team12 from "../img/image12.jpg"
import team13 from "../img/image13.jpg"
import team14 from "../img/image14.jpg"
import team15 from "../img/image15.jpg"


const OurTeam = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "black" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim} className="teamHeading">Our <span>Team</span></motion.h2>
        </Hide>
      </Title>
      <div>
      <div className="Teams">
      <img src={team1} className="TeamsImg"></img>
       <img src={team2} className="TeamsImg"></img>
       <img src={team3} className="TeamsImg"></img>
       <img src={team4} className="TeamsImg"></img>
       <img src={team5} className="TeamsImg"></img>
       <img src={team6} className="TeamsImg"></img>
       <img src={team7} className="TeamsImg"></img>
       <img src={team8} className="TeamsImg"></img>
       <img src={team9} className="TeamsImg"></img>
       <img src={team10} className="TeamsImg"></img>
       <img src={team11} className="TeamsImg"></img>
       <img src={team12} className="TeamsImg"></img>
       <img src={team13} className="TeamsImg"></img>
       <img src={team14} className="TeamsImg"></img>
       <img src={team15} className="TeamsImg"></img>
       </div>
      </div>
      <Wave/>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default OurTeam;
