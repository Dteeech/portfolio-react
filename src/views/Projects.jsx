import React from "react";
import Nav from "./Nav.jsx";
const Projects = () => {
  return (
    <div className="projectsContainer">
      <h2>Projets</h2>
      <article className="projet2">
        <div>
          <img
            className="projet2_image"
            src={`${
              process.env.PUBLIC_URL +
              "img/Capture d’écran 2023-06-18 à 17.10.15.png"
            }`}
            alt="Pokedex"
          />
        </div>
        <div className="projet2_description">
          <h3>Pokedex</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            perspiciatis odio quibusdam rerum? Repellendus expedita sit
            corrupti, cumque, nisi dicta cum facilis accusantium, nihil illo
            nostrum laudantium pariatur explicabo sed. Aspernatur, dolor
            tempore! Ad ut, inventore quidem non nam exercitationem nulla id
            modi earum! Est enim assumenda earum, placeat facilis reprehenderit
            obcaecati, natus fuga voluptatem quia fugit laudantium esse iusto
          </p>
          <a
            href="https://648f7b12dde45a0008fae231--rainbow-taffy-29e96d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Visiter</button>
          </a>
        </div>
      </article>
      <article className="projet2">
        <div>
          <img
            className="projet2_image"
            src={`${process.env.PUBLIC_URL + "/img/screen-retroGames.png"}`}
            alt="site RetroGames"
          />
        </div>
        <div className="projet2_description">
          <h3>RetroGames - Marketplace</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            reiciendis, molestias commodi necessitatibus corporis nulla
            repudiandae distinctio ipsam facilis aperiam culpa exercitationem
            autem praesentium nobis, dolorem voluptatibus aliquid ex accusantium
            natus cumque sit dolores maiores dignissimos. Dolore totam et
            tempore minus vitae alias velit, odio debitis dolores, impedit
            delectus laborum!
          </p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button>Visiter</button>
          </a>
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
          <h3>BIN'T'AGE 2.0</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            reiciendis, molestias commodi necessitatibus corporis nulla
            repudiandae distinctio ipsam facilis aperiam culpa exercitationem
            autem praesentium nobis, dolorem voluptatibus aliquid ex accusantium
            natus cumque sit dolores maiores dignissimos. Dolore totam et
            tempore minus vitae alias velit, odio debitis dolores, impedit
            delectus laborum!
          </p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button>Visiter</button>
          </a>
        </div>
      </article>
      <article className="projet2">
        <div>
          <img
            className="projet2_image"
            src={`${process.env.PUBLIC_URL + "/img/guilmault-catherine.png"}`}
            alt="site RetroGames"
          />
        </div>
        <div className="projet2_description">
          <h3>La Galerie de Catherine</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            reiciendis, molestias commodi necessitatibus corporis nulla
            repudiandae distinctio ipsam facilis aperiam culpa exercitationem
            autem praesentium nobis, dolorem voluptatibus aliquid ex accusantium
            natus cumque sit dolores maiores dignissimos. Dolore totam et
            tempore minus vitae alias velit, odio debitis dolores, impedit
            delectus laborum!
          </p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button>Visiter</button>
          </a>
        </div>
      </article>
    </div>
  );
};

export default Projects;
