import React from "react";
import "./About.css";
import CutePic from "../../assets/skyler.jpg";

function TimeLineItem(props) {
  return  (
  <div
    onClick = {() => {
      props.setActiveTitle("My FAVORITE WEBSITE: https://www.reddit.com/")
    }}
    className= "timeline-item"
  >
    <h1>{props.title}</h1>
  </div>
  );
}

export default function AboutScreen() {
  const [activeTitle, setActiveTitle] = React.useState( ':)');
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
            <img src={CutePic} className = "intro-picture" />
        </div>
        <div>         </div>
        <div className="intro-item">
        My name is Skyler Wu, and I am a first-year intending on concentrating in Applied Mathematics in Chemistry with a secondary in Government. 
        I am very interested in science diplomacy, the practice of using scientific collaboration to address pressing global problems and bring countries together. 
        I really enjoy cooking, Tae Kwon Do, and playing the violin. My hometown is San Diego, California.
        </div>
      </div>
      <div><TimeLineItem title = "Click Here to see a cool link!" setActiveTitle = {setActiveTitle}></TimeLineItem></div>
      <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p></p>
          <h4></h4>
        </div>    
    </div>
    
  );
}
