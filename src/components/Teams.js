import React from 'react'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Teams.css"
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
function Teams() {
  const history = useHistory();
  
    const teamsPage = () => {
        history.push("/team")
    }
  return (
    <div>
        <h1 className="TeamHeading">Our <span>Core</span></h1>
       <div className="teams">
       <img src={team1} className="TeamsImg"></img>
       <img src={team2} className="TeamsImg"></img>
       <img src={team3} className="TeamsImg"></img>
       <img src={team6} className="TeamsImg"></img>
       <img src={team7} className="TeamsImg"></img>
       <img src={team14} className="TeamsImg"></img>
       {/* <img src={team6} className="TeamsImg"></img>
       <img src={team7} className="TeamsImg"></img> */}
       {/* <img src={team8} className="TeamsImg"></img>
       <img src={team9} className="TeamsImg"></img>
       <img src={team10} className="TeamsImg"></img>
       <img src={team11} className="TeamsImg"></img>
       <img src={team12} className="TeamsImg"></img>
       <img src={team13} className="TeamsImg"></img>
       <img src={team15} className="TeamsImg"></img> */}
       <button className="button-85" onClick={teamsPage}>All Core Members</button>

       </div>
       



    </div>
  )
}

export default Teams