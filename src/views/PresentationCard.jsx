import React, { useEffect, useRef } from "react";
import Nav from "./Nav";
import VanillaTilt from "vanilla-tilt";
export const PresentationCard = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current);
  }, []);

  return (
    <div ref={tiltRef} data-tilt>
      <div className="profileCard">
        <div className="profileCard_header">
          <h1>Portfolio</h1>
          <Nav />
        </div>
        <div className="profileCard_body">
          <img
            className="projet2_image"
            src={`${process.env.PUBLIC_URL + "/img/portrait-isaac.png"}`}
            alt="site RetroGames"
          />
        </div>
        <div className="profileCard_footer">
          <h2>Isaac Marshall</h2>
          <h2>Développeur web js</h2>
        </div>
      </div>
    </div>
  );
};
