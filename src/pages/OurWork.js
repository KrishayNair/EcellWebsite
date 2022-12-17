import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import event3 from "../img/event3.jpeg";
import event3_1 from "../img/event3.1.jpeg";
import event3_2 from "../img/event3.2.jpeg";
import event3_3 from "../img/event3_3.jpeg";
import event2 from "../img/event2.jpeg";
import event2_1 from "../img/event2.1.jpeg";
import event2_2 from "../img/event2.2.jpeg";
import event2_3 from "../img/event2.3.jpeg";
import event1 from "../img/event1.jpeg";
import event1_1 from "../img/event1.1.jpeg";
import event1_2 from "../img/event1.2.jpeg";
import event1_3 from "../img/event1.3.jpg";
//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: "black" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>Corporate Expectations of <span>Entry level Professionals</span> <br/> </motion.h2>
        <motion.div variants={lineAnim} classNameNameName="line"></motion.div>
        {/* <Link to="/work/the-event1"> */}
          <Hide>
          <div id="carouselExampleIndicators1" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={event3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={event3_1}  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={event3_2}  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={event3_3}  className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<h2>Event
Description</h2>
<p>
Rajiv Gandhi Institute of Technology and Institution's Innovation Council's UHV CELL in collaboration with ENTREPRENEURSHIP CELL (E-Cell), is conducting a seminar on Corporate Expectations of entry level professionals
<br/>
⭐ Objectives of the event: To create awareness about the corporate and industry expectations from entry level professionals
Here are the details of the event:
<br/>
▶️Date: 11th October, 2022(Tuesday)
<br/>
▶️ Time: 10:30am-12:30pm
<br/>
▶️Venue: RGIT SEMINAR HALL
<br/>
▶️Speaker: Hrudyesh Pankhani
Mr Hrudyesh is a CA, Lawyer and Elected Regional Council Member of ICAI. He is a personal development coach, having 10+ years of experience and has trained 50k+ participant
</p>
          </Hide>
        {/* </Link> */}
      </Movie>

      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <h2><span>Expert Lecture
on </span>"Emerging Opportunities In Design, EV ,Data Science / Al /ML "</h2>
        <motion.div variants={lineAnim} classNameNameName="line"></motion.div>
        {/* <Link to="/work/the-racer"> */}
        <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={event2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={event2_1}  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={event2_2}  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={event2_3}  className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev car2" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next car2" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<h2>Event
Description</h2>
<p>
<br/>
🚩 Objectives of the event:
<br/>
<br/>
To aware students about:
<br/>
<br/>

⭐ Current Industry technologies (EV,Al,ML,DS,AM),
<br/>
⭐ Various Development Platforms available.
<br/>
⭐The expectations of the Industry.
<br/>
⭐ Live Internship Opportunities.
<br/>
⭐ Project Based Learning
<br/>
<br/>

▶️Date: 20 Sept 2022
<br/>
▶️ Time: 10:30am
<br/>
▶️Venue: RGIT SEMINAR HALL
<br/>
</p>

        {/* </Link> */}
      </Movie>

      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Motivational Session by a <span>Successful Entrepreneur</span></h2>
        <motion.div variants={lineAnim} classNameNameName="line"></motion.div>
        {/* <Link to="/work/good-times"> */}
        <div id="carouselExampleIndicators3" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={event1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={event1_1}  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={event1_2}  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={event1_3}  className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<h2>Event
Description</h2>
<p>
Institution's Innovation Council's Entrepreneurship Cell of Rajiv Gandhi Institute of Technology conducted a motivational seminar taken by a successful Entrepreneur - Mr. Chandan Biswas, founder of Chemisphere and an IIT Madras Alumni, on 8th September, 2022.
<br/>
⭐ The session was immensely helpful to students interested in Entrepreneurship and inclined towards the startup culture. This interactive and engaging session educated the attendees on how networking and meeting people, who are excelling in their field, can prove to be vital in your Entrepreneurship journey followed by a brief on the generalized roadmap of an entrepreneur
<br/>
Here are the details of the event:
<br/>
➡️ Date: 8/9/2022
<br/>
➡️ Time: 1:15pm to 2:30pm
<br/>
➡️ Topic: Motivational Session by a Successful Entrepreneur.
<br/>
RGIT's E-cell thanks <span>Mr. Chandan Biswas</span> for such an informative lecture.
</p>
        {/* </Link> */}
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    color:#fff;
    padding: 1rem 0rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
