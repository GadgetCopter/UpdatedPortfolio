import React, { useState } from "react"
import github from "../../images/github2.png"
import linkedin from "../../images/linkedin.png"
import "./Home.css"

const Home = () => {
  return(
    <div className="main">
      <h1>Richard Dobrzeniecki</h1>
      <h2>Web Developer</h2>
      <a href="http://github.com/RichDobrz"><img src={github} alt=""/></a>
      <a href="https://www.linkedin.com/in/richard-dobrz/"><img src={linkedin} alt=""/></a>
    </div>
  )
}

export default Home