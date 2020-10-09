import React from "react";
import "./Education.css";
import SchoolPic from "../../assets/school.jpg";

function TimeLineItem(props) {
  return  (
  <div
    onClick = {() => {
      props.setActiveTitle("Applied Mathematics in Chemistry")
    }}
    className= "timeline-item"
  >
    <h1>{props.title}</h1>
  </div>
  );
}

export default function EducationScreen() {
  const [activeTitle, setActiveTitle] = React.useState( '');
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
            <img src={SchoolPic} className = "intro-picture" />
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p></p>
          <h4></h4>
        </div>
        <div><TimeLineItem title = "First-Year @ Harvard. Click Button for Concentration" setActiveTitle = {setActiveTitle}></TimeLineItem></div>
        <div className="intro-item">
        <div></div>
        </div>
      </div>
    </div>
  );
}
