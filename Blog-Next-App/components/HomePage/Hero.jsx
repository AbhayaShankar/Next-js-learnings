import React from "react";
import classes from "./Hero.module.css";
import Image from "next/image";
import abhaya from "../../public/abhaya.png";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src={abhaya} alt="image of Abhaya" width={600} height={600} />
      </div>
      <h1>Hi! I'm Abhaya. </h1>
      <p>
        I am a professional Web Developer who excels in creating responsive Web
        Apps focusing on user Interfaces and User Experience. These are Blog
        posts where I share Important Topics as I go learning various technology
      </p>
    </section>
  );
};

export default Hero;
