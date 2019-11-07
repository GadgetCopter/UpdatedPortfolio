import React, { useState } from "react"
import github from "../../images/github2.png"
import linkedin from "../../images/linkedin.png"
import "./Home.css"

const Home = () => {
  return(
    <div className="main">
      <div className="intro">
        <h1> const richDobrzeniecki = <span className="curlys">&#123;</span>
          <p className="firstIndent">navBar: <span className="curlys">&#123;</span></p>
          <p className="secondIndent">id: Web Developer,</p>
          <p className="secondIndent">about: Link,</p>
          <p className="secondIndent">portfolio: Projects,</p>
          <p className="secondIndent">contact: Link</p>
          <div className="curlys firstIndent">&#125;</div>
          <div className="curlys">&#125;</div>
        </h1>
      </div>
    </div>
  )
}

{/* <h2>Web Developer</h2>
<div className="socials">
  <a href="http://github.com/RichDobrz"><img src={github} alt=""/></a>
  <a href="https://www.linkedin.com/in/richard-dobrz/"><img src={linkedin} alt=""/></a>
</div> */}

export default Home