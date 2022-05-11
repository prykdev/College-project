import React from "react";
import { AboutCard } from "../../components/AboutCard/AboutCard";
import "./About.css";
import Priyanka from "./priyanka.png";
import Nikita from "./nikita.png";
import Prakriti from "./prakriti.png";
import Sanju from "./sanju.png";
export default function About() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="home">
        <div className="about-main">
          <AboutCard
            name="Nikita Lodha"
            role="Backend Developer"
            linkedin="https://www.linkedin.com/in/nikita-lodha-9530911a8/"
            github="https://github.com/nikitalodha10"
            email="mailto:nikitalodha10@gmail.com"
            twitter=""
            img={Nikita}
            portfolio=""
            dashboard=""
          />
          <AboutCard
            name="Priyanka Prasad"
            role="Full Stack developer"
            linkedin="https://www.linkedin.com/in/prykdev/"
            github="https://github.com/prykdev"
            email="mailto:priyankaafssulur@gmail.com"
            twitter="https://twitter.com/prykdev"
            img={Priyanka}
            portfolio="https://priyankaprasad.vercel.app/"
            dashboard="prykdev"
          />
          <AboutCard
            name="Prakriti Vedi"
            role="Frontend Developer"
            linkedin=""
            github=""
            email="mailto:prakriti20vedi@gmail.com"
            twitter=""
            img={Prakriti}
            portfolio=""
            dashboard=""
          />
          <AboutCard
            name="Sanju"
            role="Frontend Developer"
            linkedin=""
            github=""
            email="mailto:sanjurohilla0001@gmail.com"
            twitter=""
            img={Sanju}
            portfolio=""
            dashboard=""
          />
        </div>
      </div>
    </>
  );
}
