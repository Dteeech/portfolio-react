import React from "react";
import Nav from "./Nav.jsx";
const LeftProjects = () => {
  return (
    <div className="projectsContainer">
      <article className="projet1">
        <div>
          <img
            className="projet1_image"
            src={`${process.env.PUBLIC_URL + "/img/screen-retroGames.png"}`}
            alt="site RetroGames"
          />
        </div>
        <div className="projet1_description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            reiciendis, molestias commodi necessitatibus corporis nulla
            repudiandae distinctio ipsam facilis aperiam culpa exercitationem
            autem praesentium nobis, dolorem voluptatibus aliquid ex accusantium
            natus cumque sit dolores maiores dignissimos. Dolore totam et
            tempore minus vitae alias velit, odio debitis dolores, impedit
            delectus laborum!
          </p>
        </div>
      </article>
      <article className="projet2">
        <div>
          <img
            className="projet2_image"
            src={`${process.env.PUBLIC_URL + "/img/bin't'age.png"}`}
            alt="site RetroGames"
          />
        </div>
        <div className="projet2_description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            reiciendis, molestias commodi necessitatibus corporis nulla
            repudiandae distinctio ipsam facilis aperiam culpa exercitationem
            autem praesentium nobis, dolorem voluptatibus aliquid ex accusantium
            natus cumque sit dolores maiores dignissimos. Dolore totam et
            tempore minus vitae alias velit, odio debitis dolores, impedit
            delectus laborum!
          </p>
        </div>
      </article>
      <article className="projet1">
        <div>
          <img
            className="projet1_image"
            src={`${process.env.PUBLIC_URL + "/img/guilmault-catherine.png"}`}
            alt="site RetroGames"
          />
        </div>
        <div className="projet1_description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            reiciendis, molestias commodi necessitatibus corporis nulla
            repudiandae distinctio ipsam facilis aperiam culpa exercitationem
            autem praesentium nobis, dolorem voluptatibus aliquid ex accusantium
            natus cumque sit dolores maiores dignissimos. Dolore totam et
            tempore minus vitae alias velit, odio debitis dolores, impedit
            delectus laborum!
          </p>
        </div>
      </article>
    </div>
  );
};

export default LeftProjects;
