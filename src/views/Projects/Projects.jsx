import React from "react";
import Project from "../../components/Project/Project.jsx";
import Webscraper from "../../assets/webscraper.png";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      All your amazing projects will go here!
      <Project 
        title="HCS-Workshop-1" 
        link="https://github.com/skbwu/HCS-Workshop-1"
        source = {Webscraper}
        ></Project>

      <Project 
        title="APCS A COVID Display" 
        link="https://github.com/skylerwu/COVIDFinal"></Project>

      <Project 
        title="APCS A Mini Portfolio" 
        link="https://github.com/APCSperiod3-Portfolios/p3f-skylerwu"></Project>

      

    </div>
  );
}
